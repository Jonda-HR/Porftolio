
import { useState, useEffect } from 'react';

const Jonathan = () => {
  const [text, setText] = useState('');
  const fullText = "Full Stack Developer";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative crt-screen scanlines">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-neon-electric-blue/10"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Avatar */}
<div className="mb-8 flex justify-center">
  <div className="relative">
    {/* Contenedor principal del avatar con animación mejorada */}
    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-neon-fuchsia via-neon-purple to-neon-electric-blue p-1 animate-float-enhanced">
      <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
        <div className="text-4xl md:text-5xl font-bold text-neon-fuchsia neon-text-pulse">
          {'</>'}
        </div>
      </div>
    </div>
    
    {/* Resplandor exterior con animación mejorada */}
    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-neon-fuchsia via-neon-purple to-neon-electric-blue opacity-30 blur-lg animate-neon-pulse"></div>
  </div>
</div>

        {/* Name */}
        <h1 className="text-3xl md:text-6xl lg:text-8xl font-bold mb-6 text-white">
          <span className="text-neon-fuchsia neon-text glitch">Jonathan</span>{' '}
          <span className="text-neon-electric-blue neon-text glitch">Hernandez</span>
        </h1>

        {/* Typing Animation */}
        <div className="text-xl md:text-3xl lg:text-5xl mb-8 text-gray-300 font-mono">
          <span className="text-neon-yellow">&gt;</span> {text}
          <span className="animate-pulse text-neon-electric-blue">|</span>
        </div>

        {/* Description */}
        <p className="text-lg md:text-3xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          I turn ideas into reality with code.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="neon-button border-neon-fuchsia text-neon-fuchsia hover:bg-neon-fuchsia hover:text-black"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="neon-button border-neon-electric-blue text-neon-electric-blue hover:bg-neon-electric-blue hover:text-black"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute left-1/2 transform -translate-x-1/3 mt-16">
          <div className="w-6 h-10 border-2 border-neon-electric-blue rounded-full flex justify-center">
            <div className="w-1 h-3 bg-neon-electric-blue rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jonathan;
