
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
    
    // You would integrate with your backend here
    alert('Message sent successfully!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-neon-purple neon-text">&lt;</span>
              <span className="text-white">Contact</span>
              <span className="text-neon-yellow neon-text">/&gt;</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-yellow mx-auto"></div>
            <p className="text-gray-400 mt-4 font-mono">
              {"// Let's build something amazing together"}
            </p>
          </div>

<div className="grid lg:grid-cols-2 gap-12">
  {/* Contact Info - Primera columna */}
  <div className="retro-card">
    <h3 className="text-2xl font-bold text-neon-electric-blue mb-6 font-mono">
      $ contact --info
    </h3>
    <div className="space-y-4">
      <div className="flex items-center">
        <span className="text-neon-fuchsia mr-3 font-mono">{'>'}</span>
        <span className="text-gray-300">jd.hrez@gmail.com</span>
      </div>
      <div className="flex items-center">
        <span className="text-neon-fuchsia mr-3 font-mono">{'>'}</span>
        <span className="text-gray-300">+(504) 9694-7611</span>
      </div>
      <div className="flex items-center">
        <span className="text-neon-fuchsia mr-3 font-mono">{'>'}</span>
        <span className="text-gray-300">Tegucigalpa, Honduras</span>
      </div>
    </div>
  </div>

  {/* Social Links - Segunda columna */}
  <div className="retro-card">
    <h3 className="text-xl font-bold text-neon-yellow mb-4 font-mono">
      {"// Social Links"}
    </h3>
    <div className="space-y-3">
      {[
        { name: 'GitHub', url: 'https://github.com/Jonda-HR', color: 'text-neon-fuchsia' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/jonathan-hern%C3%A1ndez-9a5938215/', color: 'text-neon-electric-blue' },
        { name: 'Instagram', url: 'https://www.instagram.com/jonda_hr/', color: 'text-neon-purple' },
        { name: 'Portfolio', url: '#', color: 'text-neon-yellow' }
      ].map((link) => (
        <a
          key={link.name}
          href={link.url}
          className={`block ${link.color} hover:text-white transition-colors font-mono group`}
        >
          <span className="mr-2">{'<'}</span>
          {link.name}
          <span className="ml-2">{'>'}</span>
          <div className="w-0 group-hover:w-full h-0.5 bg-current transition-all duration-300"></div>
        </a>
      ))}
    </div>
  </div>
</div>

           {/* Contact Form */}
            {/* <div className="retro-card">
              <h3 className="text-2xl font-bold text-neon-fuchsia mb-6 font-mono">
                {"// Send Message"}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2 font-mono text-sm">
                    Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white font-mono focus:border-neon-electric-blue focus:outline-none transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-mono text-sm">
                    Email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white font-mono focus:border-neon-electric-blue focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-mono text-sm">
                    Message:
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white font-mono focus:border-neon-electric-blue focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full neon-button border-neon-fuchsia text-neon-fuchsia hover:bg-neon-fuchsia hover:text-black transition-all duration-300 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"></div>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
