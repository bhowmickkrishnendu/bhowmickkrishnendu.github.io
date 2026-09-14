import { PROJECTS } from "../data/content";

const asset = (file: string): string => require(`../assets/tech/${file}`);

const Work = () => (
  <section className="alt">
    <div className="wrap">
      <div className="sec-head" id="work">
        <span className="label">Featured projects</span>
        <h2>Things I've built and shipped</h2>
        <p>
          Enterprise retrieval systems, delivery pipelines, Terraform modules, and a few smaller
          things built to scratch an itch.
        </p>
      </div>

      <div className="cards">
        {PROJECTS.map((p) => (
          <a
            className="card"
            key={p.link}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="card__bg"
              style={{ backgroundImage: `url(${asset(p.background)})` }}
            ></div>
            <div className="card__in">
              <span className="card__cat">{p.category}</span>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="icons">
                {p.tech.map((t) => (
                  <img key={t} src={asset(t)} alt={t.split(".")[0]} />
                ))}
              </div>
              <span className="card__go">View source →</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Work;
