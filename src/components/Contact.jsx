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

      <div style={{ maxWidth: '640px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {/* Email Card */}
        <a
          href={`mailto:${personalInfo.email}`}
          className="glass-card"
          style={{
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem',
            textDecoration: 'none',
            borderLeft: '4px solid var(--accent-cyan)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div className="contact-icon-box" style={{ width: '42px', height: '42px', color: 'var(--accent-cyan)', background: 'rgba(0, 242, 254, 0.1)', borderColor: 'rgba(0, 242, 254, 0.25)', flexShrink: 0 }}>
                <Mail size={20} />
              </div>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Correo Electrónico Directo
              </span>
            </div>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', gap: '0.3rem', background: 'rgba(0, 242, 254, 0.08)', padding: '0.35rem 0.8rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0, 242, 254, 0.25)' }}>
              <span>Enviar Email</span>
              <ArrowUpRight size={14} />
            </span>
          </div>

          <div className="contact-email-text" style={{ fontSize: 'clamp(0.85rem, 4.2vw, 1.1rem)', fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)', overflowWrap: 'break-word', wordBreak: 'break-word' }}>
            {personalInfo.email}
          </div>
        </a>

        {/* Phone Card */}
        <a
          href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
          className="glass-card"
          style={{
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem',
            textDecoration: 'none',
            borderLeft: '4px solid var(--accent-emerald)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div className="contact-icon-box" style={{ width: '42px', height: '42px', color: 'var(--accent-emerald)', background: 'rgba(16, 185, 129, 0.1)', borderColor: 'rgba(16, 185, 129, 0.25)', flexShrink: 0 }}>
                <Phone size={20} />
              </div>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Teléfono / WhatsApp
              </span>
            </div>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', gap: '0.3rem', background: 'rgba(16, 185, 129, 0.08)', padding: '0.35rem 0.8rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(16, 185, 129, 0.25)' }}>
              <span>Llamar</span>
              <ArrowUpRight size={14} />
            </span>
          </div>

          <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
            {personalInfo.phone}
          </div>
        </a>

        {/* Location Card */}
        <div
          className="glass-card"
          style={{
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem',
            borderLeft: '4px solid var(--accent-purple)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div className="contact-icon-box" style={{ width: '42px', height: '42px', color: 'var(--accent-purple)', background: 'rgba(139, 92, 246, 0.1)', borderColor: 'rgba(139, 92, 246, 0.25)', flexShrink: 0 }}>
              <MapPin size={20} />
            </div>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Ubicación & Disponibilidad
            </span>
          </div>
          <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
            {personalInfo.location}
          </div>
        </div>
      </div>
    </section>
  );
}
