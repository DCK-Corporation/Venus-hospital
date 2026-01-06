import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Phone, Stethoscope, Bed, Clock, MapPin, Heart, Award, Star } from "lucide-react";

export function InternationalSection() {
  return (
    <section className="relative py-12 md:py-20 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-semibold text-primary mb-4">
            <Heart className="h-4 w-4" />
            <span>Quality Healthcare Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-heading text-foreground">
            Indoor Patient Care
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Spacious, comfortably furnished rooms with complete privacy and relaxation. Set against the breathtaking backdrop of the Historic Verdant Mountain Range.
          </p>
        </div>

        {/* Quick Action Buttons - Prominent on Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 h-16 md:h-20 text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <Link to="/appointments" className="flex items-center justify-center gap-3">
              <Calendar className="h-6 w-6 md:h-7 md:w-7" />
              <span>Channel a Doctor</span>
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary/10 h-16 md:h-20 text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <a href="tel:+94362222096" className="flex items-center justify-center gap-3">
              <Phone className="h-6 w-6 md:h-7 md:w-7" />
              <span>Call Now</span>
            </a>
          </Button>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* VIP Rooms Card */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:scale-105 group">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Bed className="w-7 h-7 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2 text-foreground">VIP Rooms</h3>
                <p className="text-sm text-muted-foreground mb-3">Premium accommodation with modern amenities and scenic mountain views</p>
                <Button asChild variant="link" className="p-0 h-auto text-primary font-semibold">
                  <Link to="/services">Learn More →</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* 24/7 Care Card */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:scale-105 group">
            <div className="flex items-start gap-4">
              <div className="bg-secondary/10 p-3 rounded-lg group-hover:bg-secondary/20 transition-colors">
                <Clock className="w-7 h-7 text-secondary" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2 text-foreground">24/7 Medical Care</h3>
                <p className="text-sm text-muted-foreground mb-3">Round-the-clock doctor availability and emergency services</p>
                <Button asChild variant="link" className="p-0 h-auto text-secondary font-semibold">
                  <Link to="/appointments">Book Now →</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Expert Doctors Card */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:scale-105 group">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Stethoscope className="w-7 h-7 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2 text-foreground">Expert Doctors</h3>
                <p className="text-sm text-muted-foreground mb-3">Experienced medical professionals across multiple specialties</p>
                <Button asChild variant="link" className="p-0 h-auto text-primary font-semibold">
                  <Link to="/about#team">Meet Our Team →</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Image and Stats Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://res.cloudinary.com/doqyzcyl5/image/upload/v1767678737/IMG_5974_xmhbb5.jpg"
                alt="Indoor Patient Care at Venus Hospital"
                className="w-full h-[300px] md:h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

              {/* Floating Badge */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm text-primary px-4 py-3 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <div>
                    <p className="text-sm font-bold">Trusted Since 1995</p>
                    <p className="text-xs text-muted-foreground">30+ Years of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats and Info */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {/* Stat Card 1 */}
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center">
                <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-3xl md:text-4xl font-bold text-primary mb-1">10+</p>
                <p className="text-sm text-muted-foreground font-medium">Equipped Facilities</p>
              </div>

              {/* Stat Card 2 */}
              <div className="bg-secondary/5 border border-secondary/20 rounded-xl p-6 text-center">
                <Heart className="w-8 h-8 text-secondary mx-auto mb-2" />
                <p className="text-3xl md:text-4xl font-bold text-secondary mb-1">10+</p>
                <p className="text-sm text-muted-foreground font-medium">Treatment Rooms</p>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-bold text-xl mb-4 text-foreground flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Scenic Location
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our hospital is uniquely positioned against the Historic Verdant Mountain Range of the Kingdom of Seethawaka, providing a serene healing environment that promotes natural recovery and peace of mind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
