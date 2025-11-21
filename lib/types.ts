export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  createdAt: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  tags: string[];
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface PortfolioData {
  projects: Project[];
  blogPosts: BlogPost[];
}
