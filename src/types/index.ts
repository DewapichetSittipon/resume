export type Language = "EN" | "TH";
export type Theme = "light" | "dark";

export interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export interface HeroProps {
  language: Language;
}

export interface SkillsProps {
  language: Language;
}

export interface ExperienceProps {
  language: Language;
}

export interface EducationProps {
  language: Language;
}

export interface FooterProps {
  language: Language;
}
