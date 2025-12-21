import { SafeLink } from './SafeLink';

export function BlogDropdown() {
  const categories = [
    { label: 'Facebook Marketing', slug: 'facebook-marketing', active: true },
    { label: 'Design', slug: 'design', active: true },
    { label: 'Development', slug: 'development', active: true },
    { label: 'UI/UX', slug: 'uiux', active: true },
    { label: 'Branding', slug: 'branding', active: true },
    { label: 'Tips', slug: 'tips', active: true },
    { label: 'Company News', slug: 'company-news', active: true },
  ];

  const tags = [
    { label: 'Social Media', slug: 'social-media', active: true },
    { label: 'Advertising', slug: 'advertising', active: true },
    { label: 'Web Design', slug: 'web-design', active: true },
    { label: 'Digital Marketing', slug: 'digital-marketing', active: true },
    { label: 'Strategy', slug: 'strategy', active: true },
  ];

  const authors = [
    { label: 'Sarah Johnson', slug: 'sarah-johnson', active: true },
  ];

  return (
    <div
      className="services-megamenu-dropdown absolute left-0 top-full pt-3 w-[880px]"
      style={{
        marginLeft: '-280px',
      }}
    >
      <div
        className="megamenu-inner rounded-[20px] p-10 shadow-2xl"
        style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid rgba(0, 0, 0, 0.06)',
        }}
      >
        <div className="grid grid-cols-3 gap-10">
          {/* Column 1 - Categories */}
          <div className="megamenu-col">
            <h3
              className="megamenu-col-heading mb-6"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px',
                fontWeight: 700,
                color: '#151561',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              Categories
            </h3>
            <ul className="space-y-3.5">
              {categories.map((category) => (
                <li key={category.slug}>
                  <SafeLink
                    to={category.active ? `/blog/category/${category.slug}` : '#'}
                    className="megamenu-link-item flex items-start gap-3 group"
                  >
                    <div className="flex-1">
                      <div
                        className="megamenu-link-title transition-colors duration-200"
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '15px',
                          fontWeight: 600,
                          color: category.active ? '#151561' : '#999999',
                          opacity: category.active ? 1 : 0.5,
                        }}
                      >
                        {category.label}
                      </div>
                    </div>
                  </SafeLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 - Tags */}
          <div className="megamenu-col">
            <h3
              className="megamenu-col-heading mb-6"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px',
                fontWeight: 700,
                color: '#151561',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              Popular Tags
            </h3>
            <ul className="space-y-3.5">
              {tags.map((tag) => (
                <li key={tag.slug}>
                  <SafeLink
                    to={tag.active ? `/blog/tag/${tag.slug}` : '#'}
                    className="megamenu-link-item flex items-start gap-3 group"
                  >
                    <div className="flex-1">
                      <div
                        className="megamenu-link-title transition-colors duration-200"
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '15px',
                          fontWeight: 600,
                          color: tag.active ? '#151561' : '#999999',
                          opacity: tag.active ? 1 : 0.5,
                        }}
                      >
                        {tag.label}
                      </div>
                    </div>
                  </SafeLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Authors & Archive */}
          <div className="megamenu-col">
            <h3
              className="megamenu-col-heading mb-6"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px',
                fontWeight: 700,
                color: '#151561',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              Authors
            </h3>
            <ul className="space-y-3.5 mb-8">
              {authors.map((author) => (
                <li key={author.slug}>
                  <SafeLink
                    to={author.active ? `/blog/author/${author.slug}` : '#'}
                    className="megamenu-link-item flex items-start gap-3 group"
                  >
                    <div className="flex-1">
                      <div
                        className="megamenu-link-title transition-colors duration-200"
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '15px',
                          fontWeight: 600,
                          color: author.active ? '#151561' : '#999999',
                          opacity: author.active ? 1 : 0.5,
                        }}
                      >
                        {author.label}
                      </div>
                    </div>
                  </SafeLink>
                </li>
              ))}
            </ul>

            <h3
              className="megamenu-col-heading mb-6"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px',
                fontWeight: 700,
                color: '#151561',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              More
            </h3>
            <ul className="space-y-3.5">
              <li>
                <SafeLink
                  to="/blog"
                  className="megamenu-link-item flex items-start gap-3 group"
                >
                  <div className="flex-1">
                    <div
                      className="megamenu-link-title transition-colors duration-200"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '15px',
                        fontWeight: 600,
                        color: '#151561',
                      }}
                    >
                      All Articles
                    </div>
                  </div>
                </SafeLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        .megamenu-link-item:hover .megamenu-link-title {
          color: #FF0000 !important;
        }
      `}</style>
    </div>
  );
}
