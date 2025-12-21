import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PremiumFinalCTA() {
  return (
    <section 
      className="premium-final-cta-section py-32" 
      style={{ 
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F8F9FF 100%)',
      }}
    >
      <div className="final-cta-container max-w-[1440px] mx-auto px-12">
        {/* Centered Content */}
        <div className="text-center space-y-10 cta-content-animate">
          {/* Heading */}
          <h2 
            className="final-cta-heading"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '52px',
              fontWeight: 700,
              color: '#151561',
              letterSpacing: '-0.02em',
              lineHeight: '1.2',
            }}
          >
            We're Ready When You Are.
          </h2>

          {/* Subtext */}
          <p 
            className="final-cta-paragraph"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '20px',
              fontWeight: 400,
              color: '#505050',
              maxWidth: '680px',
              margin: '0 auto',
              lineHeight: '1.6',
            }}
          >
            Let's turn your vision into reality. Reach out today and discover how Optichore can accelerate your growth.
          </p>

          {/* CTA Button */}
          <div className="final-cta-button-wrapper pt-4">
            <Link to="/" className="premium-cta-button">
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        @keyframes ctaFadeScale {
          from {
            opacity: 0;
            transform: scale(0.96);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .cta-content-animate {
          animation: ctaFadeScale 1s ease forwards;
        }

        .premium-cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 20px 52px;
          font-family: 'Inter', sans-serif;
          font-size: 18px;
          font-weight: 600;
          color: #FFFFFF;
          background: #FF0000;
          border: none;
          border-radius: 50px;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 6px 24px rgba(255, 0, 0, 0.35);
        }

        .premium-cta-button:hover {
          background: #E60000;
          transform: translateY(-6px);
          box-shadow: 0 16px 48px rgba(255, 0, 0, 0.5);
        }

        .premium-cta-button:active {
          transform: translateY(-3px);
        }

        .premium-cta-button svg {
          transition: transform 0.3s ease;
        }

        .premium-cta-button:hover svg {
          transform: translateX(4px);
        }

        /* ===== TABLET BREAKPOINT (768px - 1024px) ===== */
        @media (min-width: 768px) and (max-width: 1024px) {
          .premium-final-cta-section {
            padding-top: 6rem;
            padding-bottom: 6rem;
          }

          .final-cta-container {
            padding-left: 2rem;
            padding-right: 2rem;
          }

          .final-cta-heading {
            font-size: 40px !important;
          }

          .final-cta-paragraph {
            font-size: 18px !important;
            max-width: 80% !important;
          }

          .premium-cta-button {
            padding: 18px 44px;
            font-size: 17px;
          }
        }

        /* ===== MOBILE BREAKPOINT (≤414px) ===== */
        @media (max-width: 414px) {
          .premium-final-cta-section {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }

          .final-cta-container {
            padding-left: 1.25rem;
            padding-right: 1.25rem;
          }

          .cta-content-animate {
            gap: 2rem !important;
          }

          .final-cta-heading {
            font-size: 28px !important;
            line-height: 1.25 !important;
          }

          .final-cta-paragraph {
            font-size: 16px !important;
            max-width: 90% !important;
            line-height: 1.65 !important;
          }

          .final-cta-button-wrapper {
            padding-top: 0.5rem !important;
          }

          .premium-cta-button {
            width: 100%;
            min-height: 52px;
            padding: 16px 32px;
            font-size: 16px;
            justify-content: center;
          }

          .premium-cta-button:hover {
            transform: none;
          }

          .premium-cta-button:active {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}