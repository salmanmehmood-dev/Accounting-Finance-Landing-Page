import { ServiceCard } from "@/components/ui/ServiceCard";
import { siteConfig } from "@/data/site-content";

export function ServicesGrid() {
  return (
    <section id="services" className="py-24 bg-background">
       <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 font-heading theme-text-shadow">
                Comprehensive <span className="theme-gradient-text">Finance Solutions</span>
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
                Tailored accounting and advisory services designed to scale with your business.
            </p>
       </div>
       
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[25rem]">
            {siteConfig.services.map((item, i) => (
            <ServiceCard
                key={i}
                title={item.title}
                description={item.description}
                image={item.image}
                icon={item.icon}
                index={i}
                className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
            ))}
        </div>
      </div>
    </section>
  );
}

