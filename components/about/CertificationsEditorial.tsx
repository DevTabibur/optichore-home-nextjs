export function CertificationsEditorial() {
  return (
    <section 
      className="certifications-enterprise-section w-full"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F8F9FF 100%)',
        paddingTop: '240px',
        paddingBottom: '240px',
        position: 'relative',
      }}
    >
      <div className="certifications-enterprise-container max-w-[1440px] mx-auto lg:px-12 md:px-8 px-6">
        {/* PREMIUM HEADING — CENTERED */}
        <h2 
          className="enterprise-heading-cinematic text-center lg:mb-8 md:mb-6 mb-6 lg:text-[64px] md:text-5xl text-4xl"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 300,
            color: '#151561',
            letterSpacing: '0.02em',
            lineHeight: '1.15',
          }}
        >
          Trusted & Recognized Globally
        </h2>

        {/* SUB-HEADING */}
        <p 
          className="enterprise-subheading-cinematic text-center lg:text-2xl md:text-xl text-lg lg:mb-20 md:mb-16 mb-12"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 500,
            color: '#505050',
            lineHeight: '1.6',
            maxWidth: '720px',
            margin: '0 auto',
            marginBottom: '80px',
          }}
        >
          Accredited as a Meta Business Partner<br className="hidden md:block" />
          <span className="md:hidden"> </span>and a Verified Technology Provider
        </p>

        {/* DESKTOP & TABLET: Two-Column Layout (≥768px) */}
        <div 
          className="hidden md:flex items-center justify-center lg:gap-24 md:gap-12 lg:mb-20 md:mb-16"
          style={{
            paddingTop: '40px',
            paddingBottom: '40px',
          }}
        >
          {/* Badge 1 — Meta Business Partner */}
          <div 
            className="glass-badge-enterprise lg:min-w-[340px] md:min-w-[300px]"
            style={{
              background: 'rgba(255, 255, 255, 0.35)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              borderRadius: '28px',
              padding: '56px 64px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.04), inset 0 1px 2px rgba(255, 255, 255, 0.3)',
              position: 'relative',
              textAlign: 'center',
              transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {/* Blue Accent Glow Ring */}
            <div 
              className="glow-ring-meta"
              style={{
                position: 'absolute',
                inset: '-20px',
                borderRadius: '36px',
                background: 'radial-gradient(circle, rgba(0, 132, 255, 0.15) 0%, transparent 70%)',
                opacity: 0,
                zIndex: -1,
                transition: 'opacity 0.8s ease',
              }}
            />

            {/* Meta Logo Placeholder */}
            <div 
              className="meta-logo-enterprise mb-6"
              style={{
                width: '80px',
                height: '80px',
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img 
                src="https://images.seeklogo.com/logo-png/46/1/meta-business-partner-logo-png_seeklogo-466474.png"
                alt="Meta Business Partner"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            </div>

            {/* Badge Text */}
            <h3 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '20px',
                fontWeight: 600,
                color: '#151561',
                letterSpacing: '-0.01em',
              }}
            >
              Meta Business Partner
            </h3>
          </div>

          {/* Badge 2 — Verified Tech Provider */}
          <div 
            className="glass-badge-enterprise lg:min-w-[340px] md:min-w-[300px]"
            style={{
              background: 'rgba(255, 255, 255, 0.35)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              borderRadius: '28px',
              padding: '56px 64px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.04), inset 0 1px 2px rgba(255, 255, 255, 0.3)',
              position: 'relative',
              textAlign: 'center',
              transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {/* Navy Accent Glow Ring */}
            <div 
              className="glow-ring-tech"
              style={{
                position: 'absolute',
                inset: '-20px',
                borderRadius: '36px',
                background: 'radial-gradient(circle, rgba(21, 21, 97, 0.12) 0%, transparent 70%)',
                opacity: 0,
                zIndex: -1,
                transition: 'opacity 0.8s ease',
              }}
            />

            {/* Tech Verification Icon */}
            <div 
              className="tech-icon-enterprise mb-6"
              style={{
                width: '80px',
                height: '80px',
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img 
                src="https://cdn.prod.website-files.com/64aea11557b522cc5e90980e/6690ff6140df7ec4088b444f_Meta_TechProv.png"
                alt="Meta Tech Provider"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            </div>

            {/* Badge Text */}
            <h3 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '20px',
                fontWeight: 600,
                color: '#151561',
                letterSpacing: '-0.01em',
              }}
            >
              Verified Technology Provider
            </h3>
          </div>
        </div>

        {/* MOBILE: Vertical Stack (≤767px) */}
        <div 
          className="md:hidden flex flex-col items-center gap-6 mb-12"
          style={{
            paddingTop: '24px',
            paddingBottom: '24px',
          }}
        >
          {/* Badge 1 — Meta Business Partner */}
          <div 
            className="glass-badge-mobile w-full"
            style={{
              background: 'rgba(255, 255, 255, 0.35)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              borderRadius: '28px',
              padding: '32px 24px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.04), inset 0 1px 2px rgba(255, 255, 255, 0.3)',
              textAlign: 'center',
            }}
          >
            {/* Meta Logo */}
            <div 
              className="meta-logo-mobile mb-4"
              style={{
                width: '64px',
                height: '64px',
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img 
                src="https://images.seeklogo.com/logo-png/46/1/meta-business-partner-logo-png_seeklogo-466474.png"
                alt="Meta Business Partner"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            </div>

            {/* Badge Text */}
            <h3 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '18px',
                fontWeight: 600,
                color: '#151561',
                letterSpacing: '-0.01em',
              }}
            >
              Meta Business Partner
            </h3>
          </div>

          {/* Badge 2 — Verified Tech Provider */}
          <div 
            className="glass-badge-mobile w-full"
            style={{
              background: 'rgba(255, 255, 255, 0.35)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              borderRadius: '28px',
              padding: '32px 24px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.04), inset 0 1px 2px rgba(255, 255, 255, 0.3)',
              textAlign: 'center',
            }}
          >
            {/* Tech Icon */}
            <div 
              className="tech-icon-mobile mb-4"
              style={{
                width: '64px',
                height: '64px',
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img 
                src="https://cdn.prod.website-files.com/64aea11557b522cc5e90980e/6690ff6140df7ec4088b444f_Meta_TechProv.png"
                alt="Meta Tech Provider"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            </div>

            {/* Badge Text */}
            <h3 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '18px',
                fontWeight: 600,
                color: '#151561',
                letterSpacing: '-0.01em',
              }}
            >
              Verified Technology Provider
            </h3>
          </div>
        </div>

        {/* ENTERPRISE CREDIBILITY SENTENCE — CENTERED */}
        <p 
          className="credibility-sentence-enterprise text-center lg:text-[19px] md:text-lg text-base"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            color: '#6A6A6A',
            lineHeight: '1.7',
            maxWidth: '780px',
            margin: '0 auto',
          }}
        >
          Recognized by global industry leaders for excellence in marketing, technology, and performance innovation.
        </p>
      </div>

      {/* STYLES & CINEMATIC ANIMATIONS */}
      <style>{`
        /* Premium Heading — Slow Fade Down */
        @keyframes cinematicFadeDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .enterprise-heading-cinematic {
          animation: cinematicFadeDown 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        /* Sub-Heading — Slow Fade Up */
        @keyframes cinematicFadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .enterprise-subheading-cinematic {
          animation: cinematicFadeUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards 0.3s;
          opacity: 0;
        }

        /* Badge Micro Float — Meta */
        @keyframes badgeFloatMeta {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .meta-badge-float {
          animation: cinematicFadeUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards 0.6s,
                     badgeFloatMeta 6s ease-in-out infinite 2s;
          opacity: 0;
        }

        /* Badge Micro Float — Tech */
        @keyframes badgeFloatTech {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .tech-badge-float {
          animation: cinematicFadeUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards 0.75s,
                     badgeFloatTech 6.5s ease-in-out infinite 2.3s;
          opacity: 0;
        }

        /* Shadow Breathing Effect */
        @keyframes shadowBreathe {
          0%, 100% {
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.04), inset 0 1px 2px rgba(255, 255, 255, 0.3);
          }
          50% {
            box-shadow: 0 16px 48px rgba(0, 0, 0, 0.08), inset 0 1px 2px rgba(255, 255, 255, 0.3);
          }
        }

        .glass-badge-enterprise {
          animation-iteration-count: infinite;
        }

        .glass-badge-enterprise:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1), inset 0 1px 2px rgba(255, 255, 255, 0.4);
        }

        /* Glow Ring Fade In on Hover */
        .glass-badge-enterprise:hover .glow-ring-meta,
        .glass-badge-enterprise:hover .glow-ring-tech {
          opacity: 1;
        }

        /* Credibility Sentence — Slow Fade */
        @keyframes credibilityFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .credibility-sentence-enterprise {
          animation: credibilityFadeIn 1.2s ease forwards 0.9s;
          opacity: 0;
        }

        /* Additional Premium Effects */
        .meta-logo-enterprise,
        .tech-icon-enterprise {
          transition: all 0.4s ease;
        }

        .glass-badge-enterprise:hover .meta-logo-enterprise,
        .glass-badge-enterprise:hover .tech-icon-enterprise {
          transform: scale(1.08);
        }
      `}</style>
    </section>
  );
}