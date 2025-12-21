import { ArrowRight, MessageCircle } from 'lucide-react';
import { SafeLink } from '../SafeLink';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function FacebookHero() {
  return (
    <section 
      className="facebook-hero-section w-full lg:py-32 md:py-24 py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F7FAFF 100%)',
      }}
    >
      {/* Background Shapes */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 15% 25%, rgba(255, 0, 0, 0.04) 0%, transparent 50%),
                       radial-gradient(circle at 85% 75%, rgba(21, 21, 97, 0.03) 0%, transparent 50%)`,
          opacity: 0.8,
        }}
      />

      {/* ========================================== */}
      {/* DESKTOP VARIANT (≥1024px) — LOCKED        */}
      {/* ========================================== */}
      <div className="hidden lg:block max-w-[1440px] mx-auto px-12 relative z-10">
        <div className="grid grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="facebook-hero-content">
            <h1 
              className="facebook-hero-heading"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '56px',
                fontWeight: 700,
                color: '#151561',
                letterSpacing: '-0.02em',
                lineHeight: '1.1',
                marginBottom: '24px',
              }}
            >
              Facebook Marketing & Ads Management
            </h1>

            <p 
              className="facebook-hero-subheading"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '20px',
                fontWeight: 400,
                color: '#505050',
                lineHeight: '1.7',
                marginBottom: '40px',
              }}
            >
              Performance-driven Facebook advertising with advanced targeting, creative optimization, and partner-aligned strategy.
            </p>

            {/* Buttons */}
            <div className="facebook-hero-buttons flex items-center gap-4">
              <SafeLink to="/contact">
                <button
                  className="facebook-hero-btn-primary"
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
                    boxShadow: '0 8px 24px rgba(255, 0, 0, 0.25)',
                  }}
                >
                  Start a Campaign
                  <ArrowRight className="w-5 h-5" />
                </button>
              </SafeLink>

              <SafeLink to="/contact">
                <button
                  className="facebook-hero-btn-secondary"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '17px',
                    fontWeight: 600,
                    backgroundColor: 'transparent',
                    color: '#151561',
                    border: '2px solid #151561',
                    borderRadius: '50px',
                    padding: '16px 40px',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <MessageCircle className="w-5 h-5" />
                  Contact Us
                </button>
              </SafeLink>
            </div>
          </div>

          {/* Right Visual */}
          <div className="facebook-hero-visual relative">
            {/* Main Dashboard Image */}
            <div 
              className="facebook-dashboard-mockup"
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 16px 48px rgba(0, 0, 0, 0.12)',
              }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1762330466791-8db62b3c9eee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNlYm9vayUyMGFkcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjM2NzYyMDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Facebook Ads Dashboard"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              />
            </div>

            {/* Floating Card */}
            <div 
              className="floating-metrics-card absolute"
              style={{
                bottom: '40px',
                left: '-40px',
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                padding: '24px',
                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                minWidth: '240px',
              }}
            >
              <div style={{ marginBottom: '12px' }}>
                <div 
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#999',
                    marginBottom: '8px',
                  }}
                >
                  Campaign Performance
                </div>
                <div 
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '32px',
                    fontWeight: 700,
                    color: '#151561',
                  }}
                >
                  +267%
                </div>
              </div>
              <div 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  fontWeight: 400,
                  color: '#10B981',
                }}
              >
                ↑ ROI Increase
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* TABLET/MOBILE VARIANTS (<1024px)          */}
      {/* ========================================== */}
      <div className="lg:hidden max-w-[1440px] mx-auto md:px-8 px-6 relative z-10">
        {/* Tablet: Two columns, Mobile: Single column */}
        <div className="md:grid md:grid-cols-2 md:gap-12 md:items-center">
          {/* Left Content */}
          <div className="facebook-hero-content-responsive">
            <h1 
              className="facebook-hero-heading-responsive md:text-[48px] text-[36px] md:mb-6 mb-5"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                color: '#151561',
                letterSpacing: '-0.02em',
                lineHeight: '1.1',
              }}
            >
              Facebook Marketing & Ads Management
            </h1>

            <p 
              className="facebook-hero-subheading-responsive md:text-[19px] text-[17px] md:mb-10 mb-8"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                color: '#505050',
                lineHeight: '1.7',
              }}
            >
              Performance-driven Facebook advertising with advanced targeting, creative optimization, and partner-aligned strategy.
            </p>

            {/* Buttons - Inline on tablet, stacked on mobile */}
            <div className="facebook-hero-buttons-responsive md:flex md:items-center md:gap-4 md:mb-0 mb-12 md:space-y-0 space-y-4">
              <SafeLink to="/contact" className="block md:inline-block">
                <button
                  className="facebook-hero-btn-primary w-full md:w-auto justify-center"
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
                    boxShadow: '0 8px 24px rgba(255, 0, 0, 0.25)',
                  }}
                >
                  Start a Campaign
                  <ArrowRight className="w-5 h-5" />
                </button>
              </SafeLink>

              <SafeLink to="/contact" className="block md:inline-block">
                <button
                  className="facebook-hero-btn-secondary w-full md:w-auto justify-center"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '17px',
                    fontWeight: 600,
                    backgroundColor: 'transparent',
                    color: '#151561',
                    border: '2px solid #151561',
                    borderRadius: '50px',
                    padding: '16px 40px',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <MessageCircle className="w-5 h-5" />
                  Contact Us
                </button>
              </SafeLink>
            </div>
          </div>

          {/* Right Visual */}
          <div className="facebook-hero-visual-responsive relative">
            {/* Main Dashboard Image */}
            <div 
              className="facebook-dashboard-mockup"
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 16px 48px rgba(0, 0, 0, 0.12)',
              }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1762330466791-8db62b3c9eee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNlYm9vayUyMGFkcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjM2NzYyMDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Facebook Ads Dashboard"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              />
            </div>

            {/* Floating Card - Stays attached to image */}
            <div 
              className="floating-metrics-card-responsive absolute md:bottom-8 md:left-[-32px] bottom-6 left-4"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                padding: '24px',
                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                minWidth: '240px',
              }}
            >
              <div style={{ marginBottom: '12px' }}>
                <div 
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#999',
                    marginBottom: '8px',
                  }}
                >
                  Campaign Performance
                </div>
                <div 
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '32px',
                    fontWeight: 700,
                    color: '#151561',
                  }}
                >
                  +267%
                </div>
              </div>
              <div 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  fontWeight: 400,
                  color: '#10B981',
                }}
              >
                ↑ ROI Increase
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fbHeroContentFade {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fbHeroVisualFade {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fbFloatingCard {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        .facebook-hero-content,
        .facebook-hero-content-responsive {
          animation: fbHeroContentFade 0.9s ease forwards;
        }

        .facebook-hero-visual,
        .facebook-hero-visual-responsive {
          animation: fbHeroVisualFade 0.9s ease forwards 0.2s;
          opacity: 0;
        }

        .floating-metrics-card,
        .floating-metrics-card-responsive {
          animation: fbFloatingCard 3s ease-in-out infinite;
        }

        .facebook-hero-btn-primary:hover {
          background-color: #E60000;
          transform: translateY(-4px);
          box-shadow: 0 12px 36px rgba(255, 0, 0, 0.35);
        }

        .facebook-hero-btn-secondary:hover {
          background-color: #151561;
          color: #FFFFFF;
          border-color: #151561;
        }
      `}</style>
    </section>
  );
}
