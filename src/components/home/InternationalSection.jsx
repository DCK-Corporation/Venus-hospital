import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, Plane, Building2, Heart, Languages, Award } from "lucide-react";

export function InternationalSection() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary via-primary to-primary/90 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <div className="text-primary-foreground order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Globe className="h-4 w-4" />
              <span>World-Class Healthcare</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-heading leading-tight">
              Indoor Patient Care
            </h2>

            <p className="text-lg md:text-xl mb-8 opacity-95 leading-relaxed">Venus Hospital offers spacious, comfortably furnished rooms designed to ensure complete privacy and relaxation for every patient. Set against the breathtaking backdrop of the Historic Verdant Mountain Range of the Kingdom of Seethawaka, our hospital environment promotes natural healing and peace of mind. The calming views and serene surroundings create the ideal atmosphere for a faster and more comfortable recovery.
              
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-colors">
                <Globe className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">VIP Rooms</h4>
                  <p className="text-sm opacity-90">Best Stays for VIP guests</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-colors">
                <Plane className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Travel Assistance</h4>
                  <p className="text-sm opacity-90">Complete travel coordination</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-colors">
                <Building2 className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Accommodation</h4>
                  <p className="text-sm opacity-90">Comfortable stay arrangements</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-colors">
                <Languages className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Multilingual Staff</h4>
                  <p className="text-sm opacity-90">Communication in your language</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all shadow-lg"
              >
                <Link to="/contact">Contact Reception</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all shadow-lg"
              >
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://res.cloudinary.com/doqyzcyl5/image/upload/v1767678737/IMG_5974_xmhbb5.jpg"
                alt="International Patient Care at Venus Hospital"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white text-primary p-6 rounded-xl shadow-2xl animate-pulse hidden md:block">
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-3xl font-bold">10+</p>
                  <p className="text-sm text-muted-foreground font-semibold">Fully Equipped Facilities</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white text-primary p-6 rounded-xl shadow-2xl hidden lg:block">
              <div className="flex items-center gap-3">
                <Heart className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-3xl font-bold">10+</p>
                  <p className="text-sm text-muted-foreground font-semibold">Indoor Treatment Rooms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
