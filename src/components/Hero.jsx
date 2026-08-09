import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="section-container hero-section">
      <div className="hero-grid">
        {/* 1. Foto de perfil primero en móviles */}
        <div className="hero-image-wrapper">
          <div className="hero-avatar-card">
            <img
              src="/avatar.png"
              alt="Jaime Ramírez Navarro - Software Engineer"
              className="avatar-img"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>

        {/* 2. Texto de presentación + 3. Rectángulos de información */}
        <div className="hero-content">
          <h1 className="hero-title">
            Desarrollador Web & <span className="text-gradient">Software Engineer</span>
          </h1>

          <p className="hero-bio">
            Soy <strong>{personalInfo.name}</strong>. {personalInfo.tagline} {personalInfo.about}
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              <span>Ver Mis Proyectos</span>
              <ArrowRight size={18} />
            </a>

            <a href="#contact" className="btn-secondary">
              <Download size={18} />
              <span>Contáctame</span>
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
      </div>
    </section>
  );
}
