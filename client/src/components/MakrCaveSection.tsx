import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Terminal, 
  Code, 
  Database, 
  Zap, 
  Cpu, 
  Globe, 
  ArrowRight, 
  ExternalLink,
  Rocket,
  Shield,
  Cloud
} from "lucide-react";

interface EcosystemApp {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  status: "live" | "beta" | "coming-soon";
  category: "development" | "infrastructure" | "community";
  features: string[];
  launchUrl?: string;
}

const ecosystemApps: EcosystemApp[] = [
  {
    id: "makr-terminal",
    name: "Makr Terminal",
    description: "Advanced cloud-based development environment with cyberpunk aesthetics",
    icon: <Terminal className="h-8 w-8" />,
    status: "live",
    category: "development",
    features: ["Cloud IDE", "Real-time collaboration", "50+ languages"],
    launchUrl: "/terminal"
  },
  {
    id: "makr-code",
    name: "Makr Code",
    description: "Collaborative coding platform for rapid prototyping and shared development",
    icon: <Code className="h-8 w-8" />,
    status: "beta",
    category: "development",
    features: ["Live coding", "Version control", "Project templates"],
    launchUrl: "/code"
  },
  {
    id: "makr-db",
    name: "Makr Database",
    description: "High-performance cloud database with real-time sync capabilities",
    icon: <Database className="h-8 w-8" />,
    status: "live",
    category: "infrastructure",
    features: ["Real-time sync", "Edge deployment", "Auto-scaling"],
    launchUrl: "/database"
  },
  {
    id: "makr-ai",
    name: "Makr AI",
    description: "AI-powered development assistant with advanced code generation",
    icon: <Cpu className="h-8 w-8" />,
    status: "beta",
    category: "development",
    features: ["Code generation", "Bug detection", "Performance optimization"],
    launchUrl: "/ai"
  },
  {
    id: "makr-deploy",
    name: "Makr Deploy",
    description: "One-click deployment platform with global edge network",
    icon: <Rocket className="h-8 w-8" />,
    status: "live",
    category: "infrastructure",
    features: ["Global CDN", "Auto-scaling", "Zero downtime"],
    launchUrl: "/deploy"
  },
  {
    id: "makr-community",
    name: "Makr Community",
    description: "Connect with makers worldwide, share projects, and collaborate",
    icon: <Globe className="h-8 w-8" />,
    status: "coming-soon",
    category: "community",
    features: ["Project sharing", "Forums", "Mentorship"],
    launchUrl: "/community"
  }
];

const statusConfig = {
  live: { color: "bg-green-500", text: "Live", glow: "shadow-neon-green" },
  beta: { color: "bg-yellow-500", text: "Beta", glow: "shadow-neon-yellow" },
  "coming-soon": { color: "bg-blue-500", text: "Soon", glow: "shadow-neon" }
};

export function MakrCaveSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "All Apps", icon: <Zap className="h-4 w-4" /> },
    { id: "development", name: "Development", icon: <Code className="h-4 w-4" /> },
    { id: "infrastructure", name: "Infrastructure", icon: <Cloud className="h-4 w-4" /> },
    { id: "community", name: "Community", icon: <Globe className="h-4 w-4" /> }
  ];

  const filteredApps = selectedCategory === "all" 
    ? ecosystemApps 
    : ecosystemApps.filter(app => app.category === selectedCategory);

  return (
    <section className="py-20 px-4 relative overflow-hidden" id="makrcave">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-makr-blue/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-makr-blue/10 rounded-full blur-3xl animate-pulse-slow" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-makr-blue/10 backdrop-blur-sm border border-makr-blue/30 rounded-full px-6 py-2 mb-6">
            <Shield className="h-5 w-5 text-makr-blue animate-pulse" />
            <span className="text-makr-blue font-mono font-semibold tracking-wider">
              MAKR ECOSYSTEM
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-mono font-bold mb-6 text-gradient-cyberpunk">
            The MakrCave
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your command center for next-generation development tools. 
            <span className="text-makr-yellow font-semibold"> Access powerful cloud-based applications</span> 
            {" "}designed for makers who push boundaries.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-in-left">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`
                font-mono font-semibold transition-all duration-300
                ${selectedCategory === category.id 
                  ? "bg-makr-blue text-white shadow-neon hover:shadow-neon-lg" 
                  : "border-makr-blue/30 text-makr-blue hover:bg-makr-blue/10 hover:border-makr-blue/50"
                }
              `}
            >
              {category.icon}
              {category.name}
            </Button>
          ))}
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-in-right">
          {filteredApps.map((app, index) => {
            const statusStyle = statusConfig[app.status];
            
            return (
              <Card 
                key={app.id} 
                className={`
                  card-cyberpunk group hover:scale-105 transition-all duration-300
                  ${statusStyle.glow}
                `}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="p-3 rounded-lg bg-makr-blue/10 text-makr-blue group-hover:bg-makr-blue/20 transition-colors">
                      {app.icon}
                    </div>
                    <Badge 
                      className={`
                        ${statusStyle.color} text-white font-mono text-xs px-3 py-1
                        animate-pulse
                      `}
                    >
                      {statusStyle.text}
                    </Badge>
                  </div>
                  
                  <div>
                    <CardTitle className="text-xl font-mono font-bold text-gradient-cyberpunk mb-2">
                      {app.name}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {app.description}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {app.features.map((feature) => (
                      <Badge 
                        key={feature}
                        variant="outline"
                        className="border-makr-blue/30 text-makr-blue font-mono text-xs"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  {/* Launch Button */}
                  <Button 
                    className={`
                      w-full btn-cyberpunk font-mono font-semibold
                      ${app.status === "coming-soon" 
                        ? "opacity-50 cursor-not-allowed" 
                        : "hover:shadow-neon-lg group-hover:scale-105"
                      }
                    `}
                    disabled={app.status === "coming-soon"}
                  >
                    {app.status === "coming-soon" ? (
                      <>
                        <Zap className="h-4 w-4 mr-2" />
                        Coming Soon
                      </>
                    ) : (
                      <>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Launch App
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-to-r from-makr-blue/10 via-transparent to-makr-yellow/10 border border-makr-blue/20 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-mono font-bold text-gradient-cyberpunk mb-4">
              Ready to Enter the Cave?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of makers already using our ecosystem to build the future. 
              Get started with our free tier and unlock unlimited possibilities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="btn-cyberpunk font-mono font-semibold">
                <Rocket className="h-4 w-4 mr-2" />
                Start Building
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
              <Button 
                variant="outline"
                className="border-makr-blue/30 text-makr-blue hover:bg-makr-blue/10 font-mono font-semibold"
              >
                View Documentation
                <ExternalLink className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}