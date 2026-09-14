import { ROLES } from "../data/content";

const Experience = () => (
  <section>
    <div className="wrap">
      <div className="sec-head" id="experience">
        <span className="label">Experience</span>
        <h2>Where the work was done</h2>
      </div>

      <div className="roles">
        {ROLES.map((role) => (
          <article className="role" key={`${role.org}-${role.title}`}>
            <div className="role__side">
              <span className="role__date">{role.date}</span>
              <span className="role__org">{role.org}</span>
              <span className="role__loc">{role.location}</span>
            </div>
            <div className="role__body">
              <h3>{role.title}</h3>
              <ul className="duties">
                {role.duties.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
