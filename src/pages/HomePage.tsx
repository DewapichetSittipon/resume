import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Skills } from "../components/Skills";
import { Experience } from "../components/Experience";
import { Education } from "../components/Education";
import { Footer } from "../components/Footer";
import type { Language } from "../types";

const HomePage = () => {
  const [language, setLanguage] = useState<Language>("EN");

  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <Navbar language={language} setLanguage={setLanguage} />
      <main className="pt-24 space-y-32">
        <Hero language={language} />
        <Skills language={language} />
        <Experience language={language} />
        <Education language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
};

export default HomePage;
