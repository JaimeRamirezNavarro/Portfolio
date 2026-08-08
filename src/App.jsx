import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [activeModalProject, setActiveModalProject] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handleOpenProjectModal = (project) => {
    setActiveModalProject(project);
  };

  const handleCloseModal = () => {
    setActiveModalProject(null);
  };

  return (
    <div className="app-container">
      {/* Background Animated Lights */}
      <div className="ambient-background">
        <div className="spotlight-1" />
        <div className="spotlight-2" />
        <div className="spotlight-3" />
      </div>

      {/* Main Navigation */}
      <Header theme={theme} toggleTheme={toggleTheme} />

      {/* Main Sections */}
      <main>
        <Hero />
        <TechStack />
        <Projects onSelectProject={handleOpenProjectModal} />
        <Timeline />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
