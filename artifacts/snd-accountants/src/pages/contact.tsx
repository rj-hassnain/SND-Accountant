import { useState, type FormEvent } from 'react';
import { ArrowRight, Check, Mail, MapPin, Phone, Send } from 'lucide-react';

const serviceOptions = [
  'Company accounts',
  'Personal tax / self-assessment',
  'VAT / Making Tax Digital',
  'Corporation tax',
  'Bookkeeping',
  'Payroll / workplace pensions',
  'Business consultancy',
  'Business start-up',
  'Other / not sure yet',
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };
  return (
    <>
      <section className="page-hero">
        <div className="container-wide page-hero-grid">
          <div>
            <span className="eyebrow">Contact SND</span>
            <h1 className="display">Let’s talk about<br />your accounting needs.</h1>
            <p>Tell us a little about what you need. Our Bolton and Manchester teams can help you take the next step.</p>
          </div>
          <div className="page-hero-mark" aria-hidden="true"><Send size={40} strokeWidth={1.3} /></div>
        </div>
      </section>
      <section className="contact-layout">
        <div className="container-wide contact-grid">
          <aside className="contact-side">
            <span className="eyebrow">Get in touch</span>
            <h2 className="display">Two offices.<br />One clear conversation.</h2>
            <p>Whether you know exactly what you need or are still working it out, share a few details and we’ll have a place to begin.</p>
            <div className="contact-card">
              <span className="contact-card-icon"><MapPin size={20} /></span>
              <div><h3>Bolton · Head office</h3><p>SND Accountants & Business Consultants<br />9 Prescott Street, Bolton BL3 3LZ</p><a href="tel:01204237861" data-testid="link-contact-bolton-phone">01204 237 861</a></div>
            </div>
            <div className="contact-card">
              <span className="contact-card-icon"><MapPin size={20} /></span>
              <div><h3>Manchester</h3><p>53 Portland Street, 11th Floor<br />Manchester M1 3LD</p><a href="tel:01617712341" data-testid="link-contact-manchester-phone">0161 771 2341</a></div>
            </div>
            <div className="contact-card">
              <span className="contact-card-icon"><Mail size={20} /></span>
              <div><h3>Email</h3><a href="mailto:info@sndaccountants.co.uk" data-testid="link-contact-email">info@sndaccountants.co.uk</a></div>
            </div>
          </aside>
          <div className="contact-form-wrap">
            {!submitted ? (
              <>
                <div className="form-heading"><h2>Book a consultation</h2><p>Share a few details and tell us what you’d like to discuss.</p></div>
                <form className="contact-form" onSubmit={submitForm} data-testid="form-contact">
                  <div className="form-field">
                    <label htmlFor="full-name">Full name</label>
                    <input id="full-name" name="fullName" autoComplete="name" required placeholder="Your name" data-testid="input-full-name" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">Email address</label>
                    <input id="email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" data-testid="input-email" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="phone">Phone number</label>
                    <input id="phone" name="phone" type="tel" autoComplete="tel" required placeholder="Your best contact number" data-testid="input-phone" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="business-name">Business name</label>
                    <input id="business-name" name="businessName" autoComplete="organization" placeholder="Business or organisation (optional)" data-testid="input-business-name" />
                  </div>
                  <div className="form-field full">
                    <label htmlFor="service">Service required</label>
                    <select id="service" name="service" required defaultValue="" data-testid="select-service">
                      <option value="" disabled>Select a service</option>
                      {serviceOptions.map((service) => <option key={service} value={service}>{service}</option>)}
                    </select>
                  </div>
                  <div className="form-field full">
                    <label htmlFor="message">How can we help?</label>
                    <textarea id="message" name="message" required placeholder="A little about what you need or what you’d like to ask…" data-testid="textarea-message" />
                  </div>
                  <div className="form-submit-row">
                    <button type="submit" className="button-primary" data-testid="button-submit-contact">Send enquiry <ArrowRight size={16} /></button>
                    <span className="form-note">This demo keeps your details on this page only. No message is sent.</span>
                  </div>
                </form>
              </>
            ) : (
              <div className="success-panel" role="status" aria-live="polite" data-testid="status-contact-success">
                <div className="success-icon"><Check size={27} /></div>
                <h2>Thank you for getting in touch.</h2>
                <p>Your enquiry has been noted in this demo. No information has been sent or stored. To contact SND directly, email info@sndaccountants.co.uk or call either office.</p>
                <button type="button" className="text-link" onClick={() => setSubmitted(false)} data-testid="button-send-another">Send another enquiry <ArrowRight size={15} /></button>
              </div>
            )}
            <div className="direct-contact">
              <h3>Prefer to speak directly?</h3>
              <div className="direct-contact-links">
                <a href="tel:01204237861" data-testid="link-direct-bolton-phone">Bolton 01204 237 861</a>
                <a href="tel:01617712341" data-testid="link-direct-manchester-phone">Manchester 0161 771 2341</a>
                <a href="mailto:info@sndaccountants.co.uk" data-testid="link-direct-email">info@sndaccountants.co.uk</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}