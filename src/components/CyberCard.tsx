import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
  className?: string;
}

const CyberCard = ({ icon: Icon, title, children, className = "" }: Props) => (
  <div className={`group relative rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm p-6 transition-all duration-500 hover:border-primary/50 hover:box-glow ${className}`}>
    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="relative">
      <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-primary/10 p-3 text-primary group-hover:text-glow transition-all">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 font-display text-lg font-semibold text-foreground">{title}</h3>
      <div className="text-muted-foreground text-sm leading-relaxed">{children}</div>
    </div>
  </div>
);

export default CyberCard;
