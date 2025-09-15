import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center font-bold text-primary-foreground">
              B
            </div>
            <span className="text-xl font-bold gradient-text">BEBO</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')} 
              className="hover:text-primary transition-colors"
              data-testid="nav-about"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('gallery')} 
              className="hover:text-primary transition-colors"
              data-testid="nav-gallery"
            >
              Gallery
            </button>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              onClick={() => window.open('https://x.com/i/communities/1967425385273991584', '_blank')}
              variant="outline"
              className="font-semibold animate-bounce"
              data-testid="button-join-desktop"
            >
              Join
            </Button>
            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
              data-testid="button-buy-desktop"
            >
              Buy BEBO
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button 
              onClick={() => scrollToSection('about')} 
              className="block w-full text-left hover:text-primary transition-colors"
              data-testid="nav-about-mobile"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('gallery')} 
              className="block w-full text-left hover:text-primary transition-colors"
              data-testid="nav-gallery-mobile"
            >
              Gallery
            </button>
            <Button 
              onClick={() => window.open('https://x.com/i/communities/1967425385273991584', '_blank')}
              variant="outline"
              className="w-full font-semibold animate-bounce"
              data-testid="button-join-mobile"
            >
              Join
            </Button>
            <Button 
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
              data-testid="button-buy-mobile"
            >
              Buy BEBO
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
