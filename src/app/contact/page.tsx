"use client";

import { siteConfig } from "@/data/site-content";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <main className="min-h-screen pt-32 pb-20 bg-background text-foreground">
       <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold text-foreground font-heading mb-6 tracking-tight">
                    Contact Us
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
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
                        <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <div>
                            <h3 className="text-sm font-semibold text-foreground mb-1">Email</h3>
                            <a href={`mailto:${siteConfig.contact.email}`} className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                                {siteConfig.contact.email}
                            </a>
                        </div>
                    </div>

                     <div className="flex items-start gap-4">
                        <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <div>
                            <h3 className="text-sm font-semibold text-foreground mb-1">Phone</h3>
                            <div className="flex flex-col gap-1">
                                {siteConfig.contact.phones.map(phone => (
                                     <a key={phone} href={`tel:${phone}`} className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                                        {phone}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <div>
                            <h3 className="text-sm font-semibold text-foreground mb-1">Office</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Global Reach (Remote & On-site)<br />
                                Serving clients worldwide
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="space-y-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                             <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-1">First Name</label>
                                <input 
                                    type="text" 
                                    id="firstName" 
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition" 
                                />
                             </div>
                             <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-1">Last Name</label>
                                <input 
                                    type="text" 
                                    id="lastName" 
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition" 
                                />
                             </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition" 
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</label>
                            <textarea 
                                id="message" 
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={4} 
                                className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition"
                            ></textarea>
                        </div>
                        
                        <button 
                            type="submit" 
                            disabled={status === 'loading'}
                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-primary/25 active:scale-98 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {status === 'loading' ? 'Sending...' : 'Send Message'}
                        </button>

                        {status === 'success' && (
                            <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-600 dark:text-green-400 text-center text-sm font-medium">
                                Message sent successfully! We'll get back to you soon.
                            </div>
                        )}
                        {status === 'error' && (
                            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-600 dark:text-red-400 text-center text-sm font-medium">
                                Failed to send message. Please try again.
                            </div>
                        )}
                    </form>
                </div>
            </div>
       </div>
    </main>
  );
}
