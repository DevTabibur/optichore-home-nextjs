import { Search, Map, FileText, Paintbrush, MousePointer, CheckCircle } from 'lucide-react';

export function UIUXProcess() {
  const steps = [
    { icon: <Search className="w-7 h-7" />, title: 'Research', description: 'Understanding users and business goals', number: '01' },
    { icon: <Map className="w-7 h-7" />, title: 'User Journey Mapping', description: 'Mapping complete user flows', number: '02' },
    { icon: <FileText className="w-7 h-7" />, title: 'Wireframes', description: 'Creating structural blueprints', number: '03' },
    { icon: <Paintbrush className="w-7 h-7" />, title: 'Visual Design', description: 'Crafting beautiful interfaces', number: '04' },
    { icon: <MousePointer className="w-7 h-7" />, title: 'Prototype', description: 'Building interactive prototypes', number: '05' },
    { icon: <CheckCircle className="w-7 h-7" />, title: 'Testing', description: 'Validating with real users', number: '06' },
  ];

  return (
    <section className="uiux-process-section w-full py-32" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-[1440px] mx-auto px-12">
        <div className="text-center mb-20 space-y-4">
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 600, color: '#FF0000', textTransform: 'uppercase', letterSpacing: '0.08em' }}>OUR PROCESS</div>
          <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: '48px', fontWeight: 700, color: '#151561', letterSpacing: '-0.02em', lineHeight: '1.2' }}>How We Design Experiences</h2>
        </div>
        <div className="relative">
          <div className="absolute top-24 left-0 right-0 h-0.5" style={{ background: 'linear-gradient(90deg, rgba(21, 21, 97, 0.1) 0%, rgba(21, 21, 97, 0.3) 50%, rgba(21, 21, 97, 0.1) 100%)', zIndex: 0 }}></div>
          <div className="grid grid-cols-3 gap-x-8 gap-y-16 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="process-step" style={{ textAlign: 'center', position: 'relative' }}>
                <div className="step-icon-wrapper mx-auto mb-6" style={{ width: '96px', height: '96px', borderRadius: '50%', background: 'linear-gradient(135deg, #151561 0%, #1a1a7a 100%)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 24px rgba(21, 21, 97, 0.25)', position: 'relative', border: '4px solid #FFFFFF' }}>
                  {step.icon}
                  <div className="step-number" style={{ position: 'absolute', top: '-8px', right: '-8px', width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#FF0000', color: '#FFFFFF', fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(255, 0, 0, 0.3)' }}>{step.number}</div>
                </div>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '24px', fontWeight: 600, color: '#151561', marginBottom: '12px' }}>{step.title}</h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 400, color: '#505050', lineHeight: '1.6', maxWidth: '320px', margin: '0 auto' }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
