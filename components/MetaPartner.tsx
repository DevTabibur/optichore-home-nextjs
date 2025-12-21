import { Check, Shield } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function MetaPartner() {
  const checklist = [
    "Priority access to Meta's advanced tools",
    'Verified technology reliability & security',
    'Superior ad performance & optimization',
    'AI-driven insights & analytics',
    'Faster partner-level support resolution',
    'Access to beta features ahead of public release',
  ];

  return (
    <section 
      className="dual-certification-section w-full lg:py-40 md:py-28 py-20"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F9FAFF 100%)',
      }}
    >
      {/* RESPONSIVE CONTAINER - Changes padding per breakpoint */}
      <div className="certification-container max-w-[1440px] mx-auto lg:px-12 md:px-8 px-6">
        
        {/* RESPONSIVE GRID - 2 cols on desktop, 1 col on tablet/mobile */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center flex flex-col gap-12">
          
          {/* LEFT COLUMN — CONTENT */}
          <div className="certification-text-content space-y-8">
            {/* Label */}
            <div 
              className="certification-label-fadedown"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                fontWeight: 500,
                color: '#FF0000',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              CERTIFIED & VERIFIED
            </div>

            {/* Main Heading - Responsive font size */}
            <h2 
              className="certification-heading-slideleft leading-tight lg:text-[48px] md:text-[40px] text-[34px]"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                color: '#151561',
                letterSpacing: '-0.02em',
                lineHeight: '1.15',
              }}
            >
              We Are a Meta Business Partner & a Verified Tech Provider
            </h2>

            {/* Paragraph - Responsive font size */}
            <p 
              className="certification-paragraph-fadein lg:text-[18px] md:text-[17px] text-[16px]"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                color: '#505050',
                lineHeight: '1.75',
              }}
            >
              As an officially recognized Meta Business Partner and a Verified Technology Provider, Optichore gains exclusive access to high-level tools, platform insights, beta capabilities, and advanced performance resources. This dual accreditation ensures your brand benefits from the highest standards in marketing performance, technology reliability, and strategic execution.
            </p>

            {/* Feature Checklist */}
            <div className="certification-checklist space-y-4 pt-6">
              {checklist.map((item, index) => (
                <div
                  key={index}
                  className="checklist-item-certification flex items-start gap-4"
                  style={{
                    animationDelay: `${index * 90}ms`,
                  }}
                >
                  <div 
                    className="checklist-icon-certification flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
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
                    className="lg:text-[17px] md:text-[16px] text-[15px]"
                    style={{
                      fontFamily: 'Inter, sans-serif',
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

          {/* RIGHT COLUMN — PREMIUM DUAL BADGE CARDS - Responsive */}
          <div className="dual-badge-column flex flex-col gap-6">
            {/* Badge Card 1 — Meta Business Partner */}
            <div 
              className="badge-card-meta relative lg:p-12 md:p-10 p-8 rounded-[28px] overflow-hidden badge-float-animation"
              style={{
                background: 'linear-gradient(135deg, #FFFFFF 0%, #FFF5F8 50%, #F5F5FF 100%)',
                boxShadow: '0 16px 56px rgba(0, 0, 0, 0.09)',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                animationDelay: '0s',
              }}
            >
              {/* Decorative Accent Border Top */}
              <div 
                className="accent-border-top absolute top-0 left-0 right-0 h-1"
                style={{
                  background: 'linear-gradient(90deg, #FF0000 0%, #151561 100%)',
                  opacity: 0.6,
                }}
              />

              {/* Meta Logo & Content - Responsive layout */}
              <div className="flex items-center lg:gap-8 md:gap-6 gap-5">
                {/* Logo Container - Responsive size */}
                <div 
                  className="meta-logo-wrapper flex-shrink-0 lg:w-[120px] lg:h-[120px] md:w-[100px] md:h-[100px] w-[80px] h-[80px]"
                  style={{
                    borderRadius: '20px',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#FFFFFF',
                    padding: '16px',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
                  }}
                >
                  <ImageWithFallback
                    src="https://images.seeklogo.com/logo-png/46/1/meta-business-partner-logo-png_seeklogo-466474.png"
                    alt="Meta Business Partner"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Text Content */}
                <div className="space-y-2">
                  <h3 
                    className="lg:text-[22px] md:text-[20px] text-[18px]"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 700,
                      color: '#151561',
                      letterSpacing: '-0.01em',
                      lineHeight: '1.3',
                    }}
                  >
                    Meta Business Partner
                  </h3>
                  <p 
                    className="lg:text-[15px] md:text-[14px] text-[13px]"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 400,
                      color: '#505050',
                    }}
                  >
                    Official Meta Certification
                  </p>
                </div>
              </div>

              {/* Decorative Corner Accent */}
              <div 
                className="corner-glow-meta absolute animate-pulse-glow-subtle"
                style={{
                  bottom: '0',
                  right: '0',
                  width: '100px',
                  height: '100px',
                  background: 'radial-gradient(circle at bottom right, rgba(255, 0, 0, 0.08) 0%, transparent 60%)',
                  borderBottomRightRadius: '28px',
                }}
              />
            </div>

            {/* Badge Card 2 — Verified Tech Provider */}
            <div 
              className="badge-card-tech relative lg:p-12 md:p-10 p-8 rounded-[28px] overflow-hidden badge-float-animation"
              style={{
                background: 'linear-gradient(135deg, #FFFFFF 0%, #F2F7FF 100%)',
                boxShadow: '0 16px 56px rgba(0, 0, 0, 0.09)',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                animationDelay: '0.3s',
              }}
            >
              {/* Decorative Accent Border Top */}
              <div 
                className="accent-border-top absolute top-0 left-0 right-0 h-1"
                style={{
                  background: 'linear-gradient(90deg, #151561 0%, #FF0000 100%)',
                  opacity: 0.6,
                }}
              />

              {/* Tech Icon & Content - Responsive layout */}
              <div className="flex items-center lg:gap-8 md:gap-6 gap-5">
                {/* Icon Container - Responsive size */}
                <div 
                  className="tech-icon-wrapper flex-shrink-0 lg:w-[120px] lg:h-[120px] md:w-[100px] md:h-[100px] w-[80px] h-[80px]"
                  style={{
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#FFFFFF',
                    padding: '16px',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
                  }}
                >
                  <ImageWithFallback
                    src="https://cdn.prod.website-files.com/64aea11557b522cc5e90980e/6690ff6140df7ec4088b444f_Meta_TechProv.png"
                    alt="Meta Tech Provider"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Text Content */}
                <div className="space-y-2">
                  <h3 
                    className="lg:text-[22px] md:text-[20px] text-[18px]"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 700,
                      color: '#151561',
                      letterSpacing: '-0.01em',
                      lineHeight: '1.3',
                    }}
                  >
                    Verified Tech Provider
                  </h3>
                  <p 
                    className="lg:text-[15px] md:text-[14px] text-[13px]"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 400,
                      color: '#505050',
                    }}
                  >
                    Trusted Technology Partner
                  </p>
                </div>
              </div>

              {/* Decorative Corner Accent */}
              <div 
                className="corner-glow-tech absolute animate-pulse-glow-subtle-delayed"
                style={{
                  bottom: '0',
                  right: '0',
                  width: '100px',
                  height: '100px',
                  background: 'radial-gradient(circle at bottom right, rgba(21, 21, 97, 0.08) 0%, transparent 60%)',
                  borderBottomRightRadius: '28px',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ANIMATIONS & STYLES */}
      <style>{`
        /* Label Fade Down */
        @keyframes labelFadeDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Heading Slide Left */
        @keyframes headingSlideLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Paragraph Fade In */
        @keyframes paragraphFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Checklist Slide Up */
        @keyframes checklistSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Badge Float Animation */
        @keyframes badgeFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        /* Pulse Glow Subtle */
        @keyframes pulseGlowSubtle {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.7;
          }
        }

        /* Apply Animations */
        .certification-label-fadedown {
          animation: labelFadeDown 0.8s ease forwards;
        }

        .certification-heading-slideleft {
          animation: headingSlideLeft 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards 0.15s;
          opacity: 0;
        }

        .certification-paragraph-fadein {
          animation: paragraphFadeIn 0.9s ease forwards 0.35s;
          opacity: 0;
        }

        .checklist-item-certification {
          opacity: 0;
          animation: checklistSlideUp 0.7s ease forwards;
        }

        .badge-float-animation {
          animation: badgeFloat 6s ease-in-out infinite;
        }

        .animate-pulse-glow-subtle {
          animation: pulseGlowSubtle 4s ease-in-out infinite;
        }

        .animate-pulse-glow-subtle-delayed {
          animation: pulseGlowSubtle 4s ease-in-out infinite;
          animation-delay: 2s;
        }

        /* Badge Card Hover */
        .badge-card-meta,
        .badge-card-tech {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .badge-card-meta:hover,
        .badge-card-tech:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 72px rgba(0, 0, 0, 0.14);
        }

        /* Checklist Icon Hover */
        .checklist-icon-certification {
          transition: all 0.3s ease;
        }

        .checklist-item-certification:hover .checklist-icon-certification {
          background-color: rgba(21, 21, 97, 0.2);
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
}