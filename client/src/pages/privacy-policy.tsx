import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Eye, Database, UserCheck, Lock, Globe } from 'lucide-react';
import { Navigation } from '@/components/Navigation';

export default function PrivacyPolicy() {
  const currentDate = new Date().toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <Navigation />
      
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-makr-blue/20 to-makr-yellow/20"></div>
      </div>

      <div className="relative pt-24">
        {/* Header */}
        <div className="bg-gradient-to-br from-makr-blue/20 to-makr-blue/10 py-16 border-b border-makr-blue/30">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="flex justify-center mb-6">
              <Shield className="w-16 h-16 text-makr-yellow" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-makr-yellow mb-4 tracking-wider">
              PRIVACY_POLICY.init()
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Your privacy is fundamental to everything we do
            </p>
            <p className="text-gray-400">
              Last updated: {currentDate} | Effective: January 20, 2025
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Quick Summary */}
          <div className="bg-makr-blue/10 border border-makr-blue/30 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold text-makr-yellow mb-4 flex items-center">
              <Eye className="w-5 h-5 mr-2" />
              Privacy at a Glance
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h3 className="font-semibold text-makr-blue mb-2">What we collect:</h3>
                <ul className="text-gray-300 space-y-1">
                  <li>• Contact information (name, email)</li>
                  <li>• Usage data for service improvement</li>
                  <li>• Makerspace preferences and activity</li>
                  <li>• Payment information (securely processed)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-makr-blue mb-2">How we protect it:</h3>
                <ul className="text-gray-300 space-y-1">
                  <li>• End-to-end encryption</li>
                  <li>• No selling to third parties</li>
                  <li>• DPDP Act 2023 compliance</li>
                  <li>• Regular security audits</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-300">
            {/* Introduction */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-makr-yellow mb-4 flex items-center">
                <Database className="w-6 h-6 mr-2" />
                1. Introduction and Acceptance
              </h2>
              <p className="leading-relaxed mb-4">
                MakrX Private Limited (\"MakrX\", \"we\", \"us\", or \"our\") is committed to protecting your privacy and personal data. This Privacy Policy explains how we collect, use, process, and safeguard your information when you use our digital manufacturing platform, including MakrCave, MakrX.Store, and related services.
              </p>
              <p className="leading-relaxed">
                By using our services, you agree to the collection and use of information in accordance with this Privacy Policy and applicable laws, including the Digital Personal Data Protection Act, 2023 (DPDP Act) and the General Data Protection Regulation (GDPR) where applicable.
              </p>
            </section>

            {/* Data Collection */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-makr-yellow mb-4 flex items-center">
                <UserCheck className="w-6 h-6 mr-2" />
                2. Information We Collect
              </h2>
              
              <h3 className="text-xl font-semibold text-makr-blue mb-3">2.1 Personal Information</h3>
              <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
                <li>Account registration data (name, email address, phone number)</li>
                <li>Profile information (skills, interests, makerspace preferences)</li>
                <li>Communication data (messages, support tickets, feedback)</li>
                <li>Billing and payment information (processed securely through third-party providers)</li>
              </ul>

              <h3 className="text-xl font-semibold text-makr-blue mb-3">2.2 Usage and Technical Data</h3>
              <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Usage patterns (pages visited, features used, time spent)</li>
                <li>Performance data (loading times, error reports, crash logs)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h3 className="text-xl font-semibold text-makr-blue mb-3">2.3 Makerspace and Project Data</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Equipment usage and booking history</li>
                <li>Project files and documentation (when shared)</li>
                <li>Collaboration and workspace activity</li>
                <li>Learning progress and certification data</li>
              </ul>
            </section>

            {/* Data Usage */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-makr-yellow mb-4 flex items-center">
                <Lock className="w-6 h-6 mr-2" />
                3. How We Use Your Information
              </h2>
              
              <h3 className="text-xl font-semibold text-makr-blue mb-3">3.1 Service Provision</h3>
              <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
                <li>Creating and managing your account</li>
                <li>Processing orders and transactions</li>
                <li>Facilitating makerspace bookings and access</li>
                <li>Providing customer support and technical assistance</li>
              </ul>

              <h3 className="text-xl font-semibold text-makr-blue mb-3">3.2 Platform Improvement</h3>
              <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
                <li>Analyzing usage patterns to enhance user experience</li>
                <li>Developing new features and services</li>
                <li>Performing security monitoring and fraud prevention</li>
                <li>Conducting research and data analytics (anonymized)</li>
              </ul>

              <h3 className="text-xl font-semibold text-makr-blue mb-3">3.3 Communication</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Sending service updates and important notifications</li>
                <li>Providing marketing communications (with consent)</li>
                <li>Sharing educational content and community updates</li>
                <li>Responding to inquiries and support requests</li>
              </ul>
            </section>

            {/* Data Sharing */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-makr-yellow mb-4 flex items-center">
                <Globe className="w-6 h-6 mr-2" />
                4. Data Sharing and Disclosure
              </h2>
              
              <div className="bg-makr-yellow/10 border border-makr-yellow/30 rounded-lg p-4 mb-4">
                <h3 className="font-semibold text-makr-yellow mb-2">Our Commitment</h3>
                <p className="text-sm text-gray-300">
                  We never sell, rent, or trade your personal information to third parties for their marketing purposes.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-makr-blue mb-3">4.1 Service Providers</h3>
              <p className="mb-4 text-gray-300">
                We may share your information with trusted third-party service providers who assist us in operating our platform, including:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
                <li>Payment processors (Stripe, Razorpay) for transaction handling</li>
                <li>Cloud infrastructure providers (AWS, Google Cloud) for data storage</li>
                <li>Analytics services (Google Analytics) for usage insights</li>
                <li>Communication platforms (SendGrid, Twilio) for notifications</li>
              </ul>

              <h3 className="text-xl font-semibold text-makr-blue mb-3">4.2 Legal Requirements</h3>
              <p className="text-gray-300">
                We may disclose your information when required by law, court order, or to protect our legal rights and those of our users.
              </p>
            </section>

            {/* Data Protection */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-makr-yellow mb-4">5. Data Security and Protection</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-900 border border-makr-blue/30 rounded-lg p-4">
                  <h3 className="font-semibold text-makr-blue mb-2">Technical Measures</h3>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• AES-256 encryption for data at rest</li>
                    <li>• TLS 1.3 for data in transit</li>
                    <li>• Multi-factor authentication</li>
                    <li>• Regular security audits</li>
                  </ul>
                </div>
                
                <div className="bg-gray-900 border border-makr-blue/30 rounded-lg p-4">
                  <h3 className="font-semibold text-makr-blue mb-2">Organizational Measures</h3>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Employee training programs</li>
                    <li>• Access controls and monitoring</li>
                    <li>• Incident response procedures</li>
                    <li>• Data minimization practices</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* User Rights */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-makr-yellow mb-4">6. Your Rights and Choices</h2>
              
              <h3 className="text-xl font-semibold text-makr-blue mb-3">6.1 Under DPDP Act 2023</h3>
              <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
                <li>Right to access your personal data</li>
                <li>Right to correction of inaccurate data</li>
                <li>Right to erasure (\"right to be forgotten\")</li>
                <li>Right to data portability</li>
                <li>Right to withdraw consent</li>
              </ul>

              <h3 className="text-xl font-semibold text-makr-blue mb-3">6.2 How to Exercise Your Rights</h3>
              <p className="mb-4 text-gray-300">
                To exercise any of these rights, contact us at privacy@makrx.org or use the privacy controls in your account settings. We will respond to your request within 30 days.
              </p>
            </section>

            {/* Cookies */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-makr-yellow mb-4">7. Cookies and Tracking Technologies</h2>
              <p className="mb-4 text-gray-300">
                We use cookies and similar technologies to enhance your experience, analyze usage, and provide personalized content. You can control cookie preferences through your browser settings or our cookie management tool.
              </p>
              
              <div className="bg-gray-900 border border-makr-blue/30 rounded-lg p-4">
                <h3 className="font-semibold text-makr-blue mb-2">Cookie Categories</h3>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• <strong>Essential:</strong> Required for core platform functionality</li>
                  <li>• <strong>Analytics:</strong> Help us understand user behavior (opt-out available)</li>
                  <li>• <strong>Preferences:</strong> Remember your settings and choices</li>
                  <li>• <strong>Marketing:</strong> Deliver relevant content (consent required)</li>
                </ul>
              </div>
            </section>

            {/* International Transfers */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-makr-yellow mb-4">8. International Data Transfers</h2>
              <p className="text-gray-300">
                Your data is primarily processed in India. When we transfer data internationally, we ensure appropriate safeguards are in place, including Standard Contractual Clauses and adequacy decisions where applicable.
              </p>
            </section>

            {/* Data Retention */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-makr-yellow mb-4">9. Data Retention</h2>
              <p className="mb-4 text-gray-300">
                We retain your personal data only as long as necessary for the purposes outlined in this policy or as required by law:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Account data: Until account deletion + 90 days</li>
                <li>Transaction records: 7 years (legal requirement)</li>
                <li>Usage analytics: 26 months (anonymized)</li>
                <li>Communication logs: 3 years</li>
              </ul>
            </section>

            {/* Children's Privacy */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-makr-yellow mb-4">10. Children's Privacy</h2>
              <p className="text-gray-300">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.
              </p>
            </section>

            {/* Changes to Policy */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-makr-yellow mb-4">11. Changes to This Privacy Policy</h2>
              <p className="text-gray-300">
                We may update this Privacy Policy periodically. We will notify you of significant changes via email or platform notification. Continued use of our services after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-makr-yellow mb-4">12. Contact Information</h2>
              
              <div className="bg-gray-900 border border-makr-blue/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-makr-blue mb-4">Data Protection Officer</h3>
                <div className="space-y-2 text-gray-300">
                  <p><strong>Email:</strong> privacy@makrx.org</p>
                  <p><strong>Address:</strong> MakrX Private Limited, 123 Tech Park, Bangalore, Karnataka 560001, India</p>
                  <p><strong>Phone:</strong> +91 80472 58000</p>
                </div>
                
                <h3 className="text-lg font-semibold text-makr-blue mb-4 mt-6">Grievance Officer</h3>
                <div className="space-y-2 text-gray-300">
                  <p><strong>Name:</strong> Priya Sharma</p>
                  <p><strong>Email:</strong> grievance@makrx.org</p>
                  <p><strong>Response Time:</strong> Within 72 hours</p>
                </div>
              </div>
            </section>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <Link 
              to="/" 
              className="inline-flex items-center px-6 py-3 bg-makr-blue/20 border border-makr-blue/50 text-makr-blue rounded-lg hover:bg-makr-blue/30 transition-colors"
            >
              ← Back to MakrX
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}