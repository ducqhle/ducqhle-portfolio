import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header/Header';
import Nav from './components/layouts/Nav';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import smoothscroll from 'smoothscroll-polyfill';
import './styles/app.css';

smoothscroll.polyfill();

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      {/* <Services /> */}
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
