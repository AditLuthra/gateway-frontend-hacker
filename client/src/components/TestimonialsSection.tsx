import { Star, Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  delay?: number;
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  role,
  company,
  delay = 0,
}) => (
  <div 
    className="card-cyberpunk p-8 hover:shadow-neon-lg transition-all animate-scale-in"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="flex items-center mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-5 h-5 text-makr-yellow fill-current" />
      ))}
    </div>
    
    <div className="relative mb-6">
      <Quote className="w-8 h-8 text-makr-blue/30 absolute -top-2 -left-2" />
      <p className="text-dark-text-secondary italic leading-relaxed font-mono pl-6">
        "{quote}"
      </p>
    </div>
    
    <div className="flex items-center">
      <div className="w-12 h-12 bg-makr-blue border border-makr-blue/30 rounded-full flex items-center justify-center text-white font-bold mr-4 shadow-neon font-mono">
        {author.charAt(0)}
      </div>
      <div>
        <div className="font-semibold text-gradient-cyberpunk font-mono">
          {author}
        </div>
        <div className="text-dark-text-muted text-sm font-mono">
          {role}, {company}
        </div>
      </div>
    </div>
  </div>
);

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "MakrX transformed how I approach prototyping. The access to professional equipment and expert mentorship accelerated my startup journey incredibly.",
      author: "Priya Patel",
      role: "Hardware Startup Founder",
      company: "TechForward",
    },
    {
      quote: "The community at MakrX is unmatched. I've learned more in 6 months here than in years of solo tinkering. The collaborative environment is inspiring.",
      author: "Raj Kumar",
      role: "Electronics Engineer",
      company: "InnovateLab",
    },
    {
      quote: "From concept to market-ready product, MakrX provided everything I needed. The ecosystem approach makes the entire journey seamless and supported.",
      author: "Ananya Sharma",
      role: "Product Designer",
      company: "CreativeVisions",
    },
  ];

  return (
    <section className="py-24 sm:py-28 lg:py-36 bg-dark-bg-primary border-t border-makr-blue/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient-cyberpunk mb-4 sm:mb-6 font-mono">
            Loved by Makers
          </h2>
          <p className="text-lg sm:text-xl text-dark-text-secondary max-w-3xl mx-auto px-4 font-mono">
            See what our community members say about their MakrX experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              {...testimonial}
              delay={index * 200}
            />
          ))}
        </div>

        {/* Community stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-makr-blue/10 border border-makr-blue/30 rounded-full px-6 py-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-makr-yellow fill-current" />
              ))}
            </div>
            <span className="text-dark-text-primary font-mono font-semibold">
              4.9/5 average rating from 500+ makers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};