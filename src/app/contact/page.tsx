"use client";

import { siteConfig } from "@/data/site-content";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-background text-foreground">
       <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold text-foreground font-heading mb-4">
                    Contact Us
                </h1>
                <p className="text-xl text-muted-foreground">
                    Let's discuss how we can help your business grow.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {/* Contact Info */}
                <div className="bg-card border border-border/50 p-8 rounded-3xl space-y-8 shadow-sm">
                     <h2 className="text-2xl font-bold text-foreground font-heading mb-6">
                        Get in Touch
                    </h2>
                    
                    <div className="flex items-start gap-4">
                        <Mail className="w-6 h-6 text-primary shrink-0 mt-1" />
                        <div>
                            <h3 className="font-semibold text-foreground">Email</h3>
                            <a href={`mailto:${siteConfig.contact.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                                {siteConfig.contact.email}
                            </a>
                        </div>
                    </div>

                     <div className="flex items-start gap-4">
                        <Phone className="w-6 h-6 text-primary shrink-0 mt-1" />
                        <div>
                            <h3 className="font-semibold text-foreground">Phone</h3>
                            <div className="flex flex-col">
                                {siteConfig.contact.phones.map(phone => (
                                     <a key={phone} href={`tel:${phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                                        {phone}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                        <div>
                            <h3 className="font-semibold text-foreground">Office</h3>
                            <p className="text-muted-foreground">
                                Global Reach (Remote & On-site)<br />
                                Serving clients worldwide
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="space-y-6">
                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                             <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-1">First Name</label>
                                <input type="text" id="firstName" className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition" />
                             </div>
                             <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-1">Last Name</label>
                                <input type="text" id="lastName" className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition" />
                             </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email</label>
                            <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</label>
                            <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-primary/25 active:scale-98">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
       </div>
    </main>
  );
}
