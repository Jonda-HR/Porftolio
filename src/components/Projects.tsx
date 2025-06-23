
const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "#",
      color: "neon-fuchsia"
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat application with AI integration using OpenAI API. Built with React, Socket.io, and Express.js for seamless communication.",
      technologies: ["React", "Socket.io", "OpenAI", "Express"],
      github: "#",
      demo: "#",
      color: "neon-electric-blue"
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["Vue.js", "Firebase", "Vuetify", "PWA"],
      github: "#",
      demo: "#",
      color: "neon-purple"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with data visualization, location-based forecasts, and historical weather data analysis.",
      technologies: ["React", "D3.js", "Weather API", "Tailwind"],
      github: "#",
      demo: "#",
      color: "neon-yellow"
    },
    {
      title: "Blockchain Wallet",
      description: "Cryptocurrency wallet application with transaction history, multi-currency support, and secure key management.",
      technologies: ["React", "Web3.js", "Ethereum", "MetaMask"],
      github: "#",
      demo: "#",
      color: "neon-fuchsia"
    },
    {
      title: "Music Streaming App",
      description: "Spotify-like music streaming application with playlist creation, social features, and audio visualization.",
      technologies: ["React Native", "Node.js", "PostgreSQL", "AWS"],
      github: "#",
      demo: "#",
      color: "neon-electric-blue"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-neon-electric-blue neon-text">&lt;</span>
              <span className="text-white">Projects</span>
              <span className="text-neon-fuchsia neon-text">/&gt;</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-electric-blue to-neon-fuchsia mx-auto"></div>
            <p className="text-gray-400 mt-4 font-mono">
              {"// Some of my recent work"}
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group relative retro-card hover:transform hover:scale-105 transition-all duration-300"
              >
                {/* Card Border Glow */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r from-${project.color} to-transparent opacity-0 group-hover:opacity-30 rounded-lg blur transition-opacity duration-300`}></div>
                
                <div className="relative bg-gray-900/90 rounded-lg p-6 h-full flex flex-col">
                  {/* Project Header */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className={`text-xl font-bold text-${project.color} font-mono`}>
                      {project.title}
                    </h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500 opacity-60"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-60"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500 opacity-60"></div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <p className="text-gray-500 text-xs mb-2 font-mono">
                      {"// Technologies used"}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded border border-gray-700 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className={`flex items-center text-${project.color} hover:text-white transition-colors text-sm font-mono group/link`}
                    >
                      <span className="mr-1">{'<'}</span>
                      Github
                      <span className="ml-1">{'>'}</span>
                      <div className="w-0 group-hover/link:w-full h-0.5 bg-current transition-all duration-300 ml-1"></div>
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center text-gray-400 hover:text-neon-yellow transition-colors text-sm font-mono group/link"
                    >
                      <span className="mr-1">{'<'}</span>
                      Live Demo
                      <span className="ml-1">{'>'}</span>
                      <div className="w-0 group-hover/link:w-full h-0.5 bg-current transition-all duration-300 ml-1"></div>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <a
              href="#"
              className="neon-button border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-black inline-flex items-center"
            >
              <span className="mr-2">{'>'}</span>
              View All Projects
              <span className="ml-2">{'<'}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
