import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home, ArrowLeft, Search, Building2, ShoppingCart,
  GraduationCap, AlertTriangle, Compass, LifeBuoy, Star
} from 'lucide-react';
import { Navigation } from '@/components/Navigation';

interface QuickLinkProps {
  to: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const QuickLink: React.FC<QuickLinkProps> = ({ to, icon, title, description }) => (
  <Link 
    to={to} 
    className="group flex items-start p-6 bg-gray-900 border border-makr-blue/30 rounded-xl hover:border-makr-yellow/50 hover:bg-gray-800 transition-all duration-300 font-mono"
  >
    <div className="w-12 h-12 bg-makr-blue/20 rounded-xl flex items-center justify-center mr-4 group-hover:bg-makr-yellow/20 transition-colors border border-makr-blue/50">
      {icon}
    </div>
    <div>
      <h3 className="font-semibold text-makr-yellow mb-1 group-hover:text-white transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  </Link>
);

export default function NotFound() {
  const location = useLocation();
  const currentPath = location.pathname;

  // Intelligent path-based suggestions
  const getSuggestions = (path: string) => {
    if (path.includes('shop') || path.includes('store') || path.includes('buy')) {
      return [
        { to: '/store', icon: <ShoppingCart className="w-5 h-5 text-makr-blue" />, title: 'MakrX Store', description: 'Browse tools, components & materials' },
        { to: '/ecosystem', icon: <Building2 className="w-5 h-5 text-makr-blue" />, title: 'Ecosystem', description: 'Explore MakrCave & platform features' },
      ];
    }
    
    if (path.includes('learn') || path.includes('course') || path.includes('tutorial')) {
      return [
        { to: '/docs', icon: <GraduationCap className="w-5 h-5 text-makr-blue" />, title: 'Documentation', description: 'API guides & tutorials' },
        { to: '/blog', icon: <Star className="w-5 h-5 text-makr-blue" />, title: 'Blog', description: 'Latest updates & insights' },
      ];
    }
    
    if (path.includes('help') || path.includes('support') || path.includes('faq')) {
      return [
        { to: '/support', icon: <LifeBuoy className="w-5 h-5 text-makr-blue" />, title: 'Support Center', description: 'Get help & find answers' },
        { to: '/contact', icon: <AlertTriangle className="w-5 h-5 text-makr-blue" />, title: 'Contact Us', description: 'Reach our support team' },
      ];
    }
    
    if (path.includes('company') || path.includes('team') || path.includes('info')) {
      return [
        { to: '/about', icon: <Building2 className="w-5 h-5 text-makr-blue" />, title: 'About MakrX', description: 'Our mission & team' },
        { to: '/careers', icon: <Star className="w-5 h-5 text-makr-blue" />, title: 'Careers', description: 'Join our growing team' },
      ];
    }
    
    // Default suggestions
    return [
      { to: '/ecosystem', icon: <Building2 className="w-5 h-5 text-makr-blue" />, title: 'Ecosystem', description: 'Explore MakrCave & platform features' },
      { to: '/store', icon: <ShoppingCart className="w-5 h-5 text-makr-blue" />, title: 'MakrX Store', description: 'Browse tools, components & materials' },
    ];
  };

  const suggestions = getSuggestions(currentPath);

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <Navigation />
      
      {/* Glitch background effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-makr-blue/20 to-makr-yellow/20"></div>
      </div>
      
      <div className="relative pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* 404 Header */}
          <div className="text-center mb-16">
            <div className="inline-block p-4 border-2 border-makr-blue/50 rounded-xl mb-6 bg-gray-900/50">
              <AlertTriangle className="w-16 h-16 text-makr-yellow mx-auto animate-pulse" />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-makr-yellow mb-4 tracking-wider glitch-text">
              404
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              ROUTE_NOT_FOUND
            </h2>
            
            <p className="text-gray-400 text-lg mb-2">
              The path <code className="bg-gray-800 px-2 py-1 rounded text-makr-blue">{currentPath}</code> does not exist in our matrix.
            </p>
            
            <p className="text-gray-500">
              But don't worry, we've detected some alternative routes you might be looking for...
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Link
              to="/"
              className="flex items-center justify-center p-4 bg-makr-blue/20 border border-makr-blue/50 rounded-xl hover:bg-makr-blue/30 transition-all duration-300 font-mono hover:scale-105"
            >
              <Home className="w-5 h-5 mr-3 text-makr-blue" />
              <span className="text-white">Return Home</span>
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="flex items-center justify-center p-4 bg-makr-yellow/20 border border-makr-yellow/50 rounded-xl hover:bg-makr-yellow/30 transition-all duration-300 font-mono hover:scale-105"
            >
              <ArrowLeft className="w-5 h-5 mr-3 text-makr-yellow" />
              <span className="text-white">Go Back</span>
            </button>
            
            <Link
              to="/ecosystem"
              className="flex items-center justify-center p-4 bg-green-500/20 border border-green-500/50 rounded-xl hover:bg-green-500/30 transition-all duration-300 font-mono hover:scale-105"
            >
              <Compass className="w-5 h-5 mr-3 text-green-400" />
              <span className="text-white">Explore</span>
            </Link>
          </div>

          {/* Intelligent Suggestions */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-makr-yellow mb-6 flex items-center">
              <Search className="w-5 h-5 mr-2" />
              Suggested Routes
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {suggestions.map((suggestion, index) => (
                <QuickLink key={index} {...suggestion} />
              ))}
            </div>
          </div>

          {/* All Available Routes */}
          <div>
            <h3 className="text-xl font-bold text-makr-yellow mb-6">
              All Available Routes
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <QuickLink
                to="/"
                icon={<Home className="w-5 h-5 text-makr-blue" />}
                title="Home"
                description="Main landing page"
              />
              <QuickLink
                to="/ecosystem"
                icon={<Building2 className="w-5 h-5 text-makr-blue" />}
                title="Ecosystem"
                description="Platform overview"
              />
              <QuickLink
                to="/store"
                icon={<ShoppingCart className="w-5 h-5 text-makr-blue" />}
                title="Store"
                description="Shop tools & materials"
              />
              <QuickLink
                to="/about"
                icon={<Building2 className="w-5 h-5 text-makr-blue" />}
                title="About"
                description="Our mission & story"
              />
              <QuickLink
                to="/careers"
                icon={<Star className="w-5 h-5 text-makr-blue" />}
                title="Careers"
                description="Join our team"
              />
              <QuickLink
                to="/contact"
                icon={<AlertTriangle className="w-5 h-5 text-makr-blue" />}
                title="Contact"
                description="Get in touch"
              />
              <QuickLink
                to="/docs"
                icon={<GraduationCap className="w-5 h-5 text-makr-blue" />}
                title="Documentation"
                description="API guides & tutorials"
              />
              <QuickLink
                to="/blog"
                icon={<Star className="w-5 h-5 text-makr-blue" />}
                title="Blog"
                description="Updates & insights"
              />
              <QuickLink
                to="/events"
                icon={<Star className="w-5 h-5 text-makr-blue" />}
                title="Events"
                description="Workshops & meetups"
              />
            </div>
          </div>

          {/* Terminal-style help */}
          <div className="mt-16 p-6 bg-gray-900 border border-makr-blue/30 rounded-xl">
            <div className="text-makr-blue text-sm mb-2">makrx@terminal:~$</div>
            <div className="text-gray-400 text-sm">
              <span className="text-makr-yellow">console.log</span>(<span className="text-green-400">"Route not found. Try: window.location.href = '/ecosystem'"</span>);
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .glitch-text {
          animation: glitch 2s infinite;
        }
        
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
      `}</style>
    </div>
  );
}
