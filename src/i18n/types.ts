// TypeScript interfaces for translation structure
// Ensures type safety across all languages

export interface Translations {
  nav: {
    toggleMenu: string;
    toggleLang: string;
    home: string;
    experience: string;
    projects: string;
    skills: string;
    education: string;
    contact: string;
    closeMenu: string;
    openMenu: string;
  };
  header: {
    name: string;
    displayName: string;
    bio: string;
    downloadCv: string;
    headlinePrefix: string;
    headlineHighlight: string;
    available: string;
  };
  alt: {
    profile: string;
    logo: string;
  };
  home: {
    viewProjects: string;
    techStackAria: string;
  };
  projects: {
    title: string;
    cta: string;
    viewAll: string;
    viewDetails: string;
    links: {
      code: string;
      live: string;
    };
    noDescription: string;
    defaultTitle: string;
    items: {
      [key: string]: {
        title: string;
        description: string;
      };
    };
  };
  experience: {
    title: string;
    subtitle: string;
    responsibilities: string;
    viewMore: string;
    visitWebsite: string;
  };
  education: {
    title: string;
    subtitle: string;
    description: string;
    skills: string;
    certificates: string;
    clickToView: string;
    viewMore: string;
    closeModalAria: string;
    closeCertificateAria: string;
    certificateFullscreenAlt: string;
  };
  skills: {
    title: string;
    sub: string;
    sub2: string;
    sub3: string;
    list: string[];
    projects: string;
    soft: {
      problemSolving: string;
      teamWork: string;
      fastLearning: string;
      adaptability: string;
    };
    categories: {
      frontend_ui: { title: string };
      backend_data: { title: string };
      tools_devops: { title: string };
    };
  };
  contact: {
    title: string;
    sub: string;
    sendMessage: string;
    cardTitle: string;
    cardSubtitle: string;
    sendEmail: string;
    copyEmail: string;
    linkedinTitle: string;
    githubTitle: string;
    linkedin: string;
    github: string;
    visitLinkedIn: string;
    visitGitHub: string;
    emailCopied: string;
    copyEmailAria: string;
  };
  page: {
    contribs: string;
    publicRepos: string;
    building: string;
    buildingProject: string;
    alwaysLearning: string;
    available: string;
    location: string;
    email: string;
    openToWork: string;
    statusLocation: string;
    typingWords: string[];
    timezoneSuffix: string;
    years: string;
    projects: string;
    githubStats: string;
    mainStack: string;
    lifetime: string;
    active: string;
    connect: string;
  };
  intro: {
    name: string;
    role: string;
    loading: string;
  };
  projectModal: {
    closeAria: string;
    closeTitle: string;
    technologies: string;
    viewCode: string;
    viewLive: string;
    noImages: string;
    previousImage: string;
    nextImage: string;
    goToImageAria: string;
  };
  theme: {
    light: string;
    dark: string;
    toggle: string;
  };
  footer: {
    copyRight: string;
  };
  emptyState: {
    errorTitle: string;
    retry: string;
  };
}
