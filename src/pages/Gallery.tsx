import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Book, Film, Music, Star, ExternalLink, Calendar } from "lucide-react";

const Gallery = () => {
  const books = [
    {
      title: "Gödel, Escher, Bach",
      author: "Douglas Hofstadter",
      category: "Mathematics & Philosophy",
      rating: 5,
      year: "1979",
      description: "An eternal golden braid exploring consciousness, mathematics, and art through recursive patterns and self-reference.",
      impact: "Transformed my understanding of how mathematical concepts connect to consciousness and creativity."
    },
    {
      title: "The Man Who Loved Only Numbers",
      author: "Paul Hoffman", 
      category: "Biography",
      rating: 4,
      year: "1998",
      description: "The story of Paul Erdős and his beautiful obsession with pure mathematics.",
      impact: "Inspired my appreciation for the pure joy of mathematical discovery."
    },
    {
      title: "A Mathematician's Apology",
      author: "G.H. Hardy",
      category: "Mathematical Philosophy",
      rating: 5,
      year: "1940",
      description: "Hardy's passionate defense of pure mathematics and its inherent beauty.",
      impact: "Shaped my philosophy about the aesthetic value of mathematical truth."
    },
    {
      title: "The Code Book",
      author: "Simon Singh",
      category: "Cryptography",
      rating: 4,
      year: "1999", 
      description: "The evolution of secrecy from ancient times to quantum cryptography.",
      impact: "Sparked my interest in the mathematical foundations of cryptography."
    }
  ];

  const papers = [
    {
      title: "A Beautiful Mind",
      author: "Sylvia Nasar",
      category: "Biography",
      rating: 4,
      year: "1998",
      description: "The life of John Nash and his groundbreaking work in game theory.",
      impact: "Demonstrated how mathematical genius can coexist with human vulnerability."
    },
    {
      title: "The Elegant Universe",
      author: "Brian Greene",
      category: "Physics & Mathematics",
      rating: 5,
      year: "1999",
      description: "String theory and the quest for the theory of everything.",
      impact: "Opened my eyes to the mathematical beauty underlying physical reality."
    }
  ];

  const media = [
    {
      title: "3Blue1Brown",
      type: "YouTube Channel",
      category: "Educational",
      rating: 5,
      description: "Stunning visualizations that make complex mathematical concepts intuitive and beautiful.",
      impact: "Revolutionized how I think about mathematical visualization and teaching."
    },
    {
      title: "The Imitation Game",
      type: "Film",
      category: "Biography",
      rating: 4,
      description: "The story of Alan Turing and the mathematical foundations of computer science.",
      impact: "Highlighted the profound impact mathematicians can have on world history."
    },
    {
      title: "Pi",
      type: "Film",
      category: "Thriller",
      rating: 4,
      description: "A psychological thriller exploring obsession with mathematical patterns.",
      impact: "A fascinating exploration of the fine line between mathematical insight and obsession."
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-accent fill-current' : 'text-muted-foreground'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-gradient-accent shadow-theorem">
                <Book className="w-12 h-12 text-accent-foreground" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
              Books & Media Gallery
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A curated collection of books, papers, films, and media that have shaped my mathematical thinking 
              and continue to inspire my journey through the world of mathematics.
            </p>
          </div>

          {/* Mathematical Books */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 flex items-center space-x-2">
              <Book className="w-6 h-6 text-primary" />
              <span>Essential Mathematical Books</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {books.map((book, index) => (
                <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-primary/10 hover:shadow-theorem transition-all duration-500 group">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {book.category}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      {renderStars(book.rating)}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {book.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-3">
                    by {book.author} • {book.year}
                  </p>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {book.description}
                  </p>
                  
                  <div className="border-t border-border pt-4">
                    <p className="text-xs text-muted-foreground italic">
                      <strong>Impact:</strong> {book.impact}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Additional Reading */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 flex items-center space-x-2">
              <svg className="w-6 h-6 text-theorem-pink" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
              </svg>
              <span>Additional Influential Reading</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {papers.map((paper, index) => (
                <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-theorem-pink/10 hover:shadow-proof transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="outline" className="border-theorem-pink/30 text-theorem-pink">
                      {paper.category}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      {renderStars(paper.rating)}
                    </div>
                  </div>
                  
                  <h3 className="font-semibold mb-2 group-hover:text-theorem-pink transition-colors">
                    {paper.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-3">
                    by {paper.author} • {paper.year}
                  </p>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {paper.description}
                  </p>
                  
                  <div className="border-t border-border pt-4">
                    <p className="text-xs text-muted-foreground italic">
                      <strong>Impact:</strong> {paper.impact}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Films & Digital Media */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 flex items-center space-x-2">
              <Film className="w-6 h-6 text-accent" />
              <span>Films & Digital Media</span>
            </h2>
            <div className="grid gap-6">
              {media.map((item, index) => (
                <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-accent/10 hover:shadow-equation transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-3">
                        <Badge variant="outline" className="border-accent/30 text-accent">
                          {item.category}
                        </Badge>
                        <Badge variant="secondary" className="bg-accent/10 text-accent-foreground">
                          {item.type}
                        </Badge>
                      </div>
                      
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground mb-4">
                        {item.description}
                      </p>
                      
                      <div className="border-t border-border pt-4">
                        <p className="text-xs text-muted-foreground italic">
                          <strong>Impact:</strong> {item.impact}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end space-y-2">
                      <div className="flex items-center space-x-1">
                        {renderStars(item.rating)}
                      </div>
                      <Button variant="ghost" size="sm" className="text-accent hover:bg-accent/10">
                        View <ExternalLink className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <Card className="p-8 text-center bg-gradient-theorem/10 backdrop-blur-sm border-primary/20">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              Have a Recommendation?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always looking for new books, papers, and media that explore the beauty and depth of mathematics. 
              If you have something that transformed your understanding, I'd love to hear about it!
            </p>
            <Button size="lg" className="bg-gradient-primary text-primary-foreground shadow-theorem">
              Share Your Recommendation
            </Button>
          </Card>

          {/* Mathematical decoration */}
          <div className="mt-16 text-center">
            <p className="text-4xl font-mono text-accent/30 select-none">
              📚 ∫ 🎬 ∑ 📖 ∆ 🎵 ∇ 📰 ∞
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Gallery;