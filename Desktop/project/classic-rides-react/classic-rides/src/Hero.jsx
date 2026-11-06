export default function Hero() {
  return (
    <>
      <section id="home" className="hero">
        <p className="eyebrow">A heritage-inspired experience</p>
        <h1>
          THE CLASSIC <em>AWAITS.</em>
        </h1>
        <p className="lead">
          Explore the Classic range and request a showroom appointment with this demonstration pre-booking form.
        </p>
        <a href="#booking" className="btn">START YOUR ENQUIRY ↗</a>
        <p className="notice">Unofficial student project · No actual bookings</p>
      </section>
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i}>✦ RIDE INTO THE CLASSIC ERA</span>
          ))}
        </div>
      </div>
    </>
  );
}
