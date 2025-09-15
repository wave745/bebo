import { motion } from "framer-motion";
import { Star, Laptop, Smartphone, DollarSign, Code } from "lucide-react";
import happyBebo from "@assets/2_1757912317318.png";
import techBebo from "@assets/3_1757912690099.png";
import focusedBebo from "@assets/1_1757912317315.png";
import wealthyBebo from "@assets/10_1757912690103.png";
import bepo5 from "@assets/9_1757912690102.png";
import bepo6 from "@assets/6_1757912690100.png";
import bepo7 from "@assets/7_1757912690102.png";
import bepo8 from "@assets/8_1757912690102.png";

interface BeboCharacterProps {
  variant: "happy" | "tech" | "focused" | "wealthy" | "astronaut" | "family" | "beach" | "fitness";
  size?: "small" | "medium" | "large";
  showSparkles?: boolean;
  className?: string;
}

export default function BeboCharacter({ 
  variant, 
  size = "medium", 
  showSparkles = false, 
  className = "" 
}: BeboCharacterProps) {
  const sizeClasses = {
    small: "w-12 h-12 sm:w-16 sm:h-16",
    medium: "w-28 h-28 sm:w-36 sm:h-36",
    large: "w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64"
  };

  const getCharacterImage = () => {
    switch (variant) {
      case "happy":
        return happyBebo;
      case "tech":
        return techBebo;
      case "focused":
        return focusedBebo;
      case "wealthy":
        return wealthyBebo;
      case "astronaut":
        return bepo5;
      case "family":
        return bepo6;
      case "beach":
        return bepo8;
      case "fitness":
        return bepo7;
      default:
        return happyBebo;
    }
  };

  const sparkles = showSparkles && variant === "happy";

  return (
    <div className={`relative inline-block ${className}`}>
      <motion.div 
        className={`${sizeClasses[size]} mx-auto rounded-full flex items-center justify-center relative`}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Base BEBO Character - Actual Image */}
        <img 
          src={getCharacterImage()} 
          alt={`BEBO ${variant} character`}
          className="w-full h-full object-contain filter drop-shadow-lg"
          data-testid={`img-bebo-${variant}`}
        />


        {/* Sparkles for happy variant */}
        {sparkles && (
          <>
            <motion.div 
              className="absolute -top-4 -left-4 text-accent"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Star size={24} />
            </motion.div>
            <motion.div 
              className="absolute -top-2 -right-6 text-accent"
              animate={{ scale: [1, 1.2, 1], rotate: [0, -180, -360] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              <Star size={20} />
            </motion.div>
            <motion.div 
              className="absolute -bottom-4 -right-2 text-accent"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              <Star size={18} />
            </motion.div>
          </>
        )}
      </motion.div>
    </div>
  );
}
