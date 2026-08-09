import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function Header({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['home', 'tech', 'projects', 'timeline', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Inicio' },
    { id: 'tech', label: 'Tecnologías' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'timeline', label: 'Trayectoria' },
    { id: 'contact', label: 'Contacto' },
  ];

  return (
    <header className={`header-nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="#home" className="brand-logo">
        <div className="logo-badge">JR</div>
        <span>Jaime <span className="text-gradient">Ramírez</span></span>
      </a>

      {/* Desktop Navigation */}
      <nav className="desktop-nav">
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
        <button
          onClick={toggleTheme}
          className="theme-toggle-btn"
          title={`Cambiar a modo ${theme === 'dark' ? 'claro' : 'oscuro'}`}
          aria-label="Cambiar tema de color"
        >
          {theme === 'dark' ? <Sun size={18} color="#f59e0b" /> : <Moon size={18} color="#6366f1" />}
        </button>

        {/* Direct Contact Button - Visible everywhere (desktop & mobile) */}
        <a href="#contact" className="btn-primary header-contact-btn">
          Contáctame
        </a>
      </div>
    </header>
  );
}
