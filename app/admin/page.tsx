'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Plus, Edit, Trash2, Eye, FileText, FolderOpen } from 'lucide-react';
import { Project, BlogPost } from '@/lib/types';
export const dynamic = 'force-dynamic';


export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState<'projects' | 'blog'>('projects');
  const [projects, setProjects] = useState<Project[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const [projectsRes, blogRes] = await Promise.all([
        fetch('/api/projects'),
        fetch('/api/blog'),
      ]);
      const projectsData = await projectsRes.json();
      const blogData = await blogRes.json();
      setProjects(projectsData);
      setBlogPosts(blogData);
    } catch (error) {
      console.error('Error loading data:', error);
    }
    setIsLoading(false);
  };

  const deleteProject = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return;

    try {
      await fetch(`/api/projects?id=${id}`, { method: 'DELETE' });
      await loadData();
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  const deleteBlogPost = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog post?')) return;

    try {
      await fetch(`/api/blog?id=${id}`, { method: 'DELETE' });
      await loadData();
    } catch (error) {
      console.error('Error deleting blog post:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              CMS Admin Panel
            </h1>
            <Link
              href="/"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <Eye size={20} />
              View Site
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors ${
              activeTab === 'projects'
                ? 'bg-blue-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
            }`}
          >
            <FolderOpen size={20} />
            Projects
          </button>
          <button
            onClick={() => setActiveTab('blog')}
            className={`px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors ${
              activeTab === 'blog'
                ? 'bg-blue-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
            }`}
          >
            <FileText size={20} />
            Blog Posts
          </button>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Loading...</p>
          </div>
        ) : (
          <>
            {/* Projects Tab */}
            {activeTab === 'projects' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Manage Projects</h2>
                  <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2">
                    <Plus size={20} />
                    Add Project
                  </button>
                </div>

                <div className="grid gap-6">
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      className="bg-white dark:bg-gray-800 rounded-lg shadow p-6"
                    >
                      <div className="flex gap-6">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-32 h-32 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                              <p className="text-gray-600 dark:text-gray-400 mb-3">
                                {project.description}
                              </p>
                              <div className="flex flex-wrap gap-2 mb-2">
                                {project.technologies.map((tech, index) => (
                                  <span
                                    key={index}
                                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm rounded-full"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                              {project.featured && (
                                <span className="inline-block px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-sm rounded-full">
                                  Featured
                                </span>
                              )}
                            </div>
                            <div className="flex gap-2">
                              <button className="p-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800">
                                <Edit size={20} />
                              </button>
                              <button
                                onClick={() => deleteProject(project.id)}
                                className="p-2 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 rounded-lg hover:bg-red-200 dark:hover:bg-red-800"
                              >
                                <Trash2 size={20} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Blog Tab */}
            {activeTab === 'blog' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Manage Blog Posts</h2>
                  <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2">
                    <Plus size={20} />
                    Add Blog Post
                  </button>
                </div>

                <div className="grid gap-6">
                  {blogPosts.map((post) => (
                    <div
                      key={post.id}
                      className="bg-white dark:bg-gray-800 rounded-lg shadow p-6"
                    >
                      <div className="flex gap-6">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-32 h-32 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                              <p className="text-gray-600 dark:text-gray-400 mb-3">
                                {post.excerpt}
                              </p>
                              <div className="flex flex-wrap gap-2 mb-2">
                                {post.tags.map((tag, index) => (
                                  <span
                                    key={index}
                                    className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-sm rounded-full"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400">
                                <span>Created: {new Date(post.createdAt).toLocaleDateString()}</span>
                                <span>Updated: {new Date(post.updatedAt).toLocaleDateString()}</span>
                                {post.published && (
                                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">
                                    Published
                                  </span>
                                )}
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <button className="p-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800">
                                <Edit size={20} />
                              </button>
                              <button
                                onClick={() => deleteBlogPost(post.id)}
                                className="p-2 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 rounded-lg hover:bg-red-200 dark:hover:bg-red-800"
                              >
                                <Trash2 size={20} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}
