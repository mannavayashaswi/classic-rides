import { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Models from "./Models";
import BookingForm from "./BookingForm";
import Receipt from "./Receipt";
import Footer from "./Footer";

const empty = {
  model: "Classic 350", colour: "", name: "", mobile: "", email: "", pin: "",
  city: "", branch: "", date: "", slot: "", agree: false,
};

export default function App() {
  const [form, setForm] = useState(empty);
  const [receipt, setReceipt] = useState(null);

  const selectModel = (model) => {
    setForm((p) => ({ ...p, model }));
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  const submit = () => {
    const id = "DEMO-" + Math.random().toString(36).slice(2, 8).toUpperCase();
    setReceipt({ id, data: form });
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Models selected={form.model} onSelect={selectModel} />
        <BookingForm form={form} setForm={setForm} onSubmit={submit} />
      </main>
      <Footer />
      {receipt && <Receipt id={receipt.id} data={receipt.data} onClose={() => setReceipt(null)} />}
    </>
  );
}
