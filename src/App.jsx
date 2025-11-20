import React from 'react';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import WhyChooseUs from './sections/WhyChooseUs';
import Technologies from './sections/Technologies';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact'; 

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Technologies />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}