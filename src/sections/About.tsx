import { FACTS, HOBBIES } from "../data/content";

const About = () => (
  <section className="alt" data-step>
    <div className="wrap">
      <div className="sec-head" id="about">
        <span className="label">About me</span>
        <h2>Ten years of keeping production honest</h2>
      </div>

      <div className="about">
        <div className="prose">
          <p className="pull">
            Turning infrastructure chaos into production excellence, one deployment at a time.
          </p>
          <p>
            I'm a Senior Platform Engineer III at <strong>Nomura Research Institute</strong> and an{" "}
            <strong>AWS Community Builder</strong>, building cloud infrastructure that powers
            financial services for millions of users across India and global markets.
          </p>
          <p>
            With <strong>10+ years</strong> of experience, my core stack spans AWS, Kubernetes,
            Terraform and CI/CD automation, delivering systems that are scalable, secure and
            cost-efficient. I troubleshoot production incidents, optimise cloud spend, and{" "}
            <strong>document everything</strong> for the next engineer. My DevOps articles on Medium
            have reached more than 50,000 readers.
          </p>
          <p>
            Before I moved fully into cloud, I spent seven years in retail IT at Landmark Group,
            running Apache Tomcat, Oracle Retail POS, Oracle BI and middleware across AWS, Microsoft
            servers and bare metal for stores in three cities. That is where I learned that uptime is
            a people problem as much as a technical one.
          </p>
          <p>
            <strong>Currently exploring:</strong> AI/ML infrastructure on Kubernetes, FinOps, and
            multi-region architectures.
          </p>
        </div>

        <div className="aside-card">
          <dl>
            {FACTS.map((f) => (
              <div className="factrow" key={f.key}>
                <dt>{f.key}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
          <div className="hobbies">
            {HOBBIES.map((h) => (
              <span key={h}>{h}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
