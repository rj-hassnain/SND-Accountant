import { useEffect, useState, type ReactNode } from 'react';
import { Link, useLocation } from 'wouter';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import logo from '../assets/snd-logo.png';

export function SiteLayout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/#about' },
    { label: 'Contact', href: '/contact' },
  ];
  const closeMenu = () => setMenuOpen(false);
  useEffect(() => {
    let anchorTimeout: number | undefined;
    if (window.location.hash === '#about') {
      anchorTimeout = window.setTimeout(() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }), 100);
    }
    const revealTargets = Array.from(document.querySelectorAll<HTMLElement>('main > section, main section.catalog-section, main .contact-grid'));
    const observer = typeof IntersectionObserver === 'undefined'
      ? null
      : new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer?.unobserve(entry.target);
            }
          });
        }, { threshold: 0.12 });
    revealTargets.forEach((target, index) => {
      target.classList.add('reveal-on-scroll');
      target.style.setProperty('--reveal-delay', `${(index % 3) * 55}ms`);
      observer?.observe(target);
      if (!observer) target.classList.add('is-visible');
    });
    return () => {
      observer?.disconnect();
      if (anchorTimeout !== undefined) window.clearTimeout(anchorTimeout);
    };
  }, [location]);
  useEffect(() => {
    const updateCompact = () => setIsCompact(window.scrollY > 40);
    updateCompact();
    window.addEventListener('scroll', updateCompact, { passive: true });
    return () => window.removeEventListener('scroll', updateCompact);
  }, []);
  return (
    <div className="site-shell">
      <header className={`site-header${isCompact ? ' compact' : ''}`}>
        <div className="utility-bar">
          <div className="container-wide utility-inner">
            <span className="utility-meta">North-West England · Bolton & Manchester</span>
            <div className="utility-contact">
              <a href="tel:01204237861" data-testid="link-header-bolton-phone">Bolton 01204 237 861</a>
              <a href="mailto:info@sndaccountants.co.uk" data-testid="link-header-email">info@sndaccountants.co.uk</a>
            </div>
          </div>
        </div>
        <div className="container-wide nav-inner">
          <Link href="/" className="brand-link" aria-label="SND Accountants home" onClick={closeMenu} data-testid="link-brand-home">
            <img className="brand-logo" src={logo} alt="SND Accountants & Business Consultants" />
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            data-testid="button-mobile-menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <nav id="primary-navigation" className={`nav-links${menuOpen ? ' open' : ''}`} aria-label="Primary navigation">
            {navItems.map((item) => {
              const active = item.href === '/' ? location === '/' : item.href === '/services' ? location === '/services' : item.href === '/contact' ? location === '/contact' : false;
              return (
                <Link key={item.label} href={item.href} className={`nav-link${active ? ' active' : ''}`} onClick={() => {
                  closeMenu();
                  if (item.label === 'About') window.setTimeout(() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }), 100);
                }} data-testid={`link-nav-${item.label.toLowerCase()}`}>
                  {item.label}
                </Link>
              );
            })}
            <Link href="/contact" className="nav-cta" onClick={closeMenu} data-testid="link-nav-consultation">
              Book a consultation <ArrowUpRight size={15} />
            </Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-wide">
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="/" className="footer-logo-wrap" aria-label="SND Accountants home" data-testid="link-footer-brand">
              <img className="footer-logo" src={logo} alt="SND Accountants & Business Consultants" />
            </Link>
            <p>Clear, individually tailored accounting and business support for people and organisations across the North West.</p>
          </div>
          <div className="footer-col">
            <h3>Explore</h3>
            <div className="footer-links">
              <Link href="/" data-testid="link-footer-home">Home</Link>
              <Link href="/services" data-testid="link-footer-services">Our services</Link>
              <Link href="/#about" data-testid="link-footer-about">About SND</Link>
              <Link href="/contact" data-testid="link-footer-contact">Contact & consultation</Link>
            </div>
          </div>
          <div className="footer-col">
            <h3>Find us</h3>
            <p className="footer-address"><strong>Bolton · Head office</strong>SND Accountants & Business Consultants<br />9 Prescott Street, Bolton BL3 3LZ<br /><a href="tel:01204237861" data-testid="link-footer-bolton-phone">01204 237 861</a></p>
            <p className="footer-address"><strong>Manchester</strong>53 Portland Street, 11th Floor<br />Manchester M1 3LD<br /><a href="tel:01617712341" data-testid="link-footer-manchester-phone">0161 771 2341</a></p>
            <a className="footer-address" href="mailto:info@sndaccountants.co.uk" data-testid="link-footer-email">info@sndaccountants.co.uk</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© SND Accountants & Business Consultants</p>
          <p>Bolton and Manchester · North-West England</p>
        </div>
      </div>
    </footer>
  );
}