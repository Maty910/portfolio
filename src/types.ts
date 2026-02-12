export type Section =
  | "home"
  | "experience"
  | "projects"
  | "skills"
  | "education"
  | "contact"
  | "projectpage";

export type Project = {
  id: number;
  slug?: string;
  title: string;
  description: string;
  image?: string | string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
};

export type SetActive = React.Dispatch<React.SetStateAction<Section>>;
