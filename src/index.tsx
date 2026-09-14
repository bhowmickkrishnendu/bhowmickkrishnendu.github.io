import "./index.css";
import { render } from "react-dom";
import App from "./App";

// The previous site used hash routes (#/resume, #/projects ...). Everything now
// lives on one page, so send those old links to the matching section instead of
// leaving them on a blank hash.
const LEGACY_ROUTES: Record<string, string> = {
  "#/": "",
  "#/resume": "#experience",
  "#/projects": "#work",
  "#/about": "#about",
  "#/blog": "#writing",
};

const legacy = LEGACY_ROUTES[window.location.hash];
if (legacy !== undefined) {
  window.location.replace(window.location.pathname + legacy);
}

render(<App />, document.getElementById("root"));
