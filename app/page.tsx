import Image from 'next/image';

const services = [
  { number: '01', title: "Learner's licence prep", copy: 'Build the knowledge and confidence you need before you get behind the wheel.' },
  { number: '02', title: 'Code 8 lessons', copy: 'Patient, practical instruction for everyday driving and your Code 8 test.' },
  { number: '03', title: 'Code 10 / 14 lessons', copy: 'Focused preparation for larger vehicle licence categories and test routes.' },
  { number: '04', title: 'Refresher lessons', copy: 'Get comfortable again with calm coaching tailored to your pace.' },
  { number: '05', title: 'Test-day car hire', copy: 'Arrive prepared with a familiar Kia and support for your test day.' },
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Stanzo Driving School home"><span className="traffic-mark" aria-hidden="true"><i /><i /><i /></span><span>Stanzo<br /><em>Driving School</em></span></a>
        <nav className="desktop-nav" aria-label="Primary navigation"><a href="#about">About</a><a href="#services">Services</a><a href="#contact">Contact</a></nav>
        <a className="header-cta" href="https://wa.me/27824209051" target="_blank" rel="noreferrer">WhatsApp us <span>↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy"><p className="eyebrow"><span className="dot dot-red" /> Mbombela · Belmont Villas</p><h1>Pass Your Driving Test <span>the First Time</span></h1><p className="hero-intro">Experienced, patient instructors who help students pass on their first try.</p><div className="hero-actions"><a className="button button-red" href="tel:+27824209051">Call +27 82 420 9051 <span>↗</span></a><a className="button button-light" href="https://wa.me/27824209051" target="_blank" rel="noreferrer">WhatsApp <span>↗</span></a></div><p className="hero-hours"><span className="dot dot-green" /> Open Mon–Sat · 07:00–17:00</p></div>
        <div className="hero-visual"><div className="visual-tag">Kia · test-ready</div><Image src="/kia-driving-school.jpg" alt="Kia driving school vehicle ready for a lesson" fill priority sizes="(max-width: 800px) 100vw, 48vw" /><div className="visual-caption"><span>01</span><span>Learn with confidence</span></div></div>
      </section>

      <section className="about section" id="about"><div className="section-label"><span>01</span> The Stanzo way</div><div className="about-grid"><h2>Calm coaching.<br /><span>Confident drivers.</span></h2><div className="about-copy"><p>We make learning to drive feel clear, calm and achievable. Our experienced, patient instructors meet you where you are and build the skills you need for the road and the test.</p><p>From your learner&apos;s licence preparation to test day, every lesson is focused on helping you pass on your first try.</p><a className="text-link" href="tel:+27824209051">Talk to an instructor <span>↗</span></a></div></div></section>

      <section className="services section" id="services"><div className="section-label"><span>02</span> What we help with</div><div className="services-heading"><h2>Choose your<br /><span>next move.</span></h2><p>Practical lessons, honest guidance and a Kia you can feel comfortable in.</p></div><div className="service-list">{services.map((service) => <article className="service-row" key={service.number}><span className="service-number">{service.number}</span><h3>{service.title}</h3><p>{service.copy}</p><span className="service-arrow">↗</span></article>)}</div></section>

      <section className="contact section" id="contact"><div className="contact-card"><div className="section-label light"><span>03</span> Start your journey</div><h2>Ready when<br /><span>you are.</span></h2><p>Call or WhatsApp Stanzo Driving School to book a lesson or ask a question.</p><div className="contact-actions"><a className="button button-red" href="tel:+27824209051">Call us <span>↗</span></a><a className="button button-white" href="https://wa.me/27824209051" target="_blank" rel="noreferrer">WhatsApp us <span>↗</span></a></div></div><div className="contact-details"><div><span className="detail-label">Find us</span><p>15 Paul Kruger St<br />Mbombela Central, Mbombela, 1201<br />South Africa · Belmont Villas</p><a className="text-link" href="https://www.google.com/maps/search/?api=1&query=15+Paul+Kruger+St+Mbombela+Central+Mbombela+1201+South+Africa" target="_blank" rel="noreferrer">Open in Maps <span>↗</span></a></div><div><span className="detail-label">Call or WhatsApp</span><p><a href="tel:+27824209051">+27 82 420 9051</a><br /><a href="tel:+27827684239">082 768 4239</a></p></div><div><span className="detail-label">Hours</span><p>Mon–Sat<br />07:00–17:00</p></div></div></section>

      <section className="map-section" aria-label="Stanzo Driving School location"><iframe title="Map showing Stanzo Driving School in Mbombela" src="https://www.google.com/maps?q=15+Paul+Kruger+St+Mbombela+Central+Mbombela+1201+South+Africa&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></section>
      <footer className="site-footer"><div className="wordmark"><span className="traffic-mark" aria-hidden="true"><i /><i /><i /></span><span>Stanzo<br /><em>Driving School</em></span></div><p>Pass with confidence.</p><span>© {new Date().getFullYear()} Stanzo Driving School</span></footer>
    </main>
  );
}
