export type NavLink = {
  name: string;
  href: string;
};

export type SiteStat = {
  label: string;
  value: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  icon: "chart" | "book" | "globe" | "shield" | "activity";
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type Testimonial = {
  name: string;
  location: string;
  quote: string;
};

export const siteConfig = {
  general: {
    name: "Elevare Solutions Hub",
    tagline: "Empowering Your Numbers. Elevating Your Business",
    mission:
      "To simplify financial complexities through modern accounting, bookkeeping, and advisory services — ensuring compliance, driving growth, and allowing clients to concentrate on their core business operations.",
  },

  navLinks: [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ] satisfies NavLink[],

  hero: {
    title: "Empowering Your Numbers. Elevating Your Business.",
    subHeadline:
      "Simplifying your finances with accurate accounting & advisory solutions.",
    ctas: [
      { label: "Explore Services", href: "#services" },
      { label: "Contact Us", href: "#contact", variant: "secondary" as const },
    ],
  },

  stats: [
    { value: "40%", label: "Cost Saving" },
    { value: "100%", label: "Compliance Focus" },
  ] satisfies SiteStat[],

  services: [
    {
      title: "Accounting",
      description:
        "Detailed financial statements, cash flow analysis, and tailored reporting to support strategic planning.",
      icon: "chart",
    },
    {
      title: "Bookkeeping",
      description:
        "Accurate transaction recording, reconciliations, and real-time books for confident decision-making.",
      icon: "book",
    },
    {
      title: "IFRS Advisory",
      description:
        "Guidance on international financial reporting standards with a smooth adoption and implementation process.",
      icon: "globe",
    },
    {
      title: "Internal Audit",
      description:
        "Strengthen internal controls through operational reviews, risk mitigation, and compliance-driven audit support.",
      icon: "shield",
    },
    {
      title: "Financial Health Check",
      description:
        "In-depth analysis of financial performance with actionable recommendations to improve stability and growth.",
      icon: "activity",
    },
  ] satisfies ServiceItem[],

  process: [
    {
      title: "Consultation",
      description: "Understand your business goals, pain points, and reporting needs.",
    },
    {
      title: "Analysis",
      description: "Identify gaps, risks, and opportunities across your financial operations.",
    },
    {
      title: "Implementation",
      description:
        "Apply tailored systems, controls, and workflows to streamline and strengthen your finances.",
    },
    {
      title: "Support",
      description:
        "Ongoing guidance, monitoring, and periodic reviews to keep you compliant and growing.",
    },
  ] satisfies ProcessStep[],

  testimonials: [
    {
      name: "John",
      location: "New York",
      quote:
        "Elevare Solutions Hub transformed our financial operations, making them a strategic asset.",
    },
    {
      name: "Smith",
      location: "Los Angeles",
      quote:
        "The team provided exceptional service, helping us streamline accounting and saving costs while focusing on core business.",
    },
  ] satisfies Testimonial[],

  contact: {
    email: "info@elevarehub.com",
    phones: ["+92-339-4044949", "+92-307-0120847"],
  },
} as const;
