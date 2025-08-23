import React from 'react';
import { ExternalLink, Building2, Package, Calendar, BarChart3, Wrench, Users, Cpu, Shield } from 'lucide-react';
import { Navigation } from '@/components/Navigation';

export default function Makerspaces() {
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <Navigation />
      
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-makr-blue/20 to-makr-yellow/20"></div>
      </div>

      <div className="relative pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-makr-blue/20 to-makr-blue/10 py-20 border-b border-makr-blue/30">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <Building2 className="w-16 h-16 text-makr-yellow mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-makr-yellow mb-6 tracking-wider">
              MAKRCAVE.MAKERSPACES
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Access premium makerspaces with cutting-edge equipment, inventory management, 
              and project collaboration tools. Join a community of creators and innovators.
            </p>
            <a
              href="https://makrcave.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-makr-yellow/20 border border-makr-yellow/50 text-makr-yellow font-semibold rounded-xl hover:bg-makr-yellow/30 transition-all duration-300 hover:scale-105"
            >
              Explore MakrCave
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-makr-yellow">
              MAKERSPACE_MANAGEMENT.features()
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-gray-900 border border-makr-blue/30 rounded-xl p-6 hover:border-makr-yellow/50 transition-colors">
                <div className="w-16 h-16 bg-makr-blue/20 border border-makr-blue/50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-makr-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-makr-yellow">Inventory Management</h3>
                <p className="text-gray-400">Track tools, materials, and equipment with real-time availability and automated reordering.</p>
              </div>

              <div className="text-center bg-gray-900 border border-makr-blue/30 rounded-xl p-6 hover:border-makr-yellow/50 transition-colors">
                <div className="w-16 h-16 bg-green-500/20 border border-green-500/50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-makr-yellow">Reservations</h3>
                <p className="text-gray-400">Book equipment, workstations, and meeting rooms with smart scheduling and conflict resolution.</p>
              </div>

              <div className="text-center bg-gray-900 border border-makr-blue/30 rounded-xl p-6 hover:border-makr-yellow/50 transition-colors">
                <div className="w-16 h-16 bg-purple-500/20 border border-purple-500/50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-makr-yellow">Project Tracking</h3>
                <p className="text-gray-400">Collaborate on projects, track progress, and share resources with team members.</p>
              </div>

              <div className="text-center bg-gray-900 border border-makr-blue/30 rounded-xl p-6 hover:border-makr-yellow/50 transition-colors">
                <div className="w-16 h-16 bg-makr-yellow/20 border border-makr-yellow/50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-makr-yellow" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-makr-yellow">BOM Ordering</h3>
                <p className="text-gray-400">Generate bills of materials and order components directly from integrated suppliers.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Screenshot Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16 text-makr-yellow">
              PLATFORM_DEMO.showcase()
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="aspect-video bg-black border border-makr-blue/30 rounded-xl flex items-center justify-center relative overflow-hidden group hover:border-makr-yellow/50 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-br from-makr-blue/10 to-transparent"></div>
                <div className="text-center z-10">
                  <Cpu className="w-12 h-12 text-makr-blue mx-auto mb-3" />
                  <span className="text-makr-blue font-semibold">Dashboard Interface</span>
                  <p className="text-gray-400 text-sm mt-2">Real-time monitoring and control</p>
                </div>
              </div>
              <div className="aspect-video bg-black border border-makr-blue/30 rounded-xl flex items-center justify-center relative overflow-hidden group hover:border-makr-yellow/50 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-transparent"></div>
                <div className="text-center z-10">
                  <Package className="w-12 h-12 text-green-400 mx-auto mb-3" />
                  <span className="text-green-400 font-semibold">Inventory System</span>
                  <p className="text-gray-400 text-sm mt-2">Smart tracking and automation</p>
                </div>
              </div>
              <div className="aspect-video bg-black border border-makr-blue/30 rounded-xl flex items-center justify-center relative overflow-hidden group hover:border-makr-yellow/50 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-br from-makr-yellow/10 to-transparent"></div>
                <div className="text-center z-10">
                  <BarChart3 className="w-12 h-12 text-makr-yellow mx-auto mb-3" />
                  <span className="text-makr-yellow font-semibold">Project Analytics</span>
                  <p className="text-gray-400 text-sm mt-2">Progress tracking and insights</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Features */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16 text-makr-yellow">
              ECOSYSTEM_INTEGRATION.connect()
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Users className="w-12 h-12 text-makr-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-makr-blue mb-3">Unified Experience</h3>
                <p className="text-gray-400">
                  Single login across all MakrX services. Members can access any participating makerspace 
                  with their account, maintaining project history and preferences.
                </p>
              </div>

              <div className="text-center">
                <Wrench className="w-12 h-12 text-makr-yellow mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-makr-yellow mb-3">Global Network</h3>
                <p className="text-gray-400">
                  Connect with makerspaces worldwide. Share resources, collaborate on projects, 
                  and access specialized equipment across our growing network.
                </p>
              </div>

              <div className="text-center">
                <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-400 mb-3">Quality Assurance</h3>
                <p className="text-gray-400">
                  All partner makerspaces meet our quality standards. Verified equipment, 
                  trained staff, and consistent safety protocols across all locations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Benefits */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16 text-makr-yellow">
              BENEFITS.calculate()
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-black border border-makr-blue/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-makr-blue mb-4">For Makers</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Access premium equipment and facilities
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Collaborate with like-minded creators
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Learn new skills and techniques
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Seamless booking and project management
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Global makerspace network access
                  </li>
                </ul>
              </div>

              <div className="bg-black border border-makr-blue/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-makr-blue mb-4">For Makerspace Owners</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-makr-yellow rounded-full mr-3"></div>
                    Streamlined operations and management
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-makr-yellow rounded-full mr-3"></div>
                    Automated billing and member management
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-makr-yellow rounded-full mr-3"></div>
                    Real-time analytics and insights
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-makr-yellow rounded-full mr-3"></div>
                    Increased member engagement and retention
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-makr-yellow rounded-full mr-3"></div>
                    Access to global maker community
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Equipment Categories */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16 text-makr-yellow">
              EQUIPMENT_CATEGORIES.available()
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "3D Printing", tools: ["FDM Printers", "SLA Printers", "Multi-Color", "Large Format"] },
                { name: "CNC & Machining", tools: ["CNC Mills", "Lathes", "Router Tables", "Tool Library"] },
                { name: "Electronics", tools: ["Soldering Stations", "Oscilloscopes", "Multimeters", "PCB Assembly"] },
                { name: "Woodworking", tools: ["Table Saws", "Planers", "Jointers", "Hand Tools"] },
                { name: "Laser Cutting", tools: ["CO2 Lasers", "Fiber Lasers", "Engraving", "Safety Systems"] },
                { name: "Fabrication", tools: ["Welders", "Plasma Cutters", "Metal Brakes", "Grinders"] },
                { name: "Textiles", tools: ["Sewing Machines", "Sergers", "Embroidery", "Vinyl Cutters"] },
                { name: "General", tools: ["Workbenches", "Hand Tools", "Storage", "Meeting Rooms"] }
              ].map((category, index) => (
                <div key={index} className="bg-gray-900 border border-makr-blue/30 rounded-xl p-4 hover:border-makr-yellow/50 transition-colors">
                  <h3 className="font-semibold text-makr-yellow mb-3">{category.name}</h3>
                  <div className="space-y-1">
                    {category.tools.map((tool, toolIndex) => (
                      <div key={toolIndex} className="text-gray-400 text-sm flex items-center">
                        <div className="w-1 h-1 bg-makr-blue rounded-full mr-2"></div>
                        {tool}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-makr-blue/20 to-makr-yellow/20 border-t border-makr-blue/30">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-makr-yellow mb-6">
              TRANSFORM_MAKERSPACE.execute()
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join makerspaces worldwide using MakrCave to streamline operations and empower creators.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://makrcave.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-makr-yellow/20 border border-makr-yellow/50 text-makr-yellow font-semibold rounded-xl hover:bg-makr-yellow/30 transition-all duration-300 hover:scale-105"
              >
                Explore MakrCave
                <ExternalLink className="w-5 h-5" />
              </a>
              <a
                href="mailto:makerspaces@makrx.org"
                className="inline-flex items-center gap-3 px-8 py-4 bg-makr-blue/20 border border-makr-blue/50 text-makr-blue font-semibold rounded-xl hover:bg-makr-blue/30 transition-all duration-300"
              >
                Partner With Us
                <Building2 className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              Trusted by 100+ makerspaces • 10,000+ active makers • 24/7 support
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}