import "./styles/App.scss";
import { createContext, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import HbLogic from "./components/HbLogic";
import Sidebars from "./components/Sidebars";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <HbLogic />
        <Navbar />
        <Sidebars />
        <Hero />

        <About />
        <Projects />
        <Contact />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
