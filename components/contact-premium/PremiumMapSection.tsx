import { MapPin } from 'lucide-react';

export function PremiumMapSection() {
  return (
    <section className="premium-map-section py-24" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="map-section-container max-w-[1440px] mx-auto px-12">
        {/* Map Container */}
        <div 
          className="map-container-premium"
          style={{
            position: 'relative',
            width: '100%',
            height: '480px',
            borderRadius: '32px',
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
            border: '1px solid rgba(0, 0, 0, 0.06)',
            background: 'linear-gradient(135deg, #F8F9FF 0%, #FFFFFF 100%)',
          }}
        >
          {/* Map Placeholder */}
          <div 
            className="map-inner-content"
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            {/* Decorative Grid Pattern */}
            <div 
              className="map-grid-pattern"
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `linear-gradient(rgba(21, 21, 97, 0.03) 1px, transparent 1px),
                                  linear-gradient(90deg, rgba(21, 21, 97, 0.03) 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
              }}
            />

            {/* Center Pin Icon */}
            <div 
              className="map-center-content"
              style={{
                position: 'relative',
                zIndex: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px',
              }}
            >
              <div 
                className="map-pin-icon"
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: '#FF0000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 24px rgba(255, 0, 0, 0.35)',
                }}
              >
                <MapPin className="map-pin-svg w-8 h-8" style={{ color: '#FFFFFF' }} />
              </div>

              <div 
                className="map-text-content"
                style={{
                  textAlign: 'center',
                }}
              >
                <div 
                  className="map-location-title"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '20px',
                    fontWeight: 600,
                    color: '#151561',
                    marginBottom: '4px',
                  }}
                >
                  Optichore HQ — London, UK
                </div>
                <div 
                  className="map-location-address"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    fontWeight: 400,
                    color: '#505050',
                  }}
                >
                  84–86 Roman Road, E2 0PJ
                </div>
              </div>
            </div>

            {/* Subtle Abstract Circles */}
            <div 
              className="map-decorative-circle-1"
              style={{
                position: 'absolute',
                top: '15%',
                left: '10%',
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                background: 'rgba(21, 21, 97, 0.04)',
                filter: 'blur(60px)',
              }}
            />
            <div 
              className="map-decorative-circle-2"
              style={{
                position: 'absolute',
                bottom: '20%',
                right: '12%',
                width: '220px',
                height: '220px',
                borderRadius: '50%',
                background: 'rgba(255, 0, 0, 0.04)',
                filter: 'blur(70px)',
              }}
            />
          </div>

          {/* Optional: Embed Real Map */}
          {/* Uncomment to use Google Maps iframe */}
          {/* 
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.1234567890!2d-0.0556789!3d51.5287654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMxJzQzLjYiTiAwwrAwMycyMC40Ilc!5e0!3m2!1sen!2suk!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          */}
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .map-container-premium {
          animation: mapFadeIn 1s ease forwards;
        }

        @keyframes mapFadeIn {
          from {
            opacity: 0;
            transform: scale(0.98);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .map-pin-icon {
          animation: pinBounce 2s ease-in-out infinite;
        }

        @keyframes pinBounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        /* ===== TABLET BREAKPOINT (768px - 1024px) ===== */
        @media (min-width: 768px) and (max-width: 1024px) {
          .premium-map-section {
            padding-top: 4rem;
            padding-bottom: 4rem;
          }

          .map-section-container {
            padding-left: 2rem;
            padding-right: 2rem;
          }

          .map-container-premium {
            height: 380px !important;
            border-radius: 28px !important;
          }

          .map-pin-icon {
            width: 56px !important;
            height: 56px !important;
          }

          .map-pin-svg {
            width: 1.75rem !important;
            height: 1.75rem !important;
          }

          .map-location-title {
            font-size: 18px !important;
          }

          .map-location-address {
            font-size: 15px !important;
          }
        }

        /* ===== MOBILE BREAKPOINT (≤414px) ===== */
        @media (max-width: 414px) {
          .premium-map-section {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }

          .map-section-container {
            padding-left: 1.25rem;
            padding-right: 1.25rem;
          }

          .map-container-premium {
            height: 320px !important;
            border-radius: 24px !important;
          }

          .map-center-content {
            gap: 12px !important;
          }

          .map-pin-icon {
            width: 48px !important;
            height: 48px !important;
          }

          .map-pin-svg {
            width: 1.5rem !important;
            height: 1.5rem !important;
          }

          .map-location-title {
            font-size: 16px !important;
            margin-bottom: 6px !important;
          }

          .map-location-address {
            font-size: 14px !important;
            max-width: 85%;
            margin: 0 auto;
          }

          /* Hide decorative circles on mobile for cleaner look */
          .map-decorative-circle-1,
          .map-decorative-circle-2 {
            display: none;
          }

          /* Disable pin bounce animation on mobile */
          .map-pin-icon {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}