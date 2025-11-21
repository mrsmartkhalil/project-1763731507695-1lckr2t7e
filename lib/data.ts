import { promises as fs } from 'fs';
import path from 'path';
import { Project, BlogPost, PortfolioData } from './types';

const dataFilePath = path.join(process.cwd(), 'data', 'portfolio.json');

export async function getPortfolioData(): Promise<PortfolioData> {
  try {
    const fileContents = await fs.readFile(dataFilePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error('Error reading portfolio data:', error);
    return { projects: [], blogPosts: [] };
  }
}

export async function savePortfolioData(data: PortfolioData): Promise<void> {
  try {
    await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
  } catch (error) {
    console.error('Error saving portfolio data:', error);
    throw error;
  }
}

export async function getProjects(): Promise<Project[]> {
  const data = await getPortfolioData();
  return data.projects;
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const projects = await getProjects();
  return projects.filter((project) => project.featured);
}

export async function getProjectById(id: string): Promise<Project | undefined> {
  const projects = await getProjects();
  return projects.find((project) => project.id === id);
}

export async function addProject(project: Project): Promise<void> {
  const data = await getPortfolioData();
  data.projects.push(project);
  await savePortfolioData(data);
}

export async function updateProject(id: string, updatedProject: Partial<Project>): Promise<void> {
  const data = await getPortfolioData();
  const index = data.projects.findIndex((p) => p.id === id);
  if (index !== -1) {
    data.projects[index] = { ...data.projects[index], ...updatedProject };
    await savePortfolioData(data);
  }
}

export async function deleteProject(id: string): Promise<void> {
  const data = await getPortfolioData();
  data.projects = data.projects.filter((p) => p.id !== id);
  await savePortfolioData(data);
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const data = await getPortfolioData();
  return data.blogPosts;
}

export async function getPublishedBlogPosts(): Promise<BlogPost[]> {
  const posts = await getBlogPosts();
  return posts.filter((post) => post.published);
}

export async function getBlogPostById(id: string): Promise<BlogPost | undefined> {
  const posts = await getBlogPosts();
  return posts.find((post) => post.id === id);
}

export async function addBlogPost(post: BlogPost): Promise<void> {
  const data = await getPortfolioData();
  data.blogPosts.push(post);
  await savePortfolioData(data);
}

export async function updateBlogPost(id: string, updatedPost: Partial<BlogPost>): Promise<void> {
  const data = await getPortfolioData();
  const index = data.blogPosts.findIndex((p) => p.id === id);
  if (index !== -1) {
    data.blogPosts[index] = { ...data.blogPosts[index], ...updatedPost, updatedAt: new Date().toISOString() };
    await savePortfolioData(data);
  }
}

export async function deleteBlogPost(id: string): Promise<void> {
  const data = await getPortfolioData();
  data.blogPosts = data.blogPosts.filter((p) => p.id !== id);
  await savePortfolioData(data);
}
