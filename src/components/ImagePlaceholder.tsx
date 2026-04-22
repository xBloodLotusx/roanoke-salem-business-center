import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  label: string;
  className?: string;
  aspectRatio?: string;
}

export const ImagePlaceholder = ({ label, className, aspectRatio = "aspect-[4/3]" }: ImagePlaceholderProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3 rounded-lg border border-border/60 bg-muted/60 text-muted-foreground",
        aspectRatio,
        className,
      )}
    >
      <ImageIcon className="h-8 w-8 opacity-40" strokeWidth={1.5} />
      <span className="px-4 text-center text-xs font-medium uppercase tracking-wider opacity-70">{label}</span>
    </div>
  );
};
