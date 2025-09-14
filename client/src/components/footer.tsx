import { motion } from "framer-motion";

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Tokenomics", href: "#tokenomics" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "Community", href: "#community" }
];

const resources = [
  { name: "Whitepaper", href: "#" },
  { name: "Audit Report", href: "#" },
  { name: "Documentation", href: "#" },
  { name: "Support", href: "#" }
];

const socialIcons = [
  { name: "Twitter", icon: "🐦", href: "#" },
  { name: "Telegram", icon: "📱", href: "#" },
  { name: "Discord", icon: "💬", href: "#" },
  { name: "GitHub", icon: "💻", href: "#" }
];

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <motion.div 
              className="col-span-1 md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center font-bold text-primary-foreground">
                  B
                </div>
                <span className="text-xl font-bold gradient-text">BEBO</span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                The cutest memecoin on Solana, bringing joy and value to the crypto community through innovative DeFi solutions.
              </p>
              <div className="flex space-x-4">
                {socialIcons.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-xl"
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    data-testid={`footer-social-${social.name.toLowerCase()}`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors text-left"
                      data-testid={`footer-link-${link.name.toLowerCase()}`}
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-2">
                {resources.map((resource) => (
                  <li key={resource.name}>
                    <a
                      href={resource.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid={`footer-resource-${resource.name.toLowerCase().replace(' ', '-')}`}
                    >
                      {resource.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div 
            className="border-t border-border mt-8 pt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground">
              © 2024 BEBO. All rights reserved. | 
              <span className="text-sm ml-1">Always DYOR before investing in any cryptocurrency.</span>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
