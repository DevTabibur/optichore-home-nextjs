import { ArrowRight } from 'lucide-react';

export function TeamCTA() {
  return (
    <section 
      className="team-cta-section py-32"
      style={{ 
        background: 'linear-gradient(180deg, #F8F9FF 0%, #FFFFFF 100%)',
      }}
    >
      <div className="max-w-[1440px] mx-auto px-12">
        <div className="text-center">
          {/* Heading */}
          <h2 
            className="cta-heading-animate"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '52px',
              fontWeight: 700,
              color: '#151561',
              letterSpacing: '-0.02em',
              lineHeight: '1.15',
              marginBottom: '48px',
            }}
          >
            Want to work with our team?
          </h2>

          {/* CTA Button */}
          <a
            href="/contact"
            className="cta-button-animate cta-button"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '18px',
              fontWeight: 600,
              color: '#FFFFFF',
              background: '#FF0000',
              padding: '18px 48px',
              borderRadius: '50px',
              textDecoration: 'none',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(255, 0, 0, 0.2)',
            }}
          >
            Let's Build Something Great
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Styles & Animations */}
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

        @keyframes buttonPulse {
          0%, 100% {
            box-shadow: 0 4px 16px rgba(255, 0, 0, 0.2);
          }
          50% {
            box-shadow: 0 8px 32px rgba(255, 0, 0, 0.35);
          }
        }

        .cta-heading-animate {
          animation: fadeSlideUp 0.8s ease forwards;
        }

        .cta-button-animate {
          animation: fadeSlideUp 0.8s ease forwards 0.2s;
          opacity: 0;
        }

        .cta-button:hover {
          background: #E60000;
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(255, 0, 0, 0.35);
        }

        .cta-button:active {
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
