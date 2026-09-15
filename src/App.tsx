import { useEffect } from "react";
import useScrollSteps from "./hooks/useScrollSteps";
import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Stack from "./sections/Stack";
import Work from "./sections/Work";
import Experience from "./sections/Experience";
import Recognition from "./sections/Recognition";
import Writing from "./sections/Writing";
import Footer from "./sections/Footer";

// The nav is sticky and wraps to a second line on small screens, so its height
// is not a constant. Anchor offsets read it from --nav-h rather than guessing.
function useNavHeight() {
  useEffect(() => {
    const nav = document.querySelector<HTMLElement>(".nav");
    if (!nav) return;

    const apply = () =>
      document.documentElement.style.setProperty("--nav-h", `${nav.offsetHeight}px`);

    apply();

    const observer = new ResizeObserver(apply);
    observer.observe(nav);
    window.addEventListener("resize", apply);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", apply);
    };
  }, []);
}

function App() {
  useNavHeight();
  useScrollSteps();

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Stack />
        <Work />
        <Experience />
        <Recognition />
        <Writing />
      </main>
      <Footer />
    </>
  );
}

export default App;
