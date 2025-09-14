import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const distributionData = [
  { label: "Liquidity Pool", percentage: 70, color: "bg-primary" },
  { label: "Community Treasury", percentage: 15, color: "bg-accent" },
  { label: "Development", percentage: 10, color: "bg-blue-500" },
  { label: "Marketing", percentage: 5, color: "bg-purple-500" }
];

export default function TokenomicsSection() {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  
  const contractAddress = "7BxK8m2QN9Y8g7vZgD4pN2wE5cR8sQ1mF6tA3nU9jH4L";

  const copyContractAddress = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      toast({
        title: "Copied!",
        description: "Contract address copied to clipboard",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to copy contract address",
        variant: "destructive"
      });
    }
  };

  return (
    <section id="tokenomics" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Tokenomics</h2>
            <p className="text-xl text-muted-foreground">Fair and transparent distribution built for the community</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Token Info */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Token Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Supply:</span>
                    <span className="font-mono font-semibold" data-testid="text-total-supply">1,000,000,000 BEBO</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Circulating Supply:</span>
                    <span className="font-mono font-semibold" data-testid="text-circulating-supply">850,000,000 BEBO</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Network:</span>
                    <span className="font-semibold text-primary">Solana</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax:</span>
                    <span className="font-semibold text-green-400">0% Buy/Sell</span>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Contract Address</h3>
                <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm break-all" data-testid="text-contract-address">
                  {contractAddress}
                </div>
                <Button
                  onClick={copyContractAddress}
                  variant="ghost"
                  className="mt-3 text-primary hover:text-primary/80 transition-colors p-0"
                  data-testid="button-copy-contract"
                >
                  {copied ? <Check className="mr-2" size={16} /> : <Copy className="mr-2" size={16} />}
                  {copied ? "Copied!" : "Copy Address"}
                </Button>
              </div>
            </motion.div>

            {/* Distribution Chart */}
            <motion.div 
              className="bg-card border border-border rounded-xl p-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-primary mb-6 text-center">Token Distribution</h3>
              <div className="space-y-4">
                {distributionData.map((item, index) => (
                  <motion.div 
                    key={item.label}
                    className="flex items-center justify-between"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 ${item.color} rounded`}></div>
                      <span>{item.label}</span>
                    </div>
                    <span className="font-semibold">{item.percentage}%</span>
                  </motion.div>
                ))}
              </div>

              {/* Visual distribution bar */}
              <div className="mt-6">
                <div className="w-full h-4 bg-muted rounded-full overflow-hidden flex">
                  {distributionData.map((item, index) => (
                    <motion.div
                      key={item.label}
                      className={`h-full ${item.color}`}
                      style={{ width: `${item.percentage}%` }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
