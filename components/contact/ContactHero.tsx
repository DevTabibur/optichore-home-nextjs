export function ContactHero() {
  return (
    <section 
      className="contact-hero-section w-full"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F8F9FF 100%)',
        paddingTop: '140px',
        paddingBottom: '120px',
      }}
    >
      <div className="contact-hero-container max-w-[1440px] mx-auto px-12">
        {/* Hero Content - Left Aligned */}
        <div className="max-w-[720px]">
          {/* Main Heading */}
          <h1 
            className="contact-hero-heading-animate"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '56px',
              fontWeight: 700,
              color: '#151561',
              letterSpacing: '-0.02em',
              lineHeight: '1.15',
              marginBottom: '32px',
            }}
          >
            Let's Build Something Great Together
          </h1>

          {/* Subtext */}
          <p 
            className="contact-hero-subtext-animate"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '20px',
              fontWeight: 400,
              color: '#505050',
              lineHeight: '1.7',
              maxWidth: '640px',
            }}
          >
            Get in touch with our team for project inquiries, partnerships, or general questions. We're here to help.
          </p>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes heroFadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .contact-hero-heading-animate {
          animation: heroFadeUp 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          opacity: 0;
        }

        .contact-hero-subtext-animate {
          animation: heroFadeUp 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards 0.2s;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
