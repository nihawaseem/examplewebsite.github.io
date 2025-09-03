import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Infinity, Calculator, BookOpen } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      {/* Hero Section */}
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Content */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-gradient-theorem shadow-theorem">
                <Infinity className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
              Mathematical
              <br />
              <span className="bg-gradient-accent bg-clip-text text-transparent">Musings</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Where equations meet elegance, and theorems tell stories. 
              <br className="hidden md:block" />
              Explore my journey through mathematics, literature, and life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-gradient-primary text-primary-foreground shadow-theorem hover:shadow-proof transition-all duration-300">
                <Link to="/about" className="flex items-center space-x-2">
                  <span>Discover My Story</span>
                  <ArrowRight size={18} />
                </Link>
              </Button>
              
              <Button size="lg" variant="outline" asChild className="border-primary/30 hover:bg-primary/5">
                <Link to="/blog" className="flex items-center space-x-2">
                  <BookOpen size={18} />
                  <span>Read My Thoughts</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/10 hover:shadow-theorem transition-all duration-500 group">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-xl bg-gradient-primary shadow-proof group-hover:scale-110 transition-transform duration-300">
                  <Calculator className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Resume & Experience</h3>
              <p className="text-muted-foreground text-center mb-4">
                My academic journey, professional experience, and mathematical achievements presented in elegant detail.
              </p>
              <div className="text-center">
                <Button variant="ghost" size="sm" asChild className="text-primary hover:bg-primary/10">
                  <Link to="/about">View Profile →</Link>
                </Button>
              </div>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-theorem-pink/20 hover:shadow-proof transition-all duration-500 group">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-xl bg-gradient-theorem shadow-equation group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Mathematical Blog</h3>
              <p className="text-muted-foreground text-center mb-4">
                Deep dives into fascinating mathematical concepts, proofs, and the beauty hidden in equations.
              </p>
              <div className="text-center">
                <Button variant="ghost" size="sm" asChild className="text-theorem-pink hover:bg-theorem-pink/10">
                  <Link to="/blog">Read Articles →</Link>
                </Button>
              </div>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-accent/20 hover:shadow-equation transition-all duration-500 group">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-xl bg-gradient-accent shadow-theorem group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-accent-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Books & Media</h3>
              <p className="text-muted-foreground text-center mb-4">
                A curated collection of influential books, papers, and media that have shaped my thinking.
              </p>
              <div className="text-center">
                <Button variant="ghost" size="sm" asChild className="text-accent hover:bg-accent/10">
                  <Link to="/gallery">Explore Gallery →</Link>
                </Button>
              </div>
            </Card>
          </div>

          {/* Mathematical decoration */}
          <div className="mt-20 text-center">
            <p className="text-6xl font-mono text-primary/20 select-none">
              ∫ ∑ ∆ ∇ ∞ π ∅ ∈ ∉ ⊂ ⊃ ∪ ∩
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;