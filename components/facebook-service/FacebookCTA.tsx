import { Calendar, ArrowRight } from 'lucide-react';
import { SafeLink } from '../SafeLink';

export function FacebookCTA() {
  return (
    <section 
      className="facebook-cta-section w-full lg:py-32 md:py-24 py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(255, 0, 0, 0.08) 0%, rgba(21, 21, 97, 0.06) 100%)',
      }}
    >
      {/* Background Elements */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 30% 50%, rgba(255, 0, 0, 0.1) 0%, transparent 50%),
                       radial-gradient(circle at 70% 50%, rgba(21, 21, 97, 0.08) 0%, transparent 50%)`,
          opacity: 0.6,
        }}
      />

      {/* ========================================== */}
      {/* DESKTOP VARIANT (≥1024px) — LOCKED        */}
      {/* ========================================== */}
      <div className="hidden lg:block max-w-[1440px] mx-auto px-12 relative z-10">
        <div className="text-center max-w-[800px] mx-auto">
          {/* Heading */}
          <h2 
            className="fb-cta-heading"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '52px',
              fontWeight: 700,
              color: '#151561',
              letterSpacing: '-0.02em',
              lineHeight: '1.15',
              marginBottom: '20px',
            }}
          >
            Ready to Launch Your High-Performance Facebook Campaign?
          </h2>

          {/* Subtext */}
          <p 
            className="fb-cta-subtext"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '20px',
              fontWeight: 400,
              color: '#505050',
              lineHeight: '1.7',
              marginBottom: '48px',
            }}
          >
            Our team is ready to help you scale with Meta Ads.
          </p>

          {/* Buttons */}
          <div className="fb-cta-buttons flex items-center justify-center gap-4">
            <SafeLink to="/contact">
              <button
                className="fb-cta-btn-primary"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '17px',
                  fontWeight: 600,
                  backgroundColor: '#FF0000',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '50px',
                  padding: '20px 44px',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 8px 24px rgba(255, 0, 0, 0.3)',
                }}
              >
                <Calendar className="w-5 h-5" />
                Book a Strategy Call
              </button>
            </SafeLink>

            <SafeLink to="/contact">
              <button
                className="fb-cta-btn-secondary"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '17px',
                  fontWeight: 600,
                  backgroundColor: '#151561',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '50px',
                  padding: '20px 44px',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 8px 24px rgba(21, 21, 97, 0.25)',
                }}
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
            </SafeLink>
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* TABLET/MOBILE VARIANTS (<1024px)          */}
      {/* ========================================== */}
      <div className="lg:hidden max-w-[1440px] mx-auto md:px-8 px-6 relative z-10">
        <div className="text-center md:max-w-[700px] max-w-full mx-auto">
          {/* Heading - Responsive */}
          <h2 
            className="fb-cta-heading-responsive md:text-[44px] text-[32px] md:mb-5 mb-4"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              color: '#151561',
              letterSpacing: '-0.02em',
              lineHeight: '1.15',
            }}
          >
            Ready to Launch Your High-Performance Facebook Campaign?
          </h2>

          {/* Subtext - Responsive */}
          <p 
            className="fb-cta-subtext-responsive md:text-[19px] text-[17px] md:mb-12 mb-10"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              color: '#505050',
              lineHeight: '1.7',
            }}
          >
            Our team is ready to help you scale with Meta Ads.
          </p>

          {/* Buttons - Tablet: Horizontal, Mobile: Vertical */}
          <div className="fb-cta-buttons-responsive md:flex md:items-center md:justify-center md:gap-4 md:flex-row flex flex-col gap-4">
            <SafeLink to="/contact" className="md:inline-block block w-full md:w-auto">
              <button
                className="fb-cta-btn-primary-responsive w-full md:w-auto"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '17px',
                  fontWeight: 600,
                  backgroundColor: '#FF0000',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '50px',
                  padding: '20px 44px',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 8px 24px rgba(255, 0, 0, 0.3)',
                }}
              >
                <Calendar className="w-5 h-5" />
                Book a Strategy Call
              </button>
            </SafeLink>

            <SafeLink to="/contact" className="md:inline-block block w-full md:w-auto">
              <button
                className="fb-cta-btn-secondary-responsive w-full md:w-auto"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '17px',
                  fontWeight: 600,
                  backgroundColor: '#151561',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '50px',
                  padding: '20px 44px',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 8px 24px rgba(21, 21, 97, 0.25)',
                }}
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
            </SafeLink>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fbCTAFadeIn {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fb-cta-heading,
        .fb-cta-heading-responsive {
          animation: fbCTAFadeIn 0.9s ease forwards;
        }

        .fb-cta-subtext,
        .fb-cta-subtext-responsive {
          animation: fbCTAFadeIn 0.9s ease forwards 0.15s;
          opacity: 0;
        }

        .fb-cta-buttons,
        .fb-cta-buttons-responsive {
          animation: fbCTAFadeIn 0.9s ease forwards 0.3s;
          opacity: 0;
        }

        .fb-cta-btn-primary:hover,
        .fb-cta-btn-primary-responsive:hover {
          background-color: #E60000;
          transform: translateY(-4px);
          box-shadow: 0 12px 36px rgba(255, 0, 0, 0.4);
        }

        .fb-cta-btn-secondary:hover,
        .fb-cta-btn-secondary-responsive:hover {
          background-color: #0F0F4D;
          transform: translateY(-4px);
          box-shadow: 0 12px 36px rgba(21, 21, 97, 0.35);
        }
      `}</style>
    </section>
  );
}
