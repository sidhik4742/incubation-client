import React from "react";
import Showcase from "./showcase/Showcase";
import "./showcase/Showcase.css";
import About from "./AboutSection/AboutSection";
import Gallery from "./Gallery/Gallery";
import "./Gallery/Gallery.css";
import Incubatees from "./Incubatees/Incubatees";
import "./Incubatees/Incubatees.css";
import Header from "./Header/Header";
import Footer from "./footer/Footer";

function Home() {
  return (
    <div>
    <Header />
      <Showcase />
      <About />
      <Gallery />
      <Incubatees />
      <Footer />
    </div>
  );
}

export default Home;
