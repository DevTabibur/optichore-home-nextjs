import { ArrowRight } from 'lucide-react';
import { SafeLink } from './SafeLink';
import { SafeCard } from './SafeCard';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function BlogPreview() {
  const blogPosts = [
    {
      image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzYzNDk3MTQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Digital Marketing',
      categoryColor: '#FF0000',
      title: '10 Facebook Ad Strategies That Drive Real Results in 2025',
      excerpt: 'Discover proven tactics to optimize your Facebook advertising campaigns and achieve higher ROAS.',
    },
    {
      image: 'https://images.unsplash.com/photo-1622782914767-404fb9ab3f57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NjM1OTYzOTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Analytics',
      categoryColor: '#151561',
      title: 'How to Measure Marketing ROI: A Complete Guide',
      excerpt: 'Learn the metrics and tools you need to track performance and prove marketing value.',
    },
    {
      image: 'https://images.unsplash.com/photo-1603985585179-3d71c35a537c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYzNTE0ODU0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Web Design',
      categoryColor: '#151561',
      title: 'The Future of Web Design: Trends to Watch',
      excerpt: 'Explore emerging design trends and technologies shaping the future of digital experiences.',
    },
  ];

  return (
    <section 
      className="blog-preview-section w-full lg:py-32 md:py-24 py-20"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      {/* RESPONSIVE CONTAINER */}
      <div className="blog-preview-container max-w-[1440px] mx-auto lg:px-12 md:px-8 px-6">
        
        {/* ========================================== */}
        {/* DESKTOP VARIANT (≥1024px) — LOCKED        */}
        {/* ========================================== */}
        <div className="hidden lg:block">
          {/* Section Header */}
          <div className="section-header-blog text-center mb-16 space-y-5">
            {/* Label */}
            <div 
              className="blog-label-animated"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                fontWeight: 500,
                color: '#FF0000',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              FROM OUR BLOG
            </div>

            {/* Main Heading */}
            <h2 
              className="blog-main-heading-animated leading-tight max-w-[720px] mx-auto"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '44px',
                fontWeight: 700,
                color: '#151561',
                letterSpacing: '-0.01em',
              }}
            >
              Latest Insights & Articles
            </h2>

            {/* Subtitle */}
            <p 
              className="blog-subtitle-animated max-w-[780px] mx-auto"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '18px',
                fontWeight: 400,
                color: '#505050',
                lineHeight: '1.7',
              }}
            >
              Explore expert insights, marketing strategies, and technology updates.
            </p>
          </div>

          {/* 3 Blog Cards Grid */}
          <div className="blog-cards-grid grid grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="blog-card-premium group overflow-hidden"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  boxShadow: '0 6px 24px rgba(0, 0, 0, 0.07)',
                  border: '1px solid rgba(0, 0, 0, 0.04)',
                  animationDelay: `${index * 120}ms`,
                }}
              >
                {/* Image Container */}
                <div className="blog-image-container overflow-hidden" style={{ borderRadius: '16px 16px 0 0' }}>
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content Block */}
                <div className="blog-card-content p-6 space-y-4">
                  {/* Category Tag */}
                  <div 
                    className="blog-category-tag inline-block px-3 py-1.5 rounded-full"
                    style={{
                      backgroundColor: `${post.categoryColor}15`,
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '12px',
                      fontWeight: 600,
                      color: post.categoryColor,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {post.category}
                  </div>

                  {/* Title */}
                  <h3 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '24px',
                      fontWeight: 600,
                      color: '#151561',
                      lineHeight: '1.3',
                    }}
                  >
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      fontWeight: 400,
                      color: '#505050',
                      lineHeight: '1.6',
                    }}
                  >
                    {post.excerpt}
                  </p>

                  {/* Read More Link */}
                  <SafeLink
                    href="#blog-post"
                    className="blog-read-more-link inline-flex items-center gap-2 pt-2"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '15px',
                      fontWeight: 500,
                      color: '#151561',
                    }}
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </SafeLink>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================== */}
        {/* TABLET/MOBILE VARIANTS (<1024px)          */}
        {/* ========================================== */}
        <div className="lg:hidden">
          {/* Section Header */}
          <div className="section-header-blog-responsive text-center md:mb-16 mb-12 space-y-5">
            {/* Label */}
            <div 
              className="blog-label-responsive"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                fontWeight: 500,
                color: '#FF0000',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              FROM OUR BLOG
            </div>

            {/* Main Heading - Responsive font size */}
            <h2 
              className="blog-main-heading-responsive leading-tight max-w-[720px] mx-auto md:text-[38px] text-[32px]"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                color: '#151561',
                letterSpacing: '-0.01em',
              }}
            >
              Latest Insights & Articles
            </h2>

            {/* Subtitle - Responsive font size */}
            <p 
              className="blog-subtitle-responsive max-w-[780px] mx-auto md:text-[17px] text-[16px]"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                color: '#505050',
                lineHeight: '1.7',
              }}
            >
              Explore expert insights, marketing strategies, and technology updates.
            </p>
          </div>

          {/* Responsive Blog Cards Grid - Tablet: 2 columns | Mobile: 1 column */}
          <div className="blog-cards-grid-responsive grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-6">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="blog-card-responsive group overflow-hidden"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  boxShadow: '0 6px 24px rgba(0, 0, 0, 0.07)',
                  border: '1px solid rgba(0, 0, 0, 0.04)',
                  animationDelay: `${index * 120}ms`,
                }}
              >
                {/* Image Container */}
                <div className="blog-image-container overflow-hidden" style={{ borderRadius: '16px 16px 0 0' }}>
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content Block */}
                <div className="blog-card-content p-6 space-y-4">
                  {/* Category Tag */}
                  <div 
                    className="blog-category-tag inline-block px-3 py-1.5 rounded-full"
                    style={{
                      backgroundColor: `${post.categoryColor}15`,
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '12px',
                      fontWeight: 600,
                      color: post.categoryColor,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {post.category}
                  </div>

                  {/* Title */}
                  <h3 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '24px',
                      fontWeight: 600,
                      color: '#151561',
                      lineHeight: '1.3',
                    }}
                  >
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      fontWeight: 400,
                      color: '#505050',
                      lineHeight: '1.6',
                    }}
                  >
                    {post.excerpt}
                  </p>

                  {/* Read More Link */}
                  <SafeLink
                    href="#blog-post"
                    className="blog-read-more-link inline-flex items-center gap-2 pt-2"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '15px',
                      fontWeight: 500,
                      color: '#151561',
                    }}
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </SafeLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
