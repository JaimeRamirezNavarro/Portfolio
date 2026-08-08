import React from 'react';
import { Briefcase, GraduationCap, Globe2, Award } from 'lucide-react';
import { experienceData, educationData, languagesData } from '../data/portfolioData';

export default function Timeline() {
  return (
    <section id="timeline" className="section-container">
      <div className="section-title-wrapper">
        <div className="section-subtitle">
          <Briefcase size={16} />
          <span>Experiencia & Estudios</span>
        </div>
        <h2 className="section-main-title">
          Mi <span className="text-gradient">Trayectoria Profesional & Formación</span>
        </h2>
        <p className="section-description">
          Experiencia práctica en empresas, educación técnica en Desarrollo de Aplicaciones Web (DAW) e idiomas.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '3rem' }}>
        {/* Work Experience */}
        <div>
          <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--accent-cyan)' }}>
            <Briefcase size={20} />
            <span>Experiencia Laboral</span>
          </h3>

          <div className="timeline">
            {experienceData.map((item, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-year">{item.year}</div>
                <h4 className="timeline-role">{item.role}</h4>
                <div className="timeline-company">{item.company}</div>
                <p className="timeline-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Languages */}
        <div>
          <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--accent-purple)' }}>
            <GraduationCap size={20} />
            <span>Educación & Titulaciones</span>
          </h3>

          <div className="timeline">
            {educationData.map((item, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-dot" style={{ background: 'var(--accent-purple)', boxShadow: '0 0 12px var(--accent-purple)' }} />
                <div className="timeline-year" style={{ color: 'var(--accent-purple)' }}>{item.year}</div>
                <h4 className="timeline-role">{item.title}</h4>
                <div className="timeline-company" style={{ color: 'var(--accent-cyan)' }}>{item.institution}</div>
                <p className="timeline-desc">{item.details}</p>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: '1.3rem', marginTop: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--accent-emerald)' }}>
            <Globe2 size={20} />
            <span>Idiomas</span>
          </h3>

          <div className="glass-card" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {languagesData.map((lang, idx) => (
              <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.925rem' }}>
                <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{lang.language}</span>
                <span style={{ color: 'var(--accent-emerald)', fontWeight: 600, background: 'rgba(16, 185, 129, 0.1)', padding: '0.2rem 0.6rem', borderRadius: '8px', fontSize: '0.85rem' }}>
                  {lang.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
