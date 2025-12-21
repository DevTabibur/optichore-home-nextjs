import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function FacebookMarketingBlock() {
  const deliverables = [
    'Campaign creation',
    'Ads optimization',
    'Audience targeting',
    'Pixel & event setup',
    'Creative strategy',
    'Reporting & insights',
  ];

  return (
    <section 
      className="facebook-marketing-block w-full lg:py-32 md:py-24 py-20"
      style={{
        background: 'linear-gradient(180deg, #F8FBFF 0%, #FFFFFF 100%)',
      }}
    >
      {/* ========================================== */}
      {/* DESKTOP VARIANT (≥1024px) — LOCKED        */}
      {/* ========================================== */}
      <div className="hidden lg:block max-w-[1440px] mx-auto px-12">
        {/* Left-Text, Right-Image Layout */}
        <div className="grid grid-cols-2 gap-20 items-center">
          {/* LEFT — Text Content */}
          <div className="fb-marketing-text-content" style={{ animationDelay: '0ms' }}>
            {/* Title */}
            <h2
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '48px',
                fontWeight: 700,
                color: '#151561',
                letterSpacing: '-0.02em',
                lineHeight: '1.2',
                marginBottom: '24px',
              }}
            >
              Facebook Marketing & Ads Management
            </h2>

            {/* Paragraph */}
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '18px',
                fontWeight: 400,
                color: '#505050',
                lineHeight: '1.75',
                marginBottom: '40px',
              }}
            >
              We specialize in high-performance Meta Ads — from audience strategy and creative optimization to campaign scaling and deep analytics.
            </p>

            {/* Deliverables List */}
            <div className="deliverables-list" style={{ marginBottom: '48px' }}>
              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                {deliverables.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 
                      className="w-5 h-5 flex-shrink-0" 
                      style={{ color: '#FF0000' }}
                    />
                    <span
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '16px',
                        fontWeight: 500,
                        color: '#151561',
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-5">
              <Link to="/contact">
                <button
                  className="fb-marketing-cta-primary"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    fontWeight: 600,
                    backgroundColor: '#FF0000',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '50px',
                    padding: '16px 36px',
                    cursor: 'pointer',
                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: '0 6px 20px rgba(255, 0, 0, 0.25)',
                  }}
                >
                  Contact Us
                </button>
              </Link>

              <button
                className="fb-marketing-cta-secondary"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  fontWeight: 600,
                  backgroundColor: 'transparent',
                  color: '#151561',
                  border: '2px solid #151561',
                  borderRadius: '50px',
                  padding: '14px 36px',
                  cursor: 'pointer',
                  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* RIGHT — Image */}
          <div className="fb-marketing-image-content" style={{ animationDelay: '200ms' }}>
            <div 
              className="image-wrapper floating-animation"
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.12)',
              }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzYzNTg1NDMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Facebook Marketing Dashboard"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* TABLET/MOBILE VARIANTS (<1024px)          */}
      {/* ========================================== */}
      <div className="lg:hidden max-w-[1440px] mx-auto md:px-8 px-6">
        {/* Single Column Stack on Mobile, Two Column on Tablet */}
        <div className="md:grid md:grid-cols-2 md:gap-16 md:items-center">
          {/* Text Content */}
          <div className="fb-marketing-text-content-responsive">
            {/* Title - Responsive */}
            <h2
              className="md:text-[42px] text-[32px] md:mb-6 mb-5"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                color: '#151561',
                letterSpacing: '-0.02em',
                lineHeight: '1.2',
              }}
            >
              Facebook Marketing & Ads Management
            </h2>

            {/* Paragraph - Responsive */}
            <p
              className="md:text-[18px] text-[17px] md:mb-10 mb-8"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                color: '#505050',
                lineHeight: '1.75',
              }}
            >
              We specialize in high-performance Meta Ads — from audience strategy and creative optimization to campaign scaling and deep analytics.
            </p>

            {/* Deliverables List - Responsive: 2 cols tablet, 1 col mobile */}
            <div className="deliverables-list-responsive md:mb-12 mb-10">
              <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-6 md:gap-y-4 gap-y-3">
                {deliverables.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 
                      className="w-5 h-5 flex-shrink-0" 
                      style={{ color: '#FF0000' }}
                    />
                    <span
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '16px',
                        fontWeight: 500,
                        color: '#151561',
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons - Responsive: Inline on Tablet, Stacked on Mobile */}
            <div className="md:flex md:items-center md:gap-5 md:space-y-0 space-y-4 md:mb-0 mb-10">
              <Link to="/contact" className="block md:inline-block">
                <button
                  className="fb-marketing-cta-primary w-full md:w-auto"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    fontWeight: 600,
                    backgroundColor: '#FF0000',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '50px',
                    padding: '16px 36px',
                    cursor: 'pointer',
                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: '0 6px 20px rgba(255, 0, 0, 0.25)',
                  }}
                >
                  Contact Us
                </button>
              </Link>

              <button
                className="fb-marketing-cta-secondary w-full md:w-auto justify-center"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  fontWeight: 600,
                  backgroundColor: 'transparent',
                  color: '#151561',
                  border: '2px solid #151561',
                  borderRadius: '50px',
                  padding: '14px 36px',
                  cursor: 'pointer',
                  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Image - Appears last on mobile */}
          <div className="fb-marketing-image-content-responsive md:mt-0 mt-10">
            <div 
              className="image-wrapper floating-animation"
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.12)',
              }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzYzNTg1NDMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Facebook Marketing Dashboard"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes fbMarketingTextFade {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fbMarketingImageFade {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes floatingEffect {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        .fb-marketing-text-content,
        .fb-marketing-text-content-responsive {
          animation: fbMarketingTextFade 0.9s ease forwards;
          opacity: 0;
        }

        .fb-marketing-image-content,
        .fb-marketing-image-content-responsive {
          animation: fbMarketingImageFade 0.9s ease forwards;
          opacity: 0;
        }

        .floating-animation {
          animation: floatingEffect 4s ease-in-out infinite;
        }

        .fb-marketing-cta-primary:hover {
          background-color: #E60000;
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(255, 0, 0, 0.35);
        }

        .fb-marketing-cta-secondary:hover {
          background-color: #151561;
          color: #FFFFFF;
          border-color: #151561;
        }
      `}</style>
    </section>
  );
}
