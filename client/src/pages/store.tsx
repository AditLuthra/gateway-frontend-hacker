import { Helmet } from "react-helmet-async";
import { ExternalLink, ShoppingCart, Package, Wrench, Cpu, CheckCircle, Star, Zap } from "lucide-react";
import { EnhancedNavigation } from "@/components/EnhancedNavigation";
import { EnhancedFooter } from "@/components/EnhancedFooter";
import { SEOStructuredData } from "@/components/SEOStructuredData";
import { ThreeBackground } from "@/components/ThreeBackground";

export default function Store() {
  const categories = [
    {
      name: "3D Printers & Filaments",
      description: "Professional 3D printers, high-quality filaments, and printing accessories",
      icon: <Package className="w-8 h-8 text-makr-blue" />
    },
    {
      name: "Electronics & Components",
      description: "Arduino, Raspberry Pi, sensors, and electronic components for IoT projects",
      icon: <Cpu className="w-8 h-8 text-makr-yellow" />
    },
    {
      name: "Hand Tools & Machines",
      description: "Precision tools, power tools, and fabrication equipment for makers",
      icon: <Wrench className="w-8 h-8 text-terminal-green" />
    },
    {
      name: "Materials & Supplies",
      description: "Wood, metals, plastics, adhesives, and other materials for projects",
      icon: <ShoppingCart className="w-8 h-8 text-makr-blue" />
    }
  ];

  const benefits = [
    {
      icon: "✓",
      title: "Curated Selection",
      description: "Products chosen by makers, for makers. Only quality tools and components that work.",
      color: "makr-blue"
    },
    {
      icon: "⚡",
      title: "Fast Delivery",
      description: "Quick shipping across India with same-day delivery in major cities.",
      color: "makr-yellow"
    },
    {
      icon: "💰",
      title: "Best Prices",
      description: "Competitive pricing with special discounts for makerspace members and bulk orders.",
      color: "terminal-green"
    }
  ];

  return (
    <>
      <Helmet>
        <title>MakrX Store - Maker Tools & Components Marketplace | MakrX.org</title>
        <meta 
          name="description" 
          content="Shop at MakrX Store for 3D printers, electronics, tools, and materials. Integrated with makerspaces for seamless project execution. Fast delivery across India."
        />
      </Helmet>
      
      <SEOStructuredData type="product" />
      
      <ThreeBackground />
      <EnhancedNavigation />
      
      <main className="min-h-screen relative z-10 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-terminal-green/20 to-makr-blue/20 py-20 border-b border-makr-blue/30">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-makr-yellow/10 backdrop-blur-sm border border-makr-yellow/30 rounded-full px-6 py-2 mb-6">
              <ShoppingCart className="h-5 w-5 text-makr-yellow animate-pulse" />
              <span className="text-makr-yellow font-mono font-semibold tracking-wider">
                MAKER MARKETPLACE
              </span>
            </div>
            
            <ShoppingCart className="w-16 h-16 text-makr-yellow mx-auto mb-6 animate-bounce" />
            <h1 className="text-4xl md:text-6xl font-bold text-gradient-cyberpunk mb-6 font-mono">
              MakrX.Store
            </h1>
            <p className="text-xl text-dark-text-secondary max-w-3xl mx-auto mb-8 font-mono">
              Your one-stop marketplace for maker tools, components, and materials. 
              Integrated with makerspace inventory systems for seamless project execution.
            </p>
            <a
              href="https://makrx.store"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyberpunk inline-flex items-center gap-3 px-8 py-4 font-semibold rounded-xl transition-all duration-300 hover:scale-105 font-mono"
            >
              Browse Store
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* Integration with Makerspaces */}
        <section className="py-20 bg-dark-bg-secondary">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient-cyberpunk font-mono">
              Connected to Your Makerspace
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center card-cyberpunk p-6">
                <div className="w-16 h-16 bg-makr-blue/10 border border-makr-blue/30 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-neon">
                  <Package className="w-8 h-8 text-makr-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gradient-cyberpunk font-mono">Inventory Sync</h3>
                <p className="text-dark-text-secondary font-mono">Automatically sync store purchases with your makerspace inventory management system.</p>
              </div>

              <div className="text-center card-cyberpunk p-6">
                <div className="w-16 h-16 bg-terminal-green/10 border border-terminal-green/30 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-neon-green">
                  <ShoppingCart className="w-8 h-8 text-terminal-green" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gradient-cyberpunk font-mono">Bulk Ordering</h3>
                <p className="text-dark-text-secondary font-mono">Generate BOMs from projects and order components in bulk with special makerspace pricing.</p>
              </div>

              <div className="text-center card-cyberpunk p-6">
                <div className="w-16 h-16 bg-purple-500/10 border border-purple-500/30 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-neon">
                  <Wrench className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gradient-cyberpunk font-mono">Project Integration</h3>
                <p className="text-dark-text-secondary font-mono">Order missing components directly from project BOMs with one-click ordering.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Overview */}
        <section className="py-20 bg-dark-bg-primary">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16 text-gradient-cyberpunk font-mono">Product Categories</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {categories.map((category, index) => (
                <div key={index} className="flex items-start gap-4 card-cyberpunk p-6 border border-makr-blue/30 hover:border-makr-yellow/50 hover:shadow-neon-lg transition-all">
                  <div className="w-12 h-12 bg-makr-blue/10 border border-makr-blue/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gradient-cyberpunk font-mono">{category.name}</h3>
                    <p className="text-dark-text-secondary font-mono">{category.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Benefits */}
        <section className="py-20 bg-dark-bg-secondary">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16 text-gradient-cyberpunk font-mono">Why Choose MakrX.Store?</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="card-cyberpunk p-8 text-center">
                  <div className={`w-16 h-16 bg-${benefit.color}/10 border border-${benefit.color}/30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-neon`}>
                    <span className={`text-2xl font-bold text-${benefit.color} font-mono`}>{benefit.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gradient-cyberpunk font-mono">{benefit.title}</h3>
                  <p className="text-dark-text-secondary font-mono">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-makr-blue/10 via-terminal-green/10 to-makr-yellow/10 border-y border-makr-blue/30">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-12 text-gradient-cyberpunk font-mono">Store Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2 text-makr-blue font-mono">5K+</div>
                <div className="text-dark-text-muted font-mono">Products Available</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2 text-terminal-green font-mono">10K+</div>
                <div className="text-dark-text-muted font-mono">Orders Fulfilled</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2 text-makr-yellow font-mono">24hr</div>
                <div className="text-dark-text-muted font-mono">Avg Delivery Time</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2 text-makr-blue font-mono">99%</div>
                <div className="text-dark-text-muted font-mono">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-terminal-green/20 to-makr-blue/20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-cyberpunk mb-6 font-mono">
              Start Building Today
            </h2>
            <p className="text-xl text-dark-text-secondary mb-8 font-mono">
              Explore thousands of maker-focused products and get everything you need for your next project.
            </p>
            <a
              href="https://makrx.store"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyberpunk inline-flex items-center gap-3 px-8 py-4 font-semibold rounded-xl transition-all duration-300 hover:scale-105 font-mono"
            >
              Browse Store
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>
      
      <EnhancedFooter />
    </>
  );
}