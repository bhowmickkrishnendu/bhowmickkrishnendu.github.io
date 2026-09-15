import { ACKS, Ack } from "../data/content";

const Body = ({ a }: { a: Ack }) => (
  <>
    <div className="ack__top">
      <span className="ack__org">{a.org}</span>
      <span className="ack__yr">{a.year}</span>
    </div>
    <span className="ack__host">{a.host}</span>
    <span className="ack__what">
      {a.what}
      {a.times ? <span className="ack__x">{a.times}</span> : null}
    </span>
  </>
);

const Recognition = () => (
  <section className="alt" data-step>
    <div className="wrap">
      <div className="sec-head" id="recognition">
        <span className="label">Hall of fame</span>
        <h2>Security reports, publicly acknowledged</h2>
        <p>Issues reported privately and published by the organisation that received them.</p>
      </div>

      <div className="acks">
        {ACKS.map((a, i) =>
          a.link ? (
            <a className="ack" key={i} href={a.link} target="_blank" rel="noopener noreferrer">
              <Body a={a} />
            </a>
          ) : (
            <span className="ack" key={i}>
              <Body a={a} />
            </span>
          )
        )}
      </div>
    </div>
  </section>
);

export default Recognition;
