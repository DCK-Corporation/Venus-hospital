import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const newsArticles = [
  {
    id: 1,
    title: "New Eye Care Unit Expansion Complete",
    excerpt: "Venus Hospital expands optical services with advanced diagnostic equipment and larger product showroom.",
    date: "December 15, 2024",
    image: "https://images.unsplash.com/photo-1551601651-bc60f254d532?q=80&w=2069&auto=format&fit=crop",
    category: "Facilities",
  },
  {
    id: 2,
    title: "24/7 Emergency Services Enhanced",
    excerpt: "Upgraded emergency department with faster response times and expanded medical staff availability.",
    date: "December 10, 2024",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop",
    category: "Services",
  },
  {
    id: 3,
    title: "Free Health Camp This Weekend",
    excerpt: "Join us for complimentary health screenings, consultations, and wellness education for the community.",
    date: "December 5, 2024",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=2070&auto=format&fit=crop",
    category: "Community",
  },
];

export function NewsSection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-background via-secondary/5 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-primary mb-4">
            <Calendar className="h-4 w-4" />
            <span>Stay Updated</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-heading">
            Latest News & Updates
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stay informed about our latest developments, services, and community initiatives
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <article
              key={article.id}
              className="group bg-card rounded-xl overflow-hidden border border-border shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>{article.date}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 font-heading group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <Link
                  to={`/news/${article.id}`}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="group">
            <Link to="/about">
              View All News & Updates
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
