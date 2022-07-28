import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import Projects from './Components/Projects/Projects';
import Experience from './Components/Experience/Experience';
import Works from './Components/Works/Works';


function App() {
  return (
    <div className="App">
        <Navbar />
        <Intro />
        <Projects />
        <Experience />
        <Works />
    </div>
  );
}

export default App;
