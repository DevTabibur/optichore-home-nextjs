"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';

// Define all valid routes in your application
const VALID_ROUTES = [
  '/',
  '/about',
  '/contact',
  '/faq',
  '/privacy',
  '/terms',
  '/sitemap',
  '/services',
  '/consultation',
  '/facebook-marketing',
  '/web-design',
  '/web-development',
  '/uiux-design',
  '/brand-identity',
  '/software-development',
  '/mobile-app-development',
  '/blog',
  '/blog/facebook-marketing-guide',
  '/blog/category/facebook-marketing',
  '/blog/category/design',
  '/blog/category/development',
  '/blog/category/uiux',
  '/blog/category/branding',
  '/blog/category/tips',
  '/blog/category/company-news',
  '/blog/tag/social-media',
  '/blog/tag/advertising',
  '/blog/tag/web-design',
  '/blog/tag/mobile',
  '/blog/tag/branding',
  '/blog/tag/seo',
  '/blog/tag/user-experience',
  '/blog/tag/digital-marketing',
  '/blog/tag/trends',
  '/blog/tag/strategy',
  '/blog/author/sarah-johnson',
  '/error-404',
  '/error-403',
  '/error-500',
  '/error-503',
  '/error-400',
];

interface SafeLinkProps extends Omit<LinkProps, 'to'> {
  href: string;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  disabledClassName?: string;
}

/**
 * SafeLink Component
 * Automatically disables links that don't have valid destination pages.
 * Keeps the text visible but removes click interaction and hover effects.
 */
export function SafeLink({ href, children, className = '', style = {}, disabledClassName = '', ...rest }: SafeLinkProps) {
  // Check if the route is valid
  const isValidRoute = VALID_ROUTES.includes(href) || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');
  
  // If valid route, render normal Link
  if (isValidRoute) {
    // External links or hash links
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      return (
        <Link href={href} className={className} style={style} {...rest}>
          {children}
        </Link>
      );
    }
    
    // Hash links
    if (href.startsWith('#')) {
      return (
        <Link href={href} className={className} style={style} {...rest}>
          {children}
        </Link>
      );
    }
    
    // Internal routes
    return (
      <Link href={href} className={className} style={style} {...rest}>
        {children}
      </Link>
    );
  }
  
  // If invalid route, render disabled span with global disabled styling
  return (
    <span
      className={`${className} ${disabledClassName} safe-link-disabled`}
      style={{
        ...style,
        cursor: 'not-allowed',
        opacity: 0.6,
        pointerEvents: 'none',
      }}
      {...rest}
    >
      {children}
    </span>
  );
}

// Check if a route is valid (utility function for other components)
export function isValidRoute(route: string): boolean {
  return VALID_ROUTES.includes(route) || route.startsWith('#') || route.startsWith('http') || route.startsWith('mailto:') || route.startsWith('tel:');
}