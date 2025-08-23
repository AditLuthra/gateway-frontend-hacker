import { Building2, Package, Calendar, BarChart3, ExternalLink, ArrowRight, Zap } from "lucide-react";

export function MakrCaveSection() {
  const features = [
    {
      icon: <Package className="w-8 h-8 text-makr-blue" />,
      title: "Inventory Management",
      description: "Track tools, materials, and equipment with real-time availability and automated reordering.",
      color: "makr-blue"
    },
    {
      icon: <Calendar className="w-8 h-8 text-terminal-green" />,
      title: "Reservations",
      description: "Book equipment, workstations, and meeting rooms with smart scheduling and conflict resolution.",
      color: "terminal-green"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-makr-yellow" />,
      title: "Project Tracking",
      description: "Collaborate on projects, track progress, and share resources with team members.",
      color: "makr-yellow"
    },
    {
      icon: <Building2 className="w-8 h-8 text-makr-blue" />,
      title: "BOM Ordering",
      description: "Generate bills of materials and order components directly from integrated suppliers.",
      color: "makr-blue"
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden" id="makrcave">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-makr-blue/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-makr-blue/10 rounded-full blur-3xl animate-pulse-slow" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-makr-blue/20 to-purple-600/20 border border-makr-blue/30 rounded-3xl py-20 mb-20 animate-fade-in">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-makr-yellow/10 backdrop-blur-sm border border-makr-yellow/30 rounded-full px-6 py-2 mb-6">
              <Building2 className="h-5 w-5 text-makr-yellow animate-pulse" />
              <span className="text-makr-yellow font-mono font-semibold tracking-wider">
                MAKERSPACE PLATFORM
              </span>
            </div>
            
            <Building2 className="w-16 h-16 text-makr-yellow mx-auto mb-6 animate-bounce" />
            <h1 className="text-4xl md:text-6xl font-bold text-gradient-cyberpunk mb-6 font-mono">
              MakrCave Makerspaces
            </h1>
            <p className="text-xl text-dark-text-secondary max-w-3xl mx-auto mb-8 font-mono">
              Access premium makerspaces with cutting-edge equipment, inventory management, 
              and project collaboration tools. Join a community of creators and innovators.
            </p>
            <a
              href="https://makrcave.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyberpunk inline-flex items-center gap-3 px-8 py-4 font-semibold rounded-xl transition-all duration-300 hover:scale-105 font-mono"
            >
              Explore MakrCave
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* Complete Makerspace Management */}
        <section className="py-20 animate-slide-in-up">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient-cyberpunk font-mono">
              Complete Makerspace Management
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="text-center card-cyberpunk p-6 hover:shadow-neon-lg transition-all"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-16 h-16 bg-${feature.color}/10 border border-${feature.color}/30 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-neon`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gradient-cyberpunk font-mono">{feature.title}</h3>
                  <p className="text-dark-text-secondary font-mono">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-makr-blue/10 via-terminal-green/10 to-makr-yellow/10 border border-makr-blue/30 rounded-3xl mb-20 animate-scale-in">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-12 text-gradient-cyberpunk font-mono">MakrCave Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2 text-makr-blue font-mono">50+</div>
                <div className="text-dark-text-muted font-mono">Active Makerspaces</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2 text-terminal-green font-mono">10K+</div>
                <div className="text-dark-text-muted font-mono">Registered Members</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2 text-makr-yellow font-mono">25+</div>
                <div className="text-dark-text-muted font-mono">Cities Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2 text-makr-blue font-mono">99%</div>
                <div className="text-dark-text-muted font-mono">Uptime</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-makr-blue/20 to-purple-600/20 border border-makr-blue/30 rounded-3xl animate-fade-in">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-cyberpunk mb-6 font-mono">
              Ready to Transform Your Makerspace?
            </h2>
            <p className="text-xl text-dark-text-secondary mb-8 font-mono">
              Join makerspaces worldwide using MakrCave to streamline operations and empower creators.
            </p>
            <a
              href="https://makrcave.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyberpunk inline-flex items-center gap-3 px-8 py-4 font-semibold rounded-xl transition-all duration-300 hover:scale-105 font-mono"
            >
              Explore MakrCave
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}