import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, FileText, AlertTriangle, Shield, Users, CreditCard } from 'lucide-react';
import { Navigation } from '@/components/Navigation';

export default function TermsOfService() {
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
              <Scale className="w-16 h-16 text-makr-yellow" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-makr-yellow mb-4 tracking-wider">
              TERMS_OF_SERVICE.load()
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Legal terms and conditions for using MakrX
            </p>
            <p className="text-gray-400">
              Last updated: {currentDate} | Effective: January 20, 2025
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Important Notice */}
          <div className="bg-makr-yellow/10 border border-makr-yellow/30 rounded-xl p-6 mb-8">
            <div className="flex items-start">
              <AlertTriangle className="w-6 h-6 text-makr-yellow mr-3 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-lg font-bold text-makr-yellow mb-2">Important Legal Notice</h2>
                <p className="text-gray-300 text-sm">
                  By accessing or using MakrX services, you agree to be bound by these Terms of Service. 
                  If you disagree with any part of these terms, you may not access the service.
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-300">
            {/* Introduction */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-makr-yellow mb-4 flex items-center">
                <FileText className="w-6 h-6 mr-2" />
                1. Introduction and Acceptance
              </h2>
              <p className="leading-relaxed mb-4">
                Welcome to MakrX Private Limited ("MakrX", "we", "us", or "our"). These Terms of Service ("Terms") govern your use of our digital manufacturing platform, including our website, mobile applications, and all related services (collectively, the "Service").
              </p>
              <p className="leading-relaxed">
                By accessing or using our Service, you agree to be bound by these Terms and our Privacy Policy. If you disagree with any part of these terms, then you may not access the Service.
              </p>
            </section>

            {/* Account Terms */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-makr-yellow mb-4 flex items-center">
                <Users className="w-6 h-6 mr-2" />
                2. Account Terms and Registration
              </h2>
              
              <h3 className="text-xl font-semibold text-makr-blue mb-3">2.1 Account Creation</h3>
              <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
                <li>You must be at least 18 years old to create an account</li>
                <li>You must provide accurate, complete, and current information during registration</li>
                <li>You are responsible for maintaining the security of your account credentials</li>
                <li>You may not share your account with others or allow unauthorized access</li>
              </ul>

              <h3 className="text-xl font-semibold text-makr-blue mb-3">2.2 Account Types</h3>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-gray-900 border border-makr-blue/30 rounded-lg p-4">
                  <h4 className="font-semibold text-makr-blue mb-2">Maker Account</h4>
                  <p className="text-sm text-gray-300">Individual users accessing makerspaces and services</p>
                </div>
                <div className="bg-gray-900 border border-makr-blue/30 rounded-lg p-4">
                  <h4 className="font-semibold text-makr-blue mb-2">Makerspace Owner</h4>
                  <p className="text-sm text-gray-300">Organizations managing makerspace facilities</p>
                </div>
                <div className="bg-gray-900 border border-makr-blue/30 rounded-lg p-4">
                  <h4 className="font-semibold text-makr-blue mb-2">Service Provider</h4>
                  <p className="text-sm text-gray-300">Businesses offering manufacturing services</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-makr-blue mb-3">2.3 Account Suspension</h3>
              <p className="text-gray-300">
                We reserve the right to suspend or terminate accounts that violate these Terms, engage in fraudulent activity, or pose security risks to our platform or users.
              </p>
            </section>

            {/* Service Usage */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-makr-yellow mb-4 flex items-center">
                <Shield className="w-6 h-6 mr-2" />
                3. Acceptable Use Policy
              </h2>
              
              <h3 className="text-xl font-semibold text-makr-blue mb-3">3.1 Permitted Uses</h3>
              <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
                <li>Creating, sharing, and collaborating on maker projects</li>
                <li>Booking and using makerspace equipment and facilities</li>
                <li>Purchasing tools, components, and materials through our marketplace</li>
                <li>Ordering custom manufacturing services from verified providers</li>
                <li>Accessing educational content and certification programs</li>
              </ul>

              <h3 className="text-xl font-semibold text-makr-blue mb-3">3.2 Prohibited Activities</h3>
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-4">
                <p className="text-red-400 font-semibold mb-2">You may not use our Service to:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Upload malicious code or compromise system security</li>
                  <li>Harass, threaten, or abuse other users</li>
                  <li>Create items for illegal purposes or weapons</li>
                  <li>Engage in fraudulent or deceptive practices</li>
                </ul>
              </div>
            </section>

            {/* Payment Terms */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-makr-yellow mb-4 flex items-center">
                <CreditCard className="w-6 h-6 mr-2" />
                4. Payment Terms and Billing
              </h2>
              
              <h3 className="text-xl font-semibold text-makr-blue mb-3">4.1 Subscription Services</h3>
              <p className="mb-4 text-gray-300">
                MakrCave subscriptions are billed monthly or annually in advance. All fees are non-refundable except as required by law or specifically stated in our refund policy.
              </p>

              <h3 className="text-xl font-semibold text-makr-blue mb-3">4.2 Marketplace Transactions</h3>
              <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
                <li>Payment is processed at the time of order placement</li>
                <li>Custom manufacturing orders require 25% advance payment</li>
                <li>Remaining balance is charged upon order completion</li>
                <li>Taxes and shipping charges are additional where applicable</li>
              </ul>

              <h3 className="text-xl font-semibold text-makr-blue mb-3">4.3 Refunds and Cancellations</h3>
              <div className="bg-gray-900 border border-makr-blue/30 rounded-lg p-4">
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Digital services: 7-day refund window for unused services</li>
                  <li>• Physical products: 14-day return policy for unopened items</li>
                  <li>• Custom manufacturing: Non-refundable once production begins</li>
                  <li>• Subscriptions: Cancel anytime, refunds prorated for unused period</li>
                </ul>
              </div>
            </section>

            {/* Intellectual Property */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-makr-yellow mb-4">5. Intellectual Property Rights</h2>
              
              <h3 className="text-xl font-semibold text-makr-blue mb-3">5.1 Platform Content</h3>
              <p className="mb-4 text-gray-300">
                MakrX retains all rights to our platform, software, documentation, and proprietary content. You may not copy, modify, or redistribute our intellectual property without written permission.
              </p>

              <h3 className="text-xl font-semibold text-makr-blue mb-3">5.2 User Content</h3>
              <p className="mb-4 text-gray-300">
                You retain ownership of your original designs, projects, and content. By uploading content to our platform, you grant us a limited license to display, process, and facilitate services related to that content.
              </p>

              <h3 className="text-xl font-semibold text-makr-blue mb-3">5.3 Copyright Protection</h3>
              <p className="text-gray-300">
                We respect intellectual property rights and will respond to valid DMCA takedown notices. Repeated copyright infringement may result in account termination.
              </p>
            </section>

            {/* Liability and Disclaimers */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-makr-yellow mb-4">6. Liability and Disclaimers</h2>
              
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 mb-4">
                <h3 className="text-orange-400 font-semibold mb-2">Service Disclaimer</h3>
                <p className="text-gray-300 text-sm">
                  Our Service is provided "as is" without warranties of any kind. We do not guarantee uninterrupted access, error-free operation, or specific outcomes from using our platform.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-makr-blue mb-3">6.1 Limitation of Liability</h3>
              <p className="mb-4 text-gray-300">
                MakrX's total liability for any claims arising from your use of our Service shall not exceed the amount you paid us in the 12 months preceding the claim.
              </p>

              <h3 className="text-xl font-semibold text-makr-blue mb-3">6.2 Third-Party Services</h3>
              <p className="text-gray-300">
                We are not responsible for the quality, safety, or legality of services provided by third-party service providers on our platform. Users engage with service providers at their own risk.
              </p>
            </section>

            {/* Dispute Resolution */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-makr-yellow mb-4">7. Dispute Resolution</h2>
              
              <h3 className="text-xl font-semibold text-makr-blue mb-3">7.1 Governing Law</h3>
              <p className="mb-4 text-gray-300">
                These Terms are governed by the laws of India. Any disputes will be subject to the exclusive jurisdiction of courts in Bangalore, Karnataka.
              </p>

              <h3 className="text-xl font-semibold text-makr-blue mb-3">7.2 Dispute Process</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-300">
                <li>Contact our support team to attempt informal resolution</li>
                <li>If unresolved, disputes may be submitted to binding arbitration</li>
                <li>Class action lawsuits are waived in favor of individual arbitration</li>
              </ol>
            </section>

            {/* Platform Security */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-makr-yellow mb-4">8. Platform Security and Data</h2>
              
              <h3 className="text-xl font-semibold text-makr-blue mb-3">8.1 Security Measures</h3>
              <p className="mb-4 text-gray-300">
                We implement industry-standard security measures to protect your data and our platform. However, no system is 100% secure, and you use our Service at your own risk.
              </p>

              <h3 className="text-xl font-semibold text-makr-blue mb-3">8.2 Data Protection</h3>
              <p className="text-gray-300">
                Your personal data is protected according to our Privacy Policy and applicable data protection laws, including the Digital Personal Data Protection Act, 2023.
              </p>
            </section>

            {/* Changes to Terms */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-makr-yellow mb-4">9. Changes to Terms</h2>
              <p className="text-gray-300">
                We may update these Terms periodically. Material changes will be notified via email or platform announcement. Continued use of our Service after changes constitutes acceptance of updated Terms.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-makr-yellow mb-4">10. Contact Information</h2>
              
              <div className="bg-gray-900 border border-makr-blue/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-makr-blue mb-4">Legal Contact</h3>
                <div className="space-y-2 text-gray-300">
                  <p><strong>Company:</strong> MakrX Private Limited</p>
                  <p><strong>Address:</strong> 123 Tech Park, Bangalore, Karnataka 560001, India</p>
                  <p><strong>Email:</strong> legal@makrx.org</p>
                  <p><strong>Phone:</strong> +91 80472 58000</p>
                </div>
                
                <h3 className="text-lg font-semibold text-makr-blue mb-4 mt-6">General Support</h3>
                <div className="space-y-2 text-gray-300">
                  <p><strong>Support:</strong> support@makrx.org</p>
                  <p><strong>Business Hours:</strong> Monday-Friday, 9:00 AM - 6:00 PM IST</p>
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