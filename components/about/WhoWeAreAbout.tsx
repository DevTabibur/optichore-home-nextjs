import { Check } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function WhoWeAreAbout() {
  const highlights = [
    'Meta Business Partner',
    'Verified Tech Provider',
    'UK Registered & VAT Registered',
    'Creative + Technical Expertise',
  ];

  return (
    <section className="who-we-are-about w-full lg:py-40 md:py-32 py-24" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="who-container max-w-[1440px] mx-auto lg:px-12 md:px-8 px-6">
        {/* DESKTOP & TABLET: Two-Column Layout (≥768px) */}
        <div className="hidden md:grid grid-cols-2 lg:gap-24 md:gap-12 items-center">
          {/* LEFT — Image */}
          <div className="who-left-image">
            <div 
              className="who-image-wrapper"
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 24px 64px rgba(0, 0, 0, 0.12)',
              }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW18ZW58MXx8fHwxNzYzNjQyMDU5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Optichore Agency"
                className="w-full h-auto object-cover"
                style={{ aspectRatio: '4/3' }}
              />
            </div>
          </div>

          {/* RIGHT — Content */}
          <div className="who-right-content lg:space-y-8 md:space-y-6">
            {/* Label */}
            <div 
              className="who-label-fade"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                fontWeight: 500,
                color: '#FF0000',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              WHO WE ARE
            </div>

            {/* Heading */}
            <h2 
              className="who-heading-slide lg:text-[48px] md:text-4xl"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                color: '#151561',
                letterSpacing: '-0.02em',
                lineHeight: '1.15',
              }}
            >
              A Full-Service Digital Agency With Global Reach
            </h2>

            {/* Paragraph */}
            <p 
              className="who-paragraph-fade"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '18px',
                fontWeight: 400,
                color: '#505050',
                lineHeight: '1.75',
              }}
            >
              Founded in 2025, Optichore is a premier digital marketing and IT agency specializing in high-performance marketing, innovative design, and cutting-edge technology solutions. As a Meta Business Partner and Verified Tech Provider, we bring unparalleled expertise to brands worldwide, combining creativity with technical precision to deliver exceptional results.
            </p>

            {/* Highlights List */}
            <div className="who-highlights space-y-4 pt-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="who-highlight-item flex items-center gap-4"
                  style={{
                    animationDelay: `${index * 90}ms`,
                  }}
                >
                  <div 
                    className="who-check-icon flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ 
                      backgroundColor: 'rgba(21, 21, 97, 0.12)',
                    }}
                  >
                    <Check 
                      className="w-4 h-4" 
                      style={{ color: '#151561', strokeWidth: 3 }}
                    />
                  </div>
                  <span 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '17px',
                      fontWeight: 500,
                      color: '#151561',
                      lineHeight: '1.6',
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MOBILE: Vertical Stack (≤767px) */}
        <div className="md:hidden flex flex-col items-center text-center space-y-8">
          {/* Label */}
          <div 
            className="who-label-fade"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              color: '#FF0000',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            WHO WE ARE
          </div>

          {/* Heading */}
          <h2 
            className="who-heading-slide text-4xl"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              color: '#151561',
              letterSpacing: '-0.02em',
              lineHeight: '1.15',
            }}
          >
            A Full-Service Digital Agency With Global Reach
          </h2>

          {/* Image */}
          <div className="who-left-image w-full">
            <div 
              className="who-image-wrapper"
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 24px 64px rgba(0, 0, 0, 0.12)',
              }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW18ZW58MXx8fHwxNzYzNjQyMDU5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Optichore Agency"
                className="w-full h-auto object-cover"
                style={{ aspectRatio: '4/3' }}
              />
            </div>
          </div>

          {/* Paragraph */}
          <p 
            className="who-paragraph-fade"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '18px',
              fontWeight: 400,
              color: '#505050',
              lineHeight: '1.75',
            }}
          >
            Founded in 2025, Optichore is a premier digital marketing and IT agency specializing in high-performance marketing, innovative design, and cutting-edge technology solutions. As a Meta Business Partner and Verified Tech Provider, we bring unparalleled expertise to brands worldwide, combining creativity with technical precision to deliver exceptional results.
          </p>

          {/* Highlights List */}
          <div className="who-highlights space-y-4 pt-4 max-w-md">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="who-highlight-item flex items-center gap-4 text-left"
                style={{
                  animationDelay: `${index * 90}ms`,
                }}
              >
                <div 
                  className="who-check-icon flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ 
                    backgroundColor: 'rgba(21, 21, 97, 0.12)',
                  }}
                >
                  <Check 
                    className="w-4 h-4" 
                    style={{ color: '#151561', strokeWidth: 3 }}
                  />
                </div>
                <span 
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '17px',
                    fontWeight: 500,
                    color: '#151561',
                    lineHeight: '1.6',
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* STYLES */}
      <style>{`
        /* Label Fade */
        @keyframes labelFade {
          from {
            opacity: 0;
            transform: translateY(-15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Heading Slide */
        @keyframes headingSlide {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Paragraph Fade */
        @keyframes paragraphFade {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Highlight Slide Up */
        @keyframes highlightSlideUp {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .who-label-fade {
          animation: labelFade 0.8s ease forwards;
        }

        .who-heading-slide {
          animation: headingSlide 0.9s ease forwards 0.15s;
          opacity: 0;
        }

        .who-paragraph-fade {
          animation: paragraphFade 0.9s ease forwards 0.35s;
          opacity: 0;
        }

        .who-highlight-item {
          opacity: 0;
          animation: highlightSlideUp 0.7s ease forwards;
        }

        .who-check-icon {
          transition: all 0.3s ease;
        }

        .who-highlight-item:hover .who-check-icon {
          background-color: rgba(21, 21, 97, 0.2);
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
}