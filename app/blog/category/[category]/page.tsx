/* eslint-disable react-hooks/set-state-in-effect */
"use client"
import { useState, useEffect } from 'react';

import { Search } from 'lucide-react';
import { useParams } from 'next/navigation';
import { SafeLink } from '@/components/SafeLink';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';


interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  imageUrl: string;
  slug?: string;
  isFeatured?: boolean;
}

const categoryData: Record<string, { name: string; description: string }> = {
  'facebook-marketing': {
    name: 'Facebook Marketing',
    description: 'Explore proven strategies, best practices, and expert insights to maximize your Facebook advertising ROI and grow your business through effective social media marketing.',
  },
  'design': {
    name: 'Design',
    description: 'Discover the latest trends, techniques, and creative approaches in web design, graphic design, and visual storytelling that captivate audiences and drive engagement.',
  },
  'development': {
    name: 'Development',
    description: 'Stay ahead with cutting-edge development practices, coding techniques, and technology insights for building scalable, high-performance web and mobile applications.',
  },
  'uiux': {
    name: 'UI/UX',
    description: 'Learn how to create intuitive, user-centered designs that enhance user experience and drive meaningful interactions through thoughtful interface design and usability principles.',
  },
  'branding': {
    name: 'Branding',
    description: 'Build powerful brand identities that resonate with your audience. Explore strategies for brand positioning, visual identity, and creating memorable brand experiences.',
  },
  'tips': {
    name: 'Tips',
    description: 'Practical tips, actionable advice, and quick wins to help you improve your digital marketing, design, and development efforts with proven techniques.',
  },
  'company-news': {
    name: 'Company News',
    description: 'Stay updated with the latest news, announcements, and insights from Optichore. Learn about our projects, team updates, and industry perspectives.',
  },
};

const allBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Ultimate Guide to Facebook Marketing in 2024',
    excerpt: 'Discover the latest strategies and best practices for running successful Facebook marketing campaigns that drive real business results.',
    category: 'Facebook Marketing',
    date: 'November 15, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZ3xlbnwxfHx8fDE3NjM2NTgwNzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    slug: '/blog/facebook-marketing-guide',
    isFeatured: true,
  },
  {
    id: '2',
    title: 'Modern Web Design Trends That Will Dominate 2024',
    excerpt: 'Explore the cutting-edge web design trends that are shaping the digital landscape and learn how to implement them in your projects.',
    category: 'Design',
    date: 'November 12, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1603985585179-3d71c35a537c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYzNjgwOTc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    isFeatured: true,
  },
  {
    id: '3',
    title: 'Building Scalable Mobile Apps: Best Practices',
    excerpt: 'Learn the essential principles and techniques for developing mobile applications that can scale with your growing user base.',
    category: 'Development',
    date: 'November 10, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjM2MzM1NDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    isFeatured: true,
  },
  {
    id: '4',
    title: 'UI/UX Design Principles for Better User Experience',
    excerpt: 'Master the fundamental UI/UX design principles that create intuitive, engaging, and user-friendly digital experiences.',
    category: 'UI/UX',
    date: 'November 8, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHV4JTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2MzYxNTQ2OHww&ixlib=rb-4.1.0&q=80&w=1080',
    isFeatured: true,
  },
  {
    id: '5',
    title: 'Creating a Strong Brand Identity: A Complete Guide',
    excerpt: 'Develop a powerful brand identity that resonates with your target audience and sets you apart from the competition.',
    category: 'Branding',
    date: 'November 5, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1633533451976-992e226e32d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwZGVzaWdufGVufDF8fHx8MTc2MzYwMDk4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    isFeatured: true,
  },
  {
    id: '6',
    title: 'Digital Marketing Strategies for Small Businesses',
    excerpt: 'Effective and budget-friendly digital marketing strategies that help small businesses grow their online presence and reach.',
    category: 'Tips',
    date: 'November 3, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzYzNjI3ODI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    isFeatured: true,
  },
  {
    id: '7',
    title: 'The Future of Software Development: Trends to Watch',
    excerpt: 'Stay ahead of the curve with insights into emerging technologies and methodologies shaping the future of software development.',
    category: 'Development',
    date: 'November 1, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1531498860502-7c67cf02f657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kZXxlbnwxfHx8fDE3NjM2NDc1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '8',
    title: 'How Optichore Helps Businesses Transform Digitally',
    excerpt: 'Learn how our comprehensive digital marketing and IT solutions have helped businesses achieve their transformation goals.',
    category: 'Company News',
    date: 'October 28, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1603985585179-3d71c35a537c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYzNjgwOTc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    isFeatured: true,
  },
  {
    id: '9',
    title: '10 Essential Tips for Effective Facebook Advertising',
    excerpt: 'Maximize your Facebook ad ROI with these proven tips and techniques from our digital marketing experts.',
    category: 'Facebook Marketing',
    date: 'October 25, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZ3xlbnwxfHx8fDE3NjM2NTgwNzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '10',
    title: 'Responsive Design: Best Practices for 2024',
    excerpt: 'Master the art of creating responsive websites that provide seamless experiences across all devices and screen sizes.',
    category: 'Design',
    date: 'October 20, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1603985585179-3d71c35a537c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYzNjgwOTc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '11',
    title: 'Advanced React Development Techniques',
    excerpt: 'Take your React skills to the next level with advanced patterns, hooks, and optimization techniques for building complex applications.',
    category: 'Development',
    date: 'October 15, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1531498860502-7c67cf02f657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kZXxlbnwxfHx8fDE3NjM2NDc1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '12',
    title: 'User Research Methods for Better UX',
    excerpt: 'Discover effective user research methods that help you understand your users and create better product experiences.',
    category: 'UI/UX',
    date: 'October 10, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHV4JTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2MzYxNTQ2OHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export default function BlogCategoryPage() {
  const { category } = useParams<{ category: string }>();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const postsPerPage = 6;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categoryInfo = category ? categoryData[category] : null;

  if (!categoryInfo) {
    return (
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '48px',
                fontWeight: 700,
                color: '#151561',
              }}
            >
              Category Not Found
            </h1>
            <SafeLink
              href="/blog"
              className="inline-block mt-8 px-8 py-3 rounded-[50px]"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px',
                fontWeight: 600,
                backgroundColor: '#FF0000',
                color: '#FFFFFF',
              }}
            >
              Back to Blog
            </SafeLink>
          </div>
        </div>
      </div>
    );
  }

  // Filter posts by category
  const categoryPosts = allBlogPosts.filter(
    (post) => post.category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '') === category
  );

  // Further filter by search query
  const filteredPosts = categoryPosts.filter((post) => {
    const matchesSearch = searchQuery
      ? post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchesSearch && !post.isFeatured;
  });

  const featuredPost = categoryPosts.find((post) => post.isFeatured);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FFFFFF' }}>

      {/* Category Hero Section */}
      <section
        className="category-hero-section hero-section pt-32 pb-16"
        style={{
          background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFF 100%)',
        }}
      >
        <div className="category-hero-container max-w-[1440px] mx-auto px-12">
          {/* Breadcrumb */}
          <div className={`category-breadcrumb mb-6 flex items-center gap-2 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <SafeLink
              href="/blog"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
                fontWeight: 500,
                color: '#151561',
                opacity: 0.6,
                textDecoration: 'none',
              }}
              className="hover:opacity-100 transition-opacity duration-200"
            >
              Blog
            </SafeLink>
            <span style={{ color: '#151561', opacity: 0.3 }}>→</span>
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
                fontWeight: 600,
                color: '#FF0000',
              }}
            >
              {categoryInfo.name}
            </span>
          </div>

          <div className={`category-header-content text-center max-w-[800px] mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1
              className="category-page-title mb-6"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '64px',
                fontWeight: 700,
                color: '#151561',
                lineHeight: '1.1',
              }}
            >
              {categoryInfo.name}
            </h1>
            <p
              className="category-page-subtitle"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '22px',
                color: '#151561',
                opacity: 0.7,
                lineHeight: '1.6',
              }}
            >
              Articles and insights related to {categoryInfo.name}.
            </p>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="category-search-section search-section py-12" style={{ backgroundColor: '#F8FAFF' }}>
        <div className="category-search-container max-w-[1440px] mx-auto px-12">
          <div className={`category-search-wrapper flex justify-center ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div
              className="category-search-bar-container search-bar-container relative w-[720px]"
              style={{
                boxShadow: '0 4px 16px rgba(21, 21, 97, 0.08)',
              }}
            >
              <Search
                className="category-search-icon absolute left-6 top-1/2 transform -translate-y-1/2 text-[#151561]"
                style={{ opacity: 0.4 }}
                size={20}
              />
              <input
                type="text"
                placeholder="Search in this category…"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="category-search-input w-full h-[60px] pl-16 pr-6 rounded-[50px] border-none outline-none transition-all duration-300"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '17px',
                  backgroundColor: '#FFFFFF',
                  color: '#151561',
                }}
                onFocus={(e) => {
                  e.target.style.boxShadow = '0 6px 24px rgba(255, 0, 0, 0.15)';
                }}
                onBlur={(e) => {
                  e.target.style.boxShadow = '0 4px 16px rgba(21, 21, 97, 0.08)';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Description */}
      <section className="category-description-section description-section py-12" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="category-description-container max-w-[1440px] mx-auto px-12">
          <div className={`category-intro-text max-w-[860px] mx-auto text-center ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '18px',
                color: '#151561',
                opacity: 0.8,
                lineHeight: '1.8',
              }}
            >
              {categoryInfo.description}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="category-featured-section featured-section py-16" style={{ backgroundColor: '#F8FAFF' }}>
          <div className="category-featured-container max-w-[1440px] mx-auto px-12">
            <div
              className={`category-featured-card featured-card rounded-[32px] overflow-hidden grid grid-cols-2 gap-12 items-center ${isVisible ? 'animate-float' : 'opacity-0'}`}
              style={{
                backgroundColor: '#FFFFFF',
                boxShadow: '0 8px 32px rgba(21, 21, 97, 0.1)',
                border: '1px solid rgba(21, 21, 97, 0.06)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                animationDelay: '0.4s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(21, 21, 97, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(21, 21, 97, 0.1)';
              }}
            >
              {/* Left: Content */}
              <div className="category-featured-content p-12">
                <span
                  className="category-featured-badge inline-block px-4 py-2 rounded-[20px] mb-6"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    fontWeight: 600,
                    backgroundColor: '#FF0000',
                    color: '#FFFFFF',
                  }}
                >
                  Featured
                </span>
                <h2
                  className="category-featured-title mb-4"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '42px',
                    fontWeight: 700,
                    color: '#151561',
                    lineHeight: '1.2',
                  }}
                >
                  {featuredPost.title}
                </h2>
                <p
                  className="category-featured-excerpt mb-8"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '18px',
                    color: '#151561',
                    opacity: 0.7,
                    lineHeight: '1.7',
                  }}
                >
                  {featuredPost.excerpt}
                </p>
                <SafeLink
                  href={featuredPost.slug || '#'}
                  className="category-featured-link inline-flex items-center gap-2 group"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '17px',
                    fontWeight: 600,
                    color: '#FF0000',
                    textDecoration: 'none',
                  }}
                >
                  Read More
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </SafeLink>
              </div>

              {/* Right: Image */}
              <div className="category-featured-image h-full min-h-[480px]">
                <ImageWithFallback
                  src={featuredPost.imageUrl}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Article Grid */}
      <section className="category-article-grid-section article-grid-section py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="category-article-grid-container max-w-[1440px] mx-auto px-12">
          {currentPosts.length > 0 ? (
            <div className="category-posts-grid grid grid-cols-3 gap-8">
              {currentPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="blog-card rounded-[24px] overflow-hidden animate-stagger-fade-up"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(21, 21, 97, 0.08)',
                    boxShadow: '0 4px 16px rgba(21, 21, 97, 0.06)',
                    transition: 'all 0.3s ease',
                    animationDelay: `${index * 100}ms`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 12px 32px rgba(21, 21, 97, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(21, 21, 97, 0.06)';
                  }}
                >
                  {/* Image */}
                  <div className="relative h-[240px] overflow-hidden">
                    <ImageWithFallback
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="inline-block px-3 py-1 rounded-[16px]"
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '13px',
                          fontWeight: 600,
                          backgroundColor: 'rgba(255, 0, 0, 0.1)',
                          color: '#FF0000',
                        }}
                      >
                        {post.category}
                      </span>
                      <span
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '13px',
                          color: '#151561',
                          opacity: 0.5,
                        }}
                      >
                        {post.date}
                      </span>
                    </div>

                    <h3
                      className="mb-3"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '22px',
                        fontWeight: 700,
                        color: '#151561',
                        lineHeight: '1.3',
                      }}
                    >
                      {post.title}
                    </h3>

                    <p
                      className="mb-6"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '15px',
                        color: '#151561',
                        opacity: 0.7,
                        lineHeight: '1.6',
                      }}
                    >
                      {post.excerpt}
                    </p>

                    <SafeLink
                      href={post.slug || '#'}
                      className="inline-flex items-center gap-2 group"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '15px',
                        fontWeight: 600,
                        color: '#FF0000',
                        textDecoration: 'none',
                      }}
                    >
                      Read More
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </SafeLink>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '18px',
                  color: '#151561',
                  opacity: 0.5,
                }}
              >
                {searchQuery
                  ? 'No articles found matching your search. Try a different keyword.'
                  : 'No articles available in this category yet.'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Pagination */}
      {totalPages > 1 && (
        <section className="pagination-section py-16" style={{ backgroundColor: '#F8FAFF' }}>
          <div className="max-w-[1440px] mx-auto px-12">
            <div className="flex justify-center items-center gap-3">
              {/* Previous Button */}
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="pagination-btn px-5 py-2.5 rounded-[14px] transition-all duration-300"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '15px',
                  fontWeight: 500,
                  backgroundColor: '#FFFFFF',
                  color: '#151561',
                  border: '1.5px solid rgba(21, 21, 97, 0.1)',
                  cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                  opacity: currentPage === 1 ? 0.4 : 1,
                }}
                onMouseEnter={(e) => {
                  if (currentPage !== 1) {
                    e.currentTarget.style.borderColor = '#FF0000';
                    e.currentTarget.style.color = '#FF0000';
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentPage !== 1) {
                    e.currentTarget.style.borderColor = 'rgba(21, 21, 97, 0.1)';
                    e.currentTarget.style.color = '#151561';
                  }
                }}
              >
                Prev
              </button>

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className="pagination-btn w-[44px] h-[44px] rounded-[14px] transition-all duration-300"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '15px',
                    fontWeight: 600,
                    backgroundColor: currentPage === pageNum ? '#FF0000' : '#FFFFFF',
                    color: currentPage === pageNum ? '#FFFFFF' : '#151561',
                    border: currentPage === pageNum ? 'none' : '1.5px solid rgba(21, 21, 97, 0.1)',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    if (currentPage !== pageNum) {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
                      e.currentTarget.style.borderColor = '#FF0000';
                      e.currentTarget.style.color = '#FF0000';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (currentPage !== pageNum) {
                      e.currentTarget.style.backgroundColor = '#FFFFFF';
                      e.currentTarget.style.borderColor = 'rgba(21, 21, 97, 0.1)';
                      e.currentTarget.style.color = '#151561';
                    }
                  }}
                >
                  {pageNum}
                </button>
              ))}

              {/* Next Button */}
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="pagination-btn px-5 py-2.5 rounded-[14px] transition-all duration-300"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '15px',
                  fontWeight: 500,
                  backgroundColor: '#FFFFFF',
                  color: '#151561',
                  border: '1.5px solid rgba(21, 21, 97, 0.1)',
                  cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                  opacity: currentPage === totalPages ? 0.4 : 1,
                }}
                onMouseEnter={(e) => {
                  if (currentPage !== totalPages) {
                    e.currentTarget.style.borderColor = '#FF0000';
                    e.currentTarget.style.color = '#FF0000';
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentPage !== totalPages) {
                    e.currentTarget.style.borderColor = 'rgba(21, 21, 97, 0.1)';
                    e.currentTarget.style.color = '#151561';
                  }
                }}
              >
                Next
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}

      {/* Animation Styles */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes stagger-fade-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out backwards;
        }

        .animate-fade-up {
          animation: fade-up 0.8s ease-out backwards;
        }

        .animate-float {
          animation: float 1s ease-out backwards;
        }

        .animate-stagger-fade-up {
          animation: stagger-fade-up 0.6s ease-out backwards;
        }

        .search-bar-container input::placeholder {
          color: #151561;
          opacity: 0.4;
        }

        /* ===== TABLET BREAKPOINT (768px - 1024px) ===== */
        @media (min-width: 768px) and (max-width: 1024px) {
          /* Hero Section */
          .category-hero-section {
            padding-top: 7rem;
            padding-bottom: 3rem;
          }

          .category-hero-container {
            padding-left: 2rem;
            padding-right: 2rem;
          }

          .category-breadcrumb {
            justify-content: center;
          }

          .category-page-title {
            font-size: 48px !important;
          }

          .category-page-subtitle {
            font-size: 18px !important;
          }

          /* Search Section */
          .category-search-section {
            padding-top: 2.5rem;
            padding-bottom: 2.5rem;
          }

          .category-search-container {
            padding-left: 2rem;
            padding-right: 2rem;
          }

          .category-search-bar-container {
            width: 100% !important;
            max-width: 90% !important;
          }

          /* Description */
          .category-description-section {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }

          .category-description-container {
            padding-left: 2rem;
            padding-right: 2rem;
          }

          .category-intro-text {
            max-width: 90% !important;
          }

          .category-intro-text p {
            font-size: 17px !important;
          }

          /* Featured Article */
          .category-featured-section {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }

          .category-featured-container {
            padding-left: 2rem;
            padding-right: 2rem;
          }

          .category-featured-card {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }

          .category-featured-card:hover {
            transform: translateY(-4px) !important;
          }

          .category-featured-image {
            min-height: 320px !important;
            order: 1;
          }

          .category-featured-content {
            padding: 2rem !important;
            order: 2;
          }

          .category-featured-title {
            font-size: 32px !important;
          }

          .category-featured-excerpt {
            font-size: 16px !important;
          }

          /* Article Grid */
          .category-article-grid-section {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }

          .category-article-grid-container {
            padding-left: 2rem;
            padding-right: 2rem;
          }

          .category-posts-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }

        /* ===== MOBILE BREAKPOINT (≤414px) ===== */
        @media (max-width: 414px) {
          /* Hero Section */
          .category-hero-section {
            padding-top: 5rem;
            padding-bottom: 2rem;
          }

          .category-hero-container {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }

          .category-breadcrumb {
            justify-content: center;
            margin-bottom: 1.25rem !important;
          }

          .category-breadcrumb span,
          .category-breadcrumb a {
            font-size: 14px !important;
          }

          .category-header-content {
            max-width: 100% !important;
          }

          .category-page-title {
            font-size: 32px !important;
            margin-bottom: 1rem !important;
            text-align: center;
          }

          .category-page-subtitle {
            font-size: 16px !important;
            text-align: center;
            line-height: 1.65 !important;
          }

          /* Search Section */
          .category-search-section {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }

          .category-search-container {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }

          .category-search-bar-container {
            width: 100% !important;
            box-shadow: 0 4px 16px rgba(21, 21, 97, 0.08) !important;
          }

          .category-search-icon {
            left: 1rem !important;
            width: 18px !important;
            height: 18px !important;
          }

          .category-search-input {
            height: 48px !important;
            padding-left: 2.75rem !important;
            padding-right: 1rem !important;
            font-size: 16px !important;
          }

          /* Description Section */
          .category-description-section {
            padding-top: 1.5rem;
            padding-bottom: 1.5rem;
          }

          .category-description-container {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }

          .category-intro-text {
            max-width: 100% !important;
          }

          .category-intro-text p {
            font-size: 15px !important;
            line-height: 1.7 !important;
            text-align: center;
          }

          /* Featured Article - CRITICAL MOBILE FIX */
          .category-featured-section {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }

          .category-featured-container {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }

          .category-featured-card {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
            border-radius: 24px !important;
          }

          .category-featured-card:hover {
            transform: none !important;
          }

          /* Image First, Content Below */
          .category-featured-image {
            min-height: 200px !important;
            max-height: 200px !important;
            order: 1 !important;
            border-radius: 24px 24px 0 0 !important;
          }

          .category-featured-content {
            padding: 1.5rem !important;
            order: 2 !important;
          }

          .category-featured-badge {
            padding: 0.375rem 0.875rem !important;
            font-size: 12px !important;
            margin-bottom: 1rem !important;
            border-radius: 16px !important;
          }

          .category-featured-title {
            font-size: 22px !important;
            margin-bottom: 0.75rem !important;
            line-height: 1.3 !important;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .category-featured-excerpt {
            font-size: 15px !important;
            margin-bottom: 1.25rem !important;
            line-height: 1.65 !important;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .category-featured-link {
            font-size: 15px !important;
            min-height: 44px;
            display: inline-flex;
            align-items: center;
          }

          /* Article Grid */
          .category-article-grid-section {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }

          .category-article-grid-container {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }

          .category-posts-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }

          .blog-card {
            border-radius: 20px !important;
          }

          .blog-card:hover {
            transform: none !important;
          }

          .blog-card .relative {
            height: 200px !important;
          }

          .blog-card .p-8 {
            padding: 1.5rem !important;
          }

          .blog-card h3 {
            font-size: 18px !important;
            line-height: 1.35 !important;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .blog-card p {
            font-size: 14px !important;
            line-height: 1.65 !important;
            margin-bottom: 1rem !important;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .blog-card a {
            font-size: 14px !important;
            min-height: 44px;
            display: inline-flex;
            align-items: center;
          }

          /* Pagination */
          .pagination-section {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }

          .pagination-btn {
            min-height: 44px !important;
          }
        }
      `}</style>
    </div>
  );
}