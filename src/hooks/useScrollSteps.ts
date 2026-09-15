import { useEffect } from "react";

/**
 * Turns the wheel and the arrow/page keys into a step-through control.
 *
 * Every element carrying `data-step` is a landing place. One gesture moves to
 * the next one when the current step already fits on screen; when it is taller
 * than the screen the same gesture walks down through it first, so nothing is
 * skipped past unread. Experience marks each role individually, which is what
 * makes one notch move one job rather than a screenful of half a job.
 *
 * Steps are measured by their content box, not their border box. A section
 * carries up to 5.5rem of padding at each end, and landing on that edge parks a
 * screen of blank under the nav before the heading shows up; the padding is
 * there to separate sections you scroll past, not to be landed on.
 *
 * Touch scrolling, scrollbar drags and in-page anchors are left alone: they do
 * not go through wheel or key events, so they keep their native behaviour.
 */

const STEP = "[data-step]";

/** Air kept between the sticky nav and the first line of the step we land on. */
const TOP_GAP = 16;
/** Air kept below a step's last line before we count it as fully read. */
const BOTTOM_GAP = 24;
/** Lines kept on screen when walking through a step taller than the viewport. */
const PAGE_OVERLAP = 72;
/** Never advance by less than this, however short the window is. */
const MIN_PAGE = 120;
/** Wheel noise under this is jitter, not intent. */
const MIN_DELTA = 4;
/** Slack for "are we already at this position" comparisons. */
const TOL = 2;
/** Roughly how long a smooth jump takes; we stay locked at least this long. */
const SETTLE_MS = 420;
/** Quiet time after the last wheel event before another gesture counts. */
const QUIET_MS = 160;
/** Ceiling on the lock, so a long unbroken trackpad drag still creeps forward. */
const LOCK_MAX_MS = 1200;

type Step = { top: number; bottom: number };
type Dir = 1 | -1;

const navHeight = (): number => {
  const raw = getComputedStyle(document.documentElement).getPropertyValue("--nav-h");
  const px = parseFloat(raw);
  return Number.isFinite(px) ? px : 0;
};

const maxScroll = (): number =>
  Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

/**
 * Measured fresh on every gesture rather than cached: images, the Medium feed
 * and a window resize all move these numbers, and a stale list would snap to
 * the wrong place far more visibly than a dozen rect reads cost.
 */
const readSteps = (): Step[] => {
  const y = window.scrollY;
  return Array.from(document.querySelectorAll<HTMLElement>(STEP)).map((el) => {
    const r = el.getBoundingClientRect();
    const style = getComputedStyle(el);
    const padTop = parseFloat(style.paddingTop) || 0;
    const padBottom = parseFloat(style.paddingBottom) || 0;
    return { top: r.top + y + padTop, bottom: r.bottom + y - padBottom };
  });
};

/**
 * Where the page sits when each step's first line is parked under the nav.
 *
 * The first step is pinned to the top of the document instead. Nothing sits
 * above it to be scrolled out of the way, so closing its gap to exactly TOP_GAP
 * would buy nothing and would drag a strip of the section below into view.
 */
const anchorsOf = (steps: Step[], nav: number): number[] => {
  const limit = maxScroll();
  return steps.map((s, i) =>
    i === 0 ? 0 : Math.min(Math.max(0, s.top - nav - TOP_GAP), limit)
  );
};

/**
 * How far the page must be scrolled for this step's last line to clear the fold.
 * Deliberately not clamped to the step's anchor: a step that fits on screen
 * gives a number at or below the anchor, and that is the signal that there is
 * nothing left to read here. Clamping it up to the anchor would turn "already
 * read" into "scroll a few pixels to the anchor first" and burn a gesture.
 */
const endOf = (s: Step): number => s.bottom + BOTTOM_GAP - window.innerHeight;

/** Where to land when entering a step from below: its end, or its top if short. */
const landingOf = (s: Step, anchor: number): number =>
  Math.min(Math.max(endOf(s), anchor), maxScroll());

const indexAt = (anchors: number[], y: number): number => {
  let found = 0;
  for (let i = 0; i < anchors.length; i++) {
    if (anchors[i] <= y + TOL) found = i;
    else break;
  }
  return found;
};

const isEditable = (node: EventTarget | null): boolean => {
  const el = node instanceof Element ? node : null;
  return !!el?.closest("input, textarea, select, [contenteditable]:not([contenteditable='false'])");
};

/** A scrollable box under the pointer owns the gesture until it hits its end. */
const insideScrollable = (node: EventTarget | null, dir: Dir): boolean => {
  let el = node instanceof Element ? node : null;
  while (el && el !== document.body && el !== document.documentElement) {
    const { overflowY } = getComputedStyle(el);
    if ((overflowY === "auto" || overflowY === "scroll") && el.scrollHeight > el.clientHeight) {
      const room =
        dir > 0
          ? el.scrollHeight - el.clientHeight - el.scrollTop > 1
          : el.scrollTop > 1;
      if (room) return true;
    }
    el = el.parentElement;
  }
  return false;
};

export default function useScrollSteps(): void {
  useEffect(() => {
    let locked = false;
    let settleAt = 0;
    let hardUntil = 0;
    let unlockTimer: number | undefined;

    const armUnlock = () => {
      window.clearTimeout(unlockTimer);
      const now = Date.now();
      if (now >= hardUntil) {
        locked = false;
        return;
      }
      const wait = Math.min(Math.max(QUIET_MS, settleAt - now), hardUntil - now);
      unlockTimer = window.setTimeout(() => {
        locked = false;
      }, wait);
    };

    // behavior is left off on purpose: scrollTo then inherits the CSS
    // scroll-behavior, which reduced-motion users have already made instant.
    const scrollTo = (target: number): boolean => {
      const clamped = Math.min(Math.max(target, 0), maxScroll());
      if (Math.abs(clamped - window.scrollY) < TOL) return false;
      window.scrollTo({ top: clamped });
      settleAt = Date.now() + SETTLE_MS;
      hardUntil = Date.now() + LOCK_MAX_MS;
      locked = true;
      armUnlock();
      return true;
    };

    const step = (dir: Dir): boolean => {
      const steps = readSteps();
      if (steps.length === 0) return false;

      const nav = navHeight();
      const y = window.scrollY;
      const anchors = anchorsOf(steps, nav);
      const i = indexAt(anchors, y);
      const page = Math.max(MIN_PAGE, window.innerHeight - nav - PAGE_OVERLAP);

      if (dir > 0) {
        const end = endOf(steps[i]);
        // Still content below the fold in this step: read it before moving on.
        if (y < end - TOL) return scrollTo(Math.min(y + page, end));
        if (i + 1 >= steps.length) return false;
        return scrollTo(anchors[i + 1]);
      }

      if (y > anchors[i] + TOL) return scrollTo(Math.max(y - page, anchors[i]));
      if (i === 0) return false;
      // Enter a tall previous step at its end, which is the part you were
      // reading a moment ago; a short one has nowhere else to land.
      return scrollTo(landingOf(steps[i - 1], anchors[i - 1]));
    };

    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) return; // pinch-zoom
      if (Math.abs(e.deltaY) < MIN_DELTA) return;
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

      const dir: Dir = e.deltaY > 0 ? 1 : -1;
      if (insideScrollable(e.target, dir)) return;

      // Swallow the momentum tail of a flick so it cannot skip three steps,
      // but never past the ceiling: an unbroken drag has to keep moving.
      if (locked) {
        if (Date.now() < hardUntil) {
          e.preventDefault();
          armUnlock();
          return;
        }
        locked = false;
      }

      // Nothing to step to (either end of the page): leave the gesture to the
      // browser rather than preventDefault-ing the page into feeling dead.
      if (step(dir)) e.preventDefault();
    };

    const KEYS: Record<string, Dir> = {
      ArrowDown: 1,
      ArrowUp: -1,
      PageDown: 1,
      PageUp: -1,
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.defaultPrevented || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey) return;
      const dir = KEYS[e.key];
      if (!dir) return;
      if (isEditable(e.target) || insideScrollable(e.target, dir)) return;

      // held key: one step per settle, not one per repeat
      if (locked && Date.now() < hardUntil) {
        e.preventDefault();
        return;
      }
      locked = false;

      if (step(dir)) e.preventDefault();
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.clearTimeout(unlockTimer);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);
}
