import { useState } from "react";
import { motion } from "framer-motion";
import BeboCharacter from "./bebo-character";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface CharacterData {
  id: string;
  variant: "happy" | "tech" | "focused" | "wealthy" | "astronaut" | "family" | "beach" | "fitness";
  title: string;
  description: string;
  bgGradient: string;
  borderColor: string;
}

const characters: CharacterData[] = [
  {
    id: "happy",
    variant: "happy",
    title: "Happy BEBO",
    description: "When the portfolio is green! ✨",
    bgGradient: "linear-gradient(135deg, rgba(34, 197, 94, 0.4), rgba(34, 197, 94, 0.2), rgba(234, 179, 8, 0.4))",
    borderColor: "rgba(34, 197, 94, 0.6)"
  },
  {
    id: "tech",
    variant: "tech", 
    title: "Tech BEBO",
    description: "Building the future of DeFi 👨‍💻",
    bgGradient: "linear-gradient(135deg, rgba(59, 130, 246, 0.4), rgba(6, 182, 212, 0.2), rgba(99, 102, 241, 0.4))",
    borderColor: "rgba(59, 130, 246, 0.6)"
  },
  {
    id: "focused",
    variant: "focused",
    title: "Focused BEBO", 
    description: "Watching the charts closely 📊",
    bgGradient: "linear-gradient(135deg, rgba(147, 51, 234, 0.4), rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.4))",
    borderColor: "rgba(147, 51, 234, 0.6)"
  },
  {
    id: "wealthy",
    variant: "wealthy",
    title: "Wealthy BEBO",
    description: "Diamond hands pay off! 💎",
    bgGradient: "linear-gradient(135deg, rgba(234, 179, 8, 0.4), rgba(245, 158, 11, 0.2), rgba(251, 146, 60, 0.4))",
    borderColor: "rgba(234, 179, 8, 0.6)"
  },
  {
    id: "astronaut",
    variant: "astronaut",
    title: "BEBO mooning 🚀",
    description: "Flying to the moon! 🌙",
    bgGradient: "linear-gradient(135deg, rgba(59, 130, 246, 0.4), rgba(37, 99, 235, 0.2), rgba(29, 78, 216, 0.4))",
    borderColor: "rgba(59, 130, 246, 0.6)"
  },
  {
    id: "family",
    variant: "family",
    title: "Family BEBO",
    description: "Family first, always! 👨‍👩‍👧‍👦",
    bgGradient: "linear-gradient(135deg, rgba(34, 197, 94, 0.4), rgba(16, 185, 129, 0.2), rgba(5, 150, 105, 0.4))",
    borderColor: "rgba(34, 197, 94, 0.6)"
  },
  {
    id: "beach",
    variant: "beach",
    title: "Beach BEBO",
    description: "Catching waves and good vibes! 🏖️",
    bgGradient: "linear-gradient(135deg, rgba(6, 182, 212, 0.4), rgba(14, 165, 233, 0.2), rgba(59, 130, 246, 0.4))",
    borderColor: "rgba(6, 182, 212, 0.6)"
  },
  {
    id: "fitness",
    variant: "fitness",
    title: "Fitness BEBO",
    description: "Pumping iron and gains! 💪",
    bgGradient: "linear-gradient(135deg, rgba(239, 68, 68, 0.4), rgba(220, 38, 38, 0.2), rgba(185, 28, 28, 0.4))",
    borderColor: "rgba(239, 68, 68, 0.6)"
  }
];

export default function CharacterGallery() {
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterData | null>(null);

  return (
    <>
      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 gradient-text">Meet BEBO</h2>
            <p className="text-lg sm:text-xl text-muted-foreground">Experience all sides of our beloved character</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto px-4 sm:px-0">
            {characters.map((character, index) => (
              <motion.div
                key={character.id}
                className="rounded-xl p-4 sm:p-6 md:p-8 transition-all hover:scale-105 cursor-pointer group relative overflow-hidden"
                onClick={() => setSelectedCharacter(character)}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: '0 0 30px rgba(143, 188, 143, 0.4), 0 0 60px rgba(143, 188, 143, 0.2), 0 0 90px rgba(143, 188, 143, 0.1)'
                }}
                data-testid={`card-character-${character.id}`}
                style={{
                  background: character.bgGradient,
                  border: `2px solid ${character.borderColor}`,
                  boxShadow: '0 0 20px rgba(143, 188, 143, 0.2), 0 0 40px rgba(143, 188, 143, 0.1)',
                  backgroundColor: 'transparent'
                }}
              >
                {/* Animated glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                background: character.variant === 'happy' 
                  ? 'linear-gradient(45deg, rgba(34, 197, 94, 0.1), rgba(59, 130, 246, 0.05), rgba(34, 197, 94, 0.1))'
                  : character.variant === 'tech'
                  ? 'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.05), rgba(99, 102, 241, 0.1))'
                  : character.variant === 'focused'
                  ? 'linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(139, 92, 246, 0.05), rgba(236, 72, 153, 0.1))'
                  : character.variant === 'wealthy'
                  ? 'linear-gradient(45deg, rgba(234, 179, 8, 0.1), rgba(245, 158, 11, 0.05), rgba(251, 146, 60, 0.1))'
                  : character.variant === 'astronaut'
                  ? 'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(37, 99, 235, 0.05), rgba(29, 78, 216, 0.1))'
                  : character.variant === 'family'
                  ? 'linear-gradient(45deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.05), rgba(5, 150, 105, 0.1))'
                  : character.variant === 'beach'
                  ? 'linear-gradient(45deg, rgba(6, 182, 212, 0.1), rgba(14, 165, 233, 0.05), rgba(59, 130, 246, 0.1))'
                  : 'linear-gradient(45deg, rgba(239, 68, 68, 0.1), rgba(220, 38, 38, 0.05), rgba(185, 28, 28, 0.1))',
                    backgroundSize: '200% 200%'
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />
                <div className="text-center relative z-10">
                  <div className="mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                    <BeboCharacter 
                      variant={character.variant} 
                      size="medium"
                      showSparkles={character.variant === "happy"}
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-primary mb-1 sm:mb-2">{character.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{character.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Character Modal */}
      {selectedCharacter && (
        <Dialog open={!!selectedCharacter} onOpenChange={() => setSelectedCharacter(null)}>
          <DialogContent 
            className="max-w-lg w-[95vw] sm:w-[90vw] md:w-[80vw] max-h-[90vh] overflow-y-auto mx-4 sm:mx-0"
            style={{
              background: selectedCharacter.bgGradient,
              border: `2px solid ${selectedCharacter.borderColor}`,
            }}
          >
            {console.log('Selected Character:', selectedCharacter)}
            
            {/* Animated background glow */}
            <motion.div
              className="absolute inset-0 opacity-30 rounded-lg"
              style={{
                background: selectedCharacter.variant === 'happy' 
                  ? 'linear-gradient(45deg, rgba(34, 197, 94, 0.1), rgba(59, 130, 246, 0.05), rgba(34, 197, 94, 0.1))'
                  : selectedCharacter.variant === 'tech'
                  ? 'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.05), rgba(99, 102, 241, 0.1))'
                  : selectedCharacter.variant === 'focused'
                  ? 'linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(139, 92, 246, 0.05), rgba(236, 72, 153, 0.1))'
                  : selectedCharacter.variant === 'wealthy'
                  ? 'linear-gradient(45deg, rgba(234, 179, 8, 0.1), rgba(245, 158, 11, 0.05), rgba(251, 146, 60, 0.1))'
                  : selectedCharacter.variant === 'astronaut'
                  ? 'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(37, 99, 235, 0.05), rgba(29, 78, 216, 0.1))'
                  : selectedCharacter.variant === 'family'
                  ? 'linear-gradient(45deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.05), rgba(5, 150, 105, 0.1))'
                  : selectedCharacter.variant === 'beach'
                  ? 'linear-gradient(45deg, rgba(6, 182, 212, 0.1), rgba(14, 165, 233, 0.05), rgba(59, 130, 246, 0.1))'
                  : 'linear-gradient(45deg, rgba(239, 68, 68, 0.1), rgba(220, 38, 38, 0.05), rgba(185, 28, 28, 0.1))',
                backgroundSize: '200% 200%'
              }}
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
            
            {/* Content */}
            <div className="relative z-10 p-4 sm:p-6">
              <DialogHeader className="text-center mb-4 sm:mb-6">
                <DialogTitle className="text-xl sm:text-2xl font-bold gradient-text">
                  {selectedCharacter.title}
                </DialogTitle>
              </DialogHeader>
              
              <div className="flex flex-col items-center space-y-4 sm:space-y-6">
                <div className="flex justify-center">
                  <BeboCharacter 
                    variant={selectedCharacter.variant}
                    size="large"
                    showSparkles={selectedCharacter.variant === "happy"}
                  />
                </div>
                
                <p className="text-center text-base sm:text-lg text-muted-foreground px-2">
                  {selectedCharacter.description}
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
