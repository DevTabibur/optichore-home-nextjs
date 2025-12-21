import { SafeLink } from '../SafeLink';
import { Home, Briefcase, BookOpen, FileText } from 'lucide-react';

export function SitemapGrid() {
  // ONLY LIVE PAGES - No "Coming Soon" items
  const sitemapSections = [
    {
      title: 'Company',
      icon: Home,
      links: [
        { label: 'Home', path: '/' },
        { label: 'About Us', path: '/about' },
        { label: 'Contact', path: '/contact' },
        { label: 'Book a Consultation', path: '/consultation' },
      ],
    },
    {
      title: 'Services',
      icon: Briefcase,
      links: [
        { label: 'All Services', path: '/services' },
        { label: 'Facebook Marketing', path: '/services/facebook-marketing' },
        { label: 'Ads Management', path: '/services/ads-management' },
        { label: 'Creative Strategy', path: '/services/creative-strategy' },
        { label: 'Account Optimization', path: '/services/account-optimization' },
        { label: 'Meta Pixel Setup', path: '/services/meta-pixel-setup' },
        { label: 'Event Tracking', path: '/services/event-tracking' },
        { label: 'Analytics & Reports', path: '/services/analytics-reports' },
      ],
    },
    {
      title: 'Resources',
      icon: BookOpen,
      links: [
        { label: 'Blog & Insights', path: '/blog' },
        { label: 'Blog Categories', path: '/blog/categories' },
        { label: 'Blog Tags', path: '/blog/tags' },
        { label: 'Blog Authors', path: '/blog/authors' },
        { label: 'FAQ', path: '/faq' },
        { label: 'Sitemap', path: '/sitemap' },
      ],
    },
    {
      title: 'Legal',
      icon: FileText,
      links: [
        { label: 'Privacy Policy', path: '/privacy' },
        { label: 'Terms & Conditions', path: '/terms' },
      ],
    },
  ];

  return (
    <section 
      className="sitemap-grid-section w-full"
      style={{
        padding: '80px 0 100px',
        background: '#FFFFFF',
      }}
    >
      <div className="max-w-[1440px] mx-auto px-12">
        {/* Sitemap Grid - 4 Column Cards */}
        <div 
          className="sitemap-cards-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '28px',
            maxWidth: '1280px',
            margin: '0 auto',
          }}
        >
          {sitemapSections.map((section, index) => {
            const IconComponent = section.icon;
            
            return (
              <div
                key={index}
                className="sitemap-section-card"
                style={{
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  padding: '28px',
                  boxShadow: '0 4px 24px rgba(21, 21, 97, 0.08)',
                  border: '1px solid rgba(21, 21, 97, 0.06)',
                  transition: 'all 0.3s ease',
                  animationDelay: `${index * 0.1}s`,
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
              >
                {/* Card Header with Icon */}
                <div 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '24px',
                    paddingBottom: '20px',
                    borderBottom: '2px solid rgba(21, 21, 97, 0.08)',
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #FF0000 0%, #FF3333 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <IconComponent size={20} color="#FFFFFF" />
                  </div>
                  
                  <h2
                    className="sitemap-card-title"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '22px',
                      fontWeight: 700,
                      color: '#151561',
                      letterSpacing: '-0.01em',
                      lineHeight: '1.3',
                      margin: 0,
                    }}
                  >
                    {section.title}
                  </h2>
                </div>

                {/* Card Links */}
                <ul
                  className="sitemap-card-links"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    flex: 1,
                  }}
                >
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <SafeLink
                        href={link.path}
                        className="sitemap-card-link"
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '16px',
                          fontWeight: 400,
                          color: '#151561',
                          textDecoration: 'none',
                          display: 'inline-block',
                          position: 'relative',
                          transition: 'all 0.3s ease',
                          lineHeight: '1.6',
                        }}
                      >
                        {link.label}
                      </SafeLink>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* ANIMATIONS & STYLES */}
      <style>{`
        /* Card Fade-Up Animation */
        @keyframes sitemapCardFade {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .sitemap-section-card {
          opacity: 0;
          animation: sitemapCardFade 0.7s ease forwards;
        }

        /* Card Hover Effect */
        .sitemap-section-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(21, 21, 97, 0.12);
        }

        /* Link Hover Effect */
        .sitemap-card-link {
          padding-left: 0;
          padding-bottom: 2px;
          border-bottom: 2px solid transparent;
        }

        .sitemap-card-link:hover {
          color: #FF0000;
          border-bottom-color: #FF0000;
          padding-left: 8px;
        }

        /* Responsive Grid - Tablet (2 Columns) */
        @media (max-width: 1024px) {
          .sitemap-grid-section {
            padding: 60px 0 80px !important;
          }

          .sitemap-cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 24px !important;
          }

          .sitemap-section-card {
            padding: 24px !important;
          }

          .sitemap-card-title {
            font-size: 20px !important;
          }

          .sitemap-card-links {
            gap: 12px !important;
          }

          .sitemap-card-link {
            font-size: 15px !important;
          }
        }

        /* Responsive Grid - Mobile (1 Column) */
        @media (max-width: 767px) {
          .sitemap-grid-section {
            padding: 50px 0 70px !important;
          }

          .sitemap-cards-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }

          .sitemap-section-card {
            padding: 24px 20px !important;
          }

          .sitemap-card-title {
            font-size: 19px !important;
          }

          .sitemap-card-links {
            gap: 14px !important;
          }

          .sitemap-card-link {
            font-size: 15px !important;
            min-height: 44px !important;
            display: flex !important;
            align-items: center !important;
          }
        }

        /* Smooth Scroll */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </section>
  );
}
