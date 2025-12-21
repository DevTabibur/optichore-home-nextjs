import { ReactNode, ButtonHTMLAttributes } from 'react';
import { useNavigate } from 'react-router-dom';
import { isValidRoute } from './SafeLink';

interface SafeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  to?: string;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  href?: string;
}

/**
 * SafeButton Component
 * Automatically disables buttons that navigate to non-existent pages.
 * Removes hover effects, pointer cursor, and sets opacity to 60%.
 */
export function SafeButton({ to, href, children, className = '', style = {}, onClick, ...rest }: SafeButtonProps) {
  const navigate = useNavigate();
  const destination = to || href;
  
  // Check if destination is valid
  const isValid = !destination || isValidRoute(destination);
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isValid) {
      e.preventDefault();
      return;
    }
    
    if (onClick) {
      onClick(e);
    }
    
    if (destination && !destination.startsWith('#') && !destination.startsWith('http') && !destination.startsWith('mailto:') && !destination.startsWith('tel:')) {
      navigate(destination);
    } else if (destination && (destination.startsWith('http') || destination.startsWith('mailto:') || destination.startsWith('tel:'))) {
      window.location.href = destination;
    }
  };
  
  return (
    <button
      className={`${className} ${!isValid ? 'safe-button-disabled' : ''}`}
      style={{
        ...style,
        ...(isValid ? {} : {
          cursor: 'not-allowed',
          opacity: 0.6,
          pointerEvents: 'none',
        }),
      }}
      onClick={handleClick}
      disabled={!isValid}
      {...rest}
    >
      {children}
    </button>
  );
}
