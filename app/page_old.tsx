import { Brain, Code, Database, Sparkles, Github, ExternalLink, Calendar } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getProjects, getPublishedBlogPosts } from '@/lib/data';

export default async function Home() {
  const projects = await getProjects();
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);
  const blogPosts = await getPublishedBlogPosts();
  const recentPosts = blogPosts.slice(0, 3);

  const skills = [
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Expert in building ML models with TensorFlow, PyTorch, and scikit-learn',
      color: 'bg-blue-500',
    },
    {
      icon: Sparkles,
      title: 'Deep Learning',
      description: 'Specialized in neural networks, CNNs, RNNs, and transformer architectures',
      color: 'bg-purple-500',
    },
    {
      icon: Code,
      title: 'NLP & LLMs',
      description: 'Experience with GPT, BERT, LangChain, and custom language models',
      color: 'bg-green-500',
    },
    {
      icon: Database,
      title: 'Data Science',
      description: 'Proficient in data analysis, visualization, and statistical modeling',
      color: 'bg-orange-500',
    },
  ];

  return (
    <>
      <Navigation />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Muhammad Afaq
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-4">
              AI Expert & Machine Learning Engineer
            </p>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              Transforming ideas into intelligent solutions through cutting-edge artificial intelligence,
              machine learning, and deep learning technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors font-semibold border border-gray-300 dark:border-gray-700"
              >
                View Projects
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                  I&apos;m Muhammad Afaq, an AI Expert passionate about leveraging artificial intelligence
                  to solve complex real-world problems. With extensive experience in machine learning,
                  deep learning, and natural language processing, I specialize in building intelligent
                  systems that make a difference.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                  My expertise spans across various domains including computer vision, NLP, predictive
                  analytics, and developing production-ready AI solutions. I stay at the forefront of
                  AI innovation, constantly exploring new technologies and methodologies.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Whether it&apos;s building chatbots, developing computer vision systems, or creating
                  custom machine learning models, I bring creativity, technical expertise, and a
                  results-driven approach to every project.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6">What I Do</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Custom AI & ML Model Development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Natural Language Processing Solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Computer Vision Systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Data Analysis & Visualization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">AI Consulting & Strategy</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className={`${skill.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                    <skill.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          <ExternalLink size={16} />
                          Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:underline"
                        >
                          <Github size={16} />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Latest Blog Posts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                      <Calendar size={16} />
                      {new Date(post.createdAt).toLocaleDateString()}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Let&apos;s Work Together</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Interested in collaborating on an AI project or need expert consultation?
              I&apos;m always open to discussing new opportunities and innovative ideas.
            </p>
            <a
              href="mailto:contact@example.com"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Contact Me
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
