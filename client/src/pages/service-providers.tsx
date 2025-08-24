import { Helmet } from "react-helmet-async";
import { ExternalLink, Zap, DollarSign, Clock, Users } from 'lucide-react';
import { EnhancedNavigation } from "@/components/EnhancedNavigation";
import { EnhancedFooter } from "@/components/EnhancedFooter";
import { SEOStructuredData } from "@/components/SEOStructuredData";
import { ThreeBackground } from "@/components/ThreeBackground";

export default function ServiceProviders() {
  return (
    <>
      <Helmet>
        <title>Service Providers - Join MakrX Manufacturing Network | MakrX.org</title>
        <meta 
          name="description" 
          content="Join MakrX service provider network and earn by fulfilling custom manufacturing jobs. First-to-accept system ensures fair job distribution and competitive earnings."
        />
      </Helmet>
      
      <SEOStructuredData type="organization" />
      
      <ThreeBackground />
      <EnhancedNavigation />
      
      <main className="min-h-screen relative z-10">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-terminal-green/20 to-makr-blue/20 py-20 border-b border-makr-blue/30">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-makr-yellow/10 backdrop-blur-sm border border-makr-yellow/30 rounded-full px-6 py-2 mb-6">
              <Zap className="h-5 w-5 text-makr-yellow animate-pulse" />
              <span className="text-makr-yellow font-mono font-semibold tracking-wider">
                SERVICE PROVIDER NETWORK
              </span>
            </div>
            
            <Zap className="w-16 h-16 text-makr-yellow mx-auto mb-6 animate-bounce" />
            <h1 className="text-4xl md:text-6xl font-bold text-gradient-cyberpunk mb-6 font-mono">
              SERVICE_PROVIDERS.join()
            </h1>
            <p className="text-xl text-dark-text-secondary max-w-3xl mx-auto mb-8 font-mono">
              Join our network of skilled service providers and earn by fulfilling custom manufacturing jobs. 
              First-to-accept system ensures fair job distribution and competitive earnings.
            </p>
            <a
              href="https://auth.makrx.org/register?provider=true"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyberpunk inline-flex items-center gap-3 px-8 py-4 font-semibold rounded-xl transition-all duration-300 hover:scale-105 font-mono"
            >
              Become a Provider
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-dark-bg-secondary">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient-cyberpunk font-mono">
              JOB_ASSIGNMENT.algorithm()
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center card-cyberpunk p-6">
                <div className="w-16 h-16 bg-makr-blue/10 border border-makr-blue/30 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-neon">
                  <span className="text-2xl font-bold text-makr-blue font-mono">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gradient-cyberpunk font-mono">Job Posted</h3>
                <p className="text-dark-text-secondary font-mono">Customers upload their designs and requirements through our platform.</p>
              </div>

              <div className="text-center card-cyberpunk p-6">
                <div className="w-16 h-16 bg-terminal-green/10 border border-terminal-green/30 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-neon-green">
                  <span className="text-2xl font-bold text-terminal-green font-mono">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gradient-cyberpunk font-mono">First-to-Accept</h3>
                <p className="text-dark-text-secondary font-mono">Qualified providers receive notifications. First to accept gets the job.</p>
              </div>

              <div className="text-center card-cyberpunk p-6">
                <div className="w-16 h-16 bg-makr-yellow/10 border border-makr-yellow/30 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-neon">
                  <span className="text-2xl font-bold text-makr-yellow font-mono">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gradient-cyberpunk font-mono">Delivery & Payment</h3>
                <p className="text-dark-text-secondary font-mono">Complete the job, get paid automatically upon customer approval.</p>
              </div>
            </div>

            <div className="card-cyberpunk p-8 border border-makr-blue/30">
              <h3 className="text-xl font-semibold text-gradient-cyberpunk mb-4 font-mono">Why First-to-Accept Works</h3>
              <div className="grid md:grid-cols-2 gap-6 text-dark-text-secondary">
                <div>
                  <h4 className="font-semibold text-makr-yellow mb-2 font-mono">For Providers:</h4>
                  <ul className="space-y-1 text-sm font-mono">
                    <li>• No bidding wars or underpricing</li>
                    <li>• Fair compensation based on job complexity</li>
                    <li>• Quick decision making = faster earnings</li>
                    <li>• Build reputation through quality work</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-makr-yellow mb-2 font-mono">For Customers:</h4>
                  <ul className="space-y-1 text-sm font-mono">
                    <li>• Guaranteed fixed pricing</li>
                    <li>• Faster job acceptance</li>
                    <li>• Pre-vetted quality providers</li>
                    <li>• No waiting for multiple quotes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Earnings Model */}
        <section className="py-20 bg-dark-bg-primary">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient-cyberpunk font-mono">
              EARNINGS_MODEL.calculate()
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="card-cyberpunk p-6 border border-makr-blue/30">
                <DollarSign className="w-8 h-8 text-terminal-green mb-4" />
                <h3 className="text-xl font-semibold text-gradient-cyberpunk mb-4 font-mono">Revenue Sharing</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-dark-text-secondary font-mono">Provider Earnings</span>
                    <span className="text-terminal-green font-bold font-mono">85%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-dark-text-secondary font-mono">Platform Fee</span>
                    <span className="text-makr-blue font-bold font-mono">15%</span>
                  </div>
                  <div className="pt-2 border-t border-makr-blue/30">
                    <span className="text-xs text-dark-text-muted font-mono">No hidden fees, transparent pricing</span>
                  </div>
                </div>
              </div>

              <div className="card-cyberpunk p-6 border border-makr-blue/30">
                <Clock className="w-8 h-8 text-makr-yellow mb-4" />
                <h3 className="text-xl font-semibold text-gradient-cyberpunk mb-4 font-mono">Payment Terms</h3>
                <div className="space-y-3 text-dark-text-secondary">
                  <div className="flex justify-between font-mono">
                    <span>Job Acceptance</span>
                    <span className="text-terminal-green">25% Advance</span>
                  </div>
                  <div className="flex justify-between font-mono">
                    <span>Customer Approval</span>
                    <span className="text-terminal-green">75% Final</span>
                  </div>
                  <div className="flex justify-between font-mono">
                    <span>Payment Processing</span>
                    <span className="text-makr-yellow">24-48 hours</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="card-cyberpunk p-8 border border-terminal-green/30 inline-block shadow-neon-green">
                <h3 className="text-2xl font-bold text-gradient-cyberpunk mb-6 font-mono">Average Monthly Earnings</h3>
                <div className="grid grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-terminal-green font-mono">₹25K</div>
                    <div className="text-sm text-dark-text-muted font-mono">Part-time</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-terminal-green font-mono">₹65K</div>
                    <div className="text-sm text-dark-text-muted font-mono">Full-time</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-terminal-green font-mono">₹150K+</div>
                    <div className="text-sm text-dark-text-muted font-mono">Enterprise</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20 bg-dark-bg-secondary">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient-cyberpunk font-mono">
              SERVICE_CATEGORIES.getAll()
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "3D Printing", demand: "High", avgPrice: "₹15/hr" },
                { name: "CNC Machining", demand: "Medium", avgPrice: "₹45/hr" },
                { name: "Laser Cutting", demand: "High", avgPrice: "₹25/hr" },
                { name: "PCB Assembly", demand: "Medium", avgPrice: "₹35/hr" },
                { name: "Woodworking", demand: "Low", avgPrice: "₹20/hr" },
                { name: "Metal Fabrication", demand: "Medium", avgPrice: "₹40/hr" },
                { name: "Electronics", demand: "High", avgPrice: "₹30/hr" },
                { name: "Prototyping", demand: "High", avgPrice: "₹50/hr" }
              ].map((service, index) => (
                <div key={index} className="card-cyberpunk p-4 border border-makr-blue/30 hover:border-makr-yellow/50 hover:shadow-neon transition-all">
                  <h3 className="font-semibold text-gradient-cyberpunk mb-2 font-mono">{service.name}</h3>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-dark-text-secondary font-mono">Demand:</span>
                      <span className={`font-semibold font-mono ${
                        service.demand === 'High' ? 'text-terminal-green' : 
                        service.demand === 'Medium' ? 'text-makr-yellow' : 'text-dark-text-muted'
                      }`}>
                        {service.demand}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-dark-text-secondary font-mono">Avg Rate:</span>
                      <span className="text-makr-blue font-semibold font-mono">{service.avgPrice}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-20 bg-dark-bg-primary">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient-cyberpunk font-mono">
              PROVIDER_REQUIREMENTS.validate()
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="card-cyberpunk p-6 space-y-6">
                <h3 className="text-xl font-semibold text-gradient-cyberpunk font-mono">Technical Requirements</h3>
                <div className="space-y-4">
                  {[
                    "Professional-grade equipment access",
                    "2+ years relevant experience",
                    "Portfolio of completed projects",
                    "Quality management certification (preferred)"
                  ].map((req, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-terminal-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-dark-text-secondary font-mono">{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-cyberpunk p-6 space-y-6">
                <h3 className="text-xl font-semibold text-gradient-cyberpunk font-mono">Business Requirements</h3>
                <div className="space-y-4">
                  {[
                    "Valid business registration (GST preferred)",
                    "Insurance coverage for equipment/liability",
                    "Commitment to quality and deadlines",
                    "Professional communication skills"
                  ].map((req, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-makr-yellow rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-dark-text-secondary font-mono">{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-dark-bg-secondary">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient-cyberpunk font-mono">
              SUCCESS_STORIES.inspire()
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Rajesh Kumar",
                  location: "Bangalore",
                  service: "3D Printing",
                  earnings: "₹85K/month",
                  story: "Turned my hobby into a full-time business. The platform's fair pricing helps me compete without racing to the bottom."
                },
                {
                  name: "Priya Machines",
                  location: "Pune",
                  service: "CNC Machining",
                  earnings: "₹120K/month",
                  story: "Consistent work flow and prompt payments. The quality rating system helps me build long-term customer relationships."
                },
                {
                  name: "TechCraft Solutions",
                  location: "Chennai",
                  service: "PCB Assembly",
                  earnings: "₹200K/month",
                  story: "Expanded from local to national clients. The platform's verification system builds trust with customers I've never met."
                }
              ].map((story, index) => (
                <div key={index} className="card-cyberpunk p-6 border border-makr-blue/30 hover:shadow-neon transition-all">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-makr-blue/30 to-makr-yellow/30 rounded-full mr-4 border border-makr-blue/50 shadow-neon"></div>
                    <div>
                      <h3 className="font-semibold text-gradient-cyberpunk font-mono">{story.name}</h3>
                      <p className="text-sm text-dark-text-muted font-mono">{story.location} • {story.service}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="text-terminal-green font-bold text-lg font-mono">{story.earnings}</span>
                    <span className="text-dark-text-muted text-sm ml-2 font-mono">average</span>
                  </div>
                  <p className="text-dark-text-secondary text-sm italic font-mono">"{story.story}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-terminal-green/20 to-makr-blue/20 border-t border-makr-blue/30">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gradient-cyberpunk font-mono">
              JOIN_NETWORK.execute()
            </h2>
            <p className="text-xl text-dark-text-secondary mb-8 font-mono">
              Ready to start earning with India's fastest-growing manufacturing network?
            </p>
            <a
              href="https://auth.makrx.org/register?provider=true"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyberpunk inline-flex items-center gap-3 px-8 py-4 font-semibold rounded-xl transition-all duration-300 hover:scale-105 font-mono"
            >
              Become a Provider
              <ExternalLink className="w-5 h-5" />
            </a>
            <p className="text-sm text-dark-text-muted mt-4 font-mono">
              Application review typically takes 2-3 business days
            </p>
          </div>
        </section>
      </main>
      
      <EnhancedFooter />
    </>
  );
}