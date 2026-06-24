import React, { useEffect, useState } from "react";
import type { NavbarProps } from "../types";
import { translations } from "../i18n/navbar";
import { navSections } from "../data/navbar";

export const Navbar: React.FC<NavbarProps> = ({ language, setLanguage }) => {
  const [activeSection, setActiveSection] = useState("home");
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = navSections.map((s) => s.id);
      let currentSection = "home";

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is near or above the top of viewport
          if (rect.top <= 160) {
            currentSection = sectionId;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
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
    <nav className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-md border-b border-white/10">
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
        </div>
      </div>
    </nav>
  );
};
