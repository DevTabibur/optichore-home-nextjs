import { Smartphone, Palette, Code, Zap, Rocket, RefreshCw } from 'lucide-react';

export function MobileAppIncluded() {
  const services = [
    { icon: <Smartphone className="w-6 h-6" />, title: 'iOS/Android Apps', description: 'Native apps for both major platforms' },
    { icon: <Palette className="w-6 h-6" />, title: 'UI/UX for Mobile', description: 'Mobile-first design and user experience' },
    { icon: <Code className="w-6 h-6" />, title: 'API Development', description: 'Backend APIs and database architecture' },
    { icon: <Zap className="w-6 h-6" />, title: 'App Optimization', description: 'Performance tuning and optimization' },
    { icon: <Rocket className="w-6 h-6" />, title: 'Deployment to Stores', description: 'App Store and Google Play submission' },
    { icon: <RefreshCw className="w-6 h-6" />, title: 'Maintenance Updates', description: 'Regular updates and feature additions' },
  ];

  return (
    <section className="mobile-app-included-section w-full py-32" style={{ backgroundColor: '#F8FAFF' }}>
      <div className="max-w-[1440px] mx-auto px-12">
        <div className="text-center mb-20 space-y-4">
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 600, color: '#FF0000', textTransform: 'uppercase', letterSpacing: '0.08em' }}>WHAT'S INCLUDED</div>
          <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: '48px', fontWeight: 700, color: '#151561', letterSpacing: '-0.02em', lineHeight: '1.2' }}>Complete Mobile App Package</h2>
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
