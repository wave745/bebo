import HeroSection from "@/components/hero-section";
import CharacterGallery from "@/components/character-gallery";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <HeroSection />
      
      {/* About Section */}
      <section id="about" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">About BEBO</h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              BEBO started as a cute character bringing joy to the crypto community. 
              From humble beginnings to becoming a tech-savvy, wealth-building sensation, 
              BEBO represents the fun side of DeFi while delivering real value to holders.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all hover:scale-105">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-xl font-bold mb-4 text-primary">Community First</h3>
                <p className="text-muted-foreground">Built by the community, for the community. Every decision is made with our holders in mind.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all hover:scale-105">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-4 text-primary">Solana Speed</h3>
                <p className="text-muted-foreground">Lightning-fast transactions with minimal fees, powered by the Solana blockchain.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all hover:scale-105">
                <div className="text-4xl mb-4">💎</div>
                <h3 className="text-xl font-bold mb-4 text-primary">Diamond Hands</h3>
                <p className="text-muted-foreground">Strong tokenomics designed to reward long-term holders and build sustainable value.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CharacterGallery />
      <Footer />
    </div>
  );
}
