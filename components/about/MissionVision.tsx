import { Target, Eye } from 'lucide-react';

export function MissionVision() {
  return (
    <section 
      className="mission-vision-section w-full lg:py-40 md:py-32 py-24"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F8F9FF 100%)',
      }}
    >
      <div className="mv-container max-w-[1440px] mx-auto lg:px-12 md:px-8 px-6">
        {/* DESKTOP & TABLET: Two-Column Layout (≥768px) */}
        <div className="hidden md:grid grid-cols-2 lg:gap-12 md:gap-8">
          {/* LEFT CARD — MISSION */}
          <div 
            className="mission-card premium-card-hover lg:p-12 md:p-10"
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {/* Icon */}
            <div 
              className="mission-icon-wrapper mb-8"
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '16px',
                backgroundColor: 'rgba(255, 0, 0, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Target className="w-8 h-8" style={{ color: '#FF0000' }} />
            </div>

            {/* Title */}
            <h3 
              className="lg:text-[32px] md:text-3xl lg:mb-4 md:mb-3"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                color: '#151561',
                letterSpacing: '-0.01em',
              }}
            >
              Our Mission
            </h3>

            {/* Summary */}
            <p 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '17px',
                fontWeight: 400,
                color: '#505050',
                lineHeight: '1.7',
              }}
            >
              To empower businesses worldwide through innovative marketing strategies, exceptional design, and cutting-edge technology solutions that drive measurable growth and sustainable success.
            </p>
          </div>

          {/* RIGHT CARD — VISION */}
          <div 
            className="vision-card premium-card-hover lg:p-12 md:p-10"
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {/* Icon */}
            <div 
              className="vision-icon-wrapper mb-8"
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '16px',
                backgroundColor: 'rgba(21, 21, 97, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Eye className="w-8 h-8" style={{ color: '#151561' }} />
            </div>

            {/* Title */}
            <h3 
              className="lg:text-[32px] md:text-3xl lg:mb-4 md:mb-3"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                color: '#151561',
                letterSpacing: '-0.01em',
              }}
            >
              Our Vision
            </h3>

            {/* Summary */}
            <p 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '17px',
                fontWeight: 400,
                color: '#505050',
                lineHeight: '1.7',
              }}
            >
              To become the world's most trusted partner for digital transformation, recognized for our commitment to innovation, excellence, and delivering exceptional value to every client we serve.
            </p>
          </div>
        </div>

        {/* MOBILE: Vertical Stack (≤767px) */}
        <div className="md:hidden flex flex-col gap-6">
          {/* CARD 1 — MISSION */}
          <div 
            className="mission-card p-6"
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)',
            }}
          >
            {/* Icon */}
            <div 
              className="mission-icon-wrapper mb-6"
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '16px',
                backgroundColor: 'rgba(255, 0, 0, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Target className="w-8 h-8" style={{ color: '#FF0000' }} />
            </div>

            {/* Title */}
            <h3 
              className="text-3xl mb-4"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                color: '#151561',
                letterSpacing: '-0.01em',
              }}
            >
              Our Mission
            </h3>

            {/* Summary */}
            <p 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '17px',
                fontWeight: 400,
                color: '#505050',
                lineHeight: '1.7',
              }}
            >
              To empower businesses worldwide through innovative marketing strategies, exceptional design, and cutting-edge technology solutions that drive measurable growth and sustainable success.
            </p>
          </div>

          {/* CARD 2 — VISION */}
          <div 
            className="vision-card p-6"
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)',
            }}
          >
            {/* Icon */}
            <div 
              className="vision-icon-wrapper mb-6"
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '16px',
                backgroundColor: 'rgba(21, 21, 97, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Eye className="w-8 h-8" style={{ color: '#151561' }} />
            </div>

            {/* Title */}
            <h3 
              className="text-3xl mb-4"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                color: '#151561',
                letterSpacing: '-0.01em',
              }}
            >
              Our Vision
            </h3>

            {/* Summary */}
            <p 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '17px',
                fontWeight: 400,
                color: '#505050',
                lineHeight: '1.7',
              }}
            >
              To become the world's most trusted partner for digital transformation, recognized for our commitment to innovation, excellence, and delivering exceptional value to every client we serve.
            </p>
          </div>
        </div>
      </div>

      {/* STYLES */}
      <style>{`
        .premium-card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 56px rgba(0, 0, 0, 0.12);
        }
      `}</style>
    </section>
  );
}