import React from "react";
import profileImg from "../assets/profile.jpg";
import type { HeroProps } from "../types";
import { translations } from "../i18n/hero";
import { techStackIcons } from "../data/hero";

export const Hero: React.FC<HeroProps> = ({ language }) => {
  const t = translations[language];

  return (
    <section className="px-margin-x max-w-container-max mx-auto py-16 hero-mesh" id="home">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center justify-center">
        <div className="space-y-stack-md flex flex-col justify-center md:col-span-12 lg:col-span-6">
          <div className="animate-fade-up" style={{ animationDelay: '0ms' }}>
            <div className="inline-block px-3 py-1 bg-secondary/10 border border-secondary/20 rounded-full text-secondary font-label-md text-label-md mb-4">
              {t.badge}
            </div>
          </div>
          <h1
            className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-background animate-fade-up"
            style={{ animationDelay: '80ms' }}
          >
            {t.name}
          </h1>
          <h2
            className="font-headline-md text-headline-md text-secondary mt-2 animate-fade-up"
            style={{ animationDelay: '160ms' }}
          >
            {t.title}
          </h2>
          <p
            className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-6 leading-relaxed animate-fade-up"
            style={{ animationDelay: '240ms' }}
          >
            {t.bio}
          </p>

          <div
            className="flex flex-wrap gap-4 pt-8 animate-fade-up"
            style={{ animationDelay: '320ms' }}
          >
            <a
              className="px-8 py-4 bg-secondary text-on-secondary font-bold rounded-lg hover:scale-105 hover:shadow-[0_0_24px_rgba(167,139,250,0.4)] transition-all duration-300"
              href="#experience"
            >
              {t.cv}
            </a>

            <div className="flex gap-4 items-center px-4">
              <span className="text-on-surface-variant font-label-md text-label-md">
                {t.techStack}
              </span>
              <div className="w-12 h-[1px] bg-outline-variant"></div>

              <div className="flex -space-x-2">
                {techStackIcons.map(({ title, icon }) => (
                  <div
                    key={title}
                    className="w-10 h-10 rounded-full bg-surface-container-high border-2 border-surface flex items-center justify-center hover:border-secondary/40 transition-colors duration-200"
                    title={title}
                  >
                    <span className="material-symbols-outlined text-secondary scale-75">
                      {icon}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 hidden md:block"></div>
        <div
          className="md:col-span-10 lg:col-span-4 flex justify-center items-center relative animate-fade-in"
          style={{ animationDelay: '400ms' }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 group profile-glow">
            <div className="absolute inset-0 bg-secondary/20 rounded-2xl animate-float"></div>
            <div className="absolute inset-0 border border-secondary/20 rounded-2xl -rotate-3"></div>
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 glass-card group-hover:border-secondary/30 transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(167,139,250,0.15)]">
              <img
                src={profileImg}
                alt="Apichet Sittipon"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
