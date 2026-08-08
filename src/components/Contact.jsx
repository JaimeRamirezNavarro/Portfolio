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

      <div style={{ maxWidth: '680px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {/* Email Card */}
        <a
          href={`mailto:${personalInfo.email}`}
          className="glass-card"
          style={{
            padding: '1.5rem 2rem',
            display: 'flex',
            alignItems: 'center',
            justify: 'space-between',
            gap: '1.5rem',
            textDecoration: 'none',
            borderLeft: '4px solid var(--accent-cyan)',
            flexWrap: 'wrap'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', minWidth: 0 }}>
            <div className="contact-icon-box" style={{ width: '52px', height: '52px', color: 'var(--accent-cyan)', background: 'rgba(0, 242, 254, 0.1)', borderColor: 'rgba(0, 242, 254, 0.25)', flexShrink: 0 }}>
              <Mail size={24} />
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.2rem' }}>Correo Electrónico Directo</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)', whiteSpace: 'nowrap' }}>{personalInfo.email}</div>
            </div>
          </div>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', gap: '0.35rem', background: 'rgba(0, 242, 254, 0.08)', padding: '0.45rem 0.9rem', borderRadius: '99px', border: '1px solid rgba(0, 242, 254, 0.25)', flexShrink: 0 }}>
            <span>Enviar Email</span>
            <ArrowUpRight size={16} />
          </span>
        </a>

        {/* Phone Card */}
        <a
          href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
          className="glass-card"
          style={{
            padding: '1.5rem 2rem',
            display: 'flex',
            alignItems: 'center',
            justify: 'space-between',
            gap: '1.5rem',
            textDecoration: 'none',
            borderLeft: '4px solid var(--accent-emerald)',
            flexWrap: 'wrap'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', minWidth: 0 }}>
            <div className="contact-icon-box" style={{ width: '52px', height: '52px', color: 'var(--accent-emerald)', background: 'rgba(16, 185, 129, 0.1)', borderColor: 'rgba(16, 185, 129, 0.25)', flexShrink: 0 }}>
              <Phone size={24} />
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.2rem' }}>Teléfono / WhatsApp</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>{personalInfo.phone}</div>
            </div>
          </div>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', gap: '0.35rem', background: 'rgba(16, 185, 129, 0.08)', padding: '0.45rem 0.9rem', borderRadius: '99px', border: '1px solid rgba(16, 185, 129, 0.25)', flexShrink: 0 }}>
            <span>Llamar</span>
            <ArrowUpRight size={16} />
          </span>
        </a>

        {/* Location Card */}
        <div
          className="glass-card"
          style={{
            padding: '1.5rem 2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem',
            borderLeft: '4px solid var(--accent-purple)'
          }}
        >
          <div className="contact-icon-box" style={{ width: '52px', height: '52px', color: 'var(--accent-purple)', background: 'rgba(139, 92, 246, 0.1)', borderColor: 'rgba(139, 92, 246, 0.25)', flexShrink: 0 }}>
            <MapPin size={24} />
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.2rem' }}>Ubicación & Disponibilidad</div>
            <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>{personalInfo.location}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
