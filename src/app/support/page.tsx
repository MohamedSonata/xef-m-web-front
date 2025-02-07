import { Metadata } from 'next';
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/shared/PageHero";
import { FAQ } from '@/components/support/FAQ';
import { ContactForm } from '@/components/support/ContactForm';

export const metadata: Metadata = {
  title: 'Support - Xefro Mirror',
  description: 'Get help with Xefro Mirror. Check our FAQ or contact our support team.',
};

export default function SupportPage() {
  return (
    <PageLayout>
      <PageHero 
        title="Support Center" 
        description="Get help with Xefro Mirror. Check our FAQ or contact our support team."
      />
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          <FAQ />
        </section>
        
        {/* Contact Form Section */}
        <section className="bg-[var(--card-purple)]/10 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl mb-4">Get in Touch</h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Can&apos;t find what you&apos;re looking for? Send us a message.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a href="mailto:support@xefromirror.com" className="text-[var(--text-secondary)] hover:text-white">
                    support@xefromirror.com
                  </a>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </div>
    </PageLayout>
  );
} 