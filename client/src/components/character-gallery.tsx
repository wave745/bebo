import { useState } from "react";
import { motion } from "framer-motion";
import BeboCharacter from "./bebo-character";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface CharacterData {
  id: string;
  variant: "happy" | "tech" | "focused" | "wealthy";
  title: string;
  description: string;
}

const characters: CharacterData[] = [
  {
    id: "happy",
    variant: "happy",
    title: "Happy BEBO",
    description: "When the portfolio is green! ✨"
  },
  {
    id: "tech",
    variant: "tech", 
    title: "Tech BEBO",
    description: "Building the future of DeFi 👨‍💻"
  },
  {
    id: "focused",
    variant: "focused",
    title: "Focused BEBO", 
    description: "Watching the charts closely 📊"
  },
  {
    id: "wealthy",
    variant: "wealthy",
    title: "Wealthy BEBO",
    description: "Diamond hands pay off! 💎"
  }
];

export default function CharacterGallery() {
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterData | null>(null);

  return (
    <>
      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Meet BEBO</h2>
            <p className="text-xl text-muted-foreground">Experience all sides of our beloved character</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {characters.map((character, index) => (
              <motion.div
                key={character.id}
                className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all hover:scale-105 cursor-pointer group"
                onClick={() => setSelectedCharacter(character)}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                data-testid={`card-character-${character.id}`}
              >
                <div className="text-center">
                  <div className="mb-4 group-hover:scale-110 transition-transform">
                    <BeboCharacter 
                      variant={character.variant} 
                      size="medium"
                      showSparkles={character.variant === "happy"}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{character.title}</h3>
                  <p className="text-muted-foreground">{character.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Character Modal */}
      <Dialog open={!!selectedCharacter} onOpenChange={() => setSelectedCharacter(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-bold gradient-text">
              {selectedCharacter?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center space-y-6 py-6">
            {selectedCharacter && (
              <BeboCharacter 
                variant={selectedCharacter.variant}
                size="large"
                showSparkles={selectedCharacter.variant === "happy"}
              />
            )}
            <p className="text-center text-lg text-muted-foreground">
              {selectedCharacter?.description}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
