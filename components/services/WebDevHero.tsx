import { ArrowRight, Code2 } from 'lucide-react';
import { SafeButton } from '../SafeButton';

export function WebDevHero() {
  return (
    <section 
      className="web-dev-hero-section w-full lg:pt-40 lg:pb-32 md:pt-18 md:pb-18 pt-14 pb-14 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFF 100%)',
      }}
    >
      {/* ========================================== */}
      {/* DESKTOP VARIANT (≥1024px) — LOCKED        */}
      {/* ========================================== */}
      <div className="hidden lg:block max-w-[1440px] mx-auto px-12">
        <div className="grid grid-cols-2 gap-16 items-center">
          {/* LEFT COLUMN - Content */}
          <div className="hero-content-left space-y-8">
            {/* Label Tag */}
            <div 
              className="facebook-section-label inline-block px-4 py-2 rounded-full"
              style={{
                backgroundColor: 'rgba(21, 21, 97, 0.1)',
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                fontWeight: 600,
                color: '#151561',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4" />
                WEB DEVELOPMENT
              </div>
            </div>

            {/* Main Heading */}
            <h1 
              className="facebook-main-heading"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '64px',
                fontWeight: 700,
                color: '#151561',
                lineHeight: '1.1',
                letterSpacing: '-0.02em',
              }}
            >
              Web Development
            </h1>

            {/* Subtext */}
            <p 
              className="facebook-subparagraph"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '20px',
                fontWeight: 400,
                color: '#505050',
                lineHeight: '1.7',
                maxWidth: '540px',
              }}
            >
              Fast, secure, scalable websites built with modern technology.
            </p>

            {/* CTA Buttons Row */}
            <div className="cta-buttons-row flex items-center gap-4 pt-4">
              {/* Primary CTA */}
              <SafeButton
                to="/contact"
                className="facebook-primary-cta"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '17px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  backgroundColor: '#FF0000',
                  padding: '16px 36px',
                  borderRadius: '50px',
                  border: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: '0 4px 16px rgba(255, 0, 0, 0.25)',
                }}
              >
                Start Project
                <ArrowRight className="w-5 h-5" />
              </SafeButton>

              {/* Secondary CTA */}
              <SafeButton
                to="/contact"
                className="facebook-secondary-cta"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '17px',
                  fontWeight: 600,
                  color: '#151561',
                  backgroundColor: 'transparent',
                  padding: '16px 36px',
                  borderRadius: '50px',
                  border: '2px solid #151561',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </SafeButton>
            </div>
          </div>

          {/* RIGHT COLUMN - Code Editor Mockup */}
          <div className="hero-visual-right relative">
            <div 
              className="mockup-container relative"
              style={{
                animation: 'float-gentle 6s ease-in-out infinite',
              }}
            >
              {/* Code Editor Window */}
              <div 
                className="code-editor"
                style={{
                  backgroundColor: '#1E1E1E',
                  borderRadius: '16px',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.25)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  overflow: 'hidden',
                }}
              >
                {/* Editor Header */}
                <div 
                  className="editor-header flex items-center justify-between px-4 py-3"
                  style={{
                    backgroundColor: '#252526',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <div className="flex gap-2">
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FF5F57' }} />
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FEBC2E' }} />
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#28C840' }} />
                  </div>
                  <div 
                    style={{
                      fontFamily: 'monospace',
                      fontSize: '12px',
                      color: '#CCCCCC',
                    }}
                  >
                    App.tsx
                  </div>
                  <div style={{ width: '36px' }} />
                </div>

                {/* Code Content */}
                <div 
                  className="code-content p-6 space-y-2"
                  style={{
                    fontFamily: 'monospace',
                    fontSize: '13px',
                    lineHeight: '1.6',
                  }}
                >
                  <div style={{ color: '#C586C0' }}>import <span style={{ color: '#9CDCFE' }}>React</span> from <span style={{ color: '#CE9178' }}>'react'</span>;</div>
                  <div style={{ color: '#C586C0' }}>import <span style={{ color: '#9CDCFE' }}>{'{ useState }'}</span> from <span style={{ color: '#CE9178' }}>'react'</span>;</div>
                  <div style={{ height: '8px' }} />
                  <div style={{ color: '#DCDCAA' }}>function <span style={{ color: '#4EC9B0' }}>App</span>() {'{'}</div>
                  <div style={{ paddingLeft: '24px', color: '#569CD6' }}>
                    const [<span style={{ color: '#9CDCFE' }}>count</span>, <span style={{ color: '#9CDCFE' }}>setCount</span>] = <span style={{ color: '#DCDCAA' }}>useState</span>(<span style={{ color: '#B5CEA8' }}>0</span>);
                  </div>
                  <div style={{ height: '8px' }} />
                  <div style={{ paddingLeft: '24px', color: '#C586C0' }}>return (</div>
                  <div style={{ paddingLeft: '48px', color: '#808080' }}>{'<div className="container">'}</div>
                  <div style={{ paddingLeft: '72px', color: '#808080' }}>{'<h1>Welcome</h1>'}</div>
                  <div style={{ paddingLeft: '72px', color: '#808080' }}>{'<p>Count: {count}</p>'}</div>
                  <div style={{ paddingLeft: '48px', color: '#808080' }}>{'</div>'}</div>
                  <div style={{ paddingLeft: '24px', color: '#C586C0' }}>);</div>
                  <div style={{ color: '#DCDCAA' }}>{'}'}</div>
                  <div style={{ height: '8px' }} />
                  <div style={{ color: '#C586C0' }}>export default <span style={{ color: '#4EC9B0' }}>App</span>;</div>
                </div>
              </div>

              {/* Floating Status Card */}
              <div 
                className="floating-card absolute"
                style={{
                  top: '50%',
                  right: '-40px',
                  backgroundColor: '#FFFFFF',
                  padding: '20px',
                  borderRadius: '12px',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.12)',
                  animation: 'float-card 4s ease-in-out infinite',
                  zIndex: 10,
                }}
              >
                <div className="flex items-center gap-3">
                  <div 
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      backgroundColor: '#28C840',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      fontSize: '20px',
                    }}
                  >
                    ✓
                  </div>
                  <div>
                    <div 
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '13px',
                        fontWeight: 600,
                        color: '#151561',
                      }}
                    >
                      Build Success
                    </div>
                    <div 
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '11px',
                        fontWeight: 400,
                        color: '#999',
                      }}
                    >
                      100% Optimized
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* TABLET/MOBILE VARIANTS (<1024px)          */}
      {/* ========================================== */}
      <div className="lg:hidden max-w-[1440px] mx-auto md:px-8 px-5">
        {/* STACKED LAYOUT - Content first, then Code Mockup */}
        <div className="flex flex-col items-center">
          {/* TEXT CONTENT BLOCK - Center aligned on tablet/mobile */}
          <div className="hero-content-responsive text-center md:space-y-7 space-y-6 md:mb-12 mb-10">
            {/* Label Tag - Center aligned */}
            <div className="flex justify-center">
              <div 
                className="facebook-section-label inline-block px-4 py-2 rounded-full"
                style={{
                  backgroundColor: 'rgba(21, 21, 97, 0.1)',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#151561',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4" />
                  WEB DEVELOPMENT
                </div>
              </div>
            </div>

            {/* Main Heading - Center aligned */}
            <h1 
              className="facebook-main-heading-responsive md:text-[48px] text-[32px]"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                color: '#151561',
                lineHeight: '1.1',
                letterSpacing: '-0.02em',
              }}
            >
              Web Development
            </h1>

            {/* Subtext - Center aligned */}
            <p 
              className="facebook-subparagraph-responsive md:text-[17px] text-[15px]"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                color: '#505050',
                lineHeight: '1.7',
                maxWidth: '520px',
                margin: '0 auto',
              }}
            >
              Fast, secure, scalable websites built with modern technology.
            </p>

            {/* CTA Buttons - Tablet: Horizontal, Mobile: Vertical */}
            <div className="cta-buttons-row-responsive md:flex md:items-center md:justify-center md:gap-4 md:pt-4 md:flex-row flex flex-col items-center gap-3 pt-6">
              {/* Primary CTA */}
              <SafeButton
                to="/contact"
                className="facebook-primary-cta-responsive w-full md:w-auto"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '17px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  backgroundColor: '#FF0000',
                  padding: '16px 36px',
                  borderRadius: '50px',
                  border: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  boxShadow: '0 4px 16px rgba(255, 0, 0, 0.25)',
                }}
              >
                Start Project
                <ArrowRight className="w-5 h-5" />
              </SafeButton>

              {/* Secondary CTA */}
              <SafeButton
                to="/contact"
                className="facebook-secondary-cta-responsive w-full md:w-auto"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '17px',
                  fontWeight: 600,
                  color: '#151561',
                  backgroundColor: 'transparent',
                  padding: '16px 36px',
                  borderRadius: '50px',
                  border: '2px solid #151561',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                }}
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </SafeButton>
            </div>
          </div>

          {/* CODE MOCKUP CARD - Below content */}
          <div className="hero-visual-responsive relative w-full md:max-w-[640px] max-w-full">
            <div 
              className="mockup-container-responsive relative"
              style={{
                animation: 'float-gentle 6s ease-in-out infinite',
              }}
            >
              {/* Code Editor Window */}
              <div 
                className="code-editor"
                style={{
                  backgroundColor: '#1E1E1E',
                  borderRadius: '16px',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.25)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  overflow: 'hidden',
                }}
              >
                {/* Editor Header */}
                <div 
                  className="editor-header flex items-center justify-between px-4 py-3"
                  style={{
                    backgroundColor: '#252526',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <div className="flex gap-2">
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FF5F57' }} />
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FEBC2E' }} />
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#28C840' }} />
                  </div>
                  <div 
                    style={{
                      fontFamily: 'monospace',
                      fontSize: '12px',
                      color: '#CCCCCC',
                    }}
                  >
                    App.tsx
                  </div>
                  <div style={{ width: '36px' }} />
                </div>

                {/* Code Content */}
                <div 
                  className="code-content p-6 space-y-2"
                  style={{
                    fontFamily: 'monospace',
                    fontSize: '13px',
                    lineHeight: '1.6',
                  }}
                >
                  <div style={{ color: '#C586C0' }}>import <span style={{ color: '#9CDCFE' }}>React</span> from <span style={{ color: '#CE9178' }}>'react'</span>;</div>
                  <div style={{ color: '#C586C0' }}>import <span style={{ color: '#9CDCFE' }}>{'{ useState }'}</span> from <span style={{ color: '#CE9178' }}>'react'</span>;</div>
                  <div style={{ height: '8px' }} />
                  <div style={{ color: '#DCDCAA' }}>function <span style={{ color: '#4EC9B0' }}>App</span>() {'{'}</div>
                  <div style={{ paddingLeft: '24px', color: '#569CD6' }}>
                    const [<span style={{ color: '#9CDCFE' }}>count</span>, <span style={{ color: '#9CDCFE' }}>setCount</span>] = <span style={{ color: '#DCDCAA' }}>useState</span>(<span style={{ color: '#B5CEA8' }}>0</span>);
                  </div>
                  <div style={{ height: '8px' }} />
                  <div style={{ paddingLeft: '24px', color: '#C586C0' }}>return (</div>
                  <div style={{ paddingLeft: '48px', color: '#808080' }}>{'<div className="container">'}</div>
                  <div style={{ paddingLeft: '72px', color: '#808080' }}>{'<h1>Welcome</h1>'}</div>
                  <div style={{ paddingLeft: '72px', color: '#808080' }}>{'<p>Count: {count}</p>'}</div>
                  <div style={{ paddingLeft: '48px', color: '#808080' }}>{'</div>'}</div>
                  <div style={{ paddingLeft: '24px', color: '#C586C0' }}>);</div>
                  <div style={{ color: '#DCDCAA' }}>{'}'}</div>
                  <div style={{ height: '8px' }} />
                  <div style={{ color: '#C586C0' }}>export default <span style={{ color: '#4EC9B0' }}>App</span>;</div>
                </div>
              </div>

              {/* Floating Status Card - Repositioned for tablet/mobile */}
              <div 
                className="floating-card-responsive absolute md:block block"
                style={{
                  bottom: '-20px',
                  right: '20px',
                  backgroundColor: '#FFFFFF',
                  padding: '16px',
                  borderRadius: '12px',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.12)',
                  animation: 'float-card 4s ease-in-out infinite',
                  zIndex: 10,
                }}
              >
                <div className="flex items-center gap-3">
                  <div 
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      backgroundColor: '#28C840',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      fontSize: '18px',
                    }}
                  >
                    ✓
                  </div>
                  <div>
                    <div 
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '13px',
                        fontWeight: 600,
                        color: '#151561',
                      }}
                    >
                      Build Success
                    </div>
                    <div 
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '11px',
                        fontWeight: 400,
                        color: '#999',
                      }}
                    >
                      100% Optimized
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float-gentle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes float-card {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(-2deg);
          }
        }
      `}</style>
    </section>
  );
}
