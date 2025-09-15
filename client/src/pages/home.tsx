import HeroSection from "@/components/hero-section";
import CharacterGallery from "@/components/character-gallery";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Fixed Join Button at top right */}
      <motion.img 
        src="/assets/image-removebg-preview (5)_1757908898368.png"
        alt="Join Community"
        className="fixed top-4 right-4 w-20 sm:w-24 h-auto cursor-pointer hover:scale-110 transition-transform z-50"
        onClick={() => window.open('https://x.com/i/communities/1967425385273991584', '_blank')}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        data-testid="button-join-fixed"
      />
      
      <HeroSection />
      

      <CharacterGallery />
    </div>
  );
}
