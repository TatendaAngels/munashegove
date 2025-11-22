import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationLinks = [
    { label: "Home", path: "/" },
    { label: "My Journey", path: "/about" },
    { label: "Art Collections", path: "/gallery" },
    { label: "Order Art", path: "/commission" },
    { label: "Art Lessons", path: "/other" },
    { label: "Connect", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-black/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <div className="w-10 h-10 bg-black rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">MG</span>
            </div>
            <div>
              <div className="font-bold text-lg text-black">Munashe Gove</div>
              <div className="text-xs text-gray-600">Zimbabwean Pencil Artist</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navigationLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button
                  variant="ghost"
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? "bg-black text-white"
                      : "text-black hover:bg-black/5"
                  }`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-black" />
            ) : (
              <Menu className="w-6 h-6 text-black" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-black/10">
            <div className="flex flex-col gap-2 pt-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button
                    variant="ghost"
                    className={`w-full justify-start text-sm font-medium transition-colors ${
                      isActive(link.path)
                        ? "bg-black text-white"
                        : "text-black hover:bg-black/5"
                    }`}
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
