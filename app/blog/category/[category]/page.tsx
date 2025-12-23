import CategoryClient from "./CategoryClient";

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


export async function generateStaticParams() {
  return Object.keys(categoryData).map(category => ({ category }));
}


export default function BlogCategoryPage({ params }: { params: { category: string } }) {
 
  return (
    <CategoryClient category={params.category}/>
  );
}