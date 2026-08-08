import React, { useState } from 'react';
import {
  Activity, Users, PhoneCall, Code2, Bot, ShieldCheck,
  Eye, FolderGit2, ArrowUpRight, Sparkles, CheckCircle2, Zap
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projects, projectCategories } from '../data/portfolioData';

const iconMap = {
  Activity,
  Users,
  PhoneCall,
  Code2,
  Bot,
  ShieldCheck
};

export default function Projects({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="section-container">
      <div className="section-title-wrapper">
        <div className="section-subtitle">
          <FolderGit2 size={16} />
          <span>Portafolio de Ingeniería & Proyectos</span>
        </div>
        <h2 className="section-main-title">
          Proyectos <span className="text-gradient">Desarrollados & Arquitecturas</span>
        </h2>
        <p className="section-description">
          Sistemas de observabilidad en tiempo real, plataformas web avanzadas e integraciones de software construidas con estándares profesionales.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="filter-container">
        {projectCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Sleek Text & Tech Card Grid (NO IMAGES) */}
      <div className="projects-grid">
        {filteredProjects.map((project) => {
          const IconComponent = iconMap[project.icon] || Code2;
          const cardGlow = project.color || '#00f2fe';

          return (
            <div
              key={project.id}
              className="project-card-sleek"
              style={{
                '--card-accent-gradient': `linear-gradient(90deg, ${cardGlow} 0%, #3b82f6 100%)`,
                '--card-glow-color': `${cardGlow}40`
              }}
            >
              <div className="project-card-top">
                {/* Header Row: Icon + Badge */}
                <div className="project-card-header-row">
                  <div
                    className="project-icon-badge-box"
                    style={{
                      background: `radial-gradient(circle at center, ${cardGlow}20 0%, rgba(15, 23, 42, 0.8) 100%)`,
                      border: `1px solid ${cardGlow}40`,
                      color: cardGlow
                    }}
                  >
                    <IconComponent size={26} />
                  </div>

                  <span
                    className="project-category-pill"
                    style={{
                      color: cardGlow,
                      background: `${cardGlow}15`,
                      border: `1px solid ${cardGlow}30`
                    }}
                  >
                    {project.badge}
                  </span>
                </div>

                {/* Title & Category Subtitle */}
                <div>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '0.25rem' }}>
                    {project.categoryLabel}
                  </span>
                  <h3 className="project-card-title">{project.title}</h3>
                </div>

                {/* Description */}
                <p className="project-card-description">
                  {project.shortDesc}
                </p>

                {/* Key Metrics Container */}
                <div className="project-metrics-container">
                  {project.metrics.map((metric, idx) => (
                    <span
                      key={idx}
                      className="metric-chip"
                      style={{
                        background: 'rgba(0, 242, 254, 0.06)',
                        border: '1px solid rgba(0, 242, 254, 0.18)',
                        color: 'var(--accent-cyan)'
                      }}
                    >
                      <Zap size={12} />
                      <span>{metric}</span>
                    </span>
                  ))}
                </div>

                {/* Tech Chips */}
                <div className="project-tags-list">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tech-chip">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="project-card-actions">
                <button
                  onClick={() => onSelectProject(project)}
                  className="btn-card-action"
                  style={{
                    background: `linear-gradient(135deg, ${cardGlow} 0%, #3b82f6 100%)`,
                    color: '#0f172a',
                    fontWeight: 700,
                    padding: '0.75rem 1.25rem'
                  }}
                >
                  <Eye size={17} />
                  <span>Explorar Ficha Técnica</span>
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-card-action"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: 'var(--text-primary)',
                    border: '1px solid var(--border-color)',
                    flex: '0 0 auto',
                    padding: '0.75rem'
                  }}
                  title="Ver Repositorio GitHub"
                >
                  <GithubIcon size={18} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
