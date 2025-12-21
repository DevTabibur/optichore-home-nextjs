import { Quote, Linkedin } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
// import ceoImage from 'figma:asset/b59948c16a20b39c9dc10bb32b623e6f5f7b78aa.png';

export function TeamHero() {
  return (
    <section 
      className="team-hero-section py-32"
      style={{ 
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F8F9FF 100%)',
      }}
    >
      <div className="max-w-[1440px] mx-auto px-12">
        <div className="grid grid-cols-2 gap-24 items-center">
          {/* LEFT SIDE — HEADING & SUBTEXT */}
          <div className="hero-left-content">
            <h1 
              className="hero-heading-animate"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '56px',
                fontWeight: 700,
                color: '#151561',
                letterSpacing: '-0.02em',
                lineHeight: '1.15',
                marginBottom: '28px',
              }}
            >
              The People Behind Optichore
            </h1>

            <p 
              className="hero-subtext-animate"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '20px',
                fontWeight: 400,
                color: '#505050',
                lineHeight: '1.7',
                maxWidth: '560px',
              }}
            >
              A diverse team of innovators, strategists, designers, developers, and marketers working together to help businesses scale globally.
            </p>
          </div>

          {/* RIGHT SIDE — CEO PORTRAIT CARD */}
          <div className="hero-right-ceo-card">
            <div 
              className="ceo-card-container"
              style={{
                background: '#FFFFFF',
                borderRadius: '28px',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                boxShadow: '0 12px 48px rgba(0, 0, 0, 0.08)',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              {/* CEO Photo */}
              <div 
                style={{
                  width: '100%',
                  height: '380px',
                  overflow: 'hidden',
                }}
              >
                {/* <ImageWithFallback
                  src={ceoImage}
                  alt="Mahbub - Founder & CEO"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                /> */}
              </div>

              {/* CEO Info */}
              <div style={{ padding: '32px' }}>
                {/* Name & Title */}
                <h3 
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '28px',
                    fontWeight: 700,
                    color: '#151561',
                    marginBottom: '6px',
                  }}
                >
                  MD Mahbubur Rahman
                </h3>
                <p 
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    fontWeight: 500,
                    color: '#FF0000',
                    marginBottom: '20px',
                  }}
                >
                  Chief Executive Officer (CEO)
                </p>

                {/* Quote Block */}
                <div 
                  style={{
                    background: '#F8F9FF',
                    borderLeft: '3px solid #FF0000',
                    padding: '20px',
                    borderRadius: '12px',
                    marginBottom: '24px',
                    position: 'relative',
                  }}
                >
                  <Quote 
                    className="w-5 h-5" 
                    style={{ 
                      color: '#FF0000', 
                      opacity: 0.3,
                      marginBottom: '12px',
                    }} 
                  />
                  <p 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '15px',
                      fontWeight: 400,
                      color: '#505050',
                      lineHeight: '1.7',
                      fontStyle: 'italic',
                    }}
                  >
                    "Our mission is to empower businesses with innovative digital solutions that drive measurable growth and lasting impact."
                  </p>
                </div>

                {/* LinkedIn Link */}
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="linkedin-link"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#151561',
                    textDecoration: 'none',
                    padding: '10px 18px',
                    border: '1px solid rgba(0, 0, 0, 0.12)',
                    borderRadius: '50px',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Linkedin className="w-4 h-4" />
                  Connect on LinkedIn
                </a>
              </div>
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

        @keyframes fadeScaleIn {
          from {
            opacity: 0;
            transform: scale(0.96);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .hero-heading-animate {
          animation: fadeSlideUp 1s ease forwards;
        }

        .hero-subtext-animate {
          animation: fadeSlideUp 1s ease forwards 0.15s;
          opacity: 0;
        }

        .ceo-card-container {
          animation: fadeScaleIn 1s ease forwards 0.3s;
          opacity: 0;
        }

        .linkedin-link:hover {
          background: #151561;
          color: #FFFFFF;
          border-color: #151561;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(21, 21, 97, 0.15);
        }
      `}</style>
    </section>
  );
}