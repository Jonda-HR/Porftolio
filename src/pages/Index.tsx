import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Jonathan from '@/components/Jonathan';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white crt-screen">
      <Navbar />
      <Jonathan />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
