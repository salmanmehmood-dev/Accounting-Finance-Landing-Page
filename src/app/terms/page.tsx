"use client";

import React from "react";
import { siteConfig } from "@/data/site-content";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <AuroraBackground showRadialGradient={true}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col items-center justify-center px-4 py-24 md:py-32 w-full pt-32 md:pt-40"
      >
        <div className="max-w-4xl w-full bg-card/50 backdrop-blur-xl border border-white/10 dark:border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl">
          <h1 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-foreground text-center">Terms of Service</h1>
          <p className="text-center text-muted-foreground mb-12 text-lg">Last Updated: {new Date().getFullYear()}</p>

          <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-heading prose-a:text-primary prose-li:text-muted-foreground prose-p:text-muted-foreground">
            <p>
              Welcome to {siteConfig.general.name} ("we," "our," or "us"). By accessing or using our website, services, and applications
              (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms,
              please do not use our Services.
            </p>

            <h3>1. Services Provided</h3>
            <p>
              We provide accounting, bookkeeping, financial advisory, and related services. The specific scope of services will be defined in
              individual engagement letters or agreements signed with you.
            </p>

            <h3>2. User Responsibilities</h3>
            <p>
              You agree to provide accurate, current, and complete information as necessary for us to provide our Services. You are responsible
              for maintaining the confidentiality of any account credentials and for all activities that occur under your account.
            </p>

            <h3>3. Intellectual Property</h3>
            <p>
              All content, trademarks, logos, and materials available on our website are the property of {siteConfig.general.name} or our licensors
              and are protected by intellectual property laws. You may not use, reproduce, or distribute any content without our prior written permission.
            </p>

            <h3>4. Limitation of Liability</h3>
            <p>
              To the fullest extent permitted by law, {siteConfig.general.name} shall not be liable for any indirect, incidental, special, consequential,
              or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other
              intangible losses.
            </p>

            <h3>5. Changes to Terms</h3>
            <p>
              We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page. Your continued
              use of the Services after any such changes constitutes your acceptance of the new Terms.
            </p>

            <h3>6. Contact Us</h3>
            <p>
              If you have any questions about these Terms, please contact us at: <br/>
              <strong>Email:</strong> <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
            </p>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
