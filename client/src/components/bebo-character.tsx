import { motion } from "framer-motion";
import { Star, Laptop, Smartphone, DollarSign, Code } from "lucide-react";
import happyBebo from "@assets/image_1757854717588.png";
import techBebo from "@assets/image_1757854723009.png";
import focusedBebo from "@assets/image_1757854731039.png";
import wealthyBebo from "@assets/image_1757854758052.png";

interface BeboCharacterProps {
  variant: "happy" | "tech" | "focused" | "wealthy";
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
    small: "w-16 h-16",
    medium: "w-32 h-32",
    large: "w-64 h-64"
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
