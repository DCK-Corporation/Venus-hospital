import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Heart, Eye, Building2, Users, Award, Clock, Target, Compass, CheckCircle, Stethoscope, Shield, ChevronLeft, ChevronRight } from "lucide-react";

// Slideshow images
const slideshowImages = [
  {
    url: "https://res.cloudinary.com/doqyzcyl5/image/upload/v1767678737/IMG_5974_xmhbb5.jpg",
    caption: "Venus Hospital - Main Building"
  },
  {
    url: "https://res.cloudinary.com/doqyzcyl5/image/upload/v1767678730/IMG_5603_gwk6xh.jpg",
    caption: "Advanced Eye Care & Optical Services"
  },
  {
    url: "https://res.cloudinary.com/doqyzcyl5/image/upload/v1767678737/IMG_6052_csduat.jpg",
    caption: "Modern Medical Facilities"
  },
  {
    url: "https://res.cloudinary.com/doqyzcyl5/image/upload/v1767678732/IMG_5778_h08sjs.jpg",
    caption: "Comprehensive Healthcare Services"
  }
];

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentOpticalSlide, setCurrentOpticalSlide] = useState(0);

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Auto-advance optical slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentOpticalSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 5500); // Slightly different timing for variety
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextOpticalSlide = () => {
    setCurrentOpticalSlide((prev) => (prev + 1) % slideshowImages.length);
  };

  const prevOpticalSlide = () => {
    setCurrentOpticalSlide((prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length);
  };

  const goToOpticalSlide = (index) => {
    setCurrentOpticalSlide(index);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white py-16 md:py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Building2 className="h-4 w-4" />
              <span>Established 2014 • Optical Services Since 1999</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              About Venus Hospital
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Your trusted healthcare partner in Avissawella, delivering compassionate care and medical excellence for over a decade
            </p>
          </div>
        </div>
      </section>

      {/* Hospital Overview with Image */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Image Slideshow */}
              <div className="order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  {/* Images */}
                  <div className="relative h-[400px]">
                    {slideshowImages.map((image, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                          }`}
                      >
                        <img
                          src={image.url}
                          alt={image.caption}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                          <p className="text-white font-semibold text-lg">{image.caption}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-6 h-6 text-gray-800" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-6 h-6 text-gray-800" />
                  </button>

                  {/* Dots Indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {slideshowImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all ${index === currentSlide
                          ? 'bg-white w-8'
                          : 'bg-white/50 hover:bg-white/75'
                          }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2">
                <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
                  Who We Are
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-6 mb-6">
                  A Landmark Healthcare Provider in Avissawella
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Venus Hospital (Pvt) Ltd stands as a monolith landmark healthcare service provider in Avissawella, delivering a comprehensive range of medical facilities to tens of thousands of patients across the district borderline city and parts of Kegalle and Ratnapura districts.
                  </p>
                  <p>
                    Established in March 2014 by Mr. Sanjeewa Koralage, our hospital was built with the blessings and active participation of highly qualified medical professionals from Avissawella Base Hospital and major hospitals across the island.
                  </p>
                  <p className="font-medium text-foreground">
                    Today, we continue to grow and expand, maintaining our commitment to provide compassionate, patient-centered medical care with state-of-the-art facilities and experienced healthcare professionals.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <Users className="w-10 h-10 text-primary mx-auto mb-3" />
                <p className="text-3xl font-bold text-primary mb-1">20,000+</p>
                <p className="text-sm text-muted-foreground font-medium">Patients Served</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <Stethoscope className="w-10 h-10 text-primary mx-auto mb-3" />
                <p className="text-3xl font-bold text-primary mb-1">40+</p>
                <p className="text-sm text-muted-foreground font-medium">Specialist Doctors</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <Eye className="w-10 h-10 text-primary mx-auto mb-3" />
                <p className="text-3xl font-bold text-primary mb-1">5,000+</p>
                <p className="text-sm text-muted-foreground font-medium">Eye Surgeries</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <Award className="w-10 h-10 text-primary mx-auto mb-3" />
                <p className="text-3xl font-bold text-primary mb-1">14+</p>
                <p className="text-sm text-muted-foreground font-medium">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Optical Services Heritage with Image */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
                  Our Heritage
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-6 mb-6">
                  25 Years of Optical Excellence
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Our journey began in 1999 with Visual Eye Optical Services, an optometric service inaugurated in Avissawella. Under the visionary leadership of Mr. Sanjeewa Koralage, this optical service expanded to a chain of service centers in outskirt cities within a decade.
                  </p>
                  <p>
                    Today, our Optical department celebrates over 25 years of excellence, providing high-quality frames, lenses, and comprehensive eye care services. Our team includes qualified Optometrists registered with the Sri Lanka Optometrists Association (SLOA) and expert Dispensing Opticians with decades of experience.
                  </p>
                  <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg mt-6">
                    <p className="font-semibold text-foreground flex items-center gap-2">
                      <Eye className="w-5 h-5 text-primary" />
                      Complete Eye Unit with 13 years of dedicated service
                    </p>
                  </div>
                </div>
              </div>

              {/* Optical Image Slideshow */}
              <div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  {/* Images */}
                  <div className="relative h-[400px]">
                    {slideshowImages.map((image, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentOpticalSlide ? 'opacity-100' : 'opacity-0'
                          }`}
                      >
                        <img
                          src={image.url}
                          alt={image.caption}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                          <p className="text-white font-semibold text-lg">{image.caption}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevOpticalSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-6 h-6 text-gray-800" />
                  </button>
                  <button
                    onClick={nextOpticalSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-6 h-6 text-gray-800" />
                  </button>

                  {/* Dots Indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {slideshowImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToOpticalSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all ${index === currentOpticalSlide
                            ? 'bg-white w-8'
                            : 'bg-white/50 hover:bg-white/75'
                          }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
                Our Purpose
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-6">
                Vision & Mission
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Vision */}
              <div className="bg-gradient-to-br from-primary to-primary/90 p-8 md:p-10 rounded-2xl text-white shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Compass className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold">Our Vision</h3>
                </div>
                <p className="text-white/95 leading-relaxed text-base md:text-lg">
                  To make this citadel of hospitality a front-line healthcare delivering facility within its community, with the prime goal of serving them to uplift maximum health benefits with affinity to the bonds of rationality and ethical considerations.
                </p>
              </div>

              {/* Mission */}
              <div className="bg-gradient-to-br from-secondary to-secondary/90 p-8 md:p-10 rounded-2xl text-white shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Target className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold">Our Mission</h3>
                </div>
                <p className="text-white/95 leading-relaxed text-base md:text-lg">
                  To provide competent, compassionate and caring health services within a friendly and comfortable atmosphere by a dedicated healthcare team to optimum limits without breaching the golden rule of high quality that has been cherished by this corporate citizen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
                What We Stand For
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-6">
                Our Core Values
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-card border border-border p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  Compassion & Respect
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We treat every patient with dignity, understanding, and genuine care
                </p>
              </div>

              <div className="bg-card border border-border p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  Medical Excellence
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Committed to the highest standards of healthcare and continuous improvement
                </p>
              </div>

              <div className="bg-card border border-border p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  Patient Safety
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Your safety is our top priority in every procedure and interaction
                </p>
              </div>

              <div className="bg-card border border-border p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  Ethical Practice
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Integrity and transparency in all our medical decisions and actions
                </p>
              </div>

              <div className="bg-card border border-border p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  Community Service
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Dedicated to serving and improving the health of our community
                </p>
              </div>

              <div className="bg-card border border-border p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  Patient-Centered Care
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Your needs, comfort, and well-being are at the heart of everything we do
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-6">
                What Makes Venus Hospital Different
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Extended Operating Hours (6 AM - 10 PM)",
                "24/7 Emergency Services Available",
                "Experienced & Qualified Medical Staff",
                "Advanced Medical Equipment & Technology",
                "Complete Eye Unit with OCT & Laser",
                "25 Years of Optical Excellence",
                "Affordable Healthcare Services",
                "Comfortable Indoor Patient Rooms",
                "Beautiful Mountain View Setting",
                "Convenient Location in Avissawella",
                "Patient-Centered Care Approach",
                "Clean & Hygienic Environment"
              ].map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-start gap-3 bg-card border border-border p-4 rounded-lg hover:shadow-md transition-shadow"
                >
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Experience Healthcare You Can Trust
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              At Venus Hospital, we believe healthcare should be accessible, reliable, and delivered with empathy—because every patient deserves care they can trust.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/services"
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
              >
                Explore Our Services
              </a>
              <a
                href="tel:+94362222096"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                <Clock className="h-5 w-5" />
                Call: 036 2222 096
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
