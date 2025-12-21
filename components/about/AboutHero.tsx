import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function AboutHero() {
  return (
    <section 
      className="about-hero-section w-full lg:py-40 md:py-32 py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F8F9FF 100%)',
      }}
    >
      {/* Subtle Abstract Shapes */}
      <div 
        className="abstract-shapes-hero absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 20% 30%, rgba(21, 21, 97, 0.04) 0%, transparent 50%),
                       radial-gradient(circle at 80% 70%, rgba(255, 0, 0, 0.03) 0%, transparent 50%)`,
          opacity: 0.6,
        }}
      />

      <div className="hero-container max-w-[1440px] mx-auto lg:px-12 md:px-8 px-6 relative z-10">
        {/* DESKTOP & TABLET: Two-Column Layout (≥768px) */}
        <div className="hidden md:grid grid-cols-2 lg:gap-24 md:gap-12 items-center">
          {/* LEFT — Content */}
          <div className="hero-left-content lg:space-y-10 md:space-y-8">
            {/* Heading */}
            <h1 
              className="hero-heading-slideup lg:text-[56px] md:text-5xl"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                color: '#151561',
                letterSpacing: '-0.02em',
                lineHeight: '1.15',
              }}
            >
              Empowering Businesses Through Innovation, Strategy & Technology.
            </h1>

            {/* Subtext */}
            <p 
              className="hero-subtext-fadein"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '20px',
                fontWeight: 400,
                color: '#505050',
                lineHeight: '1.65',
              }}
            >
              Optichore delivers high-performance marketing, design, and technology solutions for brands worldwide.
            </p>

            {/* CTA Buttons */}
            <div className="hero-cta-row flex items-center gap-5 pt-4">
              {/* Primary CTA */}
              <button 
                className="hero-cta-primary px-10 py-5"
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
                  boxShadow: '0 4px 16px rgba(255, 0, 0, 0.25)',
                }}
              >
                Work With Us
              </button>

              {/* Secondary CTA */}
              <button 
                className="hero-cta-secondary flex items-center gap-2 px-10 py-5"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  fontWeight: 600,
                  backgroundColor: 'transparent',
                  color: '#151561',
                  border: '1.5px solid #151561',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  transition: 'all 300ms ease',
                }}
              >
                View Our Services
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* RIGHT — Image */}
          <div className="hero-right-image">
            <div 
              className="hero-image-wrapper floating-micro-animation"
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 24px 64px rgba(0, 0, 0, 0.12)',
              }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtfGVufDF8fHx8MTc2MzYyNjYzNXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Optichore Team"
                className="w-full h-auto object-cover"
                style={{ aspectRatio: '4/3' }}
              />
            </div>
          </div>
        </div>

        {/* MOBILE: Vertical Stack (≤767px) */}
        <div className="md:hidden flex flex-col items-center text-center space-y-8">
          {/* Heading */}
          <h1 
            className="hero-heading-slideup text-4xl"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              color: '#151561',
              letterSpacing: '-0.02em',
              lineHeight: '1.15',
            }}
          >
            Empowering Businesses Through Innovation, Strategy & Technology.
          </h1>

          {/* Subtext */}
          <p 
            className="hero-subtext-fadein"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '20px',
              fontWeight: 400,
              color: '#505050',
              lineHeight: '1.65',
            }}
          >
            Optichore delivers high-performance marketing, design, and technology solutions for brands worldwide.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta-row flex flex-col gap-4 w-full pt-2">
            {/* Primary CTA */}
            <button 
              className="hero-cta-primary px-10 py-5 w-full"
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
                boxShadow: '0 4px 16px rgba(255, 0, 0, 0.25)',
              }}
            >
              Work With Us
            </button>

            {/* Secondary CTA */}
            <button 
              className="hero-cta-secondary flex items-center justify-center gap-2 px-10 py-5 w-full"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px',
                fontWeight: 600,
                backgroundColor: 'transparent',
                color: '#151561',
                border: '1.5px solid #151561',
                borderRadius: '50px',
                cursor: 'pointer',
                transition: 'all 300ms ease',
              }}
            >
              View Our Services
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Image */}
          <div className="hero-right-image w-full mt-8">
            <div 
              className="hero-image-wrapper"
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 24px 64px rgba(0, 0, 0, 0.12)',
              }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtfGVufDF8fHx8MTc2MzYyNjYzNXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Optichore Team"
                className="w-full h-auto object-cover"
                style={{ aspectRatio: '4/3' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* STYLES & ANIMATIONS */}
      <style>{`
        /* Hero Heading Slide Up */
        @keyframes heroSlideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Hero Subtext Fade In */
        @keyframes heroFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Floating Micro Animation */
        @keyframes floatingMicro {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .hero-heading-slideup {
          animation: heroSlideUp 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .hero-subtext-fadein {
          animation: heroFadeIn 0.9s ease forwards 0.25s;
          opacity: 0;
        }

        .hero-cta-row {
          animation: heroFadeIn 0.9s ease forwards 0.45s;
          opacity: 0;
        }

        .floating-micro-animation {
          animation: floatingMicro 6s ease-in-out infinite;
        }

        /* Primary CTA Hover */
        .hero-cta-primary:hover {
          background-color: #E60000;
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 12px 32px rgba(255, 0, 0, 0.35);
        }

        /* Secondary CTA Hover */
        .hero-cta-secondary:hover {
          background-color: #151561;
          color: #FFFFFF;
          border-color: #151561;
        }
      `}</style>
    </section>
  );
}