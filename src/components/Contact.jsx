import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

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
          Estoy disponible para incorporación a equipos de desarrollo, consultoría técnica o proyectos freelance.
        </p>
      </div>

      <div className="contact-grid">
        <div className="glass-card contact-info-card">
          <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Información de Contacto</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Envíame un mensaje directo o contáctame a través de mis redes profesionales.
          </p>

          <div className="contact-item">
            <div className="contact-icon-box">
              <Mail size={22} />
            </div>
            <div>
              <div className="contact-label">Email Principal</div>
              <div className="contact-value">{personalInfo.email}</div>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon-box" style={{ background: 'rgba(139, 92, 246, 0.1)', borderColor: 'rgba(139, 92, 246, 0.25)', color: 'var(--accent-purple)' }}>
              <MapPin size={22} />
            </div>
            <div>
              <div className="contact-label">Ubicación & Modalidad</div>
              <div className="contact-value">{personalInfo.location}</div>
            </div>
          </div>

          <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
            <div className="contact-label" style={{ marginBottom: '0.75rem' }}>Redes Profesionales</div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: '0.6rem', borderRadius: '50%' }}>
                <GithubIcon size={20} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: '0.6rem', borderRadius: '50%' }}>
                <LinkedinIcon size={20} />
              </a>
              <a href={personalInfo.twitter} target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: '0.6rem', borderRadius: '50%' }}>
                <TwitterIcon size={20} />
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="glass-card contact-form">
          <h3 style={{ fontSize: '1.4rem', marginBottom: '0.25rem' }}>Enviar Mensaje</h3>

          {submitted && (
            <div style={{ padding: '0.85rem 1rem', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.3)', color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem' }}>
              <CheckCircle size={18} />
              <span>¡Mensaje recibido con éxito! Te responderé muy pronto.</span>
            </div>
          )}

          <div className="form-group">
            <label className="form-label">Tu Nombre Completo</label>
            <input
              type="text"
              required
              className="form-input"
              placeholder="Ej. Carlos Mendoza"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Correo Electrónico</label>
            <input
              type="email"
              required
              className="form-input"
              placeholder="carlos@empresa.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Mensaje o Propuesta</label>
            <textarea
              required
              rows={4}
              className="form-textarea"
              placeholder="Hola Sara, nos gustaría invitarte a una entrevista para un puesto de Software Engineer..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
            <span>Enviar Mensaje</span>
            <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}
