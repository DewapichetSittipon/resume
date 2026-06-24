import React from "react";
import type { FooterProps } from "../types";
import { translations } from "../i18n/footer";
import { contactLinks } from "../data/footer";

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = translations[language];

  return (
    <footer className="mt-32 bg-surface-container-lowest border-t border-outline/30 w-full py-stack-lg">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-x max-w-container-max mx-auto space-y-stack-md md:space-y-0">
        <div>
          <span className="font-display-lg text-headline-sm text-primary">
            Apichet.dev
          </span>
          <p className="text-on-surface-variant font-body-md text-body-md mt-2">
            {t.tagline}
          </p>
        </div>

        <div className="flex gap-8">
          {contactLinks.map(({ labelKey, href, icon, svgPath, external }) => (
            <a
              key={labelKey}
              className="flex items-center gap-2 text-on-surface-variant hover:text-secondary transition-colors duration-200"
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
            >
              {svgPath ? (
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                  <path d={svgPath} />
                </svg>
              ) : (
                <span className="material-symbols-outlined text-xl">{icon}</span>
              )}
              <span className="font-body-md text-body-md">{t[labelKey]}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
