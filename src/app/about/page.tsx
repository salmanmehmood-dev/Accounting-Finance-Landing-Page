import { siteConfig } from "@/data/site-content";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground font-heading mb-6">
          About Elevare
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {siteConfig.general.mission}
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-lg text-muted-foreground/90">
           <p>
             Founded with a vision to transform how businesses manage their finances, Elevare Solutions Hub provides top-tier accounting and advisory services.
           </p>
           <p>
             We believe in accuracy, transparency, and strategic growth. Our team of experts is dedicated to helping you navigate the complexities of finance so you can focus on what you do best.
           </p>
        </div>
        <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl border border-border/50">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop"
              alt="Elevare Team"
              fill
              className="object-cover"
            />
        </div>
      </div>
    </main>
  );
}
