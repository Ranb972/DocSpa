import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Gallery from './sections/Gallery';
import Services from './sections/Services';
import Clinic from './sections/Clinic';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import './styles/global.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
      delay: 0,
    });
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Services />
        <Clinic />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
