import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";
const navLinks = [{
  name: "Home",
  path: "/"
}, {
  name: "About",
  path: "/about"
}, {
  name: "Services",
  path: "/services"
}, {
  name: "Funding247.online",
  path: "/funding247"
}, {
  name: "Contact",
  path: "/contact"
}];
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  return <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background", isScrolled && "shadow-card")}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img alt="Midland AI Logo" className="h-10 w-auto" src="/lovable-uploads/43b7d097-0490-41cb-ab95-b8c6c850adfe.png" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={cn("text-sm font-medium transition-colors duration-200 hover:text-primary", location.pathname === link.path ? "text-primary" : isScrolled ? "text-foreground" : "text-foreground")}>
                {link.name}
              </Link>)}
            <Button asChild variant="default" size="sm">
              <Link to="/contact">Book Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map(link => <Link key={link.path} to={link.path} className={cn("text-base font-medium py-2 transition-colors", location.pathname === link.path ? "text-primary" : "text-foreground hover:text-primary")}>
                  {link.name}
                </Link>)}
              <Button asChild variant="default" className="mt-2">
                <Link to="/contact">Book Consultation</Link>
              </Button>
            </div>
          </div>}
      </nav>
    </header>;
}