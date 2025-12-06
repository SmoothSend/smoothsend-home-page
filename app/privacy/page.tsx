'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-gray-400 mb-8">Last updated: December 6, 2025</p>

        <div className="prose prose-invert prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              SmoothSend ("we", "our", or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, and safeguard your information 
              when you use our gasless transaction service.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">2. Information We Collect</h2>
            
            <h3 className="text-xl font-medium mb-3 text-white mt-6">2.1 For End Users (Wallet Users)</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong className="text-white">We collect minimal data.</strong> When you use SmoothSend to send transactions:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
              <li><strong>Wallet Addresses:</strong> Public blockchain addresses involved in transactions (sender and recipient)</li>
              <li><strong>Transaction Data:</strong> Amount, token type, and transaction hash (all publicly visible on-chain)</li>
              <li><strong>No Personal Information:</strong> We do not collect names, emails, phone numbers, or any personally identifiable information from wallet users</li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              <em>All transaction data is public on the blockchain by nature. We do not store any off-chain data for regular wallet users.</em>
            </p>

            <h3 className="text-xl font-medium mb-3 text-white mt-6">2.2 For Developers (API Users)</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              When you create an account on our Developer Dashboard, we collect:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>GitHub Account Information:</strong> Email address, username, and GitHub user ID (via OAuth)</li>
              <li><strong>API Usage Data:</strong> Request counts, rate limit usage, and error logs for your API keys</li>
              <li><strong>Project Information:</strong> Project names and configured CORS origins</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">3. How We Use Your Information</h2>
            
            <h3 className="text-xl font-medium mb-3 text-white mt-6">3.1 Transaction Processing</h3>
            <p className="text-gray-300 leading-relaxed">
              Wallet addresses and transaction data are used solely to process and relay your gasless transactions 
              to the blockchain. This data is not stored in our databases after transaction completion.
            </p>

            <h3 className="text-xl font-medium mb-3 text-white mt-6">3.2 Developer Services</h3>
            <p className="text-gray-300 leading-relaxed">
              Developer account information is used to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mt-2">
              <li>Authenticate access to the Developer Dashboard</li>
              <li>Manage API keys and rate limits</li>
              <li>Provide usage analytics and billing</li>
              <li>Send important service updates (if you opt in)</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Data Storage and Security</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>Developer Data:</strong> Stored securely on Cloudflare Workers KV with encryption at rest</li>
              <li><strong>API Keys:</strong> Stored as hashed values; we cannot see your full API keys after creation</li>
              <li><strong>Session Tokens:</strong> JWT tokens with short expiration, stored securely</li>
              <li><strong>Transaction Data:</strong> Only exists on public blockchains; we do not maintain a separate database of transactions</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Data Sharing</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong className="text-white">We do not sell your data.</strong> We may share information only in these cases:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>Blockchain Networks:</strong> Transaction data is broadcast to public blockchains as required for transaction processing</li>
              <li><strong>Service Providers:</strong> We use Cloudflare for infrastructure (subject to their privacy policy)</li>
              <li><strong>Legal Requirements:</strong> If required by law or to protect our rights</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Third-Party Services</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We integrate with the following third-party services:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>GitHub OAuth:</strong> For developer authentication</li>
              <li><strong>Cloudflare:</strong> For API gateway and data storage</li>
              <li><strong>Vercel Analytics:</strong> For anonymous website analytics</li>
              <li><strong>Blockchain RPCs:</strong> Aptos Labs, and other RPC providers for blockchain access</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              Each service has its own privacy policy. We encourage you to review them.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">7. Cookies and Tracking</h2>
            <p className="text-gray-300 leading-relaxed">
              We use minimal cookies only for essential functionality:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mt-2">
              <li><strong>Session Cookies:</strong> To maintain your login state on the Developer Dashboard</li>
              <li><strong>No Advertising Cookies:</strong> We do not use cookies for advertising or cross-site tracking</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">8. Your Rights</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>Access:</strong> Request a copy of your developer account data</li>
              <li><strong>Deletion:</strong> Request deletion of your developer account and associated data</li>
              <li><strong>Correction:</strong> Update your account information via the Dashboard</li>
              <li><strong>Portability:</strong> Export your API key configurations</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              To exercise these rights, contact us at{' '}
              <a href="mailto:contact@smoothsend.xyz" className="text-blue-400 hover:text-blue-300">
                contact@smoothsend.xyz
              </a>
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">9. Data Retention</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>Developer Accounts:</strong> Retained until you request deletion</li>
              <li><strong>API Usage Logs:</strong> Retained for 90 days for analytics, then automatically deleted</li>
              <li><strong>Session Data:</strong> Expires after 30 days</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">10. Children's Privacy</h2>
            <p className="text-gray-300 leading-relaxed">
              SmoothSend is not intended for use by individuals under the age of 18. 
              We do not knowingly collect personal information from children.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">11. International Users</h2>
            <p className="text-gray-300 leading-relaxed">
              SmoothSend operates globally. By using our Service, you consent to the transfer 
              of your information to countries that may have different data protection laws than your jurisdiction.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">12. Changes to This Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify developers of 
              significant changes via email or Dashboard notification. Continued use of the Service 
              after changes constitutes acceptance.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">13. Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              For privacy-related questions or requests, contact us at:
            </p>
            <ul className="list-none text-gray-300 space-y-2 mt-4">
              <li>📧 Email: <a href="mailto:contact@smoothsend.xyz" className="text-blue-400 hover:text-blue-300">contact@smoothsend.xyz</a></li>
              <li>🐦 Twitter: <a href="https://twitter.com/smoothsend" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">@smoothsend</a></li>
            </ul>
          </section>
        </div>

        {/* Footer Links */}
        <div className="mt-12 pt-8 border-t border-white/10 flex gap-6">
          <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
            Terms of Service
          </Link>
          <Link href="/" className="text-gray-400 hover:text-white transition-colors">
            Home
          </Link>
        </div>
      </main>
    </div>
  )
}
