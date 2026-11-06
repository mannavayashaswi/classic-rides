import { useState } from "react";
import { MODELS, COLOURS, CITIES, BRANCHES, SLOTS } from "./data";

const today = new Date().toISOString().split("T")[0];

const validate = (f) => {
  const e = {};
  if (f.name.trim().length < 3) e.name = "Enter your full name.";
  if (!/^[6-9]\d{9}$/.test(f.mobile)) e.mobile = "Enter a valid 10-digit mobile number.";
  if (!/^\S+@\S+\.\S+$/.test(f.email)) e.email = "Enter a valid email address.";
  if (!/^\d{6}$/.test(f.pin)) e.pin = "Enter a 6-digit PIN code.";
  if (!f.colour) e.colour = "Pick a colour preference.";
  if (!f.city) e.city = "Choose a city.";
  if (!f.branch) e.branch = "Choose a showroom.";
  if (!f.date) e.date = "Pick a visit date.";
  if (!f.slot) e.slot = "Choose a time.";
  if (!f.agree) e.agree = "Please tick the box to continue.";
  return e;
};

export default function BookingForm({ form, setForm, onSubmit }) {
  const [errors, setErrors] = useState({});

  const set = (k) => (ev) => {
    const v = ev.target.type === "checkbox" ? ev.target.checked : ev.target.value;
    setForm((p) => ({ ...p, [k]: v }));
    if (errors[k]) setErrors((p) => ({ ...p, [k]: undefined }));
  };

  const submit = (ev) => {
    ev.preventDefault();
    const e = validate(form);
    setErrors(e);
    if (Object.keys(e).length === 0) onSubmit();
  };

  const Field = ({ label, k, children }) => (
    <label className={"field" + (errors[k] ? " has-error" : "")}>
      <span>{label}</span>
      {children}
      {errors[k] && <em className="err">{errors[k]}</em>}
    </label>
  );

  return (
    <section id="booking" className="section">
      <p className="eyebrow">02 / Your journey begins</p>
      <h2>PRE-BOOKING <em>ENQUIRY</em></h2>
      <p className="sub">Complete this form to generate a demo enquiry receipt. No information is sent to a showroom.</p>

      <form onSubmit={submit} noValidate>
        <fieldset>
          <legend>01 — Your motorcycle</legend>
          <div className="grid">
            <Field label="Motorcycle model" k="model">
              <select value={form.model} onChange={set("model")}>
                {MODELS.map((m) => <option key={m.id}>{m.id}</option>)}
              </select>
            </Field>
            <Field label="Preferred colour" k="colour">
              <select value={form.colour} onChange={set("colour")}>
                <option value="">Select a preference</option>
                {COLOURS.map((c) => <option key={c}>{c}</option>)}
              </select>
            </Field>
          </div>
        </fieldset>

        <fieldset>
          <legend>02 — Personal details</legend>
          <div className="grid">
            <Field label="Full name" k="name">
              <input value={form.name} onChange={set("name")} autoComplete="name" />
            </Field>
            <Field label="Mobile number" k="mobile">
              <input value={form.mobile} onChange={set("mobile")} inputMode="numeric" maxLength={10} autoComplete="tel" />
            </Field>
            <Field label="Email address" k="email">
              <input type="email" value={form.email} onChange={set("email")} autoComplete="email" />
            </Field>
            <Field label="PIN code" k="pin">
              <input value={form.pin} onChange={set("pin")} inputMode="numeric" maxLength={6} autoComplete="postal-code" />
            </Field>
          </div>
        </fieldset>

        <fieldset>
          <legend>03 — Showroom visit</legend>
          <div className="grid">
            <Field label="Preferred city" k="city">
              <select value={form.city} onChange={set("city")}>
                <option value="">Select a city</option>
                {CITIES.map((c) => <option key={c}>{c}</option>)}
              </select>
            </Field>
            <Field label="Preferred showroom" k="branch">
              <select value={form.branch} onChange={set("branch")} disabled={!form.city}>
                <option value="">Select preferred branch</option>
                {BRANCHES.map((b) => <option key={b}>{b}</option>)}
              </select>
            </Field>
            <Field label="Preferred visit date" k="date">
              <input type="date" min={today} value={form.date} onChange={set("date")} />
            </Field>
            <Field label="Preferred time" k="slot">
              <select value={form.slot} onChange={set("slot")}>
                <option value="">Choose a time</option>
                {SLOTS.map((s) => <option key={s}>{s}</option>)}
              </select>
            </Field>
          </div>
        </fieldset>

        <label className={"check" + (errors.agree ? " has-error" : "")}>
          <input type="checkbox" checked={form.agree} onChange={set("agree")} />
          <span>
            I understand this is a demonstration project. Submitting this form does not reserve a motorcycle or contact Royal Enfield.
          </span>
        </label>
        {errors.agree && <em className="err">{errors.agree}</em>}

        <button type="submit" className="btn submit">GENERATE DEMO ENQUIRY →</button>
        <p className="fine">
          No payment is collected. Visit the official Royal Enfield website or contact an authorized dealer for a real booking.
        </p>
      </form>
    </section>
  );
}
