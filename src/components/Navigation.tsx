import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, User, BookOpen, Image } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/about", label: "About", icon: User },
    { path: "/blog", label: "Blog", icon: BookOpen },
    { path: "/gallery", label: "Gallery", icon: Image },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            ∑ Portfolio
          </Link>
          
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Button
                key={path}
                variant={location.pathname === path ? "default" : "ghost"}
                size="sm"
                asChild
                className={location.pathname === path ? "bg-gradient-primary text-primary-foreground shadow-theorem" : ""}
              >
                <Link to={path} className="flex items-center space-x-2">
                  <Icon size={16} />
                  <span>{label}</span>
                </Link>
              </Button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile navigation */}
        <div className="md:hidden mt-4 flex justify-center space-x-1">
          {navItems.map(({ path, label, icon: Icon }) => (
            <Button
              key={path}
              variant={location.pathname === path ? "default" : "ghost"}
              size="sm"
              asChild
              className={location.pathname === path ? "bg-gradient-primary text-primary-foreground shadow-theorem" : ""}
            >
              <Link to={path} className="flex flex-col items-center space-y-1 text-xs">
                <Icon size={14} />
                <span>{label}</span>
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;