// src/App.jsx
import { ParallaxProvider } from 'react-scroll-parallax';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ProjectsPage from './components/ProjectsPage';
// Remove Services import from here
import Experience from './components/Experience';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ParallaxProvider>
      <div className="min-h-screen gradient-bg">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <ProjectsPage />
          {/* Remove Services component from here */}
          <Experience />
          <Awards />
          <Contact />
        </main>
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default App;