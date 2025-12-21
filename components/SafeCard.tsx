import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { isValidRoute } from './SafeLink';

interface SafeCardProps {
  to?: string;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

/**
 * SafeCard Component
 * Automatically disables clickable cards that navigate to non-existent pages.
 * Removes hover effects, pointer cursor, and sets opacity to 60%.
 */
export function SafeCard({ to, children, className = '', style = {}, onClick }: SafeCardProps) {
  const navigate = useNavigate();
  
  // Check if destination is valid
  const isValid = !to || isValidRoute(to);
  
  const handleClick = () => {
    if (!isValid) return;
    
    if (onClick) {
      onClick();
    }
    
    if (to && !to.startsWith('#') && !to.startsWith('http')) {
      navigate(to);
    } else if (to && to.startsWith('http')) {
      window.location.href = to;
    }
  };
  
  // If valid, render clickable div
  if (isValid && to) {
    return (
      <div
        className={className}
        style={{
          ...style,
          cursor: 'pointer',
        }}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleClick();
          }
        }}
      >
        {children}
      </div>
    );
  }
  
  // If no destination or valid without click
  if (isValid) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }
  
  // If invalid, render disabled card
  return (
    <div
      className={`${className} safe-card-disabled`}
      style={{
        ...style,
        cursor: 'not-allowed',
        opacity: 0.6,
        pointerEvents: 'none',
      }}
    >
      {children}
    </div>
  );
}
