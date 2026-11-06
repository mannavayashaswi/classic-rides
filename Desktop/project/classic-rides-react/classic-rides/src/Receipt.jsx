export default function Receipt({ data, id, onClose }) {
  const rows = [
    ["Reference", id],
    ["Motorcycle", data.model],
    ["Colour", data.colour],
    ["Name", data.name],
    ["Mobile", data.mobile],
    ["Email", data.email],
    ["PIN code", data.pin],
    ["Showroom", `${data.branch}, ${data.city}`],
    ["Visit", `${new Date(data.date).toLocaleDateString("en-IN", { dateStyle: "long" })} · ${data.slot}`],
  ];

  return (
    <div className="overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="receipt" onClick={(e) => e.stopPropagation()}>
        <h3>DEMO ENQUIRY CREATED</h3>
        <p className="sub">This is a sample receipt only, not a confirmed showroom booking.</p>
        <dl>
          {rows.map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
        <div className="receipt-actions no-print">
          <button className="btn" onClick={() => window.print()}>PRINT RECEIPT</button>
          <button className="btn ghost" onClick={onClose}>CLOSE</button>
        </div>
      </div>
    </div>
  );
}
