import React from 'react';
import { Download, ExternalLink, Calendar, Users } from 'lucide-react';
import { Navigation } from '@/components/Navigation';

export default function Press() {
  const mediaKit = [
    {
      name: "MakrX Logo Pack",
      description: "High-resolution logos in various formats (PNG, SVG, EPS)",
      size: "2.4 MB",
      downloadUrl: "/press/makrx-logo-pack.zip"
    },
    {
      name: "Product Screenshots",
      description: "High-quality screenshots of all MakrX applications",
      size: "15.8 MB",
      downloadUrl: "/press/product-screenshots.zip"
    },
    {
      name: "Company Fact Sheet",
      description: "Key statistics, timeline, and company information",
      size: "1.2 MB",
      downloadUrl: "/press/makrx-fact-sheet.pdf"
    },
    {
      name: "Executive Photos",
      description: "Professional headshots of leadership team",
      size: "8.5 MB",
      downloadUrl: "/press/executive-photos.zip"
    }
  ];

  const mediaMentions = [
    {
      publication: "TechCrunch India",
      title: "MakrX Raises $5M to Democratize Digital Manufacturing in India",
      date: "2024-01-20",
      url: "#"
    },
    {
      publication: "The Economic Times",
      title: "Startup Spotlight: How MakrX is Transforming India's Maker Ecosystem",
      date: "2024-01-15",
      url: "#"
    },
    {
      publication: "YourStory",
      title: "From Idea to Reality: MakrX's Vision for Connected Makerspaces",
      date: "2024-01-10",
      url: "#"
    },
    {
      publication: "Inc42",
      title: "The Future of Manufacturing: MakrX's Digital-First Approach",
      date: "2024-01-05",
      url: "#"
    }
  ];

  const companyBoilerplate = `
MakrX is India's leading digital manufacturing platform that connects creators, makerspaces, and service providers through an integrated ecosystem of tools and services. Founded in 2023, MakrX operates MakrCave (makerspace management), MakrX.Store (marketplace for tools and components), and 3D.MakrX.Store (custom fabrication platform).

The company serves over 100,000 active users across 50+ cities in India, facilitating millions of dollars in transactions annually. MakrX is backed by leading investors and is headquartered in Bangalore with offices in Mumbai and Delhi.

Key Statistics:
• 50+ Partner Makerspaces
• 100K+ Active Users  
• 1M+ Projects Created
• 25+ Cities Served
• Founded: 2023
• Headquarters: Bangalore, India
• Funding: Series A ($5M)
  `;

  const leadership = [
    {
      name: "Rajesh Kumar",
      title: "Chief Executive Officer",
      bio: "Former VP Engineering at Flipkart, 15+ years in tech and manufacturing",
      email: "rajesh@makrx.org"
    },
    {
      name: "Priya Sharma",
      title: "Chief Technology Officer",
      bio: "Ex-Google senior engineer, expert in distributed systems and IoT",
      email: "priya@makrx.org"
    },
    {
      name: "Amit Patel",
      title: "Chief Operating Officer",
      bio: "Former McKinsey consultant specializing in operations and supply chain",
      email: "amit@makrx.org"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <Navigation />
      
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-makr-blue/20 to-makr-yellow/20"></div>
      </div>

      <div className="relative pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-makr-blue/20 to-makr-blue/10 py-20 border-b border-makr-blue/30">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <Users className="w-16 h-16 text-makr-yellow mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-makr-yellow mb-6 tracking-wider">
              PRESS_CENTER
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Media resources, company information, and press releases for journalists and content creators covering the future of digital manufacturing.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="mailto:press@makrx.org"
                className="inline-flex items-center gap-3 px-8 py-4 bg-makr-yellow/20 border border-makr-yellow/50 text-makr-yellow font-semibold rounded-xl hover:bg-makr-yellow/30 transition-all duration-300 hover:scale-105"
              >
                Contact Press Team
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Media Kit */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-makr-yellow">
              MEDIA_KIT.download()
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {mediaKit.map((item, index) => (
                <div key={index} className="bg-gray-900 border border-makr-blue/30 rounded-xl p-6 hover:border-makr-yellow/50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-makr-yellow mb-2">{item.name}</h3>
                      <p className="text-gray-400 mb-4">{item.description}</p>
                      <span className="text-sm text-gray-500">Size: {item.size}</span>
                    </div>
                    <a
                      href={item.downloadUrl}
                      className="flex items-center justify-center w-12 h-12 bg-makr-blue/20 border border-makr-blue/50 rounded-xl hover:bg-makr-blue/30 transition-colors group"
                    >
                      <Download className="w-5 h-5 text-makr-blue group-hover:text-white" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Coverage */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-makr-yellow">
              RECENT_COVERAGE.filter(trending)
            </h2>
            
            <div className="grid gap-6">
              {mediaMentions.map((mention, index) => (
                <div key={index} className="bg-black border border-makr-blue/30 rounded-xl p-6 hover:border-makr-yellow/50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-makr-blue font-semibold">{mention.publication}</span>
                        <span className="text-gray-500 text-sm flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {mention.date}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-white hover:text-makr-yellow transition-colors">
                        {mention.title}
                      </h3>
                    </div>
                    <a
                      href={mention.url}
                      className="flex items-center justify-center w-10 h-10 bg-makr-blue/20 border border-makr-blue/50 rounded-lg hover:bg-makr-blue/30 transition-colors group"
                    >
                      <ExternalLink className="w-4 h-4 text-makr-blue group-hover:text-white" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Boilerplate */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-makr-yellow">
              COMPANY_BOILERPLATE.txt
            </h2>
            
            <div className="bg-gray-900 border border-makr-blue/30 rounded-xl p-8">
              <pre className="text-gray-300 whitespace-pre-wrap leading-relaxed">
                {companyBoilerplate.trim()}
              </pre>
              <div className="mt-6 pt-6 border-t border-makr-blue/30">
                <button
                  onClick={() => navigator.clipboard.writeText(companyBoilerplate.trim())}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-makr-blue/20 border border-makr-blue/50 text-makr-blue rounded-lg hover:bg-makr-blue/30 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Copy to Clipboard
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-makr-yellow">
              LEADERSHIP_TEAM.getProfiles()
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {leadership.map((leader, index) => (
                <div key={index} className="bg-black border border-makr-blue/30 rounded-xl p-6 text-center hover:border-makr-yellow/50 transition-colors">
                  <div className="w-20 h-20 bg-gradient-to-br from-makr-blue/30 to-makr-yellow/30 rounded-full mx-auto mb-4 border border-makr-blue/50"></div>
                  <h3 className="text-xl font-semibold text-makr-yellow mb-1">{leader.name}</h3>
                  <p className="text-makr-blue mb-3">{leader.title}</p>
                  <p className="text-gray-400 text-sm mb-4">{leader.bio}</p>
                  <a
                    href={`mailto:${leader.email}`}
                    className="text-makr-blue hover:text-makr-yellow transition-colors text-sm"
                  >
                    {leader.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Press Contact */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-makr-yellow">
              PRESS_CONTACT.info
            </h2>
            
            <div className="bg-gray-900 border border-makr-blue/30 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6">For Media Inquiries</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  <strong className="text-makr-yellow">Email:</strong>{' '}
                  <a href="mailto:press@makrx.org" className="text-makr-blue hover:text-makr-yellow transition-colors">
                    press@makrx.org
                  </a>
                </p>
                <p>
                  <strong className="text-makr-yellow">Phone:</strong>{' '}
                  <a href="tel:+918047258000" className="text-makr-blue hover:text-makr-yellow transition-colors">
                    +91 80472 58000
                  </a>
                </p>
                <p className="text-sm text-gray-500 mt-6">
                  Media representatives typically respond within 24 hours during business days.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}