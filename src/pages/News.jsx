import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Search, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { newsArticles as localNewsArticles } from "@/data/newsData";
import { Layout } from "@/components/layout/Layout";
import { supabase } from "@/integrations/supabase/client";

export default function News() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const { data, error } = await supabase
                    .from("news_posts")
                    .select("*")
                    .order("created_at", { ascending: false });

                if (error) throw error;

                if (data && data.length > 0) {
                    setNews(data);
                } else {
                    // Fallback to local data if DB is empty
                    setNews(localNewsArticles);
                }
            } catch (error) {
                console.error("Error fetching news:", error);
                setNews(localNewsArticles);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    return (
        <Layout>
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-primary/10 via-secondary/20 to-background py-16 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-primary mb-6">
                            <Calendar className="h-4 w-4" />
                            <span>Stay Informed</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-heading">
                            News & Updates
                        </h1>
                        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                            Stay up to date with the latest news, announcements, and developments from Venus Hospital
                        </p>
                    </div>
                </div>
            </section>

            {/* News Grid */}
            <section className="py-16 md:py-20 min-h-[400px]">
                <div className="container mx-auto px-4">
                    {loading ? (
                        <div className="flex justify-center items-center py-20">
                            <Loader2 className="h-10 w-10 animate-spin text-primary" />
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {news.map((article) => (
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
                                        <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
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
                    )}

                    {/* Empty State (if no articles) */}
                    {!loading && news.length === 0 && (
                        <div className="text-center py-16">
                            <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-foreground mb-2">No Articles Found</h3>
                            <p className="text-muted-foreground">Check back soon for updates!</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-b from-secondary/30 to-background py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">
                        Stay Connected
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        Want to receive the latest updates directly? Contact us to subscribe to our newsletter.
                    </p>
                    <Button asChild size="lg">
                        <Link to="/contact">
                            Contact Us
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </section>
        </Layout>
    );
}
