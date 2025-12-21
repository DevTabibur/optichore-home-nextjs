import { Megaphone, PenTool, Code, Smartphone, Palette, Box } from 'lucide-react';
import { SafeLink } from './SafeLink';

export function ServicesDropdown() {
  const services = [
    {
      icon: <Megaphone className="w-5 h-5" />,
      title: 'Facebook Marketing',
      description: 'Meta Ads & Social Strategy',
      link: '/facebook-marketing',
    },
    {
      icon: <PenTool className="w-5 h-5" />,
      title: 'Web Design',
      description: 'Modern website design',
      link: '/web-design',
    },
    {
      icon: <Code className="w-5 h-5" />,
      title: 'Web Development',
      description: 'Custom websites & apps',
      link: '/web-development',
    },
    {
      icon: <Palette className="w-5 h-5" />,
      title: 'UI/UX Design',
      description: 'User experience design',
      link: '/uiux-design',
    },
    {
      icon: <Palette className="w-5 h-5" />,
      title: 'Brand Identity',
      description: 'Logo & brand design',
      link: '/brand-identity',
    },
    {
      icon: <Box className="w-5 h-5" />,
      title: 'Software Development',
      description: 'Custom software solutions',
      link: '/software-development',
    },
    {
      icon: <Smartphone className="w-5 h-5" />,
      title: 'Mobile App Development',
      description: 'iOS & Android apps',
      link: '/mobile-app-development',
    },
  ];

  return (
    <div className="dropdown-container absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[720px] animate-dropdown-fade-down">
      <div 
        className="dropdown-inner rounded-[10px] p-8"
        style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid rgba(0, 0, 0, 0.08)',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div className="services-grid grid grid-cols-3 gap-6">
          {services.map((service, index) => (
            <SafeLink
              key={index}
              to={service.link}
              className="service-card group p-4 rounded-lg hover:bg-gray-50 transition-all duration-200"
            >
              <div className="flex flex-col gap-2.5">
                <div 
                  className="service-icon transition-colors duration-200"
                  style={{ color: '#FF0000' }}
                >
                  {service.icon}
                </div>
                <h3 
                  className="font-semibold text-[15px] group-hover:opacity-70 transition-opacity"
                  style={{ color: '#151561' }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-600 text-[13px] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </SafeLink>
          ))}
        </div>
        
        <div 
          className="dropdown-footer mt-6 pt-6"
          style={{ borderTop: '1px solid rgba(0, 0, 0, 0.06)' }}
        >
          <SafeLink 
            to="/services" 
            className="view-all-link text-[14px] font-medium transition-opacity hover:opacity-70 inline-flex items-center gap-2"
            style={{ color: '#FF0000' }}
          >
            View all services
            <span>→</span>
          </SafeLink>
        </div>
      </div>
    </div>
  );
}