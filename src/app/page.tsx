import { CallToAction } from "@/components/home/CallToAction";
import { FAQ } from "@/components/home/FAQ";
import { Hero } from "@/components/home/Hero";
import { Process } from "@/components/home/Process";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { TechStack } from "@/components/home/TechStack";
import { Testimonials } from "@/components/home/Testimonials";
import { TestimonialsWithStats } from "@/components/home/TestimonialsWithStats";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <main className="flex flex-col gap-0">
        <Hero />
        <ServicesGrid />
        <Process />
        <TechStack />
        <WhyChooseUs />
        <TestimonialsWithStats />
        <FAQ />
        <CallToAction />
      </main>
    </div>
  );
}
