import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Copy, Coins } from "lucide-react";
import { useState } from "react";
import BeboCharacter from "./bebo-character";
import beboLogo from "@assets/ChatGPT_Image_Sep_14__2025__01_35_07_PM-removebg-preview_1757855683291.png";
import happyBebo from "@assets/image_1757854717588.png";
import techBebo from "@assets/image_1757854723009.png";
import focusedBebo from "@assets/image_1757854731039.png";
import wealthyBebo from "@assets/image_1757854758052.png";
import joinButton from "@assets/image-removebg-preview (5)_1757908898368.png";
import buyButton from "@assets/image-removebg-preview (6)_1757909739462.png";

export default function HeroSection() {
  const [copied, setCopied] = useState(false);
  const contractAddress = "9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <section className="flex justify-center pt-6 pb-0 relative overflow-hidden crypto-grid">
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

      <div className="container mx-auto px-3 sm:px-6 lg:px-8 text-center relative z-20 flex flex-col justify-start">
        <div className="max-w-4xl mx-auto -mt-2 sm:-mt-8">
          {/* Main BEBO Logo */}
          <motion.div 
            className="mb-1 relative z-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img 
              src={beboLogo} 
              alt="BEBO Character" 
              className="w-48 sm:w-64 md:w-80 lg:w-96 h-auto mx-auto filter drop-shadow-2xl relative z-20"
              data-testid="img-bebo-logo"
            />
          </motion.div>

          {/* Contract Address Card */}
          <motion.div 
            className="mb-1 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-2 sm:p-4 max-w-xs sm:max-w-md mx-auto">
              <div className="flex items-center justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm text-muted-foreground mb-1">Contract Address</p>
                  <p className="font-mono text-xs sm:text-sm text-white truncate" data-testid="contract-address">
                    {contractAddress}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={copyToClipboard}
                  className="ml-2 text-white hover:bg-white/20 transition-colors flex-shrink-0"
                  data-testid="copy-contract-button"
                >
                  <Copy className="w-3 h-3 sm:w-4 sm:h-4" />
                  {copied && (
                    <span className="ml-1 text-xs hidden sm:inline">Copied!</span>
                  )}
                </Button>
              </div>
            </div>
          </motion.div>
          
          <motion.p 
            className="text-base sm:text-xl md:text-2xl text-muted-foreground mb-3 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The Cutest Memecoin on Solana 🚀
          </motion.p>
          
          <motion.p 
            className="text-sm sm:text-lg md:text-xl text-muted-foreground mb-2 sm:mb-2 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Join the BEBO revolution! From cute moments to crypto success, 
            BEBO is here to bring joy and gains to the Solana ecosystem.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-0 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.img 
              src={buyButton}
              alt="Buy BEBO"
              className="w-64 sm:w-72 h-auto cursor-pointer hover:scale-105 transition-transform"
              data-testid="button-buy-hero"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
