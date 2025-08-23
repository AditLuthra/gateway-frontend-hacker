import { Helmet } from "react-helmet-async";
import { EnhancedNavigation } from "@/components/EnhancedNavigation";
import { EnhancedFooter } from "@/components/EnhancedFooter";
import { MapPin, Clock, DollarSign, Users, Heart, Zap, Mail, ExternalLink } from "lucide-react";
import { ThreeBackground } from "@/components/ThreeBackground";

export default function Careers() {
  const openRoles = [
    {
      id: 1,
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Bangalore",
      type: "Full-time",
      description: "Join our engineering team to build the next generation of maker tools and platforms."
    },
    {
      id: 2,
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description: "Design intuitive interfaces for makers, creators, and makerspace operators across our platform."
    },
    {
      id: 3,
      title: "Community Manager",
      department: "Marketing",
      location: "Mumbai",
      type: "Full-time",
      description: "Build and nurture our growing community of makers, educators, and innovation enthusiasts."
    },
    {
      id: 4,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Bangalore",
      type: "Full-time",
      description: "Scale our infrastructure to support millions of makers and thousands of makerspaces worldwide."
    },
    {
      id: 5,
      title: "Hardware Engineer",
      department: "Engineering",
      location: "Pune",
      type: "Full-time",
      description: "Design and develop cutting-edge fabrication equipment and IoT devices for makerspaces."
    },
    {
      id: 6,
      title: "Education Specialist",
      department: "Learning",
      location: "Delhi",
      type: "Full-time",
      description: "Create hands-on curricula and learning experiences that bridge theory with practical making."
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, wellness programs, and mental health support."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Learning & Growth",
      description: "Conference budget, online courses, and dedicated time for skill development."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Flexible Work",
      description: "Remote-first culture with flexible hours and work-life balance."
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Equity & Bonuses",
      description: "Competitive salary, equity participation, and performance bonuses."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers at MakrX - Build the Future of Making</title>
        <meta 
          name="description" 
          content="Join MakrX team and help democratize manufacturing. Open positions in engineering, design, community, and more. Remote-first culture with competitive benefits." 
        />
      </Helmet>

      <div className="min-h-screen bg-dark-bg-primary">
        <ThreeBackground />
        <EnhancedNavigation />
        
        <main className="relative z-10">
          {/* Hero Section */}
          <section className="py-24 bg-gradient-to-br from-makr-blue/20 via-purple-600/20 to-makr-yellow/10 border-b border-makr-blue/30">
            <div className="max-w-6xl mx-auto px-6 text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-makr-yellow/20 border border-makr-yellow/30 text-makr-yellow text-sm font-medium mb-6 font-mono">
                <Users className="w-4 h-4 mr-2" />
                Join Our Team
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gradient-cyberpunk mb-6 font-mono">
                Build the Future of Making
              </h1>
              <p className="text-xl text-dark-text-secondary max-w-3xl mx-auto mb-8 font-mono">
                Join our mission to democratize manufacturing and empower creators worldwide. 
                We're building tools that transform ideas into reality.
              </p>
              <div className="flex justify-center gap-6 text-dark-text-muted font-mono">
                <div className="text-center">
                  <div className="text-2xl font-bold text-makr-blue">50+</div>
                  <div className="text-sm">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-makr-yellow">10+</div>
                  <div className="text-sm">Cities</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-terminal-green">100K+</div>
                  <div className="text-sm">Users Served</div>
                </div>
              </div>
            </div>
          </section>

          {/* Culture Section */}
          <section className="py-20 bg-dark-bg-secondary border-t border-makr-blue/30">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient-cyberpunk font-mono">
                Our Culture & Values
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center card-cyberpunk p-8 group">
                  <div className="w-16 h-16 bg-makr-blue/10 border border-makr-blue/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-makr-blue/20 group-hover:shadow-neon transition-all">
                    <Zap className="w-8 h-8 text-makr-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gradient-cyberpunk font-mono">Innovation First</h3>
                  <p className="text-dark-text-secondary font-mono">We're constantly pushing boundaries and exploring new possibilities in digital manufacturing.</p>
                </div>

                <div className="text-center card-cyberpunk p-8 group">
                  <div className="w-16 h-16 bg-terminal-green/10 border border-terminal-green/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-terminal-green/20 group-hover:shadow-neon transition-all">
                    <Users className="w-8 h-8 text-terminal-green" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gradient-cyberpunk font-mono">Community Driven</h3>
                  <p className="text-dark-text-secondary font-mono">Everything we build serves our maker community and helps creators bring their ideas to life.</p>
                </div>

                <div className="text-center card-cyberpunk p-8 group">
                  <div className="w-16 h-16 bg-makr-yellow/10 border border-makr-yellow/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-makr-yellow/20 group-hover:shadow-neon transition-all">
                    <Heart className="w-8 h-8 text-makr-yellow" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gradient-cyberpunk font-mono">People First</h3>
                  <p className="text-dark-text-secondary font-mono">We believe in work-life balance, continuous learning, and supporting each other's growth.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20 bg-dark-bg-primary border-t border-makr-blue/30">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-3xl font-bold text-center mb-16 text-gradient-cyberpunk font-mono">Benefits & Perks</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center card-cyberpunk p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-makr-blue/10 to-makr-yellow/10 border border-makr-blue/30 rounded-xl flex items-center justify-center mx-auto mb-4 text-makr-blue shadow-neon">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gradient-cyberpunk font-mono">{benefit.title}</h3>
                    <p className="text-dark-text-secondary font-mono">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Open Roles */}
          <section className="py-20 bg-dark-bg-secondary border-t border-makr-blue/30">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-3xl font-bold text-center mb-16 text-gradient-cyberpunk font-mono">Open Positions</h2>
              
              <div className="space-y-6">
                {openRoles.map((role, index) => (
                  <div 
                    key={role.id} 
                    className="card-cyberpunk p-8 hover:shadow-neon-lg transition-all group animate-slide-in-left"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div className="flex-1 mb-4 md:mb-0">
                        <h3 className="text-xl font-semibold mb-2 text-gradient-cyberpunk font-mono">{role.title}</h3>
                        <p className="text-dark-text-secondary mb-4 font-mono">{role.description}</p>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-dark-text-muted font-mono">
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {role.department}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {role.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {role.type}
                          </div>
                        </div>
                      </div>
                      
                      <div className="md:ml-8">
                        <a
                          href={`mailto:careers@makrx.org?subject=Application for ${role.title}`}
                          className="btn-cyberpunk px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 font-mono inline-flex items-center gap-2"
                        >
                          <Mail className="w-4 h-4" />
                          Apply Now
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <p className="text-dark-text-secondary mb-4 font-mono">
                  Don't see a role that fits? We're always looking for talented people.
                </p>
                <a
                  href="mailto:careers@makrx.org?subject=General Application"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-makr-blue/30 text-makr-blue rounded-lg font-semibold hover:bg-makr-blue/10 hover:border-makr-blue transition-all font-mono"
                >
                  <Mail className="w-4 h-4" />
                  Send Us Your Resume
                </a>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-makr-blue/20 to-purple-600/20 border-t border-makr-blue/30">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient-cyberpunk mb-6 font-mono">
                Ready to Shape the Future?
              </h2>
              <p className="text-xl text-dark-text-secondary mb-8 font-mono">
                Join us in building the infrastructure that will power the next generation of creators and innovators.
              </p>
              <a
                href="mailto:careers@makrx.org"
                className="btn-cyberpunk inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 font-mono"
              >
                <Mail className="w-5 h-5" />
                Get in Touch
              </a>
            </div>
          </section>
        </main>
        
        <EnhancedFooter />
      </div>
    </>
  );
}