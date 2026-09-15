import { render } from "@testing-library/react";
import useScrollSteps from "./useScrollSteps";

/**
 * jsdom has no layout, so the page is described here instead: a list of steps
 * with a document-space top and height, plus a viewport and a nav height.
 * getBoundingClientRect is derived from that and the current scroll offset,
 * which is all the hook ever reads.
 */
const VIEWPORT = 800;
const NAV = 56;
const PAGE_HEIGHT = 6000;
/** Sections carry padding at both ends; roles do not. */
const PAD = 88;

type Box = { top: number; height: number; pad: number };

const LAYOUT: Box[] = [
  { top: 0, height: 700, pad: PAD }, // 0: the hero, whose anchor is below y=0
  { top: 700, height: 2000, pad: PAD }, // 1: section, taller than the screen
  { top: 2700, height: 500, pad: 0 }, // 2: role
  { top: 3200, height: 500, pad: 0 }, // 3: role
];

// Mirrors of the hook's arithmetic, spelled out so the expected numbers below
// are readable rather than magic. Both edges are content-box edges: a step's
// padding is separation between steps, never something to land on.
const clamp = (y: number) => Math.min(Math.max(y, 0), PAGE_HEIGHT - VIEWPORT);

/** Where a step's first line would sit exactly TOP_GAP under the nav. */
const tightAnchor = (b: Box) => b.top + b.pad - NAV - 16;
/** The first step rests at the top of the document instead. */
const anchor = (i: number) => (i === 0 ? 0 : clamp(tightAnchor(LAYOUT[i])));
/** Where you land entering a step from below. */
const landing = (i: number) =>
  clamp(Math.max(LAYOUT[i].top + LAYOUT[i].height - LAYOUT[i].pad + 24 - VIEWPORT, anchor(i)));

let scrollY = 0;
let scrollSpy: jest.Mock<void, [ScrollToOptions]>;
const padding = new WeakMap<Element, number>();

const Probe = () => {
  useScrollSteps();
  return null;
};

const setScroll = (y: number) => {
  scrollY = y;
};

const wheel = (deltaY: number) =>
  window.dispatchEvent(new WheelEvent("wheel", { deltaY, cancelable: true }));

const key = (k: string, target: EventTarget = window) =>
  target.dispatchEvent(new KeyboardEvent("keydown", { key: k, cancelable: true, bubbles: true }));

/** Run out the wheel lock so the next gesture is taken as a fresh one. */
const settle = () => jest.advanceTimersByTime(2000);

beforeEach(() => {
  jest.useFakeTimers();
  document.body.innerHTML = "";

  LAYOUT.forEach((box) => {
    const el = document.createElement("div");
    el.setAttribute("data-step", "");
    padding.set(el, box.pad);
    el.getBoundingClientRect = () =>
      ({
        top: box.top - scrollY,
        bottom: box.top + box.height - scrollY,
        height: box.height,
        left: 0,
        right: 0,
        width: 0,
        x: 0,
        y: box.top - scrollY,
        toJSON: () => ({}),
      } as DOMRect);
    document.body.appendChild(el);
  });

  setScroll(0);
  Object.defineProperty(window, "scrollY", { configurable: true, get: () => scrollY });
  Object.defineProperty(window, "innerHeight", { configurable: true, value: VIEWPORT });
  Object.defineProperty(document.documentElement, "scrollHeight", {
    configurable: true,
    value: PAGE_HEIGHT,
  });

  jest.spyOn(window, "getComputedStyle").mockImplementation((el: Element) => {
    const pad = `${padding.get(el) ?? 0}px`;
    return {
      getPropertyValue: (prop: string) => (prop === "--nav-h" ? `${NAV}px` : ""),
      overflowY: "visible",
      paddingTop: pad,
      paddingBottom: pad,
    } as unknown as CSSStyleDeclaration;
  });

  scrollSpy = jest.fn((options: ScrollToOptions) => setScroll(options.top as number));
  window.scrollTo = scrollSpy as unknown as typeof window.scrollTo;
});

afterEach(() => {
  jest.useRealTimers();
  jest.restoreAllMocks();
});

const positions = () => scrollSpy.mock.calls.map((call) => call[0].top);

test("a step that fits on screen hands the whole gesture to the next step", () => {
  render(<Probe />);

  wheel(100);

  expect(positions()).toEqual([anchor(1)]);
});

test("the first gesture after a fresh load moves a whole step", () => {
  render(<Probe />);

  // A fresh load sits at y=0, below where the hero's first line would tuck
  // under the nav. That must not read as "unread content above the fold" and
  // spend the gesture nudging a few pixels: the hero is on screen already, so
  // the gesture belongs to the next step.
  expect(tightAnchor(LAYOUT[0])).toBeGreaterThan(0);

  wheel(100);

  expect(positions()).toEqual([anchor(1)]);
});

test("coming back up to the first step lands at the top of the page", () => {
  render(<Probe />);
  setScroll(anchor(1));

  wheel(-100);

  // Not the hero's tight anchor: that would sit the page a few pixels down and
  // leave a strip of the next section showing below the hero.
  expect(tightAnchor(LAYOUT[0])).toBeGreaterThan(0);
  expect(positions()).toEqual([0]);
});

test("a gesture with nowhere to step is left to the browser", () => {
  render(<Probe />);

  const up = new WheelEvent("wheel", { deltaY: -100, cancelable: true });
  window.dispatchEvent(up);

  // Above the first step there is nothing to snap to. Swallowing the gesture
  // here would leave the page feeling frozen instead of merely doing nothing.
  expect(up.defaultPrevented).toBe(false);
  expect(scrollSpy).not.toHaveBeenCalled();
});

test("a gesture that does step is taken over from the browser", () => {
  render(<Probe />);

  const down = new WheelEvent("wheel", { deltaY: 100, cancelable: true });
  window.dispatchEvent(down);

  expect(down.defaultPrevented).toBe(true);
});

test("a section lands on its first line, not on its padding edge", () => {
  render(<Probe />);

  wheel(100);

  // What the visitor sees below the nav is the heading, not a screen of blank:
  // the gap between the nav and the section's first line is exactly TOP_GAP.
  const [landed] = positions();
  const firstLine = LAYOUT[1].top + LAYOUT[1].pad;
  expect(firstLine - (landed ?? 0) - NAV).toBe(16);
});

test("a step taller than the screen is walked through before moving on", () => {
  render(<Probe />);
  setScroll(anchor(1));

  wheel(100);
  settle();
  wheel(100);
  settle();
  wheel(100);

  const page = VIEWPORT - NAV - 72;
  expect(positions()).toEqual([
    anchor(1) + page, // part way down
    landing(1), // its last line, nothing skipped
    anchor(2), // only now, the next step
  ]);
});

test("consecutive role-sized steps advance one per gesture", () => {
  render(<Probe />);
  setScroll(anchor(2));

  wheel(100);

  expect(positions()).toEqual([anchor(3)]);
});

test("scrolling back enters a tall step at its end, a short one at its top", () => {
  render(<Probe />);
  setScroll(anchor(3));

  wheel(-100);
  settle();
  wheel(-100);

  expect(positions()).toEqual([
    anchor(2), // short step: top and end are the same place
    landing(1), // tall step: arrive where you left off
  ]);
});

test("one flick and its momentum tail move exactly one step", () => {
  render(<Probe />);

  wheel(100);
  for (let i = 0; i < 8; i++) {
    jest.advanceTimersByTime(20);
    wheel(60);
  }

  expect(positions()).toHaveLength(1);
});

test("arrow keys step, and a held key does not run away", () => {
  render(<Probe />);

  key("ArrowDown");
  key("ArrowDown"); // key repeat, still inside the lock
  settle();
  key("ArrowUp");

  expect(positions()).toEqual([anchor(1), anchor(0)]);
});

test("typing in a field is left to the field", () => {
  render(<Probe />);
  const input = document.createElement("input");
  document.body.appendChild(input);

  key("ArrowDown", input);

  expect(scrollSpy).not.toHaveBeenCalled();
});
