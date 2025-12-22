import { Clock, Loader2 } from 'lucide-react';
import { SafeLink } from './SafeLink';

interface ConsultationOverlayProps {
  /**
   * Controls whether the overlay is visible
   */
  isActive?: boolean;
  /**
   * Overlay style variant:
   * - 'coming-soon': Static clock icon for upcoming feature
   * - 'in-progress': Animated loader for active development
   */
  variant?: 'coming-soon' | 'in-progress';
  /**
   * Optional: Show CTA button
   * - 'notify': Show "Notify Me" button
   * - 'contact': Show "Contact Support" button
   * - 'none': No CTA button (default)
   */
  ctaType?: 'notify' | 'contact' | 'none';
  /**
   * Optional custom callback for CTA button
   */
  onCtaClick?: () => void;
}

export function ConsultationOverlay({ 
  isActive = true, 
  variant = 'coming-soon',
  ctaType = 'contact',
  onCtaClick 
}: ConsultationOverlayProps) {
  if (!isActive) return null;

  const isComingSoon = variant === 'coming-soon';

  return (
    <div 
      className="consultation-overlay"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(255, 255, 255, 0.88)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        borderRadius: 'inherit',
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        boxShadow: 'inset 0 0 60px rgba(21, 21, 97, 0.04)',
      }}
    >
      <div 
        className="overlay-content-wrapper"
        style={{
          maxWidth: '500px',
          width: '100%',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        {/* Icon Circle */}
        <div 
          className="overlay-icon-container"
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: isComingSoon 
              ? 'linear-gradient(135deg, rgba(255, 0, 0, 0.08) 0%, rgba(255, 0, 0, 0.12) 100%)'
              : 'linear-gradient(135deg, rgba(21, 21, 97, 0.06) 0%, rgba(21, 21, 97, 0.1) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: isComingSoon
              ? '0 8px 24px rgba(255, 0, 0, 0.15)'
              : '0 8px 24px rgba(21, 21, 97, 0.12)',
            marginBottom: '8px',
          }}
        >
          {isComingSoon ? (
            <Clock 
              size={36} 
              color="#FF0000"
              strokeWidth={2}
            />
          ) : (
            <Loader2 
              size={36} 
              color="#151561"
              strokeWidth={2}
              className="overlay-spinner"
              style={{
                animation: 'spin 1.5s linear infinite',
              }}
            />
          )}
        </div>

        {/* Title */}
        <h3 
          className="overlay-title"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '28px',
            fontWeight: 700,
            color: '#151561',
            letterSpacing: '-0.01em',
            lineHeight: '1.3',
            margin: 0,
          }}
        >
          {isComingSoon 
            ? 'Consultation Booking Coming Soon'
            : "We're Setting Things Up"
          }
        </h3>

        {/* Description */}
        <p 
          className="overlay-description"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '16px',
            fontWeight: 400,
            color: '#6B7280',
            lineHeight: '1.6',
            margin: 0,
          }}
        >
          This feature is currently under development. Please check back shortly.
        </p>

        {/* Secondary Line */}
        <p 
          className="overlay-secondary-text"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
            fontWeight: 500,
            color: '#9CA3AF',
            lineHeight: '1.5',
            margin: 0,
          }}
        >
          You can still contact us for urgent inquiries.
        </p>

        {/* CTA Button (Optional) */}
        {ctaType !== 'none' && (
          <div style={{ marginTop: '8px' }}>
            {ctaType === 'contact' ? (
              <SafeLink href="/contact">
                <button
                  className="overlay-cta-btn"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#FF0000',
                    background: 'transparent',
                    border: '2px solid #FF0000',
                    borderRadius: '50px',
                    padding: '14px 36px',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#FF0000';
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(255, 0, 0, 0.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#FF0000';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  Contact Support
                </button>
              </SafeLink>
            ) : (
              <button
                onClick={onCtaClick}
                className="overlay-cta-btn"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  fontWeight: 600,
                  color: '#FF0000',
                  background: 'transparent',
                  border: '2px solid #FF0000',
                  borderRadius: '50px',
                  padding: '14px 36px',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#FF0000';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(255, 0, 0, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#FF0000';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Notify Me
              </button>
            )}
          </div>
        )}
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
          .consultation-overlay {
            padding: 20px !important;
          }

          .overlay-icon-container {
            width: 64px !important;
            height: 64px !important;
          }

          .overlay-icon-container svg {
            width: 28px !important;
            height: 28px !important;
          }

          .overlay-title {
            font-size: 22px !important;
          }

          .overlay-description {
            font-size: 15px !important;
          }

          .overlay-secondary-text {
            font-size: 13px !important;
          }

          .overlay-cta-btn {
            width: 100% !important;
            font-size: 15px !important;
            padding: 12px 28px !important;
          }
        }

        @media (max-width: 480px) {
          .overlay-title {
            font-size: 20px !important;
          }

          .overlay-description {
            font-size: 14px !important;
          }
        }
      `}</style>
    </div>
  );
}