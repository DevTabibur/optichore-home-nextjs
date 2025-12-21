import { Linkedin, ArrowRight, Award, Users, Lightbulb, Globe } from 'lucide-react';
import ceoImage from 'figma:asset/b59948c16a20b39c9dc10bb32b623e6f5f7b78aa.png';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function MeetCEO() {
  const achievements = [
    { icon: <Award className="w-5 h-5" />, text: '10+ Years of Experience' },
    { icon: <Users className="w-5 h-5" />, text: 'Meta Business Partner Leadership' },
    { icon: <Lightbulb className="w-5 h-5" />, text: 'Global Digital Strategy Expertise' },
    { icon: <Globe className="w-5 h-5" />, text: 'Multi-Industry IT Expertise' },
  ];

  return (
    <section 
      className="meet-ceo-section-premium w-full lg:py-36 md:py-24 py-20"
      style={{
        background: 'linear-gradient(135deg, #FFFFFF 0%, #F3F4FF 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Background Shapes */}
      <div className="ceo-decorative-shapes absolute inset-0 pointer-events-none">
        {/* Navy Circle - Top Right */}
        <div 
          className="absolute animate-pulse-glow-slow"
          style={{
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(21, 21, 97, 0.04) 0%, transparent 70%)',
            top: '10%',
            right: '5%',
          }}
        />
        
        {/* Gray Shape - Bottom Left */}
        <div 
          className="absolute animate-float-slow"
          style={{
            width: '200px',
            height: '200px',
            background: 'rgba(237, 237, 237, 0.3)',
            borderRadius: '40px',
            bottom: '15%',
            left: '5%',
            transform: 'rotate(15deg)',
          }}
        />
      </div>

      {/* ========================================== */}
      {/* DESKTOP VARIANT (≥1024px) — LOCKED        */}
      {/* ========================================== */}
      <div className="hidden lg:block meet-ceo-container max-w-[1440px] mx-auto px-12 relative z-10">
        <div className="grid grid-cols-2 gap-24 items-center">
          {/* LEFT SIDE - Premium Founder Portrait Block */}
          <div className="founder-portrait-block-premium relative">
            {/* Depth Layers Behind Image */}
            <div className="portrait-depth-layers absolute inset-0">
              {/* Navy Border Layer */}
              <div 
                className="absolute"
                style={{
                  top: '-12px',
                  left: '-12px',
                  right: '12px',
                  bottom: '12px',
                  border: '3px solid rgba(21, 21, 97, 0.2)',
                  borderRadius: '28px',
                  zIndex: -2,
                }}
              />
              
              {/* Red Accent Line */}
              <div 
                className="absolute"
                style={{
                  width: '60%',
                  height: '4px',
                  background: 'linear-gradient(90deg, #FF0000 0%, transparent 100%)',
                  bottom: '-24px',
                  left: '0',
                  borderRadius: '2px',
                  zIndex: -1,
                }}
              />

              {/* Subtle Shape Accent */}
              <div 
                className="absolute animate-float-medium"
                style={{
                  width: '100px',
                  height: '100px',
                  background: 'rgba(237, 237, 237, 0.4)',
                  borderRadius: '20px',
                  top: '-30px',
                  right: '-30px',
                  transform: 'rotate(-12deg)',
                  zIndex: -3,
                }}
              />
            </div>

            {/* Main Image Container */}
            <div 
              className="founder-image-container-premium ceo-float-cinematic group"
              style={{
                position: 'relative',
                borderRadius: '28px',
                overflow: 'hidden',
                boxShadow: '0 24px 72px rgba(0, 0, 0, 0.09)',
              }}
            >
              <img
                src={ceoImage}
                alt="Mahbub - CEO of Optichore"
                className="w-full h-[650px] object-cover"
              />
              
              {/* Overlay Gradient for Premium Effect */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(180deg, transparent 0%, rgba(21, 21, 97, 0.03) 100%)',
                }}
              />
            </div>
          </div>

          {/* RIGHT SIDE - Founder Story Content */}
          <div className="founder-story-content-premium space-y-8">
            {/* Section Label */}
            <div 
              className="ceo-section-label-premium"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                fontWeight: 500,
                color: '#FF0000',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              OUR FOUNDER
            </div>

            {/* Heading */}
            <h2 
              className="ceo-main-heading-premium leading-tight"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '50px',
                fontWeight: 700,
                color: '#151561',
                letterSpacing: '-0.02em',
              }}
            >
              Meet Our CEO — MD Mahbubur Rahman
            </h2>

            {/* Paragraph */}
            <p 
              className="ceo-paragraph-premium leading-relaxed"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '19px',
                fontWeight: 400,
                color: '#505050',
                lineHeight: '1.75',
              }}
            >
              MD Mahbubur Rahman leads Optichore with a vision to transform how businesses scale digitally. With expertise across marketing, design, and full-stack technology, he combines strategic thinking with innovation to deliver measurable results for global clients.
            </p>

            {/* Achievement Badges */}
            <div className="achievement-badges-grid grid grid-cols-2 gap-4 pt-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="achievement-badge-premium group"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                    borderRadius: '18px',
                    padding: '18px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    animationDelay: `${index * 80}ms`,
                  }}
                >
                  <div 
                    className="achievement-icon-container"
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(21, 21, 97, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#151561',
                    }}
                  >
                    {achievement.icon}
                  </div>
                  <div 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px',
                      fontWeight: 500,
                      color: '#151561',
                      lineHeight: '1.4',
                    }}
                  >
                    {achievement.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Signature */}
            <div 
              className="ceo-signature-premium pt-4"
              style={{
                fontFamily: 'Brush Script MT, cursive',
                fontSize: '42px',
                color: '#151561',
                opacity: 0.7,
                transform: 'rotate(-2deg)',
                display: 'inline-block',
              }}
            >
              Mahbub
            </div>

            {/* CTA Link */}
            <div className="ceo-cta-row-premium pt-2">
              <a
                href="#connect"
                className="ceo-connect-link-premium inline-flex items-center gap-3"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '18px',
                  fontWeight: 500,
                  color: '#151561',
                }}
              >
                Connect with Our CEO
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* TABLET/MOBILE VARIANTS (<1024px)          */}
      {/* ========================================== */}
      <div className="lg:hidden meet-ceo-container-responsive max-w-[1440px] mx-auto md:px-8 px-6 relative z-10">
        <div className="flex flex-col md:gap-12 gap-10">
          
          {/* FOUNDER IMAGE - Appears FIRST */}
          <div className="founder-portrait-block-responsive relative md:max-w-md mx-auto w-full">
            {/* Depth Layers Behind Image */}
            <div className="portrait-depth-layers absolute inset-0">
              {/* Navy Border Layer */}
              <div 
                className="absolute"
                style={{
                  top: '-12px',
                  left: '-12px',
                  right: '12px',
                  bottom: '12px',
                  border: '3px solid rgba(21, 21, 97, 0.2)',
                  borderRadius: '28px',
                  zIndex: -2,
                }}
              />
              
              {/* Red Accent Line */}
              <div 
                className="absolute"
                style={{
                  width: '60%',
                  height: '4px',
                  background: 'linear-gradient(90deg, #FF0000 0%, transparent 100%)',
                  bottom: '-24px',
                  left: '0',
                  borderRadius: '2px',
                  zIndex: -1,
                }}
              />

              {/* Subtle Shape Accent */}
              <div 
                className="absolute animate-float-medium"
                style={{
                  width: '100px',
                  height: '100px',
                  background: 'rgba(237, 237, 237, 0.4)',
                  borderRadius: '20px',
                  top: '-30px',
                  right: '-30px',
                  transform: 'rotate(-12deg)',
                  zIndex: -3,
                }}
              />
            </div>

            {/* Main Image Container - Responsive */}
            <div 
              className="founder-image-container-responsive ceo-float-cinematic group"
              style={{
                position: 'relative',
                borderRadius: '28px',
                overflow: 'hidden',
                boxShadow: '0 24px 72px rgba(0, 0, 0, 0.09)',
              }}
            >
              <img
                src={ceoImage}
                alt="Mahbub - CEO of Optichore"
                className="w-full md:h-[500px] h-[450px] object-cover"
              />
              
              {/* Overlay Gradient for Premium Effect */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(180deg, transparent 0%, rgba(21, 21, 97, 0.03) 100%)',
                }}
              />
            </div>
          </div>

          {/* CONTENT - Appears SECOND */}
          <div className="founder-story-content-responsive md:space-y-7 space-y-6">
            {/* Section Label */}
            <div 
              className="ceo-section-label-responsive"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                fontWeight: 500,
                color: '#FF0000',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              OUR FOUNDER
            </div>

            {/* Heading - Responsive font size */}
            <h2 
              className="ceo-main-heading-responsive leading-tight md:text-[42px] text-[36px]"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                color: '#151561',
                letterSpacing: '-0.02em',
              }}
            >
              Meet Our CEO — MD Mahbubur Rahman
            </h2>

            {/* Paragraph - Responsive font size */}
            <p 
              className="ceo-paragraph-responsive leading-relaxed md:text-[18px] text-[16px]"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                color: '#505050',
                lineHeight: '1.75',
              }}
            >
              MD Mahbubur Rahman leads Optichore with a vision to transform how businesses scale digitally. With expertise across marketing, design, and full-stack technology, he combines strategic thinking with innovation to deliver measurable results for global clients.
            </p>

            {/* Achievement Badges - Responsive Grid (2-column on tablet, 1-column on mobile) */}
            <div className="achievement-badges-grid-responsive grid md:grid-cols-2 grid-cols-1 md:gap-4 gap-3 pt-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="achievement-badge-responsive group"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                    borderRadius: '18px',
                    padding: '18px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    animationDelay: `${index * 80}ms`,
                  }}
                >
                  <div 
                    className="achievement-icon-container"
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(21, 21, 97, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#151561',
                      flexShrink: 0,
                    }}
                  >
                    {achievement.icon}
                  </div>
                  <div 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px',
                      fontWeight: 500,
                      color: '#151561',
                      lineHeight: '1.4',
                    }}
                  >
                    {achievement.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Signature */}
            <div 
              className="ceo-signature-responsive pt-4"
              style={{
                fontFamily: 'Brush Script MT, cursive',
                fontSize: '42px',
                color: '#151561',
                opacity: 0.7,
                transform: 'rotate(-2deg)',
                display: 'inline-block',
              }}
            >
              Mahbub
            </div>

            {/* CTA Link - Full width on mobile */}
            <div className="ceo-cta-row-responsive pt-2">
              <a
                href="#connect"
                className="ceo-connect-link-responsive inline-flex items-center gap-3 md:w-auto w-full md:justify-start justify-center"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '18px',
                  fontWeight: 500,
                  color: '#151561',
                }}
              >
                Connect with Our CEO
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
