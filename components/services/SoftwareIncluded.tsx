import { Layers, Code, Cloud, Boxes, TestTube, Headphones } from 'lucide-react';

export function SoftwareIncluded() {
  const services = [
    { icon: <Layers className="w-6 h-6" />, title: 'System Architecture', description: 'Scalable and robust system design' },
    { icon: <Code className="w-6 h-6" />, title: 'Full-stack Development', description: 'End-to-end application development' },
    { icon: <Cloud className="w-6 h-6" />, title: 'Cloud Deployment', description: 'AWS, Azure, and Google Cloud solutions' },
    { icon: <Boxes className="w-6 h-6" />, title: 'Integrations', description: 'Third-party API and system integrations' },
    { icon: <TestTube className="w-6 h-6" />, title: 'QA & Testing', description: 'Comprehensive testing and quality assurance' },
    { icon: <Headphones className="w-6 h-6" />, title: 'Ongoing Support', description: 'Maintenance and technical support' },
  ];

  return (
    <section className="software-included-section w-full py-32" style={{ backgroundColor: '#F8FAFF' }}>
      <div className="max-w-[1440px] mx-auto px-12">
        <div className="text-center mb-20 space-y-4">
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 600, color: '#FF0000', textTransform: 'uppercase', letterSpacing: '0.08em' }}>WHAT'S INCLUDED</div>
          <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: '48px', fontWeight: 700, color: '#151561', letterSpacing: '-0.02em', lineHeight: '1.2' }}>Complete Software Development Package</h2>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card group" style={{ backgroundColor: '#FFFFFF', padding: '40px', borderRadius: '20px', border: '2px solid rgba(0, 0, 0, 0.06)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)', transition: 'all 0.3s ease', cursor: 'default' }}>
              <div className="icon-wrapper mb-5" style={{ width: '64px', height: '64px', borderRadius: '14px', background: 'linear-gradient(135deg, #151561 0%, #1a1a7a 100%)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', boxShadow: '0 6px 16px rgba(21, 21, 97, 0.2)' }}>
                {service.icon}
              </div>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '22px', fontWeight: 600, color: '#151561', marginBottom: '12px' }}>{service.title}</h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 400, color: '#505050', lineHeight: '1.6' }}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .service-card:hover { transform: translateY(-6px); border-color: rgba(21, 21, 97, 0.2); box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1); }
        .service-card:hover .icon-wrapper { transform: scale(1.05) rotate(-3deg); box-shadow: 0 10px 24px rgba(21, 21, 97, 0.35); }
      `}</style>
    </section>
  );
}
