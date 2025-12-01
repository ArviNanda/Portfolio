import { useState } from "react";
import "./App.css";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About_Me.jsx";
import Contact from "./components/Contact.jsx";
import Project from "./components/Project.jsx";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
