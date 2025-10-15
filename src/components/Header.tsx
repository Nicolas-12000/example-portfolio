import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';

export default function Header({ currentLang }: { currentLang: string }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-grey">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <LanguageSwitcher currentLang={currentLang as any} />
        <ThemeToggle />
      </div>
    </header>
  );
}
