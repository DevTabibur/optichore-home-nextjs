import { ArrowRight, Sparkles } from 'lucide-react';
import { SafeButton } from '../SafeButton';

export function BrandHero() {
  return (
    <section 
      className="brand-hero-section w-full pt-40 pb-32 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFF 100%)',
      }}
    >
      <div className="max-w-[1440px] mx-auto px-12">
        <div className="grid grid-cols-2 gap-20 items-center">
          <div className="hero-content space-y-8">
            <div className="label-tag inline-flex items-center gap-2 px-5 py-2" style={{ backgroundColor: '#FFF0F0', borderRadius: '50px', border: '1px solid rgba(255, 0, 0, 0.1)' }}>
              <Sparkles className="w-4 h-4" style={{ color: '#FF0000' }} />
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 600, color: '#FF0000' }}>Creative Excellence</span>
            </div>
            
            <h1 style={{ fontFamily: 'Inter, sans-serif', fontSize: '64px', fontWeight: 700, color: '#151561', letterSpacing: '-0.02em', lineHeight: '1.1' }}>
              Brand Identity & Creative Design
            </h1>
            
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '20px', fontWeight: 400, color: '#505050', lineHeight: '1.7', maxWidth: '540px' }}>
              Crafting memorable brand identities that resonate with your audience and stand out in the market.
            </p>

            <div className="flex items-center gap-4">
              <SafeButton 
                to="/contact"
                className="cta-button group"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  backgroundColor: '#FF0000',
                  padding: '16px 32px',
                  borderRadius: '50px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </SafeButton>
            </div>
          </div>

          <div className="hero-visual relative">
            <div className="visual-box" style={{ width: '100%', height: '500px', borderRadius: '24px', background: 'linear-gradient(135deg, #151561 0%, #1a1a7a 100%)', boxShadow: '0 20px 60px rgba(21, 21, 97, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ fontSize: '120px', opacity: 0.15, color: '#FFFFFF' }}>✨</div>
              <div className="float-card" style={{ position: 'absolute', top: '40px', right: '40px', backgroundColor: '#FFFFFF', padding: '16px 24px', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', animation: 'float 3s ease-in-out infinite' }}>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 600, color: '#FF0000', marginBottom: '4px' }}>BRAND IMPACT</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', fontWeight: 700, color: '#151561' }}>150+ Brands</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .cta-button:hover { background-color: #CC0000 !important; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(255, 0, 0, 0.3); }
      `}</style>
    </section>
  );
}
