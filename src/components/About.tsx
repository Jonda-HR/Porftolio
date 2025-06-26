
const About = () => {
  const skills = [
    { name: 'React', level: 90, color: 'text-neon-electric-blue' },
    { name: 'Node.js', level: 95, color: 'text-neon-fuchsia' },
    { name: 'Next.js', level: 90, color: 'text-neon-yellow' },
    { name: 'Nest.js', level: 95, color: 'text-neon-purple' },
    { name: 'TypeScript', level: 90, color: 'text-neon-electric-blue' },
    { name: 'SQL', level: 90, color: 'text-neon-fuchsia' },
    { name: 'Docker', level: 50, color: 'text-neon-yellow' },
    { name: 'git', level: 90, color: 'text-neon-electric-blue' },
    { name: 'HTML', level: 100, color: 'text-neon-fuchsia' },
    { name: 'CSS', level: 90, color: 'text-neon-yellow' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-neon-fuchsia neon-text">&lt;</span>
              <span className="text-white">About</span>
              <span className="text-neon-electric-blue neon-text">/&gt;</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-fuchsia to-neon-electric-blue mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="retro-card">
                <h3 className="text-2xl font-bold text-neon-electric-blue mb-4 font-mono">
                  $ whoami
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I'm a passionate full-stack developer with over two years of experience building scalable web applications. I'm passionate about working with modern technologies and creating seamless user experiences. I enjoy learning new things.
                </p>
              </div>

              <div className="retro-card">
                <h3 className="text-xl font-bold text-neon-fuchsia mb-4 font-mono">
                  {"// Current Focus"}
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="text-neon-yellow mr-2">▶</span>
                    Developing scalable React applications
                  </li>
                  <li className="flex items-center">
                    <span className="text-neon-yellow mr-2">▶</span>
                    Learning new things
                  </li>
                </ul>
              </div>
            </div>

            {/* Skills */}
            <div className="retro-card">
              <h3 className="text-2xl font-bold text-neon-purple mb-6 font-mono">
                Skills.json
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className={`font-mono ${skill.color}`}>
                        "{skill.name}":
                      </span>
                      <span className="text-gray-400 font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 delay-${index * 100} bg-gradient-to-r from-current to-current ${skill.color}`}
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
