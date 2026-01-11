import { useParams, Link, useNavigate } from "react-router-dom";
import { Calendar, ArrowLeft, ArrowRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getArticleById, getRelatedArticles } from "@/data/newsData";
import { Layout } from "@/components/layout/Layout";

export default function NewsArticle() {
    const { id } = useParams();
    const navigate = useNavigate();
    const article = getArticleById(id);
    const relatedArticles = article ? getRelatedArticles(id, article.category) : [];

    if (!article) {
        return (
            <Layout>
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-foreground mb-4">Article Not Found</h1>
                        <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
                        <Button asChild>
                            <Link to="/news">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to News
                            </Link>
                        </Button>
                    </div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            {/* Breadcrumb */}
            <div className="bg-secondary/30 py-4">
                <div className="container mx-auto px-4">
                    <nav className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                        <span>/</span>
                        <Link to="/news" className="hover:text-primary transition-colors">News</Link>
                        <span>/</span>
                        <span className="text-foreground">{article.title}</span>
                    </nav>
                </div>
            </div>

            {/* Article Header */}
            <div className="bg-gradient-to-b from-secondary/30 to-background py-12">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="mb-6">
                        <span className="inline-block px-4 py-1.5 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                            {article.category}
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-heading">
                        {article.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-primary" />
                            <span>{article.date}</span>
                        </div>
                        {article.author && (
                            <div className="flex items-center gap-2">
                                <User className="w-5 h-5 text-primary" />
                                <span>{article.author}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Hero Image */}
            <div className="container mx-auto px-4 max-w-4xl -mt-8 mb-12">
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
                    <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Article Content */}
            <article className="container mx-auto px-4 max-w-4xl pb-16">
                <div
                    className="prose prose-lg max-w-none
            prose-headings:font-heading prose-headings:text-foreground
            prose-h3:text-2xl prose-h3:font-bold prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
            prose-ul:text-muted-foreground prose-ul:my-4
            prose-li:mb-2
            prose-strong:text-foreground"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                />

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 mt-12 pt-8 border-t border-border">
                    <Button variant="outline" onClick={() => navigate(-1)}>
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Go Back
                    </Button>
                    <Button asChild>
                        <Link to="/news">
                            View All News
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </article>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
                <section className="bg-secondary/30 py-16">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 font-heading">
                            Related Articles
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {relatedArticles.map((relatedArticle) => (
                                <article
                                    key={relatedArticle.id}
                                    className="group bg-card rounded-xl overflow-hidden border border-border shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="relative aspect-video overflow-hidden bg-muted">
                                        <img
                                            src={relatedArticle.image}
                                            alt={relatedArticle.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                                                {relatedArticle.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                                            <Calendar className="w-4 h-4 text-primary" />
                                            <span>{relatedArticle.date}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-foreground mb-3 font-heading group-hover:text-primary transition-colors">
                                            {relatedArticle.title}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed mb-4">
                                            {relatedArticle.excerpt}
                                        </p>
                                        <Link
                                            to={`/news/${relatedArticle.id}`}
                                            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                                        >
                                            Read More
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </Layout>
    );
}
