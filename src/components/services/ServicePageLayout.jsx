import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookingModal } from "@/components/BookingModal";
import { CheckCircle, Phone, ArrowLeft, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

const ServicePageLayout = ({
  title,
  subtitle,
  description,
  icon: Icon,
  image,
  features = [],
  additionalInfo = [],
  imagePlaceholder,
  relatedServices = [],
  banners = [],
  brandAffiliation = null,
}) => {
  const [currentBanner, setCurrentBanner] = useState(0);

  // Auto-advance banner slideshow
  useEffect(() => {
    if (banners.length > 0) {
      const timer = setInterval(() => {
        setCurrentBanner((prev) => (prev + 1) % banners.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [banners.length]);
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <nav className="text-sm text-white/70 mb-4 flex items-center gap-2">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              <span>/</span>
              <span className="text-white">{title}</span>
            </nav>
            <div className="flex items-center gap-4 mb-4">
              {Icon && (
                <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center">
                  <Icon className="w-8 h-8 text-white" />
                </div>
              )}
              <h1 className="text-3xl md:text-5xl font-heading font-bold">
                {title}
              </h1>
            </div>
            <p className="text-lg text-white/90">
              {subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Content Area */}
            <div className="lg:col-span-2 space-y-8">
              {/* Image/Visual */}
              <div className="rounded-2xl overflow-hidden">
                {image ? (
                  typeof image === 'string' ? (
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-auto object-cover rounded-2xl"
                    />
                  ) : (
                    // Render as React component (e.g., ImageCarousel)
                    image
                  )
                ) : Icon ? (
                  <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-12 flex items-center justify-center min-h-[300px]">
                    <Icon className="h-32 w-32 text-primary/30" />
                  </div>
                ) : null}
              </div>

              {/* Description */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                  About This Service
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Features */}
              {features.length > 0 && (
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                    What We Offer
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg"
                      >
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Additional Information */}
              {additionalInfo.length > 0 && (
                <div className="space-y-6">
                  {additionalInfo.map((section, index) => (
                    <div key={index}>
                      <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                        {section.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Quick Contact Card */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-heading font-bold text-foreground mb-4">
                    Need This Service?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Book an appointment or contact us for more information about our {title.toLowerCase()} services.
                  </p>

                  <div className="space-y-3 mb-6">
                    <BookingModal className="w-full" />
                    <Button asChild variant="outline" className="w-full">
                      <a href="tel:+94362222963">
                        <Phone className="w-4 h-4 mr-2" />
                        Call: 036 2222 963
                      </a>
                    </Button>
                  </div>

                  <div className="border-t border-border pt-4">
                    <p className="text-xs text-muted-foreground text-center">
                      Available 24/7 for emergencies
                    </p>
                  </div>
                </div>

                {/* Related Services */}
                {relatedServices.length > 0 && (
                  <div className="bg-muted/30 rounded-xl p-6">
                    <h3 className="text-lg font-heading font-bold text-foreground mb-4">
                      Related Services
                    </h3>
                    <ul className="space-y-2">
                      {relatedServices.map((service, index) => (
                        <li key={index}>
                          {service.external ? (
                            <a
                              href={service.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-2"
                            >
                              <ExternalLink className="w-4 h-4" />
                              {service.name}
                            </a>
                          ) : (
                            <Link
                              to={service.link}
                              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-2"
                            >
                              <CheckCircle className="w-4 h-4" />
                              {service.name}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Back to Services */}
                <Link
                  to="/services"
                  className="flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <ArrowLeft className="w-4 h-4" />
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Banner Slideshow */}
      {banners.length > 0 && (
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-xl md:rounded-2xl shadow-xl bg-gray-100">
              {/* Banner Images */}
              <div className="relative aspect-[16/9] md:aspect-[21/9]">
                {banners.map((banner, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentBanner ? 'opacity-100' : 'opacity-0'
                      }`}
                  >
                    <img
                      src={banner}
                      alt={`${title} Promotion ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {banners.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentBanner(index)}
                    className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all ${index === currentBanner
                      ? 'bg-white w-10 md:w-12'
                      : 'bg-white/60 hover:bg-white/80'
                      }`}
                    aria-label={`Go to banner ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Brand Affiliation / Partnership Section */}
      {brandAffiliation && (
        <section className="py-12 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-3">
                  Our Trusted Partner
                </h2>
                <p className="text-muted-foreground">
                  Proudly affiliated with leading healthcare providers
                </p>
              </div>
              <a
                href={brandAffiliation.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] bg-white"
              >
                <img
                  src={brandAffiliation.image}
                  alt={brandAffiliation.alt}
                  className="w-full h-auto object-contain"
                />
              </a>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-3">
            Have Questions About {title}?
          </h2>
          <p className="text-muted-foreground mb-6">
            Our team is here to help. Contact us for any inquiries.
          </p>
          <Button asChild variant="outline">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ServicePageLayout;
