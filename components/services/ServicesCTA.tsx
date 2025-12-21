import { Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export function ServicesCTA() {
  return (
    <section 
      className="services-cta-section w-full lg:py-32 md:py-24 py-20"
      style={{
        background: 'linear-gradient(180deg, #F8FBFF 0%, #FFFFFF 100%)',
      }}
    >
      {/* ========================================== */}
      {/* DESKTOP VARIANT (≥1024px) — LOCKED        */}
      {/* ========================================== */}
      <div className="hidden lg:block max-w-[1440px] mx-auto px-12">
        {/* CTA Container */}
        <div
          className="services-cta-container"
          style={{
            background: 'linear-gradient(135deg, #151561 0%, #1a1a7a 100%)',
            borderRadius: '32px',
            padding: '80px 60px',
            textAlign: 'center',
            boxShadow: '0 24px 64px rgba(21, 21, 97, 0.25)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Abstract Background Pattern */}
          <div 
            className="cta-abstract-shapes"
            style={{
              position: 'absolute',
              inset: '0',
              background: `radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
                           radial-gradient(circle at 90% 80%, rgba(255, 0, 0, 0.08) 0%, transparent 50%)`,
              pointerEvents: 'none',
            }}
          />

          {/* Content */}
          <div className="relative z-10 max-w-[800px] mx-auto">
            {/* Heading */}
            <h2
              className="services-cta-heading"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '52px',
                fontWeight: 700,
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
                lineHeight: '1.15',
                marginBottom: '24px',
              }}
            >
              Ready to grow with us?
            </h2>

            {/* Subtext */}
            <p
              className="services-cta-subtext"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '20px',
                fontWeight: 400,
                color: 'rgba(255, 255, 255, 0.85)',
                lineHeight: '1.65',
                marginBottom: '48px',
              }}
            >
              Our team is ready to take your brand to the next level.
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center justify-center gap-6 services-cta-buttons">
              <a href="tel:+4407404557047">
                <button
                  className="services-cta-btn-primary"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '17px',
                    fontWeight: 600,
                    backgroundColor: '#FF0000',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '50px',
                    padding: '18px 40px',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: '0 8px 24px rgba(255, 0, 0, 0.35)',
                  }}
                >
                  <Phone className="w-5 h-5" />
                  Book a Call
                </button>
              </a>

              <Link href="/contact">
                <button
                  className="services-cta-btn-secondary"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '17px',
                    fontWeight: 600,
                    backgroundColor: 'transparent',
                    color: '#FFFFFF',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '50px',
                    padding: '16px 40px',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <Mail className="w-5 h-5" />
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* TABLET/MOBILE VARIANTS (<1024px)          */}
      {/* ========================================== */}
      <div className="lg:hidden max-w-[1440px] mx-auto md:px-8 px-6">
        {/* CTA Container - Responsive */}
        <div
          className="services-cta-container-responsive"
          style={{
            background: 'linear-gradient(135deg, #151561 0%, #1a1a7a 100%)',
            borderRadius: '32px',
            padding: '60px 40px',
            textAlign: 'center',
            boxShadow: '0 24px 64px rgba(21, 21, 97, 0.25)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Abstract Background Pattern */}
          <div 
            className="cta-abstract-shapes"
            style={{
              position: 'absolute',
              inset: '0',
              background: `radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
                           radial-gradient(circle at 90% 80%, rgba(255, 0, 0, 0.08) 0%, transparent 50%)`,
              pointerEvents: 'none',
            }}
          />

          {/* Content */}
          <div className="relative z-10 max-w-[800px] mx-auto">
            {/* Heading - Responsive */}
            <h2
              className="services-cta-heading-responsive md:text-[44px] text-[32px] md:mb-6 mb-5"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
                lineHeight: '1.15',
              }}
            >
              Ready to grow with us?
            </h2>

            {/* Subtext - Responsive */}
            <p
              className="services-cta-subtext-responsive md:text-[19px] text-[17px] md:mb-12 mb-10"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                color: 'rgba(255, 255, 255, 0.85)',
                lineHeight: '1.65',
              }}
            >
              Our team is ready to take your brand to the next level.
            </p>

            {/* CTA Buttons - Responsive: Inline on tablet, stacked on mobile */}
            <div className="services-cta-buttons-responsive md:flex md:items-center md:justify-center md:gap-6 md:space-y-0 space-y-4">
              <a href="tel:+4407404557047" className="block md:inline-block">
                <button
                  className="services-cta-btn-primary w-full md:w-auto justify-center"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '17px',
                    fontWeight: 600,
                    backgroundColor: '#FF0000',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '50px',
                    padding: '18px 40px',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: '0 8px 24px rgba(255, 0, 0, 0.35)',
                  }}
                >
                  <Phone className="w-5 h-5" />
                  Book a Call
                </button>
              </a>

              <Link href="/contact" className="block md:inline-block">
                <button
                  className="services-cta-btn-secondary w-full md:w-auto justify-center"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '17px',
                    fontWeight: 600,
                    backgroundColor: 'transparent',
                    color: '#FFFFFF',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '50px',
                    padding: '16px 40px',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <Mail className="w-5 h-5" />
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes servicesCTAContainerFade {
          from {
            opacity: 0;
            transform: scale(0.96);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes servicesCTAHeadingFade {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes servicesCTASubtextFade {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes servicesCTAButtonsFade {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .services-cta-container,
        .services-cta-container-responsive {
          animation: servicesCTAContainerFade 0.9s ease forwards;
        }

        .services-cta-heading,
        .services-cta-heading-responsive {
          animation: servicesCTAHeadingFade 0.9s ease forwards 0.2s;
          opacity: 0;
        }

        .services-cta-subtext,
        .services-cta-subtext-responsive {
          animation: servicesCTASubtextFade 0.9s ease forwards 0.35s;
          opacity: 0;
        }

        .services-cta-buttons,
        .services-cta-buttons-responsive {
          animation: servicesCTAButtonsFade 0.9s ease forwards 0.5s;
          opacity: 0;
        }

        .services-cta-btn-primary:hover {
          background-color: #E60000;
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(255, 0, 0, 0.45);
        }

        .services-cta-btn-secondary:hover {
          background-color: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.6);
        }
      `}</style>
    </section>
  );
}
