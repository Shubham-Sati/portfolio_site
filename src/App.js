import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import Skills from './Components/Skills/Skills';
import Experience from './Components/Experience/Experience';
import Works from './Components/Works/Works';
import Portfolio from './Components/Portfolio/Portfolio';
import Testimonial from './Components/Testimonial/Testimonial';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Intro />
        <Skills />
        <Experience />
        <Works />
        <Portfolio />
        <Testimonial />
        <Contact />
    </div>
  );
}

export default App;
