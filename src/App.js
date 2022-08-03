import "./styles/App.scss";
import SideButton from "./components/SideButton";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="App" id="home">
      <SideButton />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
