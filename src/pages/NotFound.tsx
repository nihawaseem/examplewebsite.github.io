import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-subtle">
      <div className="text-center max-w-2xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-8xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            404
          </h1>
          <div className="text-6xl font-mono text-primary/20 mb-6">
            ∅
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mb-4 text-foreground">
          This page doesn't exist in our mathematical universe
        </h2>
        
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          It seems like you've wandered into undefined territory. 
          Let's get you back to a space where everything adds up!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground shadow-theorem">
            <Link to="/" className="flex items-center space-x-2">
              <Home className="w-5 h-5" />
              <span>Return Home</span>
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="border-primary/30 hover:bg-primary/5">
            <Link to="/blog" className="flex items-center space-x-2">
              <ArrowLeft className="w-5 h-5" />
              <span>Browse Articles</span>
            </Link>
          </Button>
        </div>

        <div className="mt-12 text-4xl font-mono text-primary/20 select-none">
          ∫ ∑ ∆ ∇ ∞ π ∅ ∈ ∉
        </div>
      </div>
    </div>
  );
};

export default NotFound;
