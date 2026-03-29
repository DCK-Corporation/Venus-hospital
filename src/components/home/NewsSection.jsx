import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { newsArticles as localNewsArticles } from "@/data/newsData";
import { supabase } from "@/integrations/supabase/client";

export function NewsSection() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const { data, error } = await supabase
          .from("news_posts")
          .select("*")
          .order("created_at", { ascending: false })
          .limit(3);

        if (error) throw error;

        if (data && data.length > 0) {
          setNews(data);
        } else {
          setNews(localNewsArticles.slice(0, 3));
        }
      } catch (error) {
        console.error("Error fetching news section:", error);
        setNews(localNewsArticles.slice(0, 3));
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

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
            Stay informed about our latest treatments, services, and community initiatives
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
          {loading ? (
            <div className="col-span-full flex justify-center items-center py-20">
              <Loader2 className="h-10 w-10 animate-spin text-primary" />
            </div>
          ) : (
            news.map((article) => (
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
                <div className="p-6 text-left">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 font-heading group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <Link to={`/news/${article.id}`}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))
          )}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="group">
            <Link to="/news">
              View All News & Updates
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
