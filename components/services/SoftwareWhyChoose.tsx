import { TrendingUp, Shield, Layers } from 'lucide-react';

export function SoftwareWhyChoose() {
  const reasons = [
    { icon: <TrendingUp className="w-7 h-7" />, title: 'Scalable engineering', description: 'Build solutions that grow seamlessly with your business needs.' },
    { icon: <Shield className="w-7 h-7" />, title: 'Secure infrastructure', description: 'Industry-leading security practices to protect your data and users.' },
    { icon: <Layers className="w-7 h-7" />, title: 'Modern tech stack', description: 'Using the latest technologies for optimal performance and maintainability.' },
  ];

  return (
    <section className="software-why-section w-full py-32" style={{ backgroundColor: '#F8FAFF' }}>
      <div className="max-w-[1440px] mx-auto px-12">
        <div className="text-center mb-20 space-y-4">
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 600, color: '#FF0000', textTransform: 'uppercase', letterSpacing: '0.08em' }}>WHY CHOOSE US</div>
          <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: '48px', fontWeight: 700, color: '#151561', letterSpacing: '-0.02em', lineHeight: '1.2' }}>Our Software Excellence</h2>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="why-card group" style={{ backgroundColor: '#FFFFFF', padding: '40px', borderRadius: '20px', border: '2px solid rgba(0, 0, 0, 0.06)', boxShadow: '0 6px 20px rgba(0, 0, 0, 0.05)', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)', animationDelay: `${index * 100}ms` }}>
              <div className="icon-box mb-6" style={{ width: '72px', height: '72px', borderRadius: '16px', background: 'linear-gradient(135deg, #151561 0%, #1a1a7a 100%)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', boxShadow: '0 8px 20px rgba(21, 21, 97, 0.2)' }}>{reason.icon}</div>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '26px', fontWeight: 600, color: '#151561', marginBottom: '16px', lineHeight: '1.3' }}>{reason.title}</h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 400, color: '#505050', lineHeight: '1.7' }}>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`.why-card { animation: whyCardSlide 0.7s ease forwards; opacity: 0; } @keyframes whyCardSlide { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); }} .why-card:hover { transform: translateY(-8px); border-color: rgba(21, 21, 97, 0.25); box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12); } .why-card:hover .icon-box { transform: scale(1.08) rotate(3deg); box-shadow: 0 12px 28px rgba(21, 21, 97, 0.35); }`}</style>
    </section>
  );
}
