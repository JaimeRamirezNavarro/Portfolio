import React, { useEffect } from 'react';
import { X, CheckCircle2, Server, Cpu, Database, ShieldCheck, Zap, Sparkles, ExternalLink } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="glass-card modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Cerrar modal">
          <X size={20} />
        </button>

        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
            <span className="booster-badge" style={{ color: project.color, borderColor: `${project.color}40`, background: `${project.color}15` }}>
              {project.badge}
            </span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{project.categoryLabel}</span>
          </div>

          <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{project.title}</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            {project.description}
          </p>

          {/* Metrics Row */}
          <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Zap size={18} color="var(--accent-cyan)" />
            <span>Métricas e Impacto</span>
          </h3>
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            {project.metrics.map((metric, idx) => (
              <span key={idx} style={{ padding: '0.4rem 0.85rem', borderRadius: '99px', background: 'rgba(0, 242, 254, 0.08)', border: '1px solid rgba(0, 242, 254, 0.25)', color: 'var(--accent-cyan)', fontSize: '0.85rem', fontWeight: 600 }}>
                {metric}
              </span>
            ))}
          </div>

          {/* Architecture Breakdown if exists */}
          {project.architecture && (
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Server size={18} color="var(--accent-purple)" />
                <span>Desglose de Arquitectura Técnica</span>
              </h3>

              <div style={{ display: 'grid', gap: '0.85rem' }}>
                {project.architecture.frontend && (
                  <div style={{ padding: '0.85rem 1rem', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-color)' }}>
                    <h4 style={{ color: 'var(--accent-cyan)', fontSize: '0.9rem', marginBottom: '0.2rem' }}>💻 Capa Frontend / Cliente</h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{project.architecture.frontend}</p>
                  </div>
                )}

                {project.architecture.backend && (
                  <div style={{ padding: '0.85rem 1rem', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-color)' }}>
                    <h4 style={{ color: 'var(--accent-purple)', fontSize: '0.9rem', marginBottom: '0.2rem' }}>⚙️ Capa Backend & Lógica</h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{project.architecture.backend}</p>
                  </div>
                )}

                {(project.architecture.vectorDb || project.architecture.database) && (
                  <div style={{ padding: '0.85rem 1rem', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-color)' }}>
                    <h4 style={{ color: 'var(--accent-emerald)', fontSize: '0.9rem', marginBottom: '0.2rem' }}>🗄️ Persistencia & Datos</h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{project.architecture.vectorDb || project.architecture.database}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Highlights */}
          <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>Aspectos Técnicos Destacados</h3>
          <ul style={{ listStyle: 'none', display: 'grid', gap: '0.6rem', marginBottom: '2rem' }}>
            {project.highlights.map((item, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.925rem', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={16} color={project.color} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {project.category !== 'recommended' && (
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-primary" style={{ flex: 1 }}>
                <GithubIcon size={18} />
                <span>Ver Código en GitHub</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
