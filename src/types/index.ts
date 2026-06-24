export type Language = "EN" | "TH";

export interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
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
