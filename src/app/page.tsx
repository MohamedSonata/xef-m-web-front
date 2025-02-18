/* eslint-disable @typescript-eslint/no-unused-vars */
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

     
    </PageLayout>
  );
}
