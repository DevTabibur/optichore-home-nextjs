import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function PremiumContactCards() {
  const cards = [
    {
      icon: Phone,
      title: 'Call Us',
      content: '+440 7404 557047',
      link: 'tel:+4407404557047',
      delay: '0ms',
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'info@optichore.com',
      link: 'mailto:info@optichore.com',
      delay: '100ms',
    },
    {
      icon: MapPin,
      title: 'Visit Our Office',
      content: '84–86 Roman Road, London, E2 0PJ',
      link: 'https://maps.google.com',
      delay: '200ms',
    },
    {
      icon: Clock,
      title: 'Office Hours',
      content: 'Mon–Sat: 09:00 AM – 06:00 PM\nSunday: Closed',
      link: null,
      delay: '300ms',
    },
  ];

  return (
    <section className="premium-contact-cards-section py-24" style={{ backgroundColor: '#F8F9FF' }}>
      <div className="contact-cards-container max-w-[1440px] mx-auto px-12">
        {/* Grid Layout - 4 Cards in Single Row */}
        <div className="contact-cards-grid grid grid-cols-4 gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            const CardWrapper = card.link ? 'a' : 'div';
            const cardProps = card.link 
              ? { href: card.link, target: card.link?.startsWith('http') ? '_blank' : undefined, rel: card.link?.startsWith('http') ? 'noopener noreferrer' : undefined }
              : {};

            return (
              <CardWrapper
                key={index}
                {...cardProps}
                className="premium-contact-card"
                style={{
                  animationDelay: card.delay,
                  textDecoration: 'none',
                  display: 'block',
                }}
              >
                <div className="card-inner">
                  {/* Icon */}
                  <div 
                    className="card-icon-wrapper"
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '16px',
                      background: 'linear-gradient(135deg, rgba(21, 21, 97, 0.05) 0%, rgba(255, 0, 0, 0.08) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                    }}
                  >
                    <Icon className="w-6 h-6" style={{ color: '#FF0000' }} />
                  </div>

                  {/* Title */}
                  <h3 
                    className="contact-card-title"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '20px',
                      fontWeight: 600,
                      color: '#151561',
                      marginBottom: '12px',
                    }}
                  >
                    {card.title}
                  </h3>

                  {/* Content */}
                  <p 
                    className="contact-card-content"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      fontWeight: 400,
                      color: '#505050',
                      lineHeight: '1.6',
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {card.content}
                  </p>
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>

      {/* Styles */}
      <style>{`
        @keyframes cardFadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .premium-contact-card {
          background: #FFFFFF;
          border-radius: 28px;
          border: 1px solid rgba(0, 0, 0, 0.06);
          padding: 36px 28px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          animation: cardFadeIn 0.8s ease forwards;
          opacity: 0;
          cursor: pointer;
        }

        .premium-contact-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(21, 21, 97, 0.12), 0 0 0 1px rgba(255, 0, 0, 0.08);
        }

        .premium-contact-card .card-icon-wrapper {
          transition: transform 0.3s ease;
        }

        .premium-contact-card:hover .card-icon-wrapper {
          transform: scale(1.1);
        }

        /* ===== TABLET BREAKPOINT (768px - 1024px) ===== */
        @media (min-width: 768px) and (max-width: 1024px) {
          .premium-contact-cards-section {
            padding-top: 4rem;
            padding-bottom: 4rem;
          }

          .contact-cards-container {
            padding-left: 2rem;
            padding-right: 2rem;
          }

          .contact-cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.5rem !important;
          }

          .premium-contact-card {
            padding: 32px 24px;
          }

          .contact-card-title {
            font-size: 18px !important;
          }

          .contact-card-content {
            font-size: 15px !important;
          }
        }

        /* ===== MOBILE BREAKPOINT (≤414px) ===== */
        @media (max-width: 414px) {
          .premium-contact-cards-section {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }

          .contact-cards-container {
            padding-left: 1.25rem;
            padding-right: 1.25rem;
          }

          .contact-cards-grid {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }

          .premium-contact-card {
            padding: 24px 20px;
            border-radius: 20px;
          }

          .premium-contact-card .card-inner {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }

          .premium-contact-card .card-icon-wrapper {
            width: 48px !important;
            height: 48px !important;
            margin-bottom: 16px !important;
          }

          .contact-card-title {
            font-size: 18px !important;
            text-align: left;
            margin-bottom: 8px !important;
          }

          .contact-card-content {
            font-size: 15px !important;
            text-align: left;
          }

          /* Disable hover effect on mobile */
          .premium-contact-card:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}