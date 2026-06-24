import React from "react";
import type { SkillsProps } from "../types";
import { translations } from "../i18n/skills";
import { skillData } from "../data/skills";
import { AnimateIn } from "./AnimateIn";

export const Skills: React.FC<SkillsProps> = ({ language }) => {
  const t = translations[language];

  return (
    <section className="px-margin-x max-w-container-max mx-auto" id="skills">
      <AnimateIn className="mb-12">
        <h3 className="font-headline-lg text-headline-lg text-on-background mb-4">
          {t.title}
        </h3>
        <div className="underline-bar w-24 h-1 bg-secondary rounded-full origin-left"></div>
      </AnimateIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <AnimateIn delay={0}>
          <div className="glass-card p-8 rounded-2xl space-y-6">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary text-3xl">web</span>
              <h4 className="font-headline-sm text-headline-sm">{t.categories.frontend}</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillData.frontend.map((skill) => (
                <span key={skill} className="skill-pill px-3 py-1.5 rounded-lg font-label-md text-label-md text-secondary">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </AnimateIn>

        <AnimateIn delay={120}>
          <div className="glass-card p-8 rounded-2xl space-y-6">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary text-3xl">dns</span>
              <h4 className="font-headline-sm text-headline-sm">{t.categories.backend}</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillData.backend.map((skill) => (
                <span key={skill} className="skill-pill px-3 py-1.5 rounded-lg font-label-md text-label-md text-secondary">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </AnimateIn>

        <AnimateIn delay={240}>
          <div className="glass-card p-8 rounded-2xl space-y-6">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary text-3xl">construction</span>
              <h4 className="font-headline-sm text-headline-sm">{t.categories.tools}</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillData.tools.map((skill) => (
                <span key={skill} className="skill-pill px-3 py-1.5 rounded-lg font-label-md text-label-md text-secondary">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
};
