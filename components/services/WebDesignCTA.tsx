import { ArrowRight } from 'lucide-react';
import { SafeButton } from '../SafeButton';

export function WebDesignCTA() {
  return (
    <section 
      className="web-design-cta-section w-full lg:py-32 md:py-18 py-14"
      style={{
        background: 'linear-gradient(135deg, #151561 0%, #1a1a7a 100%)',
      }}
    >
      {/* ========================================== */}
      {/* DESKTOP VARIANT (≥1024px) — LOCKED        */}
      {/* ========================================== */}
      <div className="hidden lg:block max-w-[1440px] mx-auto px-12">
        <div className="text-center space-y-10">
          {/* Heading */}
          <h2 
            className="cta-heading"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '56px',
              fontWeight: 700,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              lineHeight: '1.2',
              maxWidth: '800px',
              margin: '0 auto',
            }}
          >
            Ready to design your next website?
          </h2>

          {/* Subtext */}
          <p 
            className="cta-subtext"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '19px',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.85)',
              lineHeight: '1.7',
              maxWidth: '640px',
              margin: '0 auto',
            }}
          >
            Let's create a stunning website that converts visitors into customers.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <SafeButton
              to="/contact"
              className="cta-button-primary"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '18px',
                fontWeight: 600,
                color: '#FFFFFF',
                backgroundColor: '#FF0000',
                padding: '18px 44px',
                borderRadius: '50px',
                border: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 24px rgba(255, 0, 0, 0.35)',
                transition: 'all 0.3s ease',
              }}
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </SafeButton>
          </div>

          {/* Trust Badge */}
          <div 
            className="trust-badge pt-6"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              color: 'rgba(255, 255, 255, 0.6)',
              letterSpacing: '0.05em',
            }}
          >
            ✓ Free consultation · ✓ Quick turnaround · ✓ Satisfaction guaranteed
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* TABLET/MOBILE VARIANTS (<1024px)          */}
      {/* ========================================== */}
      <div className="lg:hidden max-w-[1440px] mx-auto md:px-8 px-5">
        <div className="text-center md:space-y-8 space-y-6">
          {/* Heading - Responsive */}
          <h2 
            className="cta-heading-responsive md:text-[44px] text-[30px]"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              lineHeight: '1.2',
              maxWidth: '800px',
              margin: '0 auto',
            }}
          >
            Ready to design your next website?
          </h2>

          {/* Subtext - Responsive */}
          <p 
            className="cta-subtext-responsive md:text-[17px] text-[15px]"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.85)',
              lineHeight: '1.7',
              maxWidth: '560px',
              margin: '0 auto',
            }}
          >
            Let's create a stunning website that converts visitors into customers.
          </p>

          {/* CTA Button - Responsive */}
          <div className="md:pt-4 pt-2">
            <SafeButton
              to="/contact"
              className="cta-button-primary-responsive w-full md:w-auto md:inline-flex"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '17px',
                fontWeight: 600,
                color: '#FFFFFF',
                backgroundColor: '#FF0000',
                padding: '16px 40px',
                borderRadius: '50px',
                border: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                boxShadow: '0 8px 24px rgba(255, 0, 0, 0.35)',
                transition: 'all 0.3s ease',
              }}
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </SafeButton>
          </div>

          {/* Trust Badge - Responsive: Tablet: single line, Mobile: stacked */}
          <div className="md:pt-6 pt-4">
            {/* Tablet version - single line */}
            <div 
              className="trust-badge-tablet hidden md:block"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                fontWeight: 500,
                color: 'rgba(255, 255, 255, 0.6)',
                letterSpacing: '0.05em',
              }}
            >
              ✓ Free consultation · ✓ Quick turnaround · ✓ Satisfaction guaranteed
            </div>
            
            {/* Mobile version - stacked */}
            <div className="trust-badge-mobile md:hidden flex flex-col items-center gap-2.5">
              <div 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: 'rgba(255, 255, 255, 0.6)',
                  letterSpacing: '0.05em',
                }}
              >
                ✓ Free consultation
              </div>
              <div 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: 'rgba(255, 255, 255, 0.6)',
                  letterSpacing: '0.05em',
                }}
              >
                ✓ Quick turnaround
              </div>
              <div 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: 'rgba(255, 255, 255, 0.6)',
                  letterSpacing: '0.05em',
                }}
              >
                ✓ Satisfaction guaranteed
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .cta-heading,
        .cta-heading-responsive {
          animation: ctaHeadingFade 0.8s ease forwards;
        }

        .cta-subtext,
        .cta-subtext-responsive {
          animation: ctaSubtextFade 0.8s ease forwards 0.15s;
          opacity: 0;
        }

        .cta-button-primary,
        .cta-button-primary-responsive {
          animation: ctaButtonFade 0.8s ease forwards 0.3s;
          opacity: 0;
        }

        .trust-badge,
        .trust-badge-tablet,
        .trust-badge-mobile {
          animation: ctaBadgeFade 0.8s ease forwards 0.45s;
          opacity: 0;
        }

        @keyframes ctaHeadingFade {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes ctaSubtextFade {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes ctaButtonFade {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes ctaBadgeFade {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .cta-button-primary:hover,
        .cta-button-primary-responsive:hover {
          transform: scale(1.05);
          box-shadow: 0 12px 32px rgba(255, 0, 0, 0.45);
        }
      `}</style>
    </section>
  );
}
