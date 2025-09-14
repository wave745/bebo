import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const communityStats = [
  { platform: "Telegram", count: "25.2K", color: "text-blue-500" },
  { platform: "Twitter", count: "18.5K", color: "text-accent" },
  { platform: "Discord", count: "12.1K", color: "text-blue-500" },
  { platform: "Reddit", count: "8.3K", color: "text-purple-500" }
];

const socialLinks = [
  { platform: "Telegram", icon: "📱", color: "bg-blue-600 hover:bg-blue-700", url: "#" },
  { platform: "Twitter", icon: "🐦", color: "bg-sky-500 hover:bg-sky-600", url: "#" },
  { platform: "Discord", icon: "💬", color: "bg-indigo-600 hover:bg-indigo-700", url: "#" },
  { platform: "Reddit", icon: "📰", color: "bg-orange-600 hover:bg-orange-700", url: "#" }
];

export default function CommunitySection() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive"
      });
      return;
    }
    
    // Newsletter subscription logic would go here
    toast({
      title: "Success!",
      description: "Thank you for subscribing to BEBO updates!",
    });
    setEmail("");
  };

  return (
    <section id="community" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Join the BEBO Family</h2>
            <p className="text-xl text-muted-foreground mb-12">Connect with thousands of BEBO enthusiasts worldwide</p>
          </motion.div>

          {/* Community Stats */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {communityStats.map((stat, index) => (
              <motion.div
                key={stat.platform}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`text-3xl font-bold ${stat.color}`} data-testid={`stat-${stat.platform.toLowerCase()}`}>
                  {stat.count}
                </div>
                <div className="text-muted-foreground">{stat.platform}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.platform}
                href={social.url}
                className={`${social.color} text-white px-6 py-3 rounded-xl transition-all hover:scale-105 flex items-center space-x-2`}
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`link-${social.platform.toLowerCase()}`}
              >
                <span>{social.icon}</span>
                <span>{social.platform}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div 
            className="bg-card border border-border rounded-xl p-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-primary mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">Get the latest BEBO news and updates directly to your inbox</p>
            <form onSubmit={handleNewsletterSubscribe} className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                data-testid="input-newsletter-email"
              />
              <Button 
                type="submit"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                data-testid="button-subscribe-newsletter"
              >
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
