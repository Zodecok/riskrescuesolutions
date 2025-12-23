import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import About from './components/sections/About';
import Team from './components/sections/Team';
import MapSection from './components/sections/MapSection';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Services />
      <MapSection />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;

