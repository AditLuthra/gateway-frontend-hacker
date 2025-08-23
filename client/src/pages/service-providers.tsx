import React from 'react';
import { ExternalLink, Zap, DollarSign, Clock, Users } from 'lucide-react';
import { Navigation } from '@/components/Navigation';

export default function ServiceProviders() {
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <Navigation />
      
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-makr-yellow/20"></div>
      </div>

      <div className="relative pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-600/20 to-green-500/10 py-20 border-b border-green-500/30">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <Zap className="w-16 h-16 text-makr-yellow mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-makr-yellow mb-6 tracking-wider">
              SERVICE_PROVIDERS.join()
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join our network of skilled service providers and earn by fulfilling custom manufacturing jobs. 
              First-to-accept system ensures fair job distribution and competitive earnings.
            </p>
            <a
              href="https://auth.makrx.org/register?provider=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-makr-yellow/20 border border-makr-yellow/50 text-makr-yellow font-semibold rounded-xl hover:bg-makr-yellow/30 transition-all duration-300 hover:scale-105"
            >
              Become a Provider
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-makr-yellow">
              JOB_ASSIGNMENT.algorithm()
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-12 h-12 bg-makr-blue/20 border border-makr-blue/50 text-makr-blue rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h3 className="text-xl font-semibold mb-3 text-makr-yellow">Job Posted</h3>
                <p className="text-gray-400">Customers upload their designs and requirements through our platform.</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-green-500/20 border border-green-500/50 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h3 className="text-xl font-semibold mb-3 text-makr-yellow">First-to-Accept</h3>
                <p className="text-gray-400">Qualified providers receive notifications. First to accept gets the job.</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-makr-yellow/20 border border-makr-yellow/50 text-makr-yellow rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h3 className="text-xl font-semibold mb-3 text-makr-yellow">Delivery & Payment</h3>
                <p className="text-gray-400">Complete the job, get paid automatically upon customer approval.</p>
              </div>
            </div>

            <div className="bg-gray-900 border border-makr-blue/30 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-makr-blue mb-4">Why First-to-Accept Works</h3>
              <div className="grid md:grid-cols-2 gap-6 text-gray-300">
                <div>
                  <h4 className="font-semibold text-makr-yellow mb-2">For Providers:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• No bidding wars or underpricing</li>
                    <li>• Fair compensation based on job complexity</li>
                    <li>• Quick decision making = faster earnings</li>
                    <li>• Build reputation through quality work</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-makr-yellow mb-2">For Customers:</h4>
                  <ul className="space-y-1 text-sm">
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
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-makr-yellow">
              EARNINGS_MODEL.calculate()
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-black border border-makr-blue/30 rounded-xl p-6">
                <DollarSign className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-makr-blue mb-4">Revenue Sharing</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Provider Earnings</span>
                    <span className="text-green-400 font-bold">85%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Platform Fee</span>
                    <span className="text-makr-blue font-bold">15%</span>
                  </div>
                  <div className="pt-2 border-t border-gray-700">
                    <span className="text-xs text-gray-500">No hidden fees, transparent pricing</span>
                  </div>
                </div>
              </div>

              <div className="bg-black border border-makr-blue/30 rounded-xl p-6">
                <Clock className="w-8 h-8 text-makr-yellow mb-4" />
                <h3 className="text-xl font-semibold text-makr-blue mb-4">Payment Terms</h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex justify-between">
                    <span>Job Acceptance</span>
                    <span className="text-green-400">25% Advance</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Customer Approval</span>
                    <span className="text-green-400">75% Final</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Payment Processing</span>
                    <span className="text-makr-yellow">24-48 hours</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-green-500/20 to-makr-yellow/20 border border-green-500/30 rounded-xl p-6 inline-block">
                <h3 className="text-2xl font-bold text-makr-yellow mb-2">Average Monthly Earnings</h3>
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-green-400">₹25K</div>
                    <div className="text-sm text-gray-400">Part-time</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-400">₹65K</div>
                    <div className="text-sm text-gray-400">Full-time</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-400">₹150K+</div>
                    <div className="text-sm text-gray-400">Enterprise</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-makr-yellow">
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
                <div key={index} className="bg-gray-900 border border-makr-blue/30 rounded-xl p-4 hover:border-makr-yellow/50 transition-colors">
                  <h3 className="font-semibold text-makr-yellow mb-2">{service.name}</h3>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Demand:</span>
                      <span className={`font-semibold ${
                        service.demand === 'High' ? 'text-green-400' : 
                        service.demand === 'Medium' ? 'text-makr-yellow' : 'text-gray-500'
                      }`}>
                        {service.demand}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Avg Rate:</span>
                      <span className="text-makr-blue font-semibold">{service.avgPrice}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-makr-yellow">
              PROVIDER_REQUIREMENTS.validate()
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-makr-blue">Technical Requirements</h3>
                <div className="space-y-4">
                  {[
                    "Professional-grade equipment access",
                    "2+ years relevant experience",
                    "Portfolio of completed projects",
                    "Quality management certification (preferred)"
                  ].map((req, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300">{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-makr-blue">Business Requirements</h3>
                <div className="space-y-4">
                  {[
                    "Valid business registration (GST preferred)",
                    "Insurance coverage for equipment/liability",
                    "Commitment to quality and deadlines",
                    "Professional communication skills"
                  ].map((req, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-makr-yellow rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300">{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-makr-yellow">
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
                <div key={index} className="bg-gray-900 border border-makr-blue/30 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-makr-blue/30 to-makr-yellow/30 rounded-full mr-4 border border-makr-blue/50"></div>
                    <div>
                      <h3 className="font-semibold text-makr-yellow">{story.name}</h3>
                      <p className="text-sm text-gray-400">{story.location} • {story.service}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="text-green-400 font-bold text-lg">{story.earnings}</span>
                    <span className="text-gray-500 text-sm ml-2">average</span>
                  </div>
                  <p className="text-gray-300 text-sm italic">"{story.story}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-makr-blue/20 to-makr-yellow/20 border-t border-makr-blue/30">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-makr-yellow">
              JOIN_NETWORK.execute()
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Ready to start earning with India's fastest-growing manufacturing network?
            </p>
            <a
              href="https://auth.makrx.org/register?provider=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-makr-yellow/20 border border-makr-yellow/50 text-makr-yellow font-semibold rounded-xl hover:bg-makr-yellow/30 transition-all duration-300 hover:scale-105"
            >
              Become a Provider
              <ExternalLink className="w-5 h-5" />
            </a>
            <p className="text-sm text-gray-500 mt-4">
              Application review typically takes 2-3 business days
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}