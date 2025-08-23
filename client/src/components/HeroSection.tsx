import { useTypewriter } from "../hooks/use-typewriter";

export function HeroSection() {
  const typewriterText = useTypewriter({ text: "Dream. Make. Share.", speed: 150, delay: 1000 });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-mono font-black mb-6 text-makr-yellow glitch-hover">
          MAKRX
        </h1>
        <div className="text-2xl md:text-4xl font-mono text-terminal-green mb-8">
          <span className="typewriter" data-testid="hero-tagline">{typewriterText}</span>
        </div>
        <p className="text-lg md:text-xl text-dark-text max-w-2xl mx-auto mb-12 font-sans">
          Welcome to the future of making. Where imagination meets technology, 
          and ideas become reality through collaborative innovation.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <button 
            onClick={() => scrollToSection('about')}
            className="px-8 py-4 bg-makr-blue text-black font-mono font-bold rounded-md neon-border hover:bg-transparent hover:text-makr-blue transition-all"
            data-testid="button-enter-space"
          >
            ENTER THE SPACE
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 border-2 border-makr-yellow text-makr-yellow font-mono font-bold rounded-md hover:bg-makr-yellow hover:text-black transition-all glitch-hover"
            data-testid="button-view-projects"
          >
            VIEW PROJECTS
          </button>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 text-makr-blue opacity-20 text-6xl animate-pulse">
        <i className="fas fa-microchip"></i>
      </div>
      <div className="absolute bottom-20 right-10 text-terminal-green opacity-20 text-4xl animate-bounce">
        <i className="fas fa-robot"></i>
      </div>
    </section>
  );
}
