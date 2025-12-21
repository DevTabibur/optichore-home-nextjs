import { ImageWithFallback } from '../figma/ImageWithFallback';

export function PremiumContactHero() {
  return (
    <section className="premium-contact-hero-section relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F8F9FF 100%)' }}>
      {/* Abstract Blurred Shapes */}
      <div
        className="abstract-shapes absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 20% 30%, rgba(21, 21, 97, 0.04) 0%, transparent 60%),
                       radial-gradient(circle at 80% 70%, rgba(255, 0, 0, 0.04) 0%, transparent 60%)`,
          filter: 'blur(80px)',
        }}
      />

      <div className="contact-hero-container max-w-[1440px] mx-auto px-12 py-32 relative z-10">
        <div className="contact-hero-grid grid grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="hero-content-left space-y-8">
            {/* Heading */}
            <h1
              className="hero-heading-animate contact-hero-heading"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '56px',
                fontWeight: 700,
                color: '#151561',
                letterSpacing: '-0.02em',
                lineHeight: '1.15',
              }}
            >
              Let&apos;s Start Something Extraordinary
            </h1>

            {/* Subheading */}
            <p
              className="hero-subheading-animate contact-hero-paragraph"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '20px',
                fontWeight: 400,
                color: '#505050',
                lineHeight: '1.7',
                maxWidth: '560px',
              }}
            >
              Whether you&apos;re exploring a new project, partnership, or consultation — our team is ready to help you move forward.
            </p>
          </div>

          {/* Right Illustration */}
          <div className="hero-illustration-right flex items-center justify-center">
            <div
              className="illustration-placeholder-animate contact-hero-image"
              style={{
                width: '100%',
                height: '420px',
                borderRadius: '32px',
                border: '1px solid rgba(0, 0, 0, 0.04)',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
              }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1622258418550-46a51f29f084?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwdGVhbSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjM2NjQxOTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Digital Marketing Team Workspace"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeSlideRight {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .hero-heading-animate {
          animation: fadeSlideUp 1s ease forwards;
        }

        .hero-subheading-animate {
          animation: fadeSlideRight 1s ease forwards 0.2s;
          opacity: 0;
        }

        .illustration-placeholder-animate {
          animation: fadeScale 1.2s ease forwards 0.4s;
          opacity: 0;
        }

        /* ===== TABLET BREAKPOINT (768px - 1024px) ===== */
        @media (min-width: 768px) and (max-width: 1024px) {
          .contact-hero-container {
            padding-left: 2rem;
            padding-right: 2rem;
            padding-top: 6rem;
            padding-bottom: 6rem;
          }

          .contact-hero-grid {
            gap: 3rem;
          }

          .contact-hero-heading {
            font-size: 42px !important;
          }

          .contact-hero-paragraph {
            font-size: 18px !important;
            max-width: 100% !important;
          }

          .contact-hero-image {
            height: 360px !important;
          }
        }

        /* ===== MOBILE BREAKPOINT (≤767px) ===== */
        @media (max-width: 767px) {
          .contact-hero-container {
            padding-left: 1.25rem;
            padding-right: 1.25rem;
            padding-top: 3rem;
            padding-bottom: 3rem;
          }

          .contact-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }

          .hero-content-left {
            order: 1;
          }

          .hero-illustration-right {
            order: 2;
          }

          .contact-hero-heading {
            font-size: 32px !important;
            text-align: center;
            max-width: 90%;
            margin-left: auto;
            margin-right: auto;
          }

          .contact-hero-paragraph {
            font-size: 16px !important;
            text-align: center;
            max-width: 90% !important;
            margin-left: auto;
            margin-right: auto;
            line-height: 1.7;
          }

          .contact-hero-image {
            width: 100% !important;
            height: 280px !important;
            border-radius: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}