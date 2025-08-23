import { useTheme } from "./ThemeProvider";

export function Navigation() {
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-makr-blue/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <i className="fas fa-code text-makr-yellow text-2xl"></i>
            <span className="text-xl font-mono font-bold text-makr-yellow">Makrx</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-dark-text hover:text-makr-blue transition-colors font-mono"
              data-testid="nav-home"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-dark-text hover:text-makr-blue transition-colors font-mono"
              data-testid="nav-about"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-dark-text hover:text-makr-blue transition-colors font-mono"
              data-testid="nav-projects"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('store')}
              className="text-dark-text hover:text-makr-blue transition-colors font-mono"
              data-testid="nav-store"
            >
              Store
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-md bg-dark-surface border border-makr-blue text-makr-blue hover:bg-makr-blue hover:text-black transition-all"
              data-testid="theme-toggle"
            >
              <i className={`fas ${theme === 'dark' ? 'fa-moon' : 'fa-sun'}`}></i>
            </button>
            <button 
              className="md:hidden p-2 rounded-md bg-dark-surface border border-makr-blue text-makr-blue"
              data-testid="mobile-menu"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
