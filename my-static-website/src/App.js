import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from "./components/NavBar";
import SlidingSection from "./components/SlidingSection";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <div className="content">
        <SlidingSection />
        <Cards />
      </div>
      <Footer />
    </div>
    </Router>
  );
};

export default App;
