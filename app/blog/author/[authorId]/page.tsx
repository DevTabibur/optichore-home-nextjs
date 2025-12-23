import AuthorClient from "./AuthorClient";

interface AuthorData {
  id: string;
  name: string;
  position: string;
  bio: string;
  avatar: string;
  email?: string;
  joinDate: string;
  quote: string;
  social: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
  };
}

const authorsData: Record<string, AuthorData> = {
  'sarah-johnson': {
    id: 'sarah-johnson',
    name: 'Sarah Johnson',
    position: 'Senior Digital Marketing Strategist',
    bio: 'Sarah is a seasoned digital marketing professional with over 8 years of experience in social media marketing and paid advertising. She specializes in helping businesses maximize their ROI through strategic campaigns.',
    avatar: 'https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwxfHx8fDE3NjM2Mzk1NDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    email: 'sarah.johnson@optichore.com',
    joinDate: 'January 2022',
    quote: 'Success in digital marketing comes from understanding your audience deeply and delivering value at every touchpoint.',
    social: {
      linkedin: '#',
      twitter: '#',
      facebook: '#',
    },
  },
};


export async function generateStaticParams() {
  return Object.keys(authorsData).map(authorId => ({
    authorId,
  }));
}
export default function BlogAuthorPage({ params }: { params: { authorId: string } }) {
  
  return (
    <AuthorClient authorId={params.authorId}/>
  );
}