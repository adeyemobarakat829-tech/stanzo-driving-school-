'use client';

import { FormEvent, useState } from 'react';

const whatsappNumber = '27824209051';

export default function BookingForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      'Hi Stanzo Driving School, I would like to book a lesson.',
      `Name: ${form.get('name')}`,
      `Phone: ${form.get('phone')}`,
      `Service: ${form.get('service')}`,
      `Preferred date: ${form.get('date')}`,
      `Preferred time: ${form.get('time')}`,
      `Message: ${form.get('message') || 'None'}`,
    ].join('\n');
    setSent(true);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>Name<input name="name" type="text" placeholder="Your name" required /></label>
        <label>Phone<input name="phone" type="tel" placeholder="082 000 0000" required /></label>
        <label>Lesson type<select name="service" defaultValue="Code 8 lessons" required><option>Learner&apos;s licence prep</option><option>Code 8 lessons</option><option>Code 10 / 14 lessons</option><option>Refresher lessons</option><option>Test-day car hire</option></select></label>
        <label>Preferred date<input name="date" type="date" required /></label>
        <label>Preferred time<select name="time" defaultValue="Morning"><option>Morning</option><option>Midday</option><option>Afternoon</option></select></label>
        <label className="full-field">Anything we should know?<textarea name="message" rows={3} placeholder="Tell us about your experience or goal" /></label>
      </div>
      <button className="button button-red" type="submit">Send booking request <span>↗</span></button>
      <p className="form-note" aria-live="polite">{sent ? 'Your WhatsApp booking draft is ready to send.' : 'This opens WhatsApp with your booking details filled in.'}</p>
    </form>
  );
}
