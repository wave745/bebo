import HeroSection from "@/components/hero-section";
import CharacterGallery from "@/components/character-gallery";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <HeroSection />
      

      <CharacterGallery />
    </div>
  );
}
