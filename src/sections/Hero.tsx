import me from "../assets/me.jpg";
import { PROFILE, STATS } from "../data/content";
import { GithubIcon, LinkedinIcon, MediumIcon, TwitterIcon, MailIcon } from "../components/Icons";

const Hero = () => (
  <header className="hero" id="top">
    <div className="wrap hero__grid">
      <div className="hero__copy">
        <span className="pill">
          <i></i> Open to remote roles &amp; consulting
        </span>
        <h1>{PROFILE.name}</h1>
        <p className="hero__role">
          <b>{PROFILE.role}</b> · {PROFILE.org} · {PROFILE.location}
        </p>
        <p className="hero__tag">
          I build and run the <strong>AWS and OCI infrastructure</strong> behind financial services
          used across India and global markets. As an <strong>AWS Community Builder</strong>, I also
          write down how it works, so the next engineer doesn't have to guess.
        </p>

        <div className="socials">
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer">
            <GithubIcon /> GitHub
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedinIcon /> LinkedIn
          </a>
          <a href={PROFILE.medium} target="_blank" rel="noopener noreferrer">
            <MediumIcon /> Medium
          </a>
          <a href={PROFILE.twitter} target="_blank" rel="noopener noreferrer">
            <TwitterIcon /> Twitter
          </a>
          <a href={`mailto:${PROFILE.email}`}>
            <MailIcon /> Email
          </a>
        </div>

        <dl className="stats">
          {STATS.map((s) => (
            <div key={s.value}>
              <dt>{s.value}</dt>
              <dd>{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="hero__photo">
        <div className="halo">
          <span className="ring" aria-hidden="true"></span>
          <span className="ring" aria-hidden="true"></span>
          <span className="ring" aria-hidden="true"></span>
          <span className="ring" aria-hidden="true"></span>
          <img src={me} alt={PROFILE.name} width={460} height={460} />
        </div>
      </div>
    </div>
  </header>
);

export default Hero;
