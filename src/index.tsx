import './index.css';
import { render } from "react-dom";

import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";

import App from './App';
import Intro from "./components/intro/Intro"
import Resume from "./components/resume/Resume";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import Blog from "./components/blog/Blog";

const rootElement = document.getElementById("root");
render(
  <HashRouter>
    <Routes>
      <Route path='/' element={ <App /> }>
        <Route path='/' element={ <Intro /> } />
        <Route path='resume' element={ <Resume /> }/>
        <Route path='about' element={ <About /> }/>
        <Route path='projects' element={ <Projects /> }/>
        <Route path='blog' element={ <Blog /> }/>
      </Route>
    </Routes>
  </HashRouter>,
  rootElement
);
