export function FinalCTA() {
  return (
    <section 
      className="final-cta-section w-full lg:py-40 md:py-32 py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #151561 0%, #1a1a70 50%, #151561 100%)',
      }}
    >
      {/* Decorative Gradient Orbs */}
      <div 
        className="gradient-orb-left absolute hidden md:block"
        style={{
          top: '-10%',
          left: '-5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 0, 0, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />
      <div 
        className="gradient-orb-right absolute hidden md:block"
        style={{
          bottom: '-10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 0, 0, 0.12) 0%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
        }}
      />

      <div className="cta-container max-w-[1440px] mx-auto lg:px-12 md:px-8 px-6 relative z-10">
        <div className="text-center lg:space-y-12 md:space-y-10 space-y-8">
          {/* Heading */}
          <h2 
            className="final-cta-heading lg:text-[56px] md:text-5xl text-4xl lg:max-w-[880px] md:max-w-[720px] max-w-[560px]"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              lineHeight: '1.15',
              margin: '0 auto',
            }}
          >
            Let's Build Something Amazing Together.
          </h2>

          {/* Subtext */}
          <p 
            className="final-cta-subtext lg:text-xl md:text-lg text-base lg:max-w-[640px] md:max-w-[560px] max-w-[480px]"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: '1.65',
              margin: '0 auto',
            }}
          >
            Ready to transform your business? Let's start your journey to success.
          </p>

          {/* CTA Button */}
          <div className="lg:pt-6 md:pt-4 pt-4">
            <button 
              className="final-cta-button lg:px-14 md:px-12 px-10 lg:py-6 md:py-5 py-4 w-full max-w-[320px] md:max-w-none md:w-auto"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '18px',
                fontWeight: 600,
                backgroundColor: '#FF0000',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '50px',
                cursor: 'pointer',
                transition: 'all 350ms cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 8px 28px rgba(255, 0, 0, 0.4)',
              }}
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>

      {/* STYLES */}
      <style>{`
        /* CTA Heading Animation */
        @keyframes ctaFadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .final-cta-heading {
          animation: ctaFadeUp 0.9s ease forwards;
        }

        .final-cta-subtext {
          animation: ctaFadeUp 0.9s ease forwards 0.2s;
          opacity: 0;
        }

        /* Desktop/Tablet: Button Hover & Glow */
        @media (min-width: 768px) {
          .final-cta-button:hover {
            background-color: #E60000;
            transform: translateY(-4px) scale(1.05);
            box-shadow: 0 16px 48px rgba(255, 0, 0, 0.5);
          }

          .final-cta-button:active {
            transform: translateY(-2px) scale(1.03);
          }
        }

        /* Mobile: No Hover Effects */
        @media (max-width: 767px) {
          .final-cta-button:active {
            background-color: #E60000;
            transform: scale(0.98);
          }
        }
      `}</style>
    </section>
  );
}