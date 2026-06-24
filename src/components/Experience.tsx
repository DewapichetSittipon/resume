import React from "react";
import type { ExperienceProps } from "../types";
import { translations } from "../i18n/experience";
import { experienceData } from "../data/experience";
import { AnimateIn } from "./AnimateIn";

export const Experience: React.FC<ExperienceProps> = ({ language }) => {
  const t = translations[language];

  return (
    <section className="px-margin-x max-w-container-max mx-auto" id="experience">
      <AnimateIn className="mb-12">
        <h3 className="font-headline-lg text-headline-lg text-on-background mb-4">
          {t.sectionTitle}
        </h3>
        <div className="underline-bar w-24 h-1 bg-secondary rounded-full origin-left"></div>
      </AnimateIn>

      <div className="space-y-8">
        <AnimateIn>
          <div className="relative group">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-outline-variant group-hover:bg-secondary transition-colors rounded-full"></div>
            <div className="glass-card p-8 rounded-2xl ml-4 hover:border-secondary transition-all">
              <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-on-background">{t.ptt.role}</h4>
                  <p className="text-secondary font-medium">{t.ptt.company}</p>
                </div>
                <span className="px-4 py-1 bg-surface-container-highest rounded-full text-on-surface-variant font-label-md text-label-md">
                  {experienceData.ptt.period} ({t.pttMonths})
                </span>
              </div>
              <p className="text-on-surface-variant mb-4">{t.ptt.summary}</p>
              <ul className="space-y-2 text-on-surface">
                {t.ptt.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-xl mt-0.5">check_circle</span>
                    <span className="text-on-surface/80">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimateIn>

        <AnimateIn>
          <div className="relative group">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-outline-variant group-hover:bg-secondary transition-colors rounded-full"></div>
            <div className="glass-card p-8 rounded-2xl ml-4 hover:border-secondary transition-all">
              <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-on-background">{t.codeHard.role}</h4>
                  <p className="text-secondary font-medium">{t.codeHard.company}</p>
                </div>
                <span className="px-4 py-1 bg-surface-container-highest rounded-full text-on-surface-variant font-label-md text-label-md">
                  {experienceData.codeHard.period}
                </span>
              </div>
              <ul className="space-y-4 text-on-surface">
                {t.codeHard.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-xl mt-0.5">check_circle</span>
                    <span className="text-on-surface/80">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimateIn>

        <AnimateIn>
          <div className="relative group opacity-80 hover:opacity-100 transition-opacity">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-outline-variant group-hover:bg-secondary transition-colors rounded-full"></div>
            <div className="glass-card p-8 rounded-2xl ml-4 hover:border-secondary transition-all">
              <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-on-background">{t.softsquare.role}</h4>
                  <p className="text-secondary font-medium">{t.softsquare.company}</p>
                </div>
                <span className="px-4 py-1 bg-surface-container-highest rounded-full text-on-surface-variant font-label-md text-label-md">
                  {experienceData.softsquare.year} ({t.months})
                </span>
              </div>
              <ul className="space-y-2 text-on-surface">
                {t.softsquare.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-xl mt-0.5">check_circle</span>
                    <span className="text-on-surface/80">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
};
