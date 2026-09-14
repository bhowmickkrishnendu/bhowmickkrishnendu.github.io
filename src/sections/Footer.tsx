import { PROFILE } from "../data/content";
import { GithubIcon, LinkedinIcon, MediumIcon, MailIcon } from "../components/Icons";

const Footer = () => (
  <footer className="foot">
    <div className="wrap foot__in">
      <div>
        <h2>Let's build something that sleeps through the night</h2>
        <p>
          Open to remote roles and consulting on cloud infrastructure, Kubernetes and delivery
          automation.
        </p>
        <div className="socials">
          <a href={`mailto:${PROFILE.email}`}>
            <MailIcon /> {PROFILE.email}
          </a>
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer">
            <GithubIcon /> GitHub
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedinIcon /> LinkedIn
          </a>
          <a href={PROFILE.medium} target="_blank" rel="noopener noreferrer">
            <MediumIcon /> Medium
          </a>
        </div>
      </div>
      <div className="foot__legal">
        <span>
          © {new Date().getFullYear()} {PROFILE.name} · {PROFILE.basedIn}
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
