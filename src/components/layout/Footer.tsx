import * as React from "react";

import { siteConfig } from "@/data/site-content";

export function Footer() {
  return (
    <footer id="contact" className="bg-brand-ink border-t border-brand-deep">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="text-lg font-semibold tracking-tight text-white">
              {siteConfig.general.name}
            </div>
            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">
              {siteConfig.general.tagline}. Trusted accounting & advisory services
              to keep your business compliant and growth-ready.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold text-white">Services</div>
            <ul className="mt-4 grid gap-2">
              {siteConfig.services.map((service) => (
                <li key={service.title}>
                  <a
                    href="#services"
                    className="text-sm text-slate-400 transition-colors hover:text-brand-icy"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-white">Quick Links</div>
            <ul className="mt-4 grid gap-2">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-brand-icy"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#faq"
                  className="text-sm text-slate-400 transition-colors hover:text-brand-icy"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-white">Contact</div>
            <div className="mt-4 grid gap-2 text-sm text-slate-400">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="transition-colors hover:text-brand-icy"
              >
                {siteConfig.contact.email}
              </a>
              <div className="grid gap-1">
                {siteConfig.contact.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s|\//g, "")}`}
                    className="transition-colors hover:text-brand-icy"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-xs text-slate-500">
          © {new Date().getFullYear()} {siteConfig.general.name}. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
