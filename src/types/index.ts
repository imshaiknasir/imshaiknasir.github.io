export interface Skill {
  icon: JSX.Element;
  title: string;
  skills: string[];
}

export interface Experience {
  company: string;
  location: string;
  position: string;
  duration: string;
  achievements: string[];
}

export interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface Award {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface Education {
  institution: string;
  location: string;
  degree: string;
  duration: string;
}