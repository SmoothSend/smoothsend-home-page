'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function TermsOfService() {
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
        <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-gray-400 mb-8">Last updated: December 6, 2025</p>

        <div className="prose prose-invert prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Acceptance of Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              By accessing or using SmoothSend ("the Service"), you agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use the Service.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">2. Description of Service</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              SmoothSend is a gasless transaction protocol that enables users to send stablecoins (USDC, USDT, and other supported tokens) 
              on blockchain networks without holding native gas tokens. The Service includes:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Gasless transaction relay services</li>
              <li>Developer API and SDK for integration</li>
              <li>Dashboard for API key management</li>
              <li>Demo applications</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">3. User Responsibilities</h2>
            <p className="text-gray-300 leading-relaxed mb-4">You agree to:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Use the Service only for lawful purposes</li>
              <li>Not attempt to circumvent security measures or rate limits</li>
              <li>Not use the Service for money laundering, fraud, or other illegal activities</li>
              <li>Keep your API keys secure and not share them publicly</li>
              <li>Accept responsibility for all transactions made through your account or API keys</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Transaction Fees</h2>
            <p className="text-gray-300 leading-relaxed">
              SmoothSend charges a small fee on transactions to cover network gas costs. 
              Fees are deducted from the token amount being sent and are clearly displayed before each transaction. 
              Fee structures may vary based on your account tier and are subject to change with notice.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">5. API Usage</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Developers using the SmoothSend API agree to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Comply with rate limits based on their subscription tier</li>
              <li>Use API keys only for their intended purpose</li>
              <li>Not resell or redistribute API access without authorization</li>
              <li>Implement proper security measures when integrating the API</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Blockchain Transactions</h2>
            <p className="text-gray-300 leading-relaxed">
              You acknowledge that blockchain transactions are irreversible once confirmed. 
              SmoothSend is not responsible for transactions sent to incorrect addresses, 
              losses due to smart contract bugs on third-party protocols, or network failures 
              beyond our control. Always verify transaction details before confirming.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">7. No Custody of Funds</h2>
            <p className="text-gray-300 leading-relaxed">
              SmoothSend is a non-custodial service. We never hold, control, or have access to your funds. 
              Transactions are executed directly on-chain between your wallet and the recipient. 
              You maintain full control of your assets at all times.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">8. Service Availability</h2>
            <p className="text-gray-300 leading-relaxed">
              We strive to maintain high availability but do not guarantee uninterrupted service. 
              The Service may be temporarily unavailable due to maintenance, upgrades, or circumstances 
              beyond our control. We are not liable for any losses resulting from service interruptions.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">9. Limitation of Liability</h2>
            <p className="text-gray-300 leading-relaxed">
              To the maximum extent permitted by law, SmoothSend and its operators shall not be liable 
              for any indirect, incidental, special, consequential, or punitive damages, including but 
              not limited to loss of profits, data, or other intangible losses resulting from your use 
              of the Service.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">10. Modifications to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to modify these Terms at any time. Changes will be posted on this page 
              with an updated revision date. Continued use of the Service after changes constitutes 
              acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">11. Termination</h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to suspend or terminate access to the Service for any user who 
              violates these Terms or engages in abusive or fraudulent behavior, without prior notice.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">12. Contact</h2>
            <p className="text-gray-300 leading-relaxed">
              For questions about these Terms, please contact us at{' '}
              <a href="mailto:support@smoothsend.xyz" className="text-blue-400 hover:text-blue-300">
                support@smoothsend.xyz
              </a>
              {' '}or via our{' '}
              <a href="https://twitter.com/smoothsend" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">
                Twitter/X
              </a>.
            </p>
          </section>
        </div>

        {/* Footer Links */}
        <div className="mt-12 pt-8 border-t border-white/10 flex gap-6">
          <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-400 hover:text-white transition-colors">
            Home
          </Link>
        </div>
      </main>
    </div>
  )
}
