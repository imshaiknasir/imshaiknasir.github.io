import React from 'react';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { FreelanceSection } from './components/FreelanceSection';
import { Experience } from './components/Experience';
import { Awards } from './components/Awards';
import { Education } from './components/Education';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <main>
        <Skills />
        <FreelanceSection />
        <Experience />
        <Awards />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

export default App;