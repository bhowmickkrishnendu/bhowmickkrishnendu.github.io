import { TIERS } from "../data/content";

const Stack = () => (
  <section data-step>
    <div className="wrap">
      <div className="sec-head" id="stack">
        <span className="label">Tech arsenal</span>
        <h2>The stack, sorted by how deep I actually go</h2>
        <p>What I work in every day, what I've run in production, and what I'm learning right now.</p>
      </div>

      {TIERS.map((tier, i) => (
        <div className={`tier tier--${i + 1}`} key={tier.title}>
          <div className="tier__head">
            <span className="tier__n">{tier.n}</span>
            <p>{tier.blurb}</p>
          </div>
          <div className="chips">
            {tier.items.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Stack;
