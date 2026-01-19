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
  image: string;
};
// ... (ServiceItem type above)

export type ProcessStep = {
  title: string;
  description: string;
};

export type Testimonial = {
  name: string;
  location: string;
  quote: string;
};

export type TechStackItem = {
  name: string;
  logo: string;
};

export const siteConfig = {
  // ... (general, navLinks, hero, stats remain same)
  general: {
    name: "Elevare Solutions Hub",
    tagline: "Empowering Your Numbers. Elevating Your Business",
    mission:
      "To simplify financial complexities through modern accounting, bookkeeping, and advisory services — ensuring compliance, driving growth, and allowing clients to concentrate on their core business operations.",
  },

  navLinks: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Contact", href: "/contact" },
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
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Bookkeeping",
      description:
        "Accurate transaction recording, reconciliations, and real-time books for confident decision-making.",
      icon: "book",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "IFRS Advisory",
      description:
        "Guidance on international financial reporting standards with a smooth adoption and implementation process.",
      icon: "globe",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Internal Audit",
      description:
        "Strengthen internal controls through operational reviews, risk mitigation, and compliance-driven audit support.",
      icon: "shield",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Financial Health Check",
      description:
        "In-depth analysis of financial performance with actionable recommendations to improve stability and growth.",
      icon: "activity",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
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

  techStack: [
    { name: "Xero", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Xero_software_logo.svg/1200px-Xero_software_logo.svg.png" },
    { name: "QuickBooks", logo: "/tech_logos/quickbooks.png" },
    { name: "A2X", logo: "/tech_logos/a2x.png" },
    { name: "Bill.com", logo: "/tech_logos/bill.webp" },
    { name: "Expensify", logo: "/tech_logos/expensify.png" },
  ] satisfies TechStackItem[],
} as const;
