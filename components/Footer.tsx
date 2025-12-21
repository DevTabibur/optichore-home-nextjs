import { useState } from 'react';
import { Linkedin, Facebook, Instagram, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribe:', email);
    setEmail('');
  };

  const quickLinks = [
    { label: 'About Us', path: '/about' },
    { label: 'Portfolio', path: '#portfolio' },
    { label: 'Blog', path: '#blog' },
    { label: 'Contact', path: '#contact' },
  ];
  const services = ['Branding', 'Marketing', 'Design', 'Development'];
  const legalLinks = ['Sitemap', 'Terms & Conditions', 'Privacy Policy'];

  return (
    <div 
      className="newsletter-footer-light-theme w-full"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F8F9FF 100%)',
      }}
    >
      {/* ⭐ SECTION A — NEWSLETTER CTA (LIGHT THEME) */}
      <section className="newsletter-cta-light relative overflow-hidden">
        {/* Subtle Abstract Shapes */}
        <div 
          className="abstract-shapes-light absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 15% 25%, rgba(21, 21, 97, 0.04) 0%, transparent 50%),
                         radial-gradient(circle at 85% 75%, rgba(255, 0, 0, 0.03) 0%, transparent 50%)`,
            opacity: 0.6,
          }}
        />

        <div className="newsletter-content-container max-w-[1440px] mx-auto px-12 py-40 relative z-10">
          {/* Centered Content */}
          <div className="text-center max-w-[920px] mx-auto space-y-10">
            {/* Heading */}
            <h2 
              className="newsletter-heading-slideup"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '52px',
                fontWeight: 700,
                color: '#151561',
                letterSpacing: '-0.02em',
                lineHeight: '1.15',
              }}
            >
              Ready To Grow Your Business With Optichore?
            </h2>

            {/* Subtext */}
            <p 
              className="newsletter-subtext-fadein-light"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '20px',
                fontWeight: 400,
                color: '#505050',
                lineHeight: '1.65',
                maxWidth: '720px',
                margin: '0 auto',
              }}
            >
              Unlock your full potential with Meta-certified marketing, world-class design, and advanced digital solutions.
            </p>

            {/* Newsletter Input Row */}
            <form 
              onSubmit={handleSubmit} 
              className="newsletter-input-row-light flex justify-center gap-4 pt-8 max-w-[640px] mx-auto"
            >
              {/* Email Input */}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="newsletter-email-field-light flex-1 px-8 py-5"
                required
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  color: '#151561',
                  outline: 'none',
                  borderRadius: '50px',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
                  transition: 'all 320ms ease',
                }}
              />

              {/* CTA Button */}
              <button
                type="submit"
                className="newsletter-cta-btn-light px-11 py-5"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  fontWeight: 600,
                  backgroundColor: '#FF0000',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 4px 16px rgba(255, 0, 0, 0.25)',
                }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ⭐ SECTION B — FOOTER (LIGHT THEME) */}
      <footer className="footer-light-section pt-28 pb-20" style={{ backgroundColor: '#F8F9FF' }}>
        <div className="footer-main-wrapper max-w-[1440px] mx-auto px-12">
          {/* 5 Column Layout */}
          <div className="footer-5col-layout grid grid-cols-5 gap-20 mb-20">
            {/* Column 1 — Brand Block */}
            <div 
              className="footer-brand-col space-y-7 footer-col-fade"
              style={{ animationDelay: '0ms' }}
            >
              {/* Logo */}
              <div className="footer-logo-light">
                <ImageWithFallback
                  src="https://optichore.com/wp-content/uploads/2025/02/Logo-PNG-1.png"
                  alt="Optichore"
                  className="h-14 w-auto object-contain"
                  style={{ maxWidth: '220px' }}
                />
              </div>

              {/* Tagline */}
              <p 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  fontWeight: 400,
                  color: '#505050',
                  letterSpacing: '-0.01em',
                }}
              >
                Innovation. Strategy. Growth.
              </p>

              {/* Social Icons */}
              <div className="footer-social-icons flex gap-3.5 pt-3">
                <a
                  href="https://facebook.com"
                  className="footer-social-link-light"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="footer-social-circle-light">
                    <Facebook className="w-4 h-4" />
                  </div>
                </a>

                <a
                  href="https://linkedin.com"
                  className="footer-social-link-light"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="footer-social-circle-light">
                    <Linkedin className="w-4 h-4" />
                  </div>
                </a>

                <a
                  href="https://instagram.com"
                  className="footer-social-link-light"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="footer-social-circle-light">
                    <Instagram className="w-4 h-4" />
                  </div>
                </a>
              </div>
            </div>

            {/* Column 2 — Quick Links */}
            <div 
              className="footer-quicklinks-col space-y-6 footer-col-fade"
              style={{ animationDelay: '100ms' }}
            >
              <h4 className="footer-col-heading-light">Quick Links</h4>
              <ul className="space-y-3.5">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="footer-link-light">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 — Our Services */}
            <div 
              className="footer-services-col space-y-6 footer-col-fade"
              style={{ animationDelay: '200ms' }}
            >
              <h4 className="footer-col-heading-light">Our Services</h4>
              <ul className="space-y-3.5">
                {services.map((service, index) => (
                  <li key={index}>
                    <a href="#service" className="footer-link-light">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 — Contact Information */}
            <div 
              className="footer-contact-col space-y-6 footer-col-fade"
              style={{ animationDelay: '300ms' }}
            >
              <h4 className="footer-col-heading-light">Contact Information</h4>
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 flex-shrink-0" style={{ color: '#FF0000', marginTop: '2px' }} />
                  <a
                    href="mailto:info@optichore.com"
                    className="footer-contact-link-light"
                  >
                    info@optichore.com
                  </a>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 flex-shrink-0" style={{ color: '#FF0000', marginTop: '2px' }} />
                  <a
                    href="tel:+4407404557047"
                    className="footer-contact-link-light"
                  >
                    +440 7404 557047
                  </a>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 flex-shrink-0" style={{ color: '#FF0000', marginTop: '2px' }} />
                  <div
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      fontWeight: 400,
                      color: '#151561',
                      lineHeight: '1.65',
                    }}
                  >
                    84–86 Roman Road<br />
                    London, E2 0PJ
                  </div>
                </div>
              </div>
            </div>

            {/* Column 5 — Working Hours */}
            <div 
              className="footer-hours-col space-y-6 footer-col-fade"
              style={{ animationDelay: '400ms' }}
            >
              <h4 className="footer-col-heading-light">Working Hours</h4>
              <div className="space-y-4">
                {/* Mon-Sat */}
                <div>
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '16px',
                        fontWeight: 500,
                        color: '#151561',
                      }}
                    >
                      Mon–Sat:
                    </span>
                    <span
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '13px',
                        fontWeight: 600,
                        color: '#0DAF3C',
                      }}
                    >
                      Open
                    </span>
                  </div>
                  <div
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      fontWeight: 400,
                      color: '#505050',
                    }}
                  >
                    09:00 AM – 06:00 PM
                  </div>
                </div>

                {/* Sunday */}
                <div>
                  <div className="flex items-center gap-2.5">
                    <span
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '16px',
                        fontWeight: 500,
                        color: '#151561',
                      }}
                    >
                      Sunday:
                    </span>
                    <span
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '13px',
                        fontWeight: 600,
                        color: '#FF0000',
                      }}
                    >
                      Closed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ⭐ BOTTOM BAR (LIGHT THEME) */}
          <div 
            className="footer-bottom-bar-light pt-10"
            style={{
              borderTop: '1px solid rgba(0, 0, 0, 0.10)',
            }}
          >
            <div className="flex items-center justify-between">
              {/* Left - Copyright */}
              <div 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: 400,
                  color: '#6A6A6A',
                }}
              >
                © 2025 Optichore Ltd. 16188042 | All Rights Reserved | VAT: 485563158
              </div>

              {/* Right - Legal Links */}
              <div className="flex items-center gap-10">
                {legalLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#legal"
                    className="footer-legal-link-light"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* ⭐ ANIMATIONS & STYLES */}
      <style>{`
        /* Newsletter Heading - Slide Up Animation */
        @keyframes slideUpEffect {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Newsletter Subtext - Fade In */
        @keyframes fadeInSmooth {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Footer Column Stagger Fade */
        @keyframes colFadeStagger {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Apply Newsletter Animations */
        .newsletter-heading-slideup {
          animation: slideUpEffect 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .newsletter-subtext-fadein-light {
          animation: fadeInSmooth 0.9s ease forwards 0.25s;
          opacity: 0;
        }

        .newsletter-input-row-light {
          animation: colFadeStagger 0.9s ease forwards 0.45s;
          opacity: 0;
        }

        /* Newsletter Email Field - Light Theme */
        .newsletter-email-field-light::placeholder {
          color: rgba(0, 0, 0, 0.4);
        }

        .newsletter-email-field-light:focus {
          background-color: #FFFFFF;
          border-color: rgba(21, 21, 97, 0.2);
          box-shadow: 0 0 0 4px rgba(21, 21, 97, 0.06), 0 8px 24px rgba(0, 0, 0, 0.08);
        }

        /* Subscribe Button Hover - Light Theme */
        .newsletter-cta-btn-light:hover {
          background-color: #E60000;
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(255, 0, 0, 0.35);
        }

        /* Footer Column Fade Animation */
        .footer-col-fade {
          opacity: 0;
          animation: colFadeStagger 0.8s ease forwards;
        }

        /* Footer Column Headings - Light Theme */
        .footer-col-heading-light {
          font-family: 'Inter', sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: #151561;
          margin-bottom: 4px;
        }

        /* Footer Navigation Links - Light Theme */
        .footer-link-light {
          position: relative;
          display: inline-block;
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          font-weight: 400;
          color: #505050;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-link-light::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #151561;
          transition: width 0.35s ease;
        }

        .footer-link-light:hover {
          color: #151561;
        }

        .footer-link-light:hover::after {
          width: 100%;
        }

        /* Footer Contact Links - Light Theme */
        .footer-contact-link-light {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          font-weight: 400;
          color: #151561;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-contact-link-light:hover {
          color: #FF0000;
        }

        /* Social Icon Circle - Light Theme */
        .footer-social-circle-light {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1.5px solid #FF0000;
          color: #151561;
          background-color: transparent;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .footer-social-circle-light:hover {
          background-color: #FF0000;
          color: #FFFFFF;
          transform: scale(1.12);
          box-shadow: 0 6px 20px rgba(255, 0, 0, 0.35);
        }

        .footer-social-circle-light:hover svg {
          color: #FFFFFF;
        }

        /* Legal Links - Light Theme */
        .footer-legal-link-light {
          position: relative;
          display: inline-block;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 400;
          color: #6A6A6A;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-legal-link-light::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background-color: #151561;
          transition: width 0.35s ease;
        }

        .footer-legal-link-light:hover {
          color: #151561;
        }

        .footer-legal-link-light:hover::after {
          width: 100%;
        }
      `}</style>
    </div>
  );
}