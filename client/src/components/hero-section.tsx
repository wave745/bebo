import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Coins, TrendingUp, Rocket } from "lucide-react";
import BeboCharacter from "./bebo-character";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden crypto-grid">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
      
      {/* Floating background elements */}
      <motion.div 
        className="absolute top-20 left-10 text-accent opacity-50"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Coins size={48} />
      </motion.div>
      <motion.div 
        className="absolute top-40 right-20 text-primary opacity-50"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Rocket size={36} />
      </motion.div>
      <motion.div 
        className="absolute bottom-40 left-20 text-accent opacity-50"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <TrendingUp size={36} />
      </motion.div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main BEBO Character */}
          <motion.div 
            className="mb-8"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <BeboCharacter variant="happy" size="large" showSparkles />
          </motion.div>

          <motion.h1 
            className="text-6xl md:text-8xl font-black mb-6 gradient-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            BEBO
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The Cutest Memecoin on Solana 🚀
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Join the BEBO revolution! From cute moments to crypto success, 
            BEBO is here to bring joy and gains to the Solana ecosystem.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button 
              className="bg-primary text-primary-foreground px-8 py-4 text-lg font-bold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
              data-testid="button-buy-hero"
            >
              <Coins className="mr-2" size={20} />
              Buy BEBO Now
            </Button>
            <Button 
              variant="outline"
              className="bg-card border border-border text-foreground px-8 py-4 text-lg font-semibold hover:bg-card/80 transition-all hover:scale-105"
              data-testid="button-chart-hero"
            >
              <TrendingUp className="mr-2" size={20} />
              View Chart
            </Button>
          </motion.div>

          {/* Token Stats */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
              <div className="text-2xl font-bold text-primary" data-testid="text-current-price">$0.0001234</div>
              <div className="text-muted-foreground">Current Price</div>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
              <div className="text-2xl font-bold text-accent" data-testid="text-market-cap">$2.5M</div>
              <div className="text-muted-foreground">Market Cap</div>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
              <div className="text-2xl font-bold text-primary" data-testid="text-holders">12,847</div>
              <div className="text-muted-foreground">Holders</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
