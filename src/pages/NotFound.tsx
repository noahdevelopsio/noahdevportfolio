import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Terminal, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-4">
        {/* Terminal-style 404 */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 border border-primary/30 mb-8">
          <Terminal className="w-10 h-10 text-primary" />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 font-mono">
          <span className="text-primary">4</span>0<span className="text-primary">4</span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-2">
          Oops! Page not found
        </p>
        
        <p className="font-mono text-sm text-muted-foreground mb-8">
          <span className="text-primary">Error:</span> Route "{location.pathname}" does not exist
        </p>
        
        <Button variant="terminal" asChild>
          <a href="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Return to Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
