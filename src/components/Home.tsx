// src/components/Home.tsx
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Home.css'; // tu css para la sección home

export const Home: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="home" id="home">
      <h1 className="home-title">{t('header.name')}</h1>
      
      <div className="home-content">
        <h2 className="home-subtitle">{t('nav.home')}</h2>
        <p className="home-bio">{t('header.bio')}</p>
      </div>
    </section>
  );
};
