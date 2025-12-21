export function ContactCTA() {
  return (
    <section 
      className="contact-cta-section w-full"
      style={{
        background: 'linear-gradient(135deg, #151561 0%, #2A2A9E 100%)',
        paddingTop: '120px',
        paddingBottom: '120px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Pattern */}
      <div 
        className="cta-pattern absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 Q 25 25, 50 50 T 100 50' stroke='white' stroke-opacity='0.04' fill='none' stroke-width='2'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 100px',
          opacity: 0.3,
        }}
      />

      <div className="contact-cta-container max-w-[1440px] mx-auto px-12 relative z-10">
        {/* Centered Content */}
        <div className="text-center max-w-[800px] mx-auto">
          {/* Heading */}
          <h2 
            className="cta-heading-animate"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '56px',
              fontWeight: 700,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              lineHeight: '1.2',
              marginBottom: '28px',
            }}
          >
            Ready to Start Your Project?
          </h2>

          {/* Subtext */}
          <p 
            className="cta-subtext-animate"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '20px',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.85)',
              lineHeight: '1.7',
              marginBottom: '44px',
              maxWidth: '640px',
              margin: '0 auto 44px',
            }}
          >
            Let's discuss how we can help transform your business with innovative digital solutions.
          </p>

          {/* CTA Button */}
          <button 
            className="cta-button-glow"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              padding: '18px 48px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '18px',
              fontWeight: 600,
              color: '#151561',
              background: '#FFFFFF',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: '0 8px 24px rgba(255, 255, 255, 0.2)',
            }}
          >
            Get Started
          </button>
        </div>
      </div>

      {/* ANIMATIONS & STYLES */}
      <style>{`
        @keyframes ctaFadeDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes ctaFadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .cta-heading-animate {
          animation: ctaFadeDown 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          opacity: 0;
        }

        .cta-subtext-animate {
          animation: ctaFadeUp 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards 0.2s;
          opacity: 0;
        }

        .cta-button-glow {
          animation: ctaFadeUp 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards 0.4s;
          opacity: 0;
        }

        .cta-button-glow:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 48px rgba(255, 255, 255, 0.35);
          background: #FF0000;
          color: #FFFFFF;
        }

        .cta-button-glow:active {
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
