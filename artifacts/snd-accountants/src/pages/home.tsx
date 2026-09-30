import { ArrowRight, ArrowUpRight, BadgePoundSterling, BookOpenCheck, BriefcaseBusiness, Check, ClipboardList, FileText, Landmark, UsersRound } from 'lucide-react';
import { Link } from 'wouter';
import consultation from '../assets/consultation.jpg';
import office from '../assets/office.jpg';

const featuredServices = [
  { title: 'Company accounts', copy: 'From day-to-day bookkeeping through to your final accounts.', icon: FileText },
  { title: 'Personal tax', copy: 'Self-assessment support, tax refunds and clear tax planning.', icon: BadgePoundSterling },
  { title: 'VAT & MTD', copy: 'Practical VAT guidance and support with Making Tax Digital.', icon: ClipboardList },
  { title: 'Payroll', copy: 'Reliable payroll administration and workplace pension support.', icon: UsersRound },
  { title: 'Business consultancy', copy: 'Business plans, management accounts and thoughtful advice.', icon: BriefcaseBusiness },
  { title: 'Corporation tax', copy: 'Compliance and planning shaped around your circumstances.', icon: Landmark },
  { title: 'Bookkeeping', copy: 'Well-kept records that give you a clearer view of the numbers.', icon: BookOpenCheck },
  { title: 'Business start-ups', copy: 'Company formation guidance and support as you get moving.', icon: ArrowUpRight },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container-wide hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Accounting • Tax • Business Support</span>
            <h1 className="display">Good advice.<br /><em>Clear numbers.</em><br />A steadier path.</h1>
            <p className="hero-text">Accounting is more than a set of figures. We help individuals and organisations across the North West meet their obligations, understand their options and make the next decision with confidence.</p>
            <div className="hero-actions">
              <Link href="/contact" className="button-primary" data-testid="link-hero-consultation">Book a consultation <ArrowRight size={16} /></Link>
              <Link href="/services" className="text-link" data-testid="link-hero-services">Explore our services <ArrowUpRight size={15} /></Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="photo-index"><span>01</span>Local advice</div>
            <div className="hero-photo-frame">
              <img className="hero-photo" src={consultation} alt="Business owners talking through plans together around a table" />
              <span className="hero-caption">A conversation that starts with you</span>
            </div>
            <div className="hero-note"><strong>Made to fit.</strong><span>Individually tailored help, with fixed monthly fees based on your circumstances.</span></div>
          </div>
        </div>
      </section>
      <section className="trust-strip" aria-label="SND approach">
        <div className="container-wide trust-inner">
          <p className="trust-intro">An experienced local perspective, grounded in the details that matter.</p>
          <div className="trust-item"><span className="trust-icon"><Check size={17} /></span>Clear communication</div>
          <div className="trust-item"><span className="trust-icon"><Check size={17} /></span>Tailored support</div>
          <div className="trust-item"><span className="trust-icon"><Check size={17} /></span>Bolton & Manchester</div>
        </div>
      </section>
      <section className="section service-preview">
        <div className="container-wide">
          <div className="section-heading">
            <div><span className="eyebrow">How we can help</span><h2 className="display">Accounting support<br />that fits your business.</h2></div>
            <p>From routine accounts and tax returns to the questions that come with a new venture, find support across the financial life of your business.</p>
          </div>
          <div className="service-grid">
            {featuredServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link key={service.title} href="/services" className="service-card-link" data-testid={`link-home-service-${index + 1}`}>
                  <article className="service-card">
                    <span className="card-number">0{index + 1} <Icon size={17} /></span>
                    <h3>{service.title}</h3>
                    <p>{service.copy}</p>
                    <span className="card-arrow"><ArrowUpRight size={16} /></span>
                  </article>
                </Link>
              );
            })}
          </div>
          <div className="service-footer"><Link href="/services" className="text-link" data-testid="link-home-all-services">View all services <ArrowRight size={15} /></Link></div>
        </div>
      </section>
      <section className="section about-section" id="about">
        <div className="container-wide about-grid">
          <div className="about-image-wrap">
            <img className="about-image" src={office} alt="A considered modern office interior" />
          </div>
          <div className="about-copy">
            <span className="eyebrow">A local firm with a personal approach</span>
            <h2 className="display">Useful advice.<br />No unnecessary noise.</h2>
            <p>SND Accountants & Business Consultants works with individuals and organisations throughout the North West. Our role is to help minimise tax burdens while meeting statutory responsibilities.</p>
            <p>We believe good support begins with communication. We take the time to understand your circumstances, tailor the help you need and agree fixed monthly fees that reflect that work.</p>
            <div className="value-list">
              <div className="value-item"><Check size={16} />Straightforward communication</div>
              <div className="value-item"><Check size={16} />Support shaped around you</div>
              <div className="value-item"><Check size={16} />Bolton head office</div>
              <div className="value-item"><Check size={16} />Manchester office</div>
            </div>
            <div style={{ marginTop: 30 }}><Link href="/contact" className="text-link" data-testid="link-about-contact">Talk through what you need <ArrowRight size={15} /></Link></div>
          </div>
        </div>
      </section>
      <section className="section process-section">
        <div className="container-wide">
          <div className="section-heading">
            <div><span className="eyebrow">How it works</span><h2 className="display">A clear first step.<br />Support that fits.</h2></div>
            <p>Start with a conversation, agree what help makes sense for you, then work with SND as your accounting needs come up.</p>
          </div>
          <div className="process-grid">
            <article className="process-card" data-testid="card-process-talk">
              <span className="process-number">01</span>
              <h3>Talk to us</h3>
              <p>Begin with an informal discussion about your business, personal tax, or the questions you need help with.</p>
            </article>
            <article className="process-card" data-testid="card-process-understand">
              <span className="process-number">02</span>
              <h3>Understand your needs</h3>
              <p>SND takes time to understand the issues that matter and talk through support shaped around your circumstances.</p>
            </article>
            <article className="process-card" data-testid="card-process-support">
              <span className="process-number">03</span>
              <h3>Get ongoing support</h3>
              <p>Agree the service and fee before work begins, then stay in touch as your accounting responsibilities continue.</p>
            </article>
          </div>
        </div>
      </section>
      <section className="consult-banner">
        <div className="container-wide consult-inner">
          <div><span className="eyebrow">Start with a conversation</span><h2 className="display">Let’s make your<br />accounting simpler.</h2></div>
          <div><p>Get in touch with our team in Bolton or Manchester and tell us what kind of support would help.</p><Link href="/contact" className="button-primary" data-testid="link-home-book-consultation">Book a consultation <ArrowUpRight size={15} /></Link></div>
        </div>
      </section>
    </>
  );
}