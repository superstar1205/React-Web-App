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
// DarkMode
import Darkmode from 'darkmode-js';

const App = () => {

  const options = {
    bottom: '32px', // default: '32px'
    right: '32px', // default: '32px'
    // left: '32px', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#fff',  // default: '#100f2c'
    buttonColorLight: '#100f2c', // default: '#fff'
    saveInCookies: false, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
  }
  const darkmode = new Darkmode(options);
  darkmode.showWidget();
  
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
      <Footer />
    </>
  );
};

export default App;
