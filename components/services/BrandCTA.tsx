import { ArrowRight } from 'lucide-react';
import { SafeButton } from '../SafeButton';

export function BrandCTA() {
  return (
    <section className="brand-cta-section w-full py-32" style={{ background: 'linear-gradient(135deg, #151561 0%, #1a1a7a 100%)', position: 'relative', overflow: 'hidden' }}>
      <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 20% 50%, rgba(255, 0, 0, 0.1) 0%, transparent 50%)', pointerEvents: 'none' }}></div>
      <div className="max-w-[1440px] mx-auto px-12 relative z-10">
        <div className="text-center space-y-8">
          <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: '56px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.02em', lineHeight: '1.2', maxWidth: '800px', margin: '0 auto' }}>
            Let's build your brand identity.
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '20px', fontWeight: 400, color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto' }}>
            Ready to create a memorable brand that stands out?
          </p>
          <SafeButton
            to="/contact"
            className="cta-button-white group"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '18px',
              fontWeight: 600,
              color: '#151561',
              backgroundColor: '#FFFFFF',
              padding: '18px 40px',
              borderRadius: '50px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)'
            }}
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </SafeButton>
        </div>
      </div>
      <style>{`
        .cta-button-white:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25) !important; background-color: #F5F5F5 !important; }
      `}</style>
    </section>
  );
}
