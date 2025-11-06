import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, LogIn } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Smart Cooperative Hub" className="h-10 w-10 rounded" />
            <span className="text-xl md:text-2xl font-bold text-blue-900">Smart Cooperative Hub</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/about" onClick={handleNavClick} className={`font-medium pb-1 transition-all ${isActive("/about") ? "text-blue-900 border-b-2 border-blue-900" : "text-gray-600 hover:text-blue-900 hover:border-b-2 hover:border-blue-900"}`}>
              About
            </Link>
            <Link to="/services" onClick={handleNavClick} className={`font-medium pb-1 transition-all ${isActive("/services") ? "text-blue-900 border-b-2 border-blue-900" : "text-gray-600 hover:text-blue-900 hover:border-b-2 hover:border-blue-900"}`}>
              Services
            </Link>
            <Link to="/features" onClick={handleNavClick} className={`font-medium pb-1 transition-all ${isActive("/features") ? "text-blue-900 border-b-2 border-blue-900" : "text-gray-600 hover:text-blue-900 hover:border-b-2 hover:border-blue-900"}`}>
              Features
            </Link>
            <Link to="/contact" onClick={handleNavClick} className={`font-medium pb-1 transition-all ${isActive("/contact") ? "text-blue-900 border-b-2 border-blue-900" : "text-gray-600 hover:text-blue-900 hover:border-b-2 hover:border-blue-900"}`}>
              Contact
            </Link>
            <Link to="/login">
              <Button variant="outline" className="gap-2">
                <LogIn className="h-4 w-4" />
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-green-600 hover:bg-green-700 text-white">Get Started</Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6 text-gray-800" /> : <Menu className="h-6 w-6 text-gray-800" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 border-t border-gray-200">
            <Link to="/about" onClick={handleNavClick} className={`block w-full text-left font-medium pb-2 border-b-2 transition-all ${isActive("/about") ? "text-blue-900 border-blue-900" : "text-gray-600 border-transparent hover:text-blue-900 hover:border-blue-900"}`}>
              About
            </Link>
            <Link to="/services" onClick={handleNavClick} className={`block w-full text-left font-medium pb-2 border-b-2 transition-all ${isActive("/services") ? "text-blue-900 border-blue-900" : "text-gray-600 border-transparent hover:text-blue-900 hover:border-blue-900"}`}>
              Services
            </Link>
            <Link to="/features" onClick={handleNavClick} className={`block w-full text-left font-medium pb-2 border-b-2 transition-all ${isActive("/features") ? "text-blue-900 border-blue-900" : "text-gray-600 border-transparent hover:text-blue-900 hover:border-blue-900"}`}>
              Features
            </Link>
            <Link to="/contact" onClick={handleNavClick} className={`block w-full text-left font-medium pb-2 border-b-2 transition-all ${isActive("/contact") ? "text-blue-900 border-blue-900" : "text-gray-600 border-transparent hover:text-blue-900 hover:border-blue-900"}`}>
              Contact
            </Link>
            <Link to="/login" className="w-full">
              <Button variant="outline" className="w-full gap-2">
                <LogIn className="h-4 w-4" />
                Login
              </Button>
            </Link>
            <Link to="/signup" className="w-full">
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Get Started</Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
