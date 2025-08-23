import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Building2, ShoppingCart, GraduationCap, Settings, 
  ArrowRight, ExternalLink, Users, Wrench, Zap, 
  Globe, Shield, Star, CheckCircle, Play, Calendar
} from "lucide-react";
import { EnhancedNavigation } from "@/components/EnhancedNavigation";
import { EnhancedFooter } from "@/components/EnhancedFooter";
import { SEOStructuredData } from "@/components/SEOStructuredData";
import { ThreeBackground } from "@/components/ThreeBackground";
import { Button } from "@/components/ui/button";

interface AppCardProps {
  name: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  icon: React.ReactNode;
  isExternal?: boolean;
  isNew?: boolean;
}

const AppCard: React.FC<AppCardProps> = ({ 
  name, description, features, cta, href, icon, isExternal, isNew 
}) => (
  <div className="card-cyberpunk group hover:scale-105 transition-all duration-300 p-8">
    <div className="flex items-center justify-between mb-6">
      <div className="w-16 h-16 bg-makr-blue/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform border border-makr-blue/30">
        {icon}
      </div>
      {isNew && (
        <span className="bg-terminal-green text-dark-bg-primary text-xs px-3 py-1 rounded-full font-mono font-bold animate-pulse">New</span>
      )}
    </div>
    
    <h3 className="text-2xl font-bold text-gradient-cyberpunk mb-3 font-mono">{name}</h3>
    <p className="text-dark-text-secondary mb-6 leading-relaxed font-mono">{description}</p>
    
    <div className="space-y-2 mb-6">
      {features.map((feature, idx) => (
        <div key={idx} className="flex items-center gap-2 text-sm font-mono">
          <CheckCircle className="w-4 h-4 text-terminal-green" />
          <span className="text-dark-text-secondary">{feature}</span>
        </div>
      ))}
    </div>

    <Link
      to={href}
      className="w-full btn-cyberpunk py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 group font-mono font-semibold"
    >
      {cta}
      {isExternal ? <ExternalLink className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
    </Link>
  </div>
);

export default function Ecosystem() {
  const apps: AppCardProps[] = [
    {
      name: "MakrCave",
      description: "Complete makerspace management platform for inventory, bookings, and project collaboration.",
      features: [
        "Equipment reservation system",
        "Real-time inventory tracking", 
        "Project management tools",
        "Member billing & analytics"
      ],
      cta: "Open MakrCave",
      href: "/makrcave",
      icon: <Building2 className="w-8 h-8 text-makr-blue" />
    },
    {
      name: "MakrX Store",
      description: "Marketplace for maker products, tools, and custom manufacturing services.",
      features: [
        "Instant 3D printing quotes",
        "Global manufacturing network",
        "Quality guaranteed orders",
        "Bulk pricing & discounts"
      ],
      cta: "Browse Store",
      href: "/store",
      icon: <ShoppingCart className="w-8 h-8 text-makr-yellow" />
    },
    {
      name: "Learn Platform",
      description: "Comprehensive learning hub with courses, certifications, and skill tracking.",
      features: [
        "50+ expert-led courses",
        "Hands-on project tutorials",
        "Skill badges & certificates",
        "Community discussions"
      ],
      cta: "Start Learning",
      href: "/learn",
      icon: <GraduationCap className="w-8 h-8 text-makr-blue" />
    },
    {
      name: "Service Provider Panel",
      description: "Earn money by fulfilling manufacturing orders through our global network.",
      features: [
        "First-to-accept job system",
        "Automated quality checks",
        "Payment protection",
        "Performance analytics"
      ],
      cta: "Become Provider",
      href: "#",
      icon: <Settings className="w-8 h-8 text-terminal-green" />,
      isExternal: true,
      isNew: true
    }
  ];

  return (
    <>
      <Helmet>
        <title>MakrX Ecosystem - Complete Maker Platform | MakrX.org</title>
        <meta 
          name="description" 
          content="Explore the complete MakrX ecosystem: MakrCave makerspaces, MakrX Store marketplace, Learning Platform, and Service Provider network. Everything makers need in one integrated platform."
        />
      </Helmet>
      
      <SEOStructuredData type="product" />
      
      <ThreeBackground />
      <EnhancedNavigation />
      
      <main className="pt-16 min-h-screen relative z-10">
        <div className="container mx-auto px-6 py-12">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-makr-blue/10 backdrop-blur-sm border border-makr-blue/30 rounded-full px-6 py-2 mb-6">
              <Zap className="h-5 w-5 text-makr-blue animate-pulse" />
              <span className="text-makr-blue font-mono font-semibold tracking-wider">
                COMPLETE ECOSYSTEM
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-mono font-bold mb-6">
              <span className="text-gradient-cyberpunk">MakrX</span> Ecosystem
            </h1>
            <p className="text-xl text-dark-text-secondary max-w-3xl mx-auto leading-relaxed font-mono">
              A complete suite of interconnected platforms designed to empower makers, 
              streamline manufacturing, and accelerate innovation worldwide.
            </p>
          </div>

          {/* Ecosystem Flow */}
          <div className="mb-16 animate-slide-in-left">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 text-gradient-cyberpunk font-mono">How It All Works Together</h2>
              <p className="text-dark-text-muted font-mono">Seamless integration across all platforms</p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-makr-blue/20 rounded-full flex items-center justify-center border border-makr-blue/30 shadow-neon">
                  <span className="text-makr-blue font-bold font-mono">1</span>
                </div>
                <span className="font-medium font-mono text-dark-text-primary">Join MakrCave</span>
              </div>
              <ArrowRight className="w-6 h-6 text-makr-blue hidden md:block animate-pulse" />
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-makr-yellow/20 rounded-full flex items-center justify-center border border-makr-yellow/30 shadow-neon-yellow">
                  <span className="text-makr-yellow font-bold font-mono">2</span>
                </div>
                <span className="font-medium font-mono text-dark-text-primary">Order from Store</span>
              </div>
              <ArrowRight className="w-6 h-6 text-makr-yellow hidden md:block animate-pulse" />
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-terminal-green/20 rounded-full flex items-center justify-center border border-terminal-green/30 shadow-neon-green">
                  <span className="text-terminal-green font-bold font-mono">3</span>
                </div>
                <span className="font-medium font-mono text-dark-text-primary">Provider Fulfills</span>
              </div>
              <ArrowRight className="w-6 h-6 text-terminal-green hidden md:block animate-pulse" />
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-makr-blue/20 rounded-full flex items-center justify-center border border-makr-blue/30 shadow-neon">
                  <span className="text-makr-blue font-bold font-mono">4</span>
                </div>
                <span className="font-medium font-mono text-dark-text-primary">Learn & Iterate</span>
              </div>
            </div>
          </div>

          {/* Apps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 animate-slide-in-right">
            {apps.map((app, index) => (
              <AppCard key={index} {...app} />
            ))}
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-makr-blue/10 via-purple-500/10 to-makr-yellow/10 border border-makr-blue/30 rounded-3xl p-12 text-center mb-16 backdrop-blur-sm animate-scale-in">
            <h2 className="text-3xl font-bold mb-8 text-gradient-cyberpunk font-mono">Ecosystem Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2 text-makr-blue font-mono">50+</div>
                <div className="text-dark-text-muted font-mono">Active Makerspaces</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2 text-makr-yellow font-mono">10K+</div>
                <div className="text-dark-text-muted font-mono">Registered Makers</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2 text-terminal-green font-mono">500+</div>
                <div className="text-dark-text-muted font-mono">Global Providers</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2 text-makr-blue font-mono">95%</div>
                <div className="text-dark-text-muted font-mono">Order Success Rate</div>
              </div>
            </div>
          </div>

          {/* MakrCave Features */}
          <div className="mb-16 animate-slide-in-left">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient-cyberpunk mb-6 font-mono">
                Complete Makerspace Management
              </h2>
              <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto font-mono">
                MakrCave provides everything you need to run a modern, efficient makerspace
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center card-cyberpunk p-6">
                <div className="w-16 h-16 bg-makr-blue/10 border border-makr-blue/30 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-neon">
                  <ShoppingCart className="w-8 h-8 text-makr-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gradient-cyberpunk font-mono">Inventory Management</h3>
                <p className="text-dark-text-secondary font-mono">Track tools, materials, and equipment with real-time availability and automated reordering.</p>
              </div>

              <div className="text-center card-cyberpunk p-6">
                <div className="w-16 h-16 bg-terminal-green/10 border border-terminal-green/30 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-neon-green">
                  <Calendar className="w-8 h-8 text-terminal-green" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gradient-cyberpunk font-mono">Reservations</h3>
                <p className="text-dark-text-secondary font-mono">Book equipment, workstations, and meeting rooms with smart scheduling and conflict resolution.</p>
              </div>

              <div className="text-center card-cyberpunk p-6">
                <div className="w-16 h-16 bg-purple-500/10 border border-purple-500/30 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-neon">
                  <Users className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gradient-cyberpunk font-mono">Project Tracking</h3>
                <p className="text-dark-text-secondary font-mono">Collaborate on projects, track progress, and share resources with team members.</p>
              </div>

              <div className="text-center card-cyberpunk p-6">
                <div className="w-16 h-16 bg-makr-yellow/10 border border-makr-yellow/30 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-neon-yellow">
                  <Building2 className="w-8 h-8 text-makr-yellow" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gradient-cyberpunk font-mono">BOM Ordering</h3>
                <p className="text-dark-text-secondary font-mono">Generate bills of materials and order components directly from integrated suppliers.</p>
              </div>
            </div>
          </div>

          {/* Integration Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
            <div className="text-center p-6 card-cyberpunk">
              <Zap className="w-12 h-12 text-makr-yellow mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gradient-cyberpunk font-mono">Unified Experience</h3>
              <p className="text-dark-text-secondary font-mono">
                Single sign-on across all platforms with synchronized user profiles and preferences.
              </p>
            </div>
            <div className="text-center p-6 card-cyberpunk">
              <Globe className="w-12 h-12 text-makr-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gradient-cyberpunk font-mono">Global Network</h3>
              <p className="text-dark-text-secondary font-mono">
                Access to worldwide manufacturing capabilities and makerspace communities.
              </p>
            </div>
            <div className="text-center p-6 card-cyberpunk">
              <Shield className="w-12 h-12 text-terminal-green mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gradient-cyberpunk font-mono">Quality Assurance</h3>
              <p className="text-dark-text-secondary font-mono">
                End-to-end quality control with verified providers and guaranteed outcomes.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <EnhancedFooter />
    </>
  );
}