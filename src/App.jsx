import React from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import MouseTracker from './functions/MouseTracker';

import CVButton from './components/CVButton';
import Experiences from './sections/Experiences';
import Testimonial from './sections/Testimonial';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <MouseTracker />

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="experiences">
        <Experiences />
      </section>

      <section id="testimonials">
        <Testimonial />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />

      <CVButton />
    </div>
  );
};

export default App;
