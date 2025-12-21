"use client"
import { useState } from 'react';
import { Linkedin, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Link from 'next/link';

export function NewsletterFooter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribe:', email);
    setEmail('');
  };

  const quickLinks = [
    { label: 'About Us', path: '/about' },
    { label: 'Portfolio', path: '/#portfolio' },
    { label: 'Blog', path: '/#blog' },
    { label: 'Contact', path: '/contact' },
  ];
  const services = ['Branding', 'Marketing', 'Design', 'Development'];
  const legalLinks = ['Sitemap', 'Terms & Conditions', 'Privacy Policy'];

  return (
    <div className="newsletter-footer-wrapper w-full" style={{ background: 'linear-gradient(180deg, #0B0F2E 0%, #141B41 100%)' }}>
      {/* SECTION A — NEWSLETTER CTA */}
      <section className="newsletter-cta-section relative overflow-hidden">
        {/* Subtle wave pattern overlay */}
        <div 
          className="wave-pattern absolute inset-0 pointer-events-none"
          style={{
            background: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 Q 25 25, 50 50 T 100 50' stroke='white' stroke-opacity='0.03' fill='none' stroke-width='2'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 100px',
            opacity: 0.08,
          }}
        />

        <div className="newsletter-container max-w-[1440px] mx-auto px-12 py-32 relative z-10">
          {/* Centered content */}
          <div className="text-center max-w-[900px] mx-auto space-y-8 newsletter-content-fade">
            {/* Heading */}
            <h2 
              className="newsletter-heading-animate"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '48px',
                fontWeight: 700,
                color: '#FFFFFF',
                letterSpacing: '-0.01em',
                lineHeight: '1.2',
              }}
            >
              Ready To Grow Your Business With Optichore?
            </h2>

            {/* Subtext */}
            <p 
              className="newsletter-subtext-animate"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '20px',
                fontWeight: 400,
                color: 'rgba(255, 255, 255, 0.75)',
                lineHeight: '1.6',
                maxWidth: '700px',
                margin: '0 auto',
              }}
            >
              Unlock your full potential with Meta-certified marketing, world-class design, and advanced web solutions.
            </p>

            {/* Newsletter Form */}
            <form onSubmit={handleSubmit} className="newsletter-form-inline flex justify-center gap-4 pt-6 max-w-[600px] mx-auto">
              {/* Email Input */}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="newsletter-input-dark flex-1 px-8 py-4 rounded-full"
                required
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#FFFFFF',
                  outline: 'none',
                  transition: 'all 300ms ease',
                }}
              />

              {/* CTA Button */}
              <button
                type="submit"
                className="newsletter-subscribe-btn px-10 py-4 rounded-full"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  fontWeight: 600,
                  backgroundColor: '#FF0000',
                  color: '#FFFFFF',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 300ms ease',
                  whiteSpace: 'nowrap',
                }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* SECTION B — FOOTER */}
      <footer className="footer-main-section pt-24 pb-20">
        <div className="footer-container max-w-[1440px] mx-auto px-12">
          {/* 5 Column Layout */}
          <div className="footer-grid grid grid-cols-5 gap-16 mb-16">
            {/* COLUMN 1 — Brand Block */}
            <div 
              className="footer-brand-col space-y-6 footer-col-animate"
              style={{ animationDelay: '0ms' }}
            >
              {/* Logo */}
              <div className="footer-logo-wrapper">
                <Link href="/">
                  <ImageWithFallback
                    src="https://optichore.com/wp-content/uploads/2025/02/Logo-PNG-1.png"
                    alt="Optichore"
                    className="h-12 w-auto object-contain"
                    style={{ maxWidth: '200px', cursor: 'pointer' }}
                  />
                </Link>
              </div>

              {/* Tagline */}
              <p 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '15px',
                  fontWeight: 400,
                  color: 'rgba(255, 255, 255, 0.7)',
                  letterSpacing: '-0.01em',
                }}
              >
                Innovation. Strategy. Growth.
              </p>

              {/* Micro Description */}
              <p 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: 400,
                  color: 'rgba(255, 255, 255, 0.6)',
                  lineHeight: '1.6',
                }}
              >
                Meta-certified digital marketing & IT agency delivering growth-focused solutions.
              </p>

              {/* Social Icons */}
              <div className="footer-social-icons flex gap-3 pt-2">
                <a
                  href="https://facebook.com"
                  className="footer-social-link-dark"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="footer-icon-circle">
                    <Facebook className="w-4 h-4" />
                  </div>
                </a>

                <a
                  href="https://linkedin.com"
                  className="footer-social-link-dark"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="footer-icon-circle">
                    <Linkedin className="w-4 h-4" />
                  </div>
                </a>

                <a
                  href="https://instagram.com"
                  className="footer-social-link-dark"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="footer-icon-circle">
                    <Instagram className="w-4 h-4" />
                  </div>
                </a>
              </div>
            </div>

            {/* COLUMN 2 — Quick Links */}
            <div 
              className="footer-links-col space-y-5 footer-col-animate"
              style={{ animationDelay: '80ms' }}
            >
              <h4 className="footer-column-title">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.path} className="footer-link-dark">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 3 — Our Services */}
            <div 
              className="footer-services-col space-y-5 footer-col-animate"
              style={{ animationDelay: '160ms' }}
            >
              <h4 className="footer-column-title">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link href={`/${service.toLowerCase().replace(/\s+/g, '-')}`} className="footer-link-dark">
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 4 — Contact Information */}
            <div 
              className="footer-contact-col space-y-5 footer-col-animate"
              style={{ animationDelay: '240ms' }}
            >
              <h4 className="footer-column-title">Contact Information</h4>
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 flex-shrink-0" style={{ color: '#FF0000', marginTop: '2px' }} />
                  <a
                    href="mailto:info@optichore.com"
                    className="footer-contact-link"
                  >
                    info@optichore.com
                  </a>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 flex-shrink-0" style={{ color: '#FF0000', marginTop: '2px' }} />
                  <a
                    href="tel:+4407404557047"
                    className="footer-contact-link"
                  >
                    +440 7404 557047
                  </a>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 flex-shrink-0" style={{ color: '#FF0000', marginTop: '2px' }} />
                  <div
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '15px',
                      fontWeight: 400,
                      color: 'rgba(255, 255, 255, 0.8)',
                      lineHeight: '1.6',
                    }}
                  >
                    84–86 Roman Road<br />
                    London, E2 0PJ
                  </div>
                </div>
              </div>
            </div>

            {/* COLUMN 5 — Working Hours */}
            <div 
              className="footer-hours-col space-y-5 footer-col-animate"
              style={{ animationDelay: '320ms' }}
            >
              <h4 className="footer-column-title">Working Hours</h4>
              <div className="space-y-4">
                {/* Mon-Sat */}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '15px',
                        fontWeight: 500,
                        color: 'rgba(255, 255, 255, 0.9)',
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
                      fontSize: '15px',
                      fontWeight: 400,
                      color: 'rgba(255, 255, 255, 0.7)',
                    }}
                  >
                    09:00 AM – 06:00 PM
                  </div>
                </div>

                {/* Sunday */}
                <div>
                  <div className="flex items-center gap-2">
                    <span
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '15px',
                        fontWeight: 500,
                        color: 'rgba(255, 255, 255, 0.9)',
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

          {/* BOTTOM BAR */}
          <div 
            className="footer-bottom-bar pt-8 footer-divider-line"
            style={{
              borderTop: '1px solid rgba(255, 255, 255, 0.12)',
            }}
          >
            <div className="flex items-center justify-between">
              {/* Left - Copyright */}
              <div 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: 400,
                  color: 'rgba(255, 255, 255, 0.7)',
                }}
              >
                © 2025 Optichore Ltd. 16188042 | All Rights Reserved | VAT: 485563158
              </div>

              {/* Right - Legal Links */}
              <div className="flex items-center gap-8">
                {legalLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#legal"
                    className="footer-legal-link-dark"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* ANIMATIONS & STYLES */}
      <style>{`
        /* Newsletter Content Animations */
        @keyframes fadeDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .newsletter-heading-animate {
          animation: fadeDown 0.8s ease forwards;
        }

        .newsletter-subtext-animate {
          animation: fadeIn 0.8s ease forwards 0.2s;
          opacity: 0;
        }

        .newsletter-form-inline {
          animation: slideUp 0.8s ease forwards 0.4s;
          opacity: 0;
        }

        /* Input Focus */
        .newsletter-input-dark:focus {
          background-color: rgba(255, 255, 255, 0.18);
          border-color: rgba(255, 255, 255, 0.4);
          box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
        }

        .newsletter-input-dark::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        /* Subscribe Button Hover */
        .newsletter-subscribe-btn:hover {
          background-color: #E60000;
          transform: scale(1.03);
          box-shadow: 0 8px 24px rgba(255, 0, 0, 0.35);
        }

        /* Footer Column Animations */
        .footer-col-animate {
          opacity: 0;
          animation: slideUp 0.7s ease forwards;
        }

        /* Footer Column Titles */
        .footer-column-title {
          font-family: 'Inter', sans-serif;
          font-size: 17px;
          font-weight: 600;
          color: #FFFFFF;
          margin-bottom: 8px;
        }

        /* Footer Links */
        .footer-link-dark {
          position: relative;
          display: inline-block;
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-link-dark::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background-color: #FFFFFF;
          transition: width 0.3s ease;
        }

        .footer-link-dark:hover {
          color: #FFFFFF;
        }

        .footer-link-dark:hover::after {
          width: 100%;
        }

        /* Contact Links */
        .footer-contact-link {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-contact-link:hover {
          color: #FFFFFF;
        }

        /* Social Icons */
        .footer-icon-circle {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1.5px solid #FF0000;
          color: #FF0000;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .footer-icon-circle:hover {
          background-color: #FF0000;
          color: #FFFFFF;
          transform: scale(1.1);
          box-shadow: 0 4px 16px rgba(255, 0, 0, 0.3);
        }

        .footer-icon-circle:hover svg {
          color: #FFFFFF;
        }

        /* Legal Links */
        .footer-legal-link-dark {
          position: relative;
          display: inline-block;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-legal-link-dark::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background-color: rgba(255, 255, 255, 0.9);
          transition: width 0.3s ease;
        }

        .footer-legal-link-dark:hover {
          color: #FFFFFF;
        }

        .footer-legal-link-dark:hover::after {
          width: 100%;
        }

        /* Divider Line Animation */
        .footer-divider-line {
          position: relative;
        }

        .footer-divider-line::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: rgba(255, 255, 255, 0.12);
          transform-origin: left;
          transform: scaleX(0);
          animation: drawLine 1s ease forwards 0.6s;
        }

        @keyframes drawLine {
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </div>
  );
}