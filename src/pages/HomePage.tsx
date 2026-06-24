import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Skills } from "../components/Skills";
import { Experience } from "../components/Experience";
import { Education } from "../components/Education";
import { Footer } from "../components/Footer";
import type { Language, Theme } from "../types";

interface HomePageProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const HomePage = ({ language, setLanguage, theme, setTheme }: HomePageProps) => {
  return (
    <div className="min-h-screen bg-surface text-on-surface noise-bg transition-colors duration-300">
      <Navbar language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme} />
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
