import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        <p style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          Diseñado y desarrollado con <Heart size={16} color="#ec4899" fill="#ec4899" /> por <strong>{personalInfo.name}</strong>
        </p>
        <p style={{ fontSize: '0.825rem' }}>
          © {new Date().getFullYear()} Todos los derechos reservados. Portafolio Profesional de Desarrollo Web & Software.
        </p>
        <button
          onClick={scrollToTop}
          className="btn-secondary"
          style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', borderRadius: '99px', marginTop: '0.5rem' }}
        >
          <span>Volver Arriba</span>
          <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}
