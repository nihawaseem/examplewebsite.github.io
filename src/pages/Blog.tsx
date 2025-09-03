import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

const Blog = () => {
  const articles = [
    {
      title: "The Beauty of Euler's Identity",
      excerpt: "Exploring why e^(iπ) + 1 = 0 is considered the most beautiful equation in mathematics, connecting five fundamental mathematical constants in one elegant expression.",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "Pure Mathematics",
      featured: true
    },
    {
      title: "Topology Through Coffee Cups and Donuts",
      excerpt: "A gentle introduction to topological concepts through everyday objects, demonstrating how mathematicians think about shape and space.",
      date: "December 10, 2024",
      readTime: "12 min read",
      category: "Topology",
      featured: false
    },
    {
      title: "The Riemann Hypothesis: Mathematics' Greatest Mystery",
      excerpt: "Diving deep into one of mathematics' most famous unsolved problems and its profound implications for number theory and cryptography.",
      date: "December 5, 2024",
      readTime: "15 min read",
      category: "Number Theory",
      featured: true
    },
    {
      title: "Fractals: Infinite Complexity from Simple Rules",
      excerpt: "Exploring the mesmerizing world of fractals, where simple iterative processes create infinitely complex and beautiful patterns.",
      date: "November 28, 2024",
      readTime: "10 min read",
      category: "Applied Mathematics",
      featured: false
    },
    {
      title: "Category Theory: The Mathematics of Mathematics",
      excerpt: "An accessible introduction to category theory and how it provides a unifying language for different areas of mathematics.",
      date: "November 20, 2024",
      readTime: "18 min read",
      category: "Abstract Algebra",
      featured: false
    },
    {
      title: "Prime Numbers and the Music of Mathematics",
      excerpt: "Discovering the hidden patterns and rhythms in prime number distributions, and their surprising connections to musical harmony.",
      date: "November 15, 2024",
      readTime: "11 min read",
      category: "Number Theory",
      featured: false
    }
  ];

  const categories = ["All", "Pure Mathematics", "Topology", "Number Theory", "Applied Mathematics", "Abstract Algebra"];
  const selectedCategory = "All";

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-gradient-theorem shadow-theorem">
                <BookOpen className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Mathematical Blog
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Exploring the elegant patterns, beautiful proofs, and fascinating concepts 
              that make mathematics the language of the universe.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                className={selectedCategory === category ? "bg-gradient-primary text-primary-foreground shadow-theorem" : "border-primary/30 hover:bg-primary/5"}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Articles */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 flex items-center space-x-2">
              <span className="text-primary">★</span>
              <span>Featured Articles</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {articles.filter(article => article.featured).map((article, index) => (
                <Card key={index} className="p-8 bg-card/50 backdrop-blur-sm border-primary/10 hover:shadow-theorem transition-all duration-500 group cursor-pointer">
                  <div className="flex items-center space-x-2 mb-4">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {article.category}
                    </Badge>
                    <span className="text-primary font-bold">★</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10 p-0">
                    Read Article <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Card>
              ))}
            </div>
          </div>

          {/* All Articles */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 flex items-center space-x-2">
              <span className="text-theorem-pink">∑</span>
              <span>All Articles</span>
            </h2>
            <div className="grid gap-6">
              {articles.map((article, index) => (
                <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-theorem-pink/10 hover:shadow-proof transition-all duration-300 group cursor-pointer">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="outline" className="border-theorem-pink/30 text-theorem-pink">
                          {article.category}
                        </Badge>
                        {article.featured && <span className="text-primary font-bold">★</span>}
                      </div>
                      
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-theorem-pink transition-colors">
                        {article.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <Button variant="ghost" size="sm" className="text-theorem-pink hover:bg-theorem-pink/10 self-start md:self-center">
                      Read <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Mathematical decoration */}
          <div className="mt-16 text-center">
            <p className="text-4xl font-mono text-primary/20 select-none">
              ∂ ∇ ∆ ∫ ∑ ∏ ∞ ≈ ≡ ⊕ ⊗ ⊙
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;