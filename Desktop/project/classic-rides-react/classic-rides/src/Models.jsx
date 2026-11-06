import { MODELS } from "./data";

export default function Models({ selected, onSelect }) {
  return (
    <section id="models" className="section">
      <p className="eyebrow">01 / The collection</p>
      <h2>CHOOSE YOUR <em>CLASSIC</em></h2>
      <p className="sub">Select a motorcycle below to fill your enquiry form.</p>

      <div className="cards">
        {MODELS.map((m) => (
          <button
            key={m.id}
            className={"card" + (selected === m.id ? " active" : "")}
            onClick={() => onSelect(m.id)}
          >
            <span className="card-num">{m.num}<small>{m.tag}</small></span>
            <h3>{m.id}</h3>
            <p>{m.text}</p>
            <span className="card-cta">{selected === m.id ? "SELECTED ✓" : "SELECT MODEL →"}</span>
          </button>
        ))}
      </div>

      <p className="fine">
        Models shown are examples. Check current variants, colours, launch status and booking eligibility with an authorized dealer.
      </p>
    </section>
  );
}
