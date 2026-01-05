import { Sparkles } from "lucide-react";

interface AuxoraLogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

const AuxoraLogo = ({ size = "md", showText = true }: AuxoraLogoProps) => {
  const iconSizes = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-3xl",
  };

  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <div className="gradient-primary p-2 rounded-lg glow-primary-sm">
          <Sparkles className={`${iconSizes[size]} text-primary-foreground`} />
        </div>
      </div>
      {showText && (
        <span className={`font-bold text-gradient ${textSizes[size]}`}>
          AuxoraAI
        </span>
      )}
    </div>
  );
};

export default AuxoraLogo;
