import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Coins, TrendingUp } from "lucide-react";
import BeboCharacter from "./bebo-character";
import beboLogo from "@assets/ChatGPT_Image_Sep_14__2025__01_35_07_PM-removebg-preview_1757855683291.png";
import happyBebo from "@assets/image_1757854717588.png";
import techBebo from "@assets/image_1757854723009.png";
import focusedBebo from "@assets/image_1757854731039.png";
import wealthyBebo from "@assets/image_1757854758052.png";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden crypto-grid">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
      
      {/* Floating BEBO characters */}
      <motion.div 
        className="absolute top-20 left-10 opacity-60"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <img src={happyBebo} alt="Happy BEBO" className="w-16 h-16 filter drop-shadow-lg" />
      </motion.div>
      <motion.div 
        className="absolute top-40 right-20 opacity-60"
        animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <img src={techBebo} alt="Tech BEBO" className="w-12 h-12 filter drop-shadow-lg" />
      </motion.div>
      <motion.div 
        className="absolute bottom-40 left-20 opacity-60"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <img src={wealthyBebo} alt="Wealthy BEBO" className="w-14 h-14 filter drop-shadow-lg" />
      </motion.div>
      <motion.div 
        className="absolute bottom-20 right-10 opacity-50"
        animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <img src={focusedBebo} alt="Focused BEBO" className="w-10 h-10 filter drop-shadow-lg" />
      </motion.div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main BEBO Logo */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <img 
              src={beboLogo} 
              alt="BEBO Character" 
              className="w-80 md:w-96 h-auto mx-auto filter drop-shadow-2xl"
              data-testid="img-bebo-logo"
            />
          </motion.div>
          
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
