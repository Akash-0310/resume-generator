import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import ResumeBuilder from './pages/ResumeBuilder';

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/builder" element={<ResumeBuilder />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
