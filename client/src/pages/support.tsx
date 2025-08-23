import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  HelpCircle, Search, MessageCircle, Mail, Phone,
  ChevronDown, ChevronRight, ExternalLink, Send,
  FileText, Video, Users, Zap, Clock, CheckCircle
} from 'lucide-react';
import { Navigation } from '@/components/Navigation';

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
    <div className="min-h-screen bg-black text-white font-mono">
      <Navigation />
      
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-makr-blue/20 to-makr-yellow/20"></div>
      </div>

      <div className="relative pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-16 border-b border-makr-blue/30">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <HelpCircle className="w-16 h-16 text-makr-yellow mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-makr-yellow mb-6 tracking-wider">
              SUPPORT_CENTER.help()
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Get help, find answers, and connect with our community
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles, FAQs, or guides..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-900 border border-makr-blue/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-makr-yellow/50 transition-colors"
              />
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                to="/docs"
                className="bg-gray-900 border border-makr-blue/30 rounded-xl p-6 hover:border-makr-yellow/50 transition-colors group"
              >
                <FileText className="w-8 h-8 text-makr-blue mb-4 group-hover:text-makr-yellow transition-colors" />
                <h3 className="text-lg font-semibold text-makr-yellow mb-2">Documentation</h3>
                <p className="text-gray-400 text-sm">Complete guides and API reference</p>
              </Link>
              
              <a
                href="mailto:support@makrx.org"
                className="bg-gray-900 border border-makr-blue/30 rounded-xl p-6 hover:border-makr-yellow/50 transition-colors group"
              >
                <Mail className="w-8 h-8 text-makr-blue mb-4 group-hover:text-makr-yellow transition-colors" />
                <h3 className="text-lg font-semibold text-makr-yellow mb-2">Email Support</h3>
                <p className="text-gray-400 text-sm">Get personalized help from our team</p>
              </a>
              
              <div className="bg-gray-900 border border-makr-blue/30 rounded-xl p-6">
                <Users className="w-8 h-8 text-makr-blue mb-4" />
                <h3 className="text-lg font-semibold text-makr-yellow mb-2">Community</h3>
                <p className="text-gray-400 text-sm">Connect with other makers and experts</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        {filteredFAQs.length > 0 && (
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-3xl font-bold text-center mb-12 text-makr-yellow">
                FREQUENTLY_ASKED.getAnswers()
              </h2>
              
              <div className="space-y-4">
                {filteredFAQs.map((faq, index) => (
                  <div key={index} className="bg-gray-900 border border-makr-blue/30 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-xs px-2 py-1 bg-makr-blue/20 border border-makr-blue/50 text-makr-blue rounded">
                            {faq.category}
                          </span>
                        </div>
                        <h3 className="font-semibold text-makr-yellow">{faq.question}</h3>
                      </div>
                      {expandedFAQ === index ? (
                        <ChevronDown className="w-5 h-5 text-makr-blue" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-makr-blue" />
                      )}
                    </button>
                    
                    {expandedFAQ === index && (
                      <div className="px-6 pb-6">
                        <div className="pt-4 border-t border-gray-700">
                          <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
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
          <section className="py-20 bg-gray-900/50">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-3xl font-bold text-center mb-12 text-makr-yellow">
                HELP_ARTICLES.browse()
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((article, index) => (
                  <Link
                    key={index}
                    to={article.href}
                    className="bg-black border border-makr-blue/30 rounded-xl p-6 hover:border-makr-yellow/50 transition-colors group"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs px-2 py-1 bg-makr-blue/20 border border-makr-blue/50 text-makr-blue rounded">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-1">
                        {article.type === 'video' && <Video className="w-4 h-4 text-makr-yellow" />}
                        {article.type === 'guide' && <FileText className="w-4 h-4 text-makr-blue" />}
                        {article.type === 'article' && <FileText className="w-4 h-4 text-gray-400" />}
                      </div>
                    </div>
                    <h3 className="font-semibold text-makr-yellow mb-2 group-hover:text-white transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{article.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Contact Form */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-makr-yellow">
              CONTACT_SUPPORT.send()
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-gray-900 border border-makr-blue/30 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-makr-blue mb-6">Send us a message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full px-4 py-3 bg-black border border-makr-blue/30 rounded-lg text-white focus:outline-none focus:border-makr-yellow/50 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full px-4 py-3 bg-black border border-makr-blue/30 rounded-lg text-white focus:outline-none focus:border-makr-yellow/50 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                    <select
                      value={contactForm.category}
                      onChange={(e) => setContactForm({ ...contactForm, category: e.target.value })}
                      className="w-full px-4 py-3 bg-black border border-makr-blue/30 rounded-lg text-white focus:outline-none focus:border-makr-yellow/50 transition-colors"
                    >
                      <option value="general">General Support</option>
                      <option value="technical">Technical Issue</option>
                      <option value="billing">Billing Question</option>
                      <option value="feature">Feature Request</option>
                      <option value="integration">Integration Help</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                    <input
                      type="text"
                      required
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-black border border-makr-blue/30 rounded-lg text-white focus:outline-none focus:border-makr-yellow/50 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea
                      rows={6}
                      required
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full px-4 py-3 bg-black border border-makr-blue/30 rounded-lg text-white focus:outline-none focus:border-makr-yellow/50 transition-colors resize-none"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-makr-yellow/20 border border-makr-yellow/50 text-makr-yellow font-semibold rounded-lg hover:bg-makr-yellow/30 transition-colors"
                  >
                    Send Message
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-gray-900 border border-makr-blue/30 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-makr-blue mb-4">Support Hours</h3>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-makr-yellow" />
                      <span>Monday - Friday: 9:00 AM - 6:00 PM IST</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-makr-yellow" />
                      <span>Saturday: 10:00 AM - 4:00 PM IST</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span>Sunday: Closed</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-900 border border-makr-blue/30 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-makr-blue mb-4">Direct Contact</h3>
                  <div className="space-y-3">
                    <a
                      href="mailto:support@makrx.org"
                      className="flex items-center gap-3 text-gray-300 hover:text-makr-yellow transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>support@makrx.org</span>
                    </a>
                    <a
                      href="tel:+918047258000"
                      className="flex items-center gap-3 text-gray-300 hover:text-makr-yellow transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>+91 80472 58000</span>
                    </a>
                  </div>
                </div>
                
                <div className="bg-gray-900 border border-makr-blue/30 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-makr-blue mb-4">Response Times</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">General Inquiries:</span>
                      <span className="text-makr-yellow">24 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Technical Issues:</span>
                      <span className="text-makr-yellow">4-8 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Critical Bugs:</span>
                      <span className="text-green-400">2 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Enterprise:</span>
                      <span className="text-green-400">1 hour</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}