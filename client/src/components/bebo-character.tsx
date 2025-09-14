import { motion } from "framer-motion";
import { Star, Laptop, Smartphone, DollarSign, Code } from "lucide-react";

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

  const sparkles = showSparkles && variant === "happy";

  return (
    <div className={`relative inline-block ${className}`}>
      <motion.div 
        className={`${sizeClasses[size]} mx-auto bg-primary/20 rounded-full flex items-center justify-center bebo-glow relative`}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Base BEBO Character - Green Bear */}
        <div className="text-6xl relative">
          🐻
          <div className="absolute inset-0 text-6xl" style={{ color: '#90C695' }}>🐻</div>
        </div>

        {/* Variant-specific overlays */}
        {variant === "tech" && (
          <>
            <div className="absolute top-2 text-2xl">👓</div>
            <div className="absolute bottom-2 text-lg">
              <Laptop size={20} className="text-primary" />
            </div>
          </>
        )}

        {variant === "focused" && (
          <>
            <div className="absolute text-2xl">
              <Smartphone size={24} className="text-muted-foreground" />
            </div>
            <div className="absolute top-4 right-4 text-orange-500">
              <Code size={16} />
            </div>
          </>
        )}

        {variant === "wealthy" && (
          <>
            <div className="absolute text-accent text-xl">🔗</div>
            <motion.div 
              className="absolute -top-2 -left-2 text-accent"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <DollarSign size={20} />
            </motion.div>
            <motion.div 
              className="absolute -top-2 -right-2 text-accent"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
            >
              <DollarSign size={20} />
            </motion.div>
            <motion.div 
              className="absolute bottom-0 text-accent"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 1, repeat: Infinity, delay: 1 }}
            >
              <DollarSign size={20} />
            </motion.div>
          </>
        )}

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
