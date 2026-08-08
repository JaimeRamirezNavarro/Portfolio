import React, { useState } from 'react';
import {
  Code2, FileCode, FileCode2, Globe, Layout, Palette,
  Server, Terminal, Zap, Workflow, Database, DatabaseZap,
  Cpu, Box, GitBranch, CheckCircle2, Layers
} from 'lucide-react';
import { skills, techCategories } from '../data/portfolioData';

const iconMap = {
  Code2, FileCode, FileCode2, Globe, Layout, Palette,
  Server, Terminal, Zap, Workflow, Database, DatabaseZap,
  Cpu, Box, GitBranch, CheckCircle2, Layers
};

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="tech" className="section-container">
      <div className="section-title-wrapper">
        <div className="section-subtitle">
          <Layers size={16} />
          <span>Stack Tecnológico</span>
        </div>
        <h2 className="section-main-title">
          Herramientas y <span className="text-gradient">Tecnologías que Domino</span>
        </h2>
        <p className="section-description">
          Un ecosistema técnico sólido y moderno adaptado a las exigencias actuales del desarrollo de software.
        </p>
      </div>

      {/* Filter Category Tabs */}
      <div className="filter-container">
        {techCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="skills-grid">
        {filteredSkills.map((skill, index) => {
          const IconComponent = iconMap[skill.icon] || Code2;
          return (
            <div key={index} className="glass-card skill-card">
              <div className="skill-header">
                <div className="skill-title-group">
                  <div className="skill-icon-box" style={{ borderColor: `${skill.color}40`, color: skill.color }}>
                    <IconComponent size={22} />
                  </div>
                  <div>
                    <h3 className="skill-name">{skill.name}</h3>
                  </div>
                </div>
              </div>

              <p className="skill-desc">{skill.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
