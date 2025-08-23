import { useState, useEffect, useRef } from "react";
import { Building2, Users, Award, Globe } from "lucide-react";

interface StatCardProps {
  number: string;
  label: string;
  icon: React.ReactNode;
  delay?: number;
}

const StatCard: React.FC<StatCardProps> = ({ number, label, icon, delay = 0 }) => {
  const [displayNumber, setDisplayNumber] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Extract the numeric part from the string (e.g., "50+" -> 50)
  const targetNumber = parseInt(number.replace(/\D/g, "")) || 0;
  const suffix = number.replace(/\d/g, "");

  // Format number for display (e.g., 10000 -> "10K")
  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(num % 1000000 === 0 ? 0 : 1) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(num % 1000 === 0 ? 0 : 1) + "K";
    }
    return num.toString();
  };

  // Get display text based on the current number
  const getDisplayText = () => {
    if (targetNumber >= 1000) {
      // For large numbers, always format
      return formatNumber(displayNumber);
    } else {
      // For small numbers, show number + suffix
      return displayNumber + suffix;
    }
  };

  useEffect(() => {
    const startAnimation = () => {
      if (hasAnimated) return;
      setHasAnimated(true);

      // Add delay for staggered animation
      setTimeout(() => {
        const duration = 2000;
        const startTime = performance.now();

        const animateNumber = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          // Use easing function for smooth animation
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          const current = Math.floor(easeOutQuart * targetNumber);

          setDisplayNumber(current);

          if (progress < 1) {
            requestAnimationFrame(animateNumber);
          } else {
            setDisplayNumber(targetNumber);
          }
        };

        requestAnimationFrame(animateNumber);
      }, delay);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
        }
      },
      { threshold: 0.1, rootMargin: "50px" },
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Fallback: start animation after 3 seconds if not triggered
    const fallbackTimer = setTimeout(() => {
      startAnimation();
    }, 3000 + delay);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, [targetNumber, hasAnimated, delay]);

  return (
    <div ref={ref} className="text-center group animate-fade-in">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 bg-makr-yellow/10 border border-makr-yellow/30 rounded-2xl flex items-center justify-center group-hover:bg-makr-yellow/20 group-hover:shadow-neon-yellow transition-all duration-300">
          {icon}
        </div>
      </div>
      <div
        className="text-3xl font-bold text-gradient-cyberpunk mb-2 font-mono"
        aria-live="polite"
      >
        {getDisplayText()}
      </div>
      <div className="text-dark-text-muted font-mono">{label}</div>
    </div>
  );
};

export const AnimatedStats = () => {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-r from-makr-blue/10 via-purple-500/10 to-makr-yellow/10 border-y border-makr-blue/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-cyberpunk mb-4 font-mono">
            MakrX by the Numbers
          </h2>
          <p className="text-dark-text-secondary font-mono">
            Join thousands of makers in our growing ecosystem
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <StatCard
            number="50+"
            label="Makerspaces"
            icon={<Building2 className="w-8 h-8 text-makr-yellow" />}
            delay={0}
          />
          <StatCard
            number="10000"
            label="Active Makers"
            icon={<Users className="w-8 h-8 text-makr-blue" />}
            delay={200}
          />
          <StatCard
            number="1000000"
            label="Projects Created"
            icon={<Award className="w-8 h-8 text-terminal-green" />}
            delay={400}
          />
          <StatCard
            number="25+"
            label="Cities"
            icon={<Globe className="w-8 h-8 text-makr-yellow" />}
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};