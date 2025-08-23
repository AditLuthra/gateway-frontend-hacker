import { Helmet } from "react-helmet-async";
import { EnhancedNavigation } from "@/components/EnhancedNavigation";
import { EnhancedFooter } from "@/components/EnhancedFooter";
import { Calendar, User, Tag, ArrowRight } from "lucide-react";
import { ThreeBackground } from "@/components/ThreeBackground";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "The Future of Digital Manufacturing in India",
      excerpt: "Exploring how digital fabrication is transforming the maker ecosystem and enabling rapid innovation across industries.",
      author: "Team MakrX",
      date: "2024-01-15",
      category: "Industry Insights",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Building Your First IoT Project: A Complete Guide",
      excerpt: "Step-by-step tutorial on creating connected devices using Arduino, sensors, and cloud platforms available through MakrX.",
      author: "Priya Sharma",
      date: "2024-01-10",
      category: "Tutorials",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Spotlight: Mumbai Makerspace Success Story",
      excerpt: "How TechSpace Mumbai transformed from a small community workshop to a thriving innovation hub using MakrCave.",
      author: "Raj Kumar",
      date: "2024-01-05",
      category: "Success Stories",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "3D Printing Materials Guide: From PLA to Metal",
      excerpt: "Comprehensive guide to choosing the right materials for your 3D printing projects, with pros, cons, and use cases.",
      author: "Dr. Anitha Krishnan",
      date: "2023-12-28",
      category: "Technical",
      readTime: "10 min read"
    },
    {
      id: 5,
      title: "Maker Community Spotlight: Student Innovations",
      excerpt: "Amazing projects created by students across our makerspaces, from smart city solutions to healthcare devices.",
      author: "Vikram Singh",
      date: "2023-12-20",
      category: "Community",
      readTime: "7 min read"
    },
    {
      id: 6,
      title: "Laser Cutting Best Practices for Beginners",
      excerpt: "Everything you need to know before your first laser cutting project, including safety, materials, and design tips.",
      author: "Kavya Reddy",
      date: "2023-12-15",
      category: "Tutorials",
      readTime: "4 min read"
    }
  ];

  return (
    <>
      <Helmet>
        <title>MakrX Blog - Insights, Tutorials & Maker Stories</title>
        <meta 
          name="description" 
          content="Stay updated with the latest maker insights, tutorials, and community stories from India's largest maker ecosystem. Digital fabrication, IoT projects, and innovation guides." 
        />
      </Helmet>

      <div className="min-h-screen bg-dark-bg-primary">
        <ThreeBackground />
        <EnhancedNavigation />
        
        <main className="relative z-10">
          {/* Header */}
          <section className="py-24 bg-gradient-to-br from-makr-blue/20 via-purple-600/20 to-makr-yellow/10 border-b border-makr-blue/30">
            <div className="max-w-6xl mx-auto px-6 text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-makr-blue/20 border border-makr-blue/30 text-makr-blue text-sm font-medium mb-6 font-mono">
                <Tag className="w-4 h-4 mr-2" />
                Knowledge Hub
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gradient-cyberpunk mb-6 font-mono">
                MakrX Blog
              </h1>
              <p className="text-xl text-dark-text-secondary max-w-3xl mx-auto font-mono">
                Insights, tutorials, and stories from the maker community. 
                Stay updated with the latest in digital fabrication and innovation.
              </p>
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section className="py-20 bg-dark-bg-secondary border-t border-makr-blue/30">
            <div className="max-w-6xl mx-auto px-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, index) => (
                  <article 
                    key={post.id} 
                    className="card-cyberpunk p-6 hover:shadow-neon-lg transition-all group animate-scale-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="aspect-video bg-gradient-to-br from-makr-blue/10 to-makr-yellow/10 border border-makr-blue/30 rounded-xl flex items-center justify-center mb-6 shadow-neon">
                      <span className="text-dark-text-muted font-mono">📝 Blog Post</span>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-dark-text-muted mb-3 font-mono">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Tag className="w-4 h-4" />
                        {post.category}
                      </div>
                    </div>
                    
                    <h2 className="text-xl font-semibold mb-3 text-gradient-cyberpunk group-hover:text-makr-yellow transition-colors cursor-pointer font-mono">
                      {post.title}
                    </h2>
                    
                    <p className="text-dark-text-secondary mb-4 font-mono">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-dark-text-muted font-mono">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="text-xs text-dark-text-muted font-mono">
                        {post.readTime}
                      </div>
                    </div>
                    
                    <button className="w-full mt-4 text-makr-blue font-medium hover:text-makr-yellow transition-colors flex items-center justify-center gap-2 font-mono">
                      Read More 
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </article>
                ))}
              </div>
              
              {/* Load More */}
              <div className="text-center mt-12">
                <button className="btn-cyberpunk px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 font-mono">
                  Load More Posts
                </button>
              </div>
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="py-20 bg-gradient-to-r from-makr-blue/20 to-purple-600/20 border-t border-makr-blue/30">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold text-gradient-cyberpunk mb-4 font-mono">
                Stay Updated
              </h2>
              <p className="text-dark-text-secondary mb-8 font-mono">
                Get the latest maker insights, tutorials, and community stories delivered to your inbox.
              </p>
              <div className="flex max-w-md mx-auto gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-dark-bg-secondary border border-makr-blue/30 rounded-lg text-dark-text-primary placeholder-dark-text-muted focus:ring-2 focus:ring-makr-yellow/50 focus:border-makr-yellow transition-all font-mono"
                />
                <button className="btn-cyberpunk px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 font-mono">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-dark-text-muted mt-4 font-mono">
                Join 5,000+ makers already subscribed. No spam, unsubscribe anytime.
              </p>
            </div>
          </section>
        </main>
        
        <EnhancedFooter />
      </div>
    </>
  );
}