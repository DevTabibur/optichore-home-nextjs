"use client"

import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { SafeLink } from "@/components/SafeLink";
import { Search } from "lucide-react";
import { useState } from "react";

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

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Ultimate Guide to Facebook Marketing in 2024',
    excerpt: 'Discover the latest strategies and best practices for running successful Facebook marketing campaigns that drive real business results.',
    category: 'Facebook Marketing',
    date: 'November 15, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZ3xlbnwxfHx8fDE3NjM2NTgwNzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    isFeatured: true,
    slug: '/blog/facebook-marketing-guide',
  },
  {
    id: '2',
    title: 'Modern Web Design Trends That Will Dominate 2024',
    excerpt: 'Explore the cutting-edge web design trends that are shaping the digital landscape and learn how to implement them in your projects.',
    category: 'Design',
    date: 'November 12, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1603985585179-3d71c35a537c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYzNjgwOTc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '3',
    title: 'Building Scalable Mobile Apps: Best Practices',
    excerpt: 'Learn the essential principles and techniques for developing mobile applications that can scale with your growing user base.',
    category: 'Development',
    date: 'November 10, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjM2MzM1NDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '4',
    title: 'UI/UX Design Principles for Better User Experience',
    excerpt: 'Master the fundamental UI/UX design principles that create intuitive, engaging, and user-friendly digital experiences.',
    category: 'UI/UX',
    date: 'November 8, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHV4JTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2MzYxNTQ2OHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '5',
    title: 'Creating a Strong Brand Identity: A Complete Guide',
    excerpt: 'Develop a powerful brand identity that resonates with your target audience and sets you apart from the competition.',
    category: 'Branding',
    date: 'November 5, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1633533451976-992e226e32d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwZGVzaWdufGVufDF8fHx8MTc2MzYwMDk4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '6',
    title: 'Digital Marketing Strategies for Small Businesses',
    excerpt: 'Effective and budget-friendly digital marketing strategies that help small businesses grow their online presence and reach.',
    category: 'Tips',
    date: 'November 3, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzYzNjI3ODI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
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
  },
  {
    id: '9',
    title: '10 Essential Tips for Effective Facebook Advertising',
    excerpt: 'Maximize your Facebook ad ROI with these proven tips and techniques from our digital marketing experts.',
    category: 'Facebook Marketing',
    date: 'October 25, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZ3xlbnwxfHx8fDE3NjM2NTgwNzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

const categories = [
  { label: 'All', value: 'all', active: true },
  { label: 'Facebook Marketing', value: 'facebook-marketing', active: true },
  { label: 'Design', value: 'design', active: true },
  { label: 'Development', value: 'development', active: true },
  { label: 'UI/UX', value: 'uiux', active: true },
  { label: 'Branding', value: 'branding', active: true },
  { label: 'Tips', value: 'tips', active: true },
  { label: 'Company News', value: 'company-news', active: true },
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Filter posts
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                           post.category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '') === selectedCategory;
    return matchesSearch && matchesCategory && !post.isFeatured;
  });

  const featuredPost = blogPosts.find(post => post.isFeatured);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FFFFFF' }}>

      {/* Hero Section */}
      <section 
        className="hero-section blog-hero pt-32 pb-24"
        style={{
          background: 'linear-gradient(180deg, #FFFFFF 0%, #F7FAFF 100%)',
        }}
      >
        <div className="blog-hero-container max-w-[1440px] mx-auto px-12">
          <div className="text-center animate-fade-down">
            <h1 
              className="blog-page-title mb-6"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '64px',
                fontWeight: 700,
                color: '#151561',
                lineHeight: '1.1',
              }}
            >
              Blog & Insights
            </h1>
            <p 
              className="blog-page-subtitle max-w-[680px] mx-auto"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '22px',
                color: '#151561',
                opacity: 0.7,
                lineHeight: '1.6',
              }}
            >
              Read insights, updates, and expert knowledge from Optichore.
            </p>
          </div>
        </div>
      </section>

      {/* Search + Filter Section */}
      <section className="search-filter-section py-16" style={{ backgroundColor: '#F7FAFF' }}>
        <div className="search-filter-container max-w-[1440px] mx-auto px-12">
          {/* Search Bar */}
          <div className="search-bar-wrapper flex justify-center mb-12 animate-fade-up">
            <div 
              className="search-bar-container relative w-[720px]"
              style={{
                boxShadow: '0 4px 16px rgba(21, 21, 97, 0.08)',
              }}
            >
              <Search 
                className="search-icon absolute left-6 top-1/2 transform -translate-y-1/2 text-[#151561]" 
                style={{ opacity: 0.4 }}
                size={20}
              />
              <input
                type="text"
                placeholder="Search articles…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input w-full h-[60px] pl-16 pr-6 rounded-[50px] border-none outline-none transition-all duration-300"
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

          {/* Category Pills */}
          <div className="category-pills-container flex justify-center items-center gap-4 flex-wrap animate-slide-in">
            {categories.map((category, index) => (
              <button
                key={category.value}
                onClick={() => category.active && handleCategoryChange(category.value)}
                disabled={!category.active}
                className="category-pill px-7 py-3 rounded-[50px] transition-all duration-300"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  fontWeight: 500,
                  backgroundColor: selectedCategory === category.value ? '#FF0000' : '#FFFFFF',
                  color: selectedCategory === category.value ? '#FFFFFF' : category.active ? '#151561' : '#999999',
                  border: selectedCategory === category.value ? 'none' : '1.5px solid rgba(21, 21, 97, 0.1)',
                  boxShadow: selectedCategory === category.value 
                    ? '0 4px 12px rgba(255, 0, 0, 0.25)' 
                    : '0 2px 8px rgba(21, 21, 97, 0.06)',
                  cursor: category.active ? 'pointer' : 'not-allowed',
                  opacity: category.active ? 1 : 0.5,
                  animationDelay: `${index * 50}ms`,
                }}
                onMouseEnter={(e) => {
                  if (category.active && selectedCategory !== category.value) {
                    e.currentTarget.style.backgroundColor = '#FF0000';
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 0, 0, 0.25)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (category.active && selectedCategory !== category.value) {
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                    e.currentTarget.style.color = '#151561';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(21, 21, 97, 0.06)';
                  }
                }}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article Section */}
      {featuredPost && (
        <section className="featured-section py-20" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="featured-section-container max-w-[1440px] mx-auto px-12">
            <div 
              className="featured-card featured-blog-card rounded-[32px] overflow-hidden grid grid-cols-2 gap-12 items-center animate-float"
              style={{
                backgroundColor: '#FFFFFF',
                boxShadow: '0 8px 32px rgba(21, 21, 97, 0.1)',
                border: '1px solid rgba(21, 21, 97, 0.06)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
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
              <div className="featured-content p-12">
                <span
                  className="featured-category inline-block px-4 py-2 rounded-[20px] mb-6"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    fontWeight: 600,
                    backgroundColor: '#FF0000',
                    color: '#FFFFFF',
                  }}
                >
                  {featuredPost.category}
                </span>
                <h2
                  className="featured-title mb-4"
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
                  className="featured-excerpt mb-8"
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
                  className="featured-link inline-flex items-center gap-2 group"
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
              <div className="featured-image h-full min-h-[480px]">
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

      {/* Blog Grid Section */}
      <section className="blog-grid-section py-20" style={{ backgroundColor: '#F7FAFF' }}>
        <div className="blog-grid-container max-w-[1440px] mx-auto px-12">
          <div className="blog-posts-grid grid grid-cols-3 gap-8">
            {currentPosts.map((post, index) => (
              <article
                key={post.id}
                className="blog-card blog-post-card rounded-[24px] overflow-hidden animate-stagger-fade-up"
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
                <div className="blog-card-image relative h-[240px] overflow-hidden">
                  <ImageWithFallback
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="blog-card-content p-8">
                  <div className="blog-card-meta flex items-center justify-between mb-4">
                    <span
                      className="blog-card-category inline-block px-3 py-1 rounded-[16px]"
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
                      className="blog-card-date"
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
                    className="blog-card-title mb-3"
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
                    className="blog-card-excerpt mb-6"
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
                    className="blog-card-link inline-flex items-center gap-2 group"
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

          {/* No Results Message */}
          {currentPosts.length === 0 && (
            <div className="text-center py-20">
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '18px',
                  color: '#151561',
                  opacity: 0.5,
                }}
              >
                No articles found. Try a different search or category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Pagination Section */}
      {totalPages > 1 && (
        <section className="pagination-section py-16" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="max-w-[1440px] mx-auto px-12">
            <div className="flex justify-center items-center gap-3 animate-fade-up">
              {/* Previous Button */}
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
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
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
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
        @keyframes fade-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          from {
            opacity: 0;
            transform: translateY(30px);
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

        .animate-fade-down {
          animation: fade-down 0.8s ease-out;
        }

        .animate-fade-up {
          animation: fade-up 0.8s ease-out;
        }

        .animate-slide-in {
          animation: slide-in 0.8s ease-out;
        }

        .animate-float {
          animation: float 1s ease-out;
        }

        .animate-stagger-fade-up {
          animation: stagger-fade-up 0.6s ease-out backwards;
        }

        .search-bar-container input::placeholder {
          color: #151561;
          opacity: 0.4;
        }

        .category-pill {
          animation: slide-in 0.6s ease-out backwards;
        }

        /* ===== TABLET BREAKPOINT (768px - 1024px) ===== */
        @media (min-width: 768px) and (max-width: 1024px) {
          /* Hero Section */
          .blog-hero {
            padding-top: 7rem;
            padding-bottom: 4rem;
          }

          .blog-hero-container {
            padding-left: 2rem;
            padding-right: 2rem;
          }

          .blog-page-title {
            font-size: 48px !important;
          }

          .blog-page-subtitle {
            font-size: 18px !important;
            max-width: 90% !important;
          }

          /* Search & Filter */
          .search-filter-container {
            padding-left: 2rem;
            padding-right: 2rem;
          }

          .search-bar-wrapper {
            margin-bottom: 2.5rem !important;
          }

          .search-bar-container {
            width: 100% !important;
            max-width: 90% !important;
          }

          .category-pills-container {
            gap: 0.75rem !important;
          }

          .category-pill {
            padding: 0.625rem 1.5rem !important;
            font-size: 15px !important;
          }

          /* Featured Section */
          .featured-section {
            padding-top: 3.5rem;
            padding-bottom: 3.5rem;
          }

          .featured-section-container {
            padding-left: 2rem;
            padding-right: 2rem;
          }

          .featured-blog-card {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }

          .featured-blog-card:hover {
            transform: translateY(-4px) !important;
          }

          .featured-content {
            padding: 2.5rem !important;
            order: 2;
          }

          .featured-image {
            min-height: 340px !important;
            order: 1;
          }

          .featured-title {
            font-size: 34px !important;
          }

          .featured-excerpt {
            font-size: 16px !important;
          }

          /* Blog Grid */
          .blog-grid-section {
            padding-top: 3.5rem;
            padding-bottom: 3.5rem;
          }

          .blog-grid-container {
            padding-left: 2rem;
            padding-right: 2rem;
          }

          .blog-posts-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }

          .blog-post-card:hover {
            transform: translateY(-4px) !important;
          }

          .blog-card-image {
            height: 280px !important;
          }

          .blog-card-title {
            font-size: 20px !important;
          }
        }

        /* ===== MOBILE BREAKPOINT (≤414px) ===== */
        @media (max-width: 414px) {
          /* Hero Section */
          .blog-hero {
            padding-top: 5rem;
            padding-bottom: 2.5rem;
          }

          .blog-hero-container {
            padding-left: 1.25rem;
            padding-right: 1.25rem;
          }

          .blog-page-title {
            font-size: 32px !important;
            text-align: center;
            margin-bottom: 1rem !important;
          }

          .blog-page-subtitle {
            font-size: 16px !important;
            max-width: 90% !important;
            text-align: center;
            line-height: 1.65 !important;
          }

          /* Search & Filter */
          .search-filter-section {
            padding-top: 2.5rem;
            padding-bottom: 2.5rem;
          }

          .search-filter-container {
            padding-left: 1.25rem;
            padding-right: 1.25rem;
          }

          .search-bar-wrapper {
            margin-bottom: 2rem !important;
          }

          .search-bar-container {
            width: 100% !important;
            box-shadow: 0 4px 16px rgba(21, 21, 97, 0.08) !important;
          }

          .search-icon {
            left: 1rem !important;
            width: 18px !important;
            height: 18px !important;
          }

          .search-input {
            height: 48px !important;
            padding-left: 2.75rem !important;
            padding-right: 1rem !important;
            font-size: 16px !important;
          }

          /* Category Pills - Horizontal Scroll */
          .search-filter-container {
            overflow-x: hidden !important;
          }

          .category-pills-container {
            justify-content: flex-start !important;
            flex-wrap: nowrap !important;
            overflow-x: scroll !important;
            overflow-y: hidden !important;
            -webkit-overflow-scrolling: touch !important;
            scrollbar-width: none !important;
            -ms-overflow-style: none !important;
            gap: 0.75rem !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
            padding-bottom: 0.5rem !important;
            margin: 0 !important;
            width: 100% !important;
          }

          .category-pills-container::-webkit-scrollbar {
            display: none !important;
            width: 0 !important;
            height: 0 !important;
          }

          .category-pill {
            flex: 0 0 auto !important;
            flex-shrink: 0 !important;
            min-height: 44px !important;
            padding: 0.625rem 1.25rem !important;
            font-size: 14px !important;
            white-space: nowrap !important;
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            touch-action: manipulation !important;
          }

          /* Featured Section */
          .featured-section {
            padding-top: 2.5rem;
            padding-bottom: 2.5rem;
          }

          .featured-section-container {
            padding-left: 1.25rem;
            padding-right: 1.25rem;
          }

          .featured-blog-card {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
            border-radius: 24px !important;
          }

          .featured-blog-card:hover {
            transform: none !important;
          }

          /* Featured Content Order: Image First */
          .featured-image {
            min-height: 200px !important;
            max-height: 200px !important;
            order: 1;
            border-radius: 24px 24px 0 0 !important;
          }

          .featured-content {
            padding: 1.5rem !important;
            order: 2;
          }

          .featured-category {
            padding: 0.375rem 0.875rem !important;
            font-size: 12px !important;
            margin-bottom: 1rem !important;
            border-radius: 16px !important;
          }

          .featured-title {
            font-size: 22px !important;
            margin-bottom: 0.75rem !important;
            line-height: 1.3 !important;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .featured-excerpt {
            font-size: 15px !important;
            margin-bottom: 1.25rem !important;
            line-height: 1.65 !important;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .featured-link {
            font-size: 15px !important;
            min-height: 44px;
            display: inline-flex;
            align-items: center;
          }

          /* Blog Grid */
          .blog-grid-section {
            padding-top: 2.5rem;
            padding-bottom: 2.5rem;
          }

          .blog-grid-container {
            padding-left: 1.25rem;
            padding-right: 1.25rem;
          }

          .blog-posts-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }

          .blog-post-card {
            border-radius: 20px !important;
          }

          .blog-post-card:hover {
            transform: none !important;
          }

          .blog-card-image {
            height: 200px !important;
          }

          .blog-card-content {
            padding: 1.5rem !important;
          }

          .blog-card-meta {
            margin-bottom: 0.75rem !important;
            flex-wrap: wrap;
            gap: 0.5rem;
          }

          .blog-card-category {
            padding: 0.375rem 0.75rem !important;
            font-size: 12px !important;
            border-radius: 14px !important;
          }

          .blog-card-date {
            font-size: 12px !important;
          }

          .blog-card-title {
            font-size: 18px !important;
            margin-bottom: 0.625rem !important;
            line-height: 1.35 !important;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .blog-card-excerpt {
            font-size: 14px !important;
            margin-bottom: 1rem !important;
            line-height: 1.65 !important;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .blog-card-link {
            font-size: 14px !important;
            min-height: 44px;
            display: inline-flex;
            align-items: center;
          }

          /* Pagination */
          .pagination-section {
            padding-top: 2.5rem;
            padding-bottom: 2.5rem;
          }

          .pagination-btn {
            min-height: 44px !important;
          }
        }
      `}</style>
    </div>
  );
}