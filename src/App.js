import "./styles/App.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import HbLogic from "./components/HbLogic";

function App() {
  return (
    <div className="App" id="home">
      <HbLogic />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
