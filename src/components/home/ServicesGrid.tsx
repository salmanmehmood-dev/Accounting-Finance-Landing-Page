import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { siteConfig } from "@/data/site-content";

export function ServicesGrid() {
  return (
    <section id="services" className="py-24 bg-background">
       <div className="max-w-7xl mx-auto px-4 md:px-6 mb-12 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 font-heading">
                Comprehensive Finance Solutions
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
                Tailored accounting and advisory services designed to scale with your business.
            </p>
       </div>
      <BentoGrid className="max-w-4xl mx-auto">
        {siteConfig.services.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
                    <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                </div>
            }
            icon={getIcon(item.icon)}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </section>
  );
}

const getIcon = (iconName: string) => {
    switch (iconName) {
        case "chart": return <IconClipboardCopy className="h-4 w-4 text-neutral-500" />;
        case "book": return <IconFileBroken className="h-4 w-4 text-neutral-500" />;
        case "globe": return <IconSignature className="h-4 w-4 text-neutral-500" />;
        case "shield": return <IconTableColumn className="h-4 w-4 text-neutral-500" />;
        case "activity": return <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />;
        default: return <IconClipboardCopy className="h-4 w-4 text-neutral-500" />;
    }
}
