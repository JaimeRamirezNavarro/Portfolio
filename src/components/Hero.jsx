import React from 'react';
import { ArrowRight, Sparkles, Download, Terminal, Code2, Server, Cpu, Layers } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="section-container hero-section">
      <div className="hero-grid">
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={16} />
            <span>{personalInfo.status}</span>
          </div>

          <h1 className="hero-title">
            Desarrollo Web & <span className="text-gradient">Sistemas de Software</span>
          </h1>

          <p className="hero-bio">
            Soy <strong>{personalInfo.name}</strong>, {personalInfo.tagline} {personalInfo.about}
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              <span>Ver Mis Proyectos</span>
              <ArrowRight size={18} />
            </a>

            <a href="#tech" className="btn-secondary" style={{ borderColor: 'rgba(139, 92, 246, 0.4)', background: 'rgba(139, 92, 246, 0.1)' }}>
              <Layers size={18} color="#8b5cf6" />
              <span>Explorar Stack Tecnológico</span>
            </a>

            <a href="#contact" className="btn-secondary">
              <Download size={18} />
              <span>Contactar</span>
            </a>
          </div>

          <div className="hero-stats-grid">
            {personalInfo.stats.map((stat, idx) => (
              <div key={idx} className="stat-item">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-avatar-card">
            <img
              src="/avatar.png"
              alt="Jaime Ramírez Navarro - Software Engineer"
              className="avatar-img"
              loading="eager"
              fetchpriority="high"
              decoding="async"
            />
            <div className="project-preview-overlay" />
          </div>

          {/* Floating tech badges */}
          <div className="floating-tech-tag tag-1">
            <Server size={16} color="#00f2fe" />
            <span>Laravel 13 & PHP 8.3</span>
          </div>

          <div className="floating-tech-tag tag-2">
            <Terminal size={16} color="#8b5cf6" />
            <span>Python 3 & psutil</span>
          </div>

          <div className="floating-tech-tag tag-3">
            <Cpu size={16} color="#10b981" />
            <span>SQLite 3 & Docker</span>
          </div>
        </div>
      </div>
    </section>
  );
}
