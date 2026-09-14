import type { MouseEvent } from "react";

const LINKS = [
  ["#about", "About"],
  ["#stack", "Stack"],
  ["#work", "Work"],
  ["#experience", "Experience"],
  ["#recognition", "Recognition"],
  ["#writing", "Writing"],
];

const Nav = () => {
  const goHome = (e: MouseEvent<HTMLAnchorElement>) => {
    // Leave ctrl/cmd/middle clicks alone so "open in new tab" still works.
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    // behavior is omitted on purpose: it inherits the CSS scroll-behavior, which
    // reduced-motion users have already switched to instant.
    window.scrollTo({ top: 0 });
    window.history.replaceState(null, "", window.location.pathname);
  };

  return (
    <nav className="nav">
      <div className="nav__in">
        <a className="nav__me" href="#top" onClick={goHome} aria-label="Back to top">
          Krishnendu <span>Bhowmick</span>
        </a>
        <div className="nav__links">
          {LINKS.map(([href, label]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
