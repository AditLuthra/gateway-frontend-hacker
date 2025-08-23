import { Building2, ShoppingCart, Rocket } from "lucide-react";

interface StepProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const StepCard: React.FC<StepProps> = ({ number, title, description, icon, delay = 0 }) => (
  <div 
    className="text-center group animate-slide-in-up"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="w-20 h-20 bg-makr-blue/10 border border-makr-blue/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-makr-yellow/20 group-hover:border-makr-yellow/50 group-hover:scale-110 transition-all duration-300 shadow-neon">
      <span className="text-2xl font-bold text-makr-blue group-hover:text-makr-yellow transition-colors font-mono">
        {number}
      </span>
    </div>
    <div className="mb-4">
      <div className="w-12 h-12 bg-makr-yellow/10 border border-makr-yellow/30 rounded-xl flex items-center justify-center mx-auto group-hover:bg-makr-yellow/20 transition-all duration-300">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold text-gradient-cyberpunk mb-4 font-mono">
      {title}
    </h3>
    <p className="text-dark-text-secondary leading-relaxed font-mono">
      {description}
    </p>
  </div>
);

export const HowItWorks = () => {
  return (
    <section className="py-24 sm:py-28 lg:py-36 bg-dark-bg-secondary border-t border-makr-blue/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient-cyberpunk mb-4 sm:mb-6 font-mono">
            How MakrX Works
          </h2>
          <p className="text-lg sm:text-xl text-dark-text-secondary max-w-3xl mx-auto px-4 font-mono">
            Simple steps to transform your ideas into reality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          <StepCard
            number="1"
            title="Discover & Plan"
            description="Explore makerspaces near you, browse tools and materials, and plan your project with our expert community guidance."
            icon={<Building2 className="w-6 h-6 text-makr-blue" />}
            delay={0}
          />
          
          <StepCard
            number="2"
            title="Create & Build"
            description="Use state-of-the-art equipment, attend workshops, and get hands-on support from experienced makers and mentors."
            icon={<ShoppingCart className="w-6 h-6 text-makr-yellow" />}
            delay={200}
          />
          
          <StepCard
            number="3"
            title="Share & Grow"
            description="Showcase your creations, connect with the community, and inspire others while growing your skills and network."
            icon={<Rocket className="w-6 h-6 text-terminal-green" />}
            delay={400}
          />
        </div>

        {/* Connection lines for desktop */}
        <div className="hidden md:block relative mt-8">
          <div className="absolute top-0 left-1/6 right-1/6 h-px bg-gradient-to-r from-transparent via-makr-blue/50 to-transparent"></div>
          <div className="absolute top-0 left-1/2 w-2 h-2 bg-makr-yellow rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};