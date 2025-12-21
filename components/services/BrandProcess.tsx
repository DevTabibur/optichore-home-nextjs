import { Search, Compass, Lightbulb, RefreshCw, CheckCircle } from 'lucide-react';

export function BrandProcess() {
  const steps = [
    { icon: <Search className="w-7 h-7" />, title: 'Discovery', description: 'Understanding your vision and goals', number: '01' },
    { icon: <Compass className="w-7 h-7" />, title: 'Visual Direction', description: 'Exploring creative concepts', number: '02' },
    { icon: <Lightbulb className="w-7 h-7" />, title: 'Concept Development', description: 'Creating initial brand concepts', number: '03' },
    { icon: <RefreshCw className="w-7 h-7" />, title: 'Refinement', description: 'Perfecting every detail', number: '04' },
    { icon: <CheckCircle className="w-7 h-7" />, title: 'Final Delivery', description: 'Complete brand package delivery', number: '05' },
  ];

  return (
    <section className="brand-process-section w-full py-32" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-[1440px] mx-auto px-12">
        <div className="text-center mb-20 space-y-4">
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 600, color: '#FF0000', textTransform: 'uppercase', letterSpacing: '0.08em' }}>OUR PROCESS</div>
          <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: '48px', fontWeight: 700, color: '#151561', letterSpacing: '-0.02em', lineHeight: '1.2' }}>How We Build Your Brand</h2>
        </div>
        <div className="relative">
          <div className="absolute top-24 left-0 right-0 h-0.5" style={{ background: 'linear-gradient(90deg, rgba(21, 21, 97, 0.1) 0%, rgba(21, 21, 97, 0.3) 50%, rgba(21, 21, 97, 0.1) 100%)', zIndex: 0 }}></div>
          <div className="grid grid-cols-5 gap-x-6 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="process-step" style={{ textAlign: 'center', position: 'relative' }}>
                <div className="step-icon-wrapper mx-auto mb-6" style={{ width: '96px', height: '96px', borderRadius: '50%', background: 'linear-gradient(135deg, #151561 0%, #1a1a7a 100%)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 24px rgba(21, 21, 97, 0.25)', position: 'relative', border: '4px solid #FFFFFF' }}>
                  {step.icon}
                  <div className="step-number" style={{ position: 'absolute', top: '-8px', right: '-8px', width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#FF0000', color: '#FFFFFF', fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(255, 0, 0, 0.3)' }}>{step.number}</div>
                </div>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '20px', fontWeight: 600, color: '#151561', marginBottom: '12px' }}>{step.title}</h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 400, color: '#505050', lineHeight: '1.6' }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
