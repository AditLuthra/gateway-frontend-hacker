import React from "react";
import { Calendar, Users, Trophy, Lightbulb, Zap, ExternalLink } from "lucide-react";

export function MakrXEventsSection() {
  const eventTypes = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Meetups",
      description: "Connect with local makers and share knowledge",
      color: "makr-blue"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Hackathons", 
      description: "48-hour innovation challenges and coding marathons",
      color: "terminal-green"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Competitions",
      description: "Showcase skills in design, engineering, and innovation",
      color: "makr-yellow"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Workshops",
      description: "Hands-on learning sessions with expert instructors",
      color: "orange-500"
    }
  ];

  return (
    <section className="py-20 bg-dark-bg-secondary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-makr-yellow/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 backdrop-blur-sm border border-orange-500/30 rounded-full px-6 py-2 mb-6">
            <Calendar className="h-5 w-5 text-orange-500 animate-pulse" />
            <span className="text-orange-500 font-mono font-semibold tracking-wider">
              EVENT MANAGEMENT
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gradient-cyberpunk mb-6 font-mono">
            MakrX.events
          </h2>
          <p className="text-xl text-dark-text-secondary max-w-3xl mx-auto leading-relaxed font-mono">
            The ultimate event management tool for hosting 
            <span className="text-makr-yellow"> meetups</span>,
            <span className="text-terminal-green"> hackathons</span>,
            <span className="text-makr-blue"> competitions</span>, and
            <span className="text-orange-500"> workshops</span> for makers
          </p>
        </div>

        {/* Event Types Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {eventTypes.map((event, index) => (
            <div 
              key={index}
              className="card-cyberpunk p-6 text-center group hover:shadow-neon transition-all"
            >
              <div className={`w-16 h-16 bg-${event.color}/10 border border-${event.color}/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-${event.color}/20 transition-all`}>
                <div className={`text-${event.color}`}>
                  {event.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gradient-cyberpunk mb-3 font-mono">
                {event.title}
              </h3>
              <p className="text-dark-text-secondary text-sm font-mono">
                {event.description}
              </p>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-makr-blue/10 border border-makr-blue/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-makr-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-gradient-cyberpunk mb-2 font-mono">Event Scheduling</h4>
                  <p className="text-dark-text-secondary text-sm font-mono">
                    Intelligent calendar management with automated reminders and conflict detection
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-terminal-green/10 border border-terminal-green/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-terminal-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-gradient-cyberpunk mb-2 font-mono">Registration Management</h4>
                  <p className="text-dark-text-secondary text-sm font-mono">
                    Seamless attendee registration with QR codes and digital check-ins
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-makr-yellow/10 border border-makr-yellow/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-5 h-5 text-makr-yellow" />
                </div>
                <div>
                  <h4 className="font-semibold text-gradient-cyberpunk mb-2 font-mono">Competition Tracking</h4>
                  <p className="text-dark-text-secondary text-sm font-mono">
                    Real-time scoring, leaderboards, and automated award distribution
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="card-cyberpunk p-8 border border-orange-500/30 bg-gradient-to-br from-orange-500/5 to-makr-yellow/5">
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-500/10 border border-orange-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-10 h-10 text-orange-500" />
                </div>
                
                <h3 className="text-2xl font-bold text-gradient-cyberpunk mb-4 font-mono">
                  Launch Events Platform
                </h3>
                <p className="text-dark-text-secondary mb-8 font-mono">
                  Streamline your maker events with our comprehensive management suite
                </p>
                
                <a
                  href="https://events.makrx.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cyberpunk inline-flex items-center gap-3 px-8 py-4 font-semibold rounded-xl transition-all duration-300 hover:scale-105 font-mono"
                >
                  Access MakrX.events
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}