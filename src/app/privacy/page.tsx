"use client";

import React from "react";
import { siteConfig } from "@/data/site-content";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";

export default function PrivacyPage() {
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
          <h1 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-foreground text-center">Privacy Policy</h1>
          <p className="text-center text-muted-foreground mb-12 text-lg">Last Updated: {new Date().getFullYear()}</p>

          <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-heading prose-a:text-primary prose-li:text-muted-foreground prose-p:text-muted-foreground">
            <p>
              At {siteConfig.general.name}, we take your privacy seriously. This Privacy Policy describes how we collect, use, and protect your personal information
              when you visit our website or use our services.
            </p>

            <h3>1. Information We Collect</h3>
            <p>
              We may collect personal information that you provide to us voluntarily, such as your name, email address, phone number, and company details when you
              contact us or sign up for our services. We may also automatically collect certain information about your device and usage of our website.
            </p>

            <h3>2. How We Use Your Information</h3>
            <p>
              We use your information to:
            </p>
            <ul>
                <li>Provide, maintain, and improve our services.</li>
                <li>Communicate with you about updates, offers, and promotions.</li>
                <li>Respond to your inquiries and support requests.</li>
                <li>Comply with legal obligations.</li>
            </ul>

            <h3>3. Information Sharing</h3>
            <p>
              We do not sell your personal information. We may share your information with trusted third-party service providers who assist us in operating our
              website and conducting our business, provided that they agree to keep this information confidential.
            </p>

            <h3>4. Data Security</h3>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration,
              disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
            </p>

            <h3>5. Your Rights</h3>
            <p>
              Depending on your location, you may have rights regarding your personal information, such as the right to access, correct, or delete your data.
              Please contact us if you wish to exercise these rights.
            </p>

            <h3>6. Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy, please contact us at: <br/>
              <strong>Email:</strong> <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
            </p>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
