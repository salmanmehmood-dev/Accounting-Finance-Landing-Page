import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[20rem] grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-2xl group/bento hover:shadow-2xl hover:shadow-primary/10 transition duration-300 p-6 bg-card border border-border/50 justify-between flex flex-col space-y-4 hover:border-primary/30 relative overflow-hidden",
        className
      )}
    >
       <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover/bento:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="group-hover/bento:scale-[1.02] transition-transform duration-300 ease-out h-full flex flex-col">
          {header}
          <div className="mt-4 flex-1">
            <div className="mb-2 w-fit p-2 rounded-lg bg-primary/10 text-primary group-hover/bento:bg-primary group-hover/bento:text-primary-foreground transition-colors duration-300">
                 {icon}
            </div>
            <div className="font-heading font-bold text-lg text-foreground mb-2 group-hover/bento:text-primary transition-colors">
              {title}
            </div>
            <div className="font-sans font-normal text-muted-foreground text-sm leading-relaxed">
              {description}
            </div>
          </div>
      </div>
    </div>
  );
};
