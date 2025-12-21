import { Check, ArrowRight } from 'lucide-react';

export function FacebookMarketing() {
  const checklist = [
    'Advanced audience targeting',
    'AI-optimized ad delivery',
    'High-ROI campaign strategies',
    'Meta certified ad support',
  ];

  return (
    <section 
      className="facebook-marketing-section w-full lg:py-36 md:py-24 py-20"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F4F7FF 100%)',
      }}
    >
      {/* RESPONSIVE CONTAINER - Padding adjusts per breakpoint */}
      <div className="facebook-marketing-container max-w-[1440px] mx-auto lg:px-12 md:px-8 px-6">
        
        {/* ========================================== */}
        {/* DESKTOP VARIANT ONLY (≥1024px) - LOCKED   */}
        {/* ========================================== */}
        {/* Two-column grid: Left (content + CTA), Right (overlapping analytics cards) */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-20 lg:items-center">
          
          {/* LEFT COLUMN - Text + Checklist + CTA */}
          <div className="facebook-text-content space-y-7">
            {/* Section Label */}
            <div 
              className="facebook-section-label"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
                fontWeight: 500,
                color: '#FF0000',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}
            >
              Facebook Marketing
            </div>

            {/* Main Heading */}
            <h2 
              className="facebook-main-heading leading-tight"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '46px',
                fontWeight: 700,
                color: '#151561',
                letterSpacing: '-0.01em',
              }}
            >
              High-Performance Facebook Ads Powered by Meta Insights.
            </h2>

            {/* Subparagraph */}
            <p 
              className="facebook-subparagraph leading-relaxed"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '18px',
                fontWeight: 400,
                color: '#505050',
                lineHeight: '1.7',
              }}
            >
              As a Meta Business Partner, Optichore delivers advanced Facebook and Instagram advertising solutions built on real data, AI-driven targeting, and exclusive Meta tools.
            </p>

            {/* Checklist */}
            <div className="facebook-checklist space-y-4 pt-4">
              {checklist.map((item, index) => (
                <div
                  key={index}
                  className="facebook-checklist-item flex items-center gap-3.5"
                  style={{
                    animationDelay: `${index * 80}ms`,
                  }}
                >
                  <div 
                    className="facebook-check-icon flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(21, 21, 97, 0.1)' }}
                  >
                    <Check 
                      className="w-3.5 h-3.5" 
                      style={{ color: '#151561', strokeWidth: 3 }}
                    />
                  </div>
                  <span 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '17px',
                      fontWeight: 500,
                      color: '#151561',
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Row */}
            <div className="facebook-cta-row flex items-center gap-6 pt-6">
              {/* Primary CTA */}
              <button 
                className="facebook-primary-cta h-[46px] px-8 rounded-[50px]"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  fontWeight: 600,
                  backgroundColor: '#FF0000',
                  color: '#FFFFFF',
                  boxShadow: '0 4px 16px rgba(255, 0, 0, 0.2)',
                }}
              >
                Start Your Facebook Ads
              </button>

              {/* Secondary CTA */}
              <a
                href="#case-studies"
                className="facebook-secondary-cta inline-flex items-center gap-2"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  fontWeight: 500,
                  color: '#151561',
                }}
              >
                View Marketing Case Studies
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN - Premium Analytics Visual (Overlapping Cards) */}
          <div className="facebook-analytics-visual relative">
            <div className="analytics-container relative h-[600px]">
              {/* Decorative Background Elements */}
              <div className="analytics-bg-accents absolute inset-0">
                {/* Glowing Navy Circle */}
                <div 
                  className="absolute animate-pulse-glow-slow"
                  style={{
                    width: '180px',
                    height: '180px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(21, 21, 97, 0.08) 0%, transparent 70%)',
                    top: '10%',
                    right: '5%',
                  }}
                />

                {/* Red Accent Line */}
                <div 
                  className="absolute animate-fade-in-delayed"
                  style={{
                    width: '100px',
                    height: '3px',
                    background: 'linear-gradient(90deg, rgba(255, 0, 0, 0.4) 0%, transparent 100%)',
                    bottom: '25%',
                    left: '0',
                    borderRadius: '2px',
                  }}
                />
              </div>

              {/* Main Dashboard Card - Floating */}
              <div 
                className="main-dashboard-card absolute analytics-card-float-1"
                style={{
                  top: '10%',
                  left: '5%',
                  width: '420px',
                  height: '280px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '18px',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.07)',
                  border: '1px solid rgba(0, 0, 0, 0.04)',
                  padding: '24px',
                }}
              >
                {/* Card Header */}
                <div className="card-header mb-5">
                  <div 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#151561',
                      marginBottom: '4px',
                    }}
                  >
                    Campaign Performance
                  </div>
                  <div 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '12px',
                      fontWeight: 400,
                      color: '#888888',
                    }}
                  >
                    Last 30 days
                  </div>
                </div>

                {/* Animated Graph Bars */}
                <div className="graph-bars-container space-y-4">
                  {[
                    { label: 'Reach', value: 85, color: '#1877F2' },
                    { label: 'Engagement', value: 72, color: '#151561' },
                    { label: 'Conversions', value: 92, color: '#FF0000' },
                  ].map((metric, index) => (
                    <div key={index} className="metric-row space-y-1.5">
                      <div className="flex justify-between items-center">
                        <span 
                          style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '12px',
                            fontWeight: 500,
                            color: '#505050',
                          }}
                        >
                          {metric.label}
                        </span>
                        <span 
                          style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '13px',
                            fontWeight: 600,
                            color: metric.color,
                          }}
                        >
                          {metric.value}%
                        </span>
                      </div>
                      <div 
                        className="bar-track rounded-full overflow-hidden"
                        style={{ height: '7px', backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
                      >
                        <div 
                          className="bar-fill-animated rounded-full h-full"
                          style={{ 
                            width: `${metric.value}%`,
                            backgroundColor: metric.color,
                            animationDelay: `${index * 150}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Growth Badge */}
                <div 
                  className="growth-badge absolute bottom-5 right-5 px-3 py-2 rounded-full"
                  style={{
                    backgroundColor: 'rgba(0, 200, 100, 0.1)',
                    color: '#00C864',
                    fontSize: '11px',
                    fontWeight: 600,
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  +42% Growth
                </div>
              </div>

              {/* KPI Stats Card - Top Right */}
              <div 
                className="kpi-stats-card absolute analytics-card-float-2"
                style={{
                  top: '8%',
                  right: '0',
                  width: '180px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  boxShadow: '0 6px 24px rgba(0, 0, 0, 0.07)',
                  border: '1px solid rgba(0, 0, 0, 0.04)',
                  padding: '20px',
                }}
              >
                <div className="space-y-4">
                  {[
                    { value: '2.4M', label: 'Impressions' },
                    { value: '142K', label: 'Clicks' },
                  ].map((stat, i) => (
                    <div key={i}>
                      <div 
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '24px',
                          fontWeight: 700,
                          color: '#151561',
                        }}
                      >
                        {stat.value}
                      </div>
                      <div 
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '11px',
                          fontWeight: 400,
                          color: '#888888',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                        }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Audience Card - Bottom Left */}
              <div 
                className="audience-card absolute analytics-card-float-3"
                style={{
                  bottom: '8%',
                  left: '8%',
                  width: '220px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  boxShadow: '0 6px 24px rgba(0, 0, 0, 0.07)',
                  border: '1px solid rgba(0, 0, 0, 0.04)',
                  padding: '20px',
                }}
              >
                <div 
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#151561',
                    marginBottom: '12px',
                  }}
                >
                  Target Audience
                </div>
                <div className="space-y-2">
                  {['18-24', '25-34', '35-44'].map((age, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div 
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: i === 1 ? '#FF0000' : '#1877F2' }}
                      />
                      <span 
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '12px',
                          color: '#505050',
                        }}
                      >
                        {age} years
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ROI Mini Card - Bottom Right */}
              <div 
                className="roi-mini-card absolute analytics-card-float-4"
                style={{
                  bottom: '12%',
                  right: '5%',
                  width: '160px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '14px',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.06)',
                  border: '1px solid rgba(0, 0, 0, 0.04)',
                  padding: '18px',
                }}
              >
                <div 
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '11px',
                    fontWeight: 500,
                    color: '#888888',
                    marginBottom: '6px',
                    textTransform: 'uppercase',
                  }}
                >
                  Avg. ROI
                </div>
                <div 
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '28px',
                    fontWeight: 700,
                    color: '#FF0000',
                  }}
                >
                  4.2x
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================== */}
        {/* TABLET/MOBILE VARIANTS (<1024px)          */}
        {/* ========================================== */}
        {/* Single column: Content first, then stacked analytics cards (NO overlapping) */}
        <div className="lg:hidden flex flex-col md:gap-12 gap-10">
          
          {/* CONTENT BLOCK - Appears FIRST */}
          <div className="facebook-text-content-stacked space-y-7">
            {/* Section Label */}
            <div 
              className="facebook-section-label"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
                fontWeight: 500,
                color: '#FF0000',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}
            >
              Facebook Marketing
            </div>

            {/* Main Heading - Responsive font size */}
            <h2 
              className="facebook-main-heading leading-tight md:text-[40px] text-[34px]"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                color: '#151561',
                letterSpacing: '-0.01em',
              }}
            >
              High-Performance Facebook Ads Powered by Meta Insights.
            </h2>

            {/* Subparagraph - Responsive font size */}
            <p 
              className="facebook-subparagraph leading-relaxed md:text-[17px] text-[16px]"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                color: '#505050',
                lineHeight: '1.7',
              }}
            >
              As a Meta Business Partner, Optichore delivers advanced Facebook and Instagram advertising solutions built on real data, AI-driven targeting, and exclusive Meta tools.
            </p>

            {/* Checklist */}
            <div className="facebook-checklist space-y-4 pt-4">
              {checklist.map((item, index) => (
                <div
                  key={index}
                  className="facebook-checklist-item flex items-center gap-3.5"
                  style={{
                    animationDelay: `${index * 80}ms`,
                  }}
                >
                  <div 
                    className="facebook-check-icon flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(21, 21, 97, 0.1)' }}
                  >
                    <Check 
                      className="w-3.5 h-3.5" 
                      style={{ color: '#151561', strokeWidth: 3 }}
                    />
                  </div>
                  <span 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '17px',
                      fontWeight: 500,
                      color: '#151561',
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Row - Responsive layout */}
            <div className="facebook-cta-row md:flex md:items-center md:gap-6 md:pt-6 pt-6 space-y-4 md:space-y-0">
              {/* Primary CTA - Full width on mobile */}
              <button 
                className="facebook-primary-cta h-[46px] px-8 rounded-[50px] w-full md:w-auto"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  fontWeight: 600,
                  backgroundColor: '#FF0000',
                  color: '#FFFFFF',
                  boxShadow: '0 4px 16px rgba(255, 0, 0, 0.2)',
                }}
              >
                Start Your Facebook Ads
              </button>

              {/* Secondary CTA */}
              <a
                href="#case-studies"
                className="facebook-secondary-cta inline-flex items-center gap-2 justify-center md:justify-start w-full md:w-auto"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  fontWeight: 500,
                  color: '#151561',
                }}
              >
                View Marketing Case Studies
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* ANALYTICS CARDS - Vertically stacked (NO absolute positioning, NO overlapping) */}
          <div className="facebook-analytics-stacked flex flex-col md:gap-6 gap-5 w-full">
            
            {/* Main Dashboard Card */}
            <div 
              className="main-dashboard-card-stacked w-full"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '18px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.07)',
                border: '1px solid rgba(0, 0, 0, 0.04)',
                padding: '24px',
              }}
            >
              {/* Card Header */}
              <div className="card-header mb-5">
                <div 
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#151561',
                    marginBottom: '4px',
                  }}
                >
                  Campaign Performance
                </div>
                <div 
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                    fontWeight: 400,
                    color: '#888888',
                  }}
                >
                  Last 30 days
                </div>
              </div>

              {/* Animated Graph Bars */}
              <div className="graph-bars-container space-y-4">
                {[
                  { label: 'Reach', value: 85, color: '#1877F2' },
                  { label: 'Engagement', value: 72, color: '#151561' },
                  { label: 'Conversions', value: 92, color: '#FF0000' },
                ].map((metric, index) => (
                  <div key={index} className="metric-row space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span 
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '12px',
                          fontWeight: 500,
                          color: '#505050',
                        }}
                      >
                        {metric.label}
                      </span>
                      <span 
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '13px',
                          fontWeight: 600,
                          color: metric.color,
                        }}
                      >
                        {metric.value}%
                      </span>
                    </div>
                    <div 
                      className="bar-track rounded-full overflow-hidden"
                      style={{ height: '7px', backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
                    >
                      <div 
                        className="bar-fill-animated rounded-full h-full"
                        style={{ 
                          width: `${metric.value}%`,
                          backgroundColor: metric.color,
                          animationDelay: `${index * 150}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Growth Badge */}
              <div 
                className="growth-badge mt-5 inline-block px-3 py-2 rounded-full"
                style={{
                  backgroundColor: 'rgba(0, 200, 100, 0.1)',
                  color: '#00C864',
                  fontSize: '11px',
                  fontWeight: 600,
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                +42% Growth
              </div>
            </div>

            {/* Stats Row - KPI Stats + ROI (Side by side on tablet, stacked on mobile) */}
            <div className="stats-row grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-5">
              
              {/* KPI Stats Card */}
              <div 
                className="kpi-stats-card-stacked w-full"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  boxShadow: '0 6px 24px rgba(0, 0, 0, 0.07)',
                  border: '1px solid rgba(0, 0, 0, 0.04)',
                  padding: '20px',
                }}
              >
                <div className="space-y-4">
                  {[
                    { value: '2.4M', label: 'Impressions' },
                    { value: '142K', label: 'Clicks' },
                  ].map((stat, i) => (
                    <div key={i}>
                      <div 
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '24px',
                          fontWeight: 700,
                          color: '#151561',
                        }}
                      >
                        {stat.value}
                      </div>
                      <div 
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '11px',
                          fontWeight: 400,
                          color: '#888888',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                        }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ROI Card */}
              <div 
                className="roi-card-stacked w-full"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  boxShadow: '0 6px 24px rgba(0, 0, 0, 0.07)',
                  border: '1px solid rgba(0, 0, 0, 0.04)',
                  padding: '20px',
                }}
              >
                <div 
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '11px',
                    fontWeight: 500,
                    color: '#888888',
                    marginBottom: '6px',
                    textTransform: 'uppercase',
                  }}
                >
                  Avg. ROI
                </div>
                <div 
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '28px',
                    fontWeight: 700,
                    color: '#FF0000',
                  }}
                >
                  4.2x
                </div>
              </div>
            </div>

            {/* Audience Card */}
            <div 
              className="audience-card-stacked w-full"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                boxShadow: '0 6px 24px rgba(0, 0, 0, 0.07)',
                border: '1px solid rgba(0, 0, 0, 0.04)',
                padding: '20px',
              }}
            >
              <div 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#151561',
                  marginBottom: '12px',
                }}
              >
                Target Audience
              </div>
              <div className="space-y-2">
                {['18-24', '25-34', '35-44'].map((age, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: i === 1 ? '#FF0000' : '#1877F2' }}
                    />
                    <span 
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '12px',
                        color: '#505050',
                      }}
                    >
                      {age} years
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
