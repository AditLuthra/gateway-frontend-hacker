import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
import { 
  HelpCircle, Search, MessageCircle, Mail, Phone,
  ChevronDown, ChevronRight, ExternalLink, Send,
  FileText, Video, Users, Zap, Clock, CheckCircle
} from 'lucide-react';
import { EnhancedNavigation } from "@/components/EnhancedNavigation";
import { EnhancedFooter } from "@/components/EnhancedFooter";
import { SEOStructuredData } from "@/components/SEOStructuredData";
import { ThreeBackground } from "@/components/ThreeBackground";

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

interface SupportArticle {
  title: string;
  description: string;
  category: string;
  href: string;
  type: 'article' | 'video' | 'guide';
}

export default function Support() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general'
  });

  const faqs: FAQ[] = [
    {
      question: "How do I get started with MakrX?",
      answer: "Getting started is easy! First, create your account at auth.makrx.org. Choose your role (Maker, Makerspace Owner, or Service Provider) and you'll be guided through the appropriate onboarding process. Check out our Quick Start Guide for detailed instructions.",
      category: "Getting Started"
    },
    {
      question: "What's included in a MakrCave subscription?",
      answer: "MakrCave subscriptions include equipment booking, inventory management, member billing, project tracking, and analytics. Pricing varies by makerspace size and features needed. Contact our sales team for a custom quote.",
      category: "Billing"
    },
    {
      question: "How do I place a custom manufacturing order?",
      answer: "Upload your design files to our Store platform and get an instant quote. You can choose from 3D printing, CNC machining, laser cutting, and PCB assembly services. Our global provider network ensures competitive pricing and fast delivery.",
      category: "Orders"
    },
    {
      question: "Can I integrate MakrX with my existing systems?",
      answer: "Yes! We offer comprehensive APIs and webhooks for integration with ERP, inventory management, and payment systems. Our documentation includes guides for common integrations like Keycloak SSO and various payment gateways.",
      category: "Integration"
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, bank transfers, and UPI payments through our secure payment partners. For enterprise customers, we also offer invoice-based billing and custom payment terms.",
      category: "Billing"
    },
    {
      question: "How do I report a bug or technical issue?",
      answer: "Report bugs through our support portal or email support@makrx.org. Include detailed steps to reproduce the issue, screenshots if applicable, and your browser/device information. Critical issues are typically resolved within 24 hours.",
      category: "Technical"
    },
    {
      question: "Is my data secure on MakrX?",
      answer: "Absolutely. We use industry-standard encryption, regular security audits, and comply with DPDP Act 2023 and GDPR. Your data is never sold to third parties. Read our Privacy Policy for complete details on data protection measures.",
      category: "Security"
    },
    {
      question: "How do I cancel my subscription?",
      answer: "You can cancel your subscription anytime from your account settings. For MakrCave subscriptions, contact your account manager or email billing@makrx.org. We'll process cancellations within 24 hours with no hidden fees.",
      category: "Billing"
    }
  ];

  const supportArticles: SupportArticle[] = [
    {
      title: "Quick Start Guide",
      description: "Get up and running with MakrX in 5 minutes",
      category: "Getting Started",
      href: "/docs/quick-start",
      type: "guide"
    },
    {
      title: "API Documentation",
      description: "Complete reference for integrating with MakrX APIs",
      category: "Development",
      href: "/docs/api",
      type: "article"
    },
    {
      title: "MakrCave Setup Walkthrough",
      description: "Video guide for setting up your makerspace",
      category: "MakrCave",
      href: "/docs/makrcave-setup",
      type: "video"
    },
    {
      title: "Payment Integration Guide",
      description: "How to set up billing and payment processing",
      category: "Billing",
      href: "/docs/payments",
      type: "guide"
    },
    {
      title: "Security Best Practices",
      description: "Keeping your account and data secure",
      category: "Security",
      href: "/docs/security",
      type: "article"
    },
    {
      title: "Troubleshooting Common Issues",
      description: "Solutions to frequently encountered problems",
      category: "Technical",
      href: "/docs/troubleshooting",
      type: "article"
    }
  ];

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredArticles = supportArticles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    // Handle form submission
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    setContactForm({ name: '', email: '', subject: '', message: '', category: 'general' });
  };

  return (
    <>
      <Helmet>
        <title>Support Center - Get Help & Documentation | MakrX.org</title>
        <meta 
          name="description" 
          content="Get help with MakrX platform. Find FAQs, documentation, guides, and contact our support team. Quick response times for technical issues and billing questions."
        />
      </Helmet>
      
      <SEOStructuredData type="organization" />
      
      <ThreeBackground />
      <EnhancedNavigation />
      
      <main className="min-h-screen relative z-10">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-terminal-green/20 to-makr-blue/20 py-20 border-b border-makr-blue/30">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-makr-yellow/10 backdrop-blur-sm border border-makr-yellow/30 rounded-full px-6 py-2 mb-6">
              <HelpCircle className="h-5 w-5 text-makr-yellow animate-pulse" />
              <span className="text-makr-yellow font-mono font-semibold tracking-wider">
                SUPPORT CENTER
              </span>
            </div>
            
            <HelpCircle className="w-16 h-16 text-makr-yellow mx-auto mb-6 animate-bounce" />
            <h1 className="text-4xl md:text-6xl font-bold text-gradient-cyberpunk mb-6 font-mono">
              SUPPORT_CENTER.help()
            </h1>
            <p className="text-xl text-dark-text-secondary mb-8 font-mono">
              Get help, find answers, and connect with our community
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-dark-text-muted" />
              <input
                type="text"
                placeholder="Search for help articles, FAQs, or guides..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-dark-bg-secondary border border-makr-blue/30 rounded-xl text-dark-text-primary placeholder-dark-text-muted focus:outline-none focus:border-makr-yellow/50 transition-colors font-mono"
              />
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-20 bg-dark-bg-secondary">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <Link
                to="/docs"
                className="card-cyberpunk p-8 group hover:shadow-neon transition-all"
              >
                <div className="w-16 h-16 bg-makr-blue/10 border border-makr-blue/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-makr-blue/20 group-hover:shadow-neon transition-all">
                  <FileText className="w-8 h-8 text-makr-blue group-hover:text-makr-yellow transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gradient-cyberpunk mb-3 font-mono">Documentation</h3>
                <p className="text-dark-text-secondary text-sm font-mono">Complete guides and API reference</p>
              </Link>
              
              <a
                href="mailto:support@makrx.org"
                className="card-cyberpunk p-8 group hover:shadow-neon transition-all"
              >
                <div className="w-16 h-16 bg-terminal-green/10 border border-terminal-green/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-terminal-green/20 group-hover:shadow-neon-green transition-all">
                  <Mail className="w-8 h-8 text-terminal-green group-hover:text-makr-yellow transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gradient-cyberpunk mb-3 font-mono">Email Support</h3>
                <p className="text-dark-text-secondary text-sm font-mono">Get personalized help from our team</p>
              </a>
              
              <div className="card-cyberpunk p-8 group">
                <div className="w-16 h-16 bg-makr-yellow/10 border border-makr-yellow/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-makr-yellow/20 group-hover:shadow-neon transition-all">
                  <Users className="w-8 h-8 text-makr-yellow" />
                </div>
                <h3 className="text-xl font-semibold text-gradient-cyberpunk mb-3 font-mono">Community</h3>
                <p className="text-dark-text-secondary text-sm font-mono">Connect with other makers and experts</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        {filteredFAQs.length > 0 && (
          <section className="py-20 bg-dark-bg-primary">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient-cyberpunk font-mono">
                FREQUENTLY_ASKED.getAnswers()
              </h2>
              
              <div className="space-y-6">
                {filteredFAQs.map((faq, index) => (
                  <div key={index} className="card-cyberpunk border border-makr-blue/30 overflow-hidden hover:shadow-neon transition-all">
                    <button
                      onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                      className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-dark-bg-secondary transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-xs px-3 py-1 bg-makr-blue/20 border border-makr-blue/50 text-makr-blue rounded-full font-mono">
                            {faq.category}
                          </span>
                        </div>
                        <h3 className="font-semibold text-gradient-cyberpunk font-mono">{faq.question}</h3>
                      </div>
                      {expandedFAQ === index ? (
                        <ChevronDown className="w-6 h-6 text-makr-blue" />
                      ) : (
                        <ChevronRight className="w-6 h-6 text-makr-blue" />
                      )}
                    </button>
                    
                    {expandedFAQ === index && (
                      <div className="px-8 pb-8">
                        <div className="pt-6 border-t border-makr-blue/30">
                          <p className="text-dark-text-secondary leading-relaxed font-mono">{faq.answer}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Help Articles */}
        {filteredArticles.length > 0 && (
          <section className="py-20 bg-dark-bg-secondary">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient-cyberpunk font-mono">
                HELP_ARTICLES.browse()
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article, index) => (
                  <Link
                    key={index}
                    to={article.href}
                    className="card-cyberpunk p-6 border border-makr-blue/30 hover:border-makr-yellow/50 hover:shadow-neon transition-all group"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs px-3 py-1 bg-makr-blue/20 border border-makr-blue/50 text-makr-blue rounded-full font-mono">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-2">
                        {article.type === 'video' && <Video className="w-5 h-5 text-makr-yellow" />}
                        {article.type === 'guide' && <FileText className="w-5 h-5 text-makr-blue" />}
                        {article.type === 'article' && <FileText className="w-5 h-5 text-terminal-green" />}
                      </div>
                    </div>
                    <h3 className="font-semibold text-gradient-cyberpunk mb-3 group-hover:text-makr-yellow transition-colors font-mono">
                      {article.title}
                    </h3>
                    <p className="text-dark-text-secondary text-sm font-mono">{article.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Contact Form */}
        <section className="py-20 bg-dark-bg-primary">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient-cyberpunk font-mono">
              CONTACT_SUPPORT.send()
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="card-cyberpunk p-8 border border-makr-blue/30">
                <h3 className="text-xl font-semibold text-gradient-cyberpunk mb-6 font-mono">Send us a message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-dark-text-secondary mb-2 font-mono">Name</label>
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full px-4 py-3 bg-dark-bg-secondary border border-makr-blue/30 rounded-lg text-dark-text-primary focus:outline-none focus:border-makr-yellow/50 transition-colors font-mono"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-dark-text-secondary mb-2 font-mono">Email</label>
                    <input
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full px-4 py-3 bg-dark-bg-secondary border border-makr-blue/30 rounded-lg text-dark-text-primary focus:outline-none focus:border-makr-yellow/50 transition-colors font-mono"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-dark-text-secondary mb-2 font-mono">Category</label>
                    <select
                      value={contactForm.category}
                      onChange={(e) => setContactForm({ ...contactForm, category: e.target.value })}
                      className="w-full px-4 py-3 bg-dark-bg-secondary border border-makr-blue/30 rounded-lg text-dark-text-primary focus:outline-none focus:border-makr-yellow/50 transition-colors font-mono"
                    >
                      <option value="general">General Support</option>
                      <option value="technical">Technical Issue</option>
                      <option value="billing">Billing Question</option>
                      <option value="feature">Feature Request</option>
                      <option value="integration">Integration Help</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-dark-text-secondary mb-2 font-mono">Subject</label>
                    <input
                      type="text"
                      required
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-dark-bg-secondary border border-makr-blue/30 rounded-lg text-dark-text-primary focus:outline-none focus:border-makr-yellow/50 transition-colors font-mono"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-dark-text-secondary mb-2 font-mono">Message</label>
                    <textarea
                      rows={6}
                      required
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full px-4 py-3 bg-dark-bg-secondary border border-makr-blue/30 rounded-lg text-dark-text-primary focus:outline-none focus:border-makr-yellow/50 transition-colors resize-none font-mono"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="btn-cyberpunk w-full flex items-center justify-center gap-3 px-6 py-3 font-semibold rounded-lg transition-all duration-300 hover:scale-105 font-mono"
                  >
                    Send Message
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="card-cyberpunk p-6 border border-makr-blue/30">
                  <h3 className="text-lg font-semibold text-gradient-cyberpunk mb-4 font-mono">Support Hours</h3>
                  <div className="space-y-3 text-dark-text-secondary">
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-makr-yellow" />
                      <span className="font-mono">Monday - Friday: 9:00 AM - 6:00 PM IST</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-makr-yellow" />
                      <span className="font-mono">Saturday: 10:00 AM - 4:00 PM IST</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-dark-text-muted" />
                      <span className="font-mono">Sunday: Closed</span>
                    </div>
                  </div>
                </div>
                
                <div className="card-cyberpunk p-6 border border-makr-blue/30">
                  <h3 className="text-lg font-semibold text-gradient-cyberpunk mb-4 font-mono">Direct Contact</h3>
                  <div className="space-y-4">
                    <a
                      href="mailto:support@makrx.org"
                      className="flex items-center gap-3 text-dark-text-secondary hover:text-makr-yellow transition-colors font-mono"
                    >
                      <Mail className="w-5 h-5" />
                      <span>support@makrx.org</span>
                    </a>
                    <a
                      href="tel:+918047258000"
                      className="flex items-center gap-3 text-dark-text-secondary hover:text-makr-yellow transition-colors font-mono"
                    >
                      <Phone className="w-5 h-5" />
                      <span>+91 80472 58000</span>
                    </a>
                  </div>
                </div>
                
                <div className="card-cyberpunk p-6 border border-makr-blue/30">
                  <h3 className="text-lg font-semibold text-gradient-cyberpunk mb-4 font-mono">Response Times</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-dark-text-secondary font-mono">General Inquiries:</span>
                      <span className="text-makr-yellow font-mono">24 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-dark-text-secondary font-mono">Technical Issues:</span>
                      <span className="text-makr-yellow font-mono">4-8 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-dark-text-secondary font-mono">Critical Bugs:</span>
                      <span className="text-terminal-green font-mono">2 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-dark-text-secondary font-mono">Enterprise:</span>
                      <span className="text-terminal-green font-mono">1 hour</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <EnhancedFooter />
    </>
  );
}