import React from "react";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Home from "./Pages/Home/Home";
import Findjobs from "./Pages/Findjobs/Findjobs";
import About from "./Pages/About-Us/About";
import Contact from "./Pages/Contact-Us/Contact";
import Privacy from "./Pages/Privacy-Policy/Privacy";
import Terms from "./Pages/Terms-and-conditions/Terms";
import Disclaimer from "./Pages/Disclaimer/Disclaimer";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";

import Theme from "./components/Theme";


const App = () => {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="jobs" element={<Findjobs />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="contact" element={<Contact />} />
        <Route exact path="privacy" element={<Privacy />} />
        <Route exact path="terms" element={<Terms />} />
        <Route exact path="disclaimer" element={<Disclaimer />} />
      </Routes>
      <Theme />
      <Footer />
    </>
  );
};

export default App;
