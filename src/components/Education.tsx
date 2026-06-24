import React from "react";
import type { EducationProps } from "../types";
import { translations } from "../i18n/education";
import { educationData } from "../data/education";
import { AnimateIn } from "./AnimateIn";

export const Education: React.FC<EducationProps> = ({ language }) => {
  const t = translations[language];

  return (
    <section className="px-margin-x max-w-container-max mx-auto" id="education">
      <AnimateIn className="mb-12">
        <h3 className="font-headline-lg text-headline-lg text-on-background mb-4">
          {t.sectionTitle}
        </h3>
        <div className="underline-bar w-24 h-1 bg-secondary rounded-full origin-left"></div>
      </AnimateIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimateIn delay={0}>
          <div className="glass-card p-8 rounded-2xl flex gap-6">
            <div className="w-16 h-16 rounded-xl bg-white p-1 flex items-center justify-center shrink-0 overflow-hidden">
              <img
                src={educationData.up.logo}
                alt={educationData.up.alt}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <h4 className="font-headline-sm text-headline-sm text-on-background">{t.up.schoolName}</h4>
              <p className="text-secondary font-medium mt-1">{t.up.degree}</p>
              <div className="flex items-center gap-3 mt-4 text-on-surface-variant">
                <span className="material-symbols-outlined text-sm">calendar_today</span>
                <span className="font-label-md text-label-md">{educationData.up.period}</span>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-lg font-bold text-sm">
                  {t.up.gpa}
                </span>
              </div>
            </div>
          </div>
        </AnimateIn>

        <AnimateIn delay={150}>
          <div className="glass-card p-8 rounded-2xl flex gap-6">
            <div className="w-16 h-16 rounded-xl bg-white p-1 flex items-center justify-center shrink-0 overflow-hidden">
              <img
                src={educationData.thepnaree.logo}
                alt={educationData.thepnaree.alt}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <h4 className="font-headline-sm text-headline-sm text-on-background">{t.thepnaree.schoolName}</h4>
              <p className="text-secondary font-medium mt-1">{t.thepnaree.degree}</p>
              <div className="flex items-center gap-3 mt-4 text-on-surface-variant">
                <span className="material-symbols-outlined text-sm">calendar_today</span>
                <span className="font-label-md text-label-md">{educationData.thepnaree.period}</span>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
};
