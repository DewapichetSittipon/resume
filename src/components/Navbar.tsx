import React, { useEffect, useState } from "react";
import type { NavbarProps } from "../types";
import { translations } from "../i18n/navbar";
import { navSections } from "../data/navbar";

const sectionIds = navSections.map((s) => s.id);

export const Navbar: React.FC<NavbarProps> = ({ language, setLanguage, theme, setTheme }) => {
  const [activeSection, setActiveSection] = useState("home");
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50;
      if (atBottom) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        return;
      }

      let currentSection = "home";
      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 160) {
            currentSection = sectionId;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = (sectionId: string) => {
    const base = "font-body-md transition-all duration-300 ease-in-out text-base";
    if (activeSection === sectionId) {
      return `${base} text-secondary border-b-2 border-secondary pb-1`;
    }
    return `${base} text-on-surface-variant hover:text-secondary`;
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-md border-b border-outline/30 transition-colors duration-300">
      <div className="flex justify-between items-center px-margin-x py-4 max-w-container-max mx-auto">
        <span className="font-display-lg text-headline-sm font-bold text-primary">
          Apichet.dev
        </span>

        <div className="hidden md:flex space-x-8">
          {navSections.map(({ id, labelKey }) => (
            <a key={id} className={navLinkClass(id)} href={`#${id}`}>
              {t[labelKey]}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4 mr-6 font-label-md text-label-md">
          <button
            onClick={() => setLanguage("EN")}
            className={`font-bold transition-colors ${
              language === "EN" ? "text-secondary" : "text-on-surface-variant hover:text-secondary"
            }`}
          >
            EN
          </button>
          <div className="w-[1px] h-4 bg-outline-variant"></div>
          <button
            onClick={() => setLanguage("TH")}
            className={`font-bold transition-colors ${
              language === "TH" ? "text-secondary" : "text-on-surface-variant hover:text-secondary"
            }`}
          >
            TH
          </button>
          <div className="w-[1px] h-4 bg-outline-variant"></div>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="text-on-surface-variant hover:text-secondary transition-colors duration-200 flex items-center"
          >
            <span className="material-symbols-outlined text-[20px]">
              {theme === "dark" ? "light_mode" : "dark_mode"}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};
