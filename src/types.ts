// src/types.ts
import React from 'react';

export type Section = 'home' | 'projects' | 'skills' | 'contact' | 'projectpage';

export type Project = {
  id: number;
  slug?: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
};

export type SetActive = React.Dispatch<React.SetStateAction<Section>>;
