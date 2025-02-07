import Banner from "@/components/home/Banner";
import Features from "@/components/home/Features";
import { PageLayout } from "@/components/layout/PageLayout";
import { FAQ } from '@/components/support/FAQ';
import { ContactForm } from '@/components/support/ContactForm';

export default function Home() {
  return (
    <PageLayout>
      <Banner />
      <Features />

      {/* Support Section */}
      <section id="support" className="py-16 bg-[var(--card-purple)]/5">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Support</h2>
          
          {/* FAQ Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h3>
            <FAQ />
          </div>
          
          {/* Contact Form Section */}
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
        </div>
      </section>
    </PageLayout>
  );
}
