
const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-800 bg-black/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 font-mono text-sm">
              {"© 2025 Jonathan Hernandez. Built with "}
              <span className="text-neon-fuchsia">{'<React/>'}</span>
              {" and "}
              <span className="text-neon-electric-blue">💜</span>
            </p>
          </div>
          
          <div className="flex space-x-6">
            {[
              { name: 'GitHub', url: 'https://github.com/Jonda-HR' },
              { name: 'LinkedIn', url: 'https://www.linkedin.com/in/jonathan-hern%C3%A1ndez-9a5938215/' },
              { name: 'Instagram', url: 'https://www.instagram.com/jonda_hr/s' }
            ].map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="text-gray-400 hover:text-neon-electric-blue transition-colors font-mono text-sm group"
              >
                {link.name}
                <div className="w-0 group-hover:w-full h-0.5 bg-neon-electric-blue transition-all duration-300"></div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
