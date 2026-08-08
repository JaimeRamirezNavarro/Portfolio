import React from 'react';
import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  return (
    <section id="contact" className="section-container">
      <div className="section-title-wrapper">
        <div className="section-subtitle">
          <Mail size={16} />
          <span>Contacto Directo</span>
        </div>
        <h2 className="section-main-title">
          ¿Hablamos de tu <span className="text-gradient">Próximo Proyecto?</span>
        </h2>
        <p className="section-description">
          Estoy disponible para incorporación a equipos de desarrollo, oportunidades profesionales y proyectos de ingeniería.
        </p>
      </div>

      <div style={{ maxWidth: '750px', margin: '0 auto' }}>
        <div className="glass-card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.4rem' }}>Contacto Directo</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
              Escríbeme o llámame directamente para cualquier consulta o propuesta laboral.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {/* Email Card */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="contact-item"
              style={{
                padding: '1.25rem',
                borderRadius: '16px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-color)',
                transition: 'all 0.3s ease',
                textDecoration: 'none'
              }}
            >
              <div className="contact-icon-box" style={{ width: '48px', height: '48px' }}>
                <Mail size={22} />
              </div>
              <div style={{ overflow: 'hidden' }}>
                <div className="contact-label">Correo Electrónico</div>
                <div className="contact-value" style={{ fontSize: '0.95rem', wordBreak: 'break-all' }}>{personalInfo.email}</div>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
              className="contact-item"
              style={{
                padding: '1.25rem',
                borderRadius: '16px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-color)',
                transition: 'all 0.3s ease',
                textDecoration: 'none'
              }}
            >
              <div className="contact-icon-box" style={{ width: '48px', height: '48px', background: 'rgba(16, 185, 129, 0.1)', borderColor: 'rgba(16, 185, 129, 0.25)', color: 'var(--accent-emerald)' }}>
                <Phone size={22} />
              </div>
              <div>
                <div className="contact-label">Teléfono / WhatsApp</div>
                <div className="contact-value" style={{ fontSize: '0.95rem' }}>{personalInfo.phone}</div>
              </div>
            </a>
          </div>

          {/* Location Card */}
          <div
            className="contact-item"
            style={{
              padding: '1.25rem',
              borderRadius: '16px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid var(--border-color)'
            }}
          >
            <div className="contact-icon-box" style={{ width: '48px', height: '48px', background: 'rgba(139, 92, 246, 0.1)', borderColor: 'rgba(139, 92, 246, 0.25)', color: 'var(--accent-purple)' }}>
              <MapPin size={22} />
            </div>
            <div>
              <div className="contact-label">Ubicación & Disponibilidad</div>
              <div className="contact-value" style={{ fontSize: '0.95rem' }}>{personalInfo.location}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
