import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookingModal } from "@/components/BookingModal";
import { Phone, Stethoscope, Bed, Eye, MapPin, Heart, Users, Shield, Award } from "lucide-react";

export function InternationalSection() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary via-primary/90 to-primary overflow-hidden">
      {/* Animated Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px',
          animation: 'float 20s ease-in-out infinite'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm font-semibold text-white mb-5 hover:bg-white/30 transition-all">
            <Heart className="h-4 w-4" />
            <span>Compassionate Healthcare in Avissawella</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 font-heading text-white">
            Premium Indoor Patient Care
          </h2>
          <p className="text-base md:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            Experience healing in comfort with our modern facilities set against the scenic beauty of the Verdha Mountain Range
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          {/* Image with Overlay Card */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="https://res.cloudinary.com/doqyzcyl5/image/upload/v1767678737/IMG_5974_xmhbb5.jpg"
                alt="Indoor Patient Care at Venus Hospital"
                className="w-full h-[400px] md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            {/* Feature Cards */}
            <div className="grid gap-5">
              {/* Comfortable Rooms */}
              <div className="bg-white/95 backdrop-blur-sm border border-white/40 rounded-lg p-6 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-all duration-300">
                    <Bed className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2 text-gray-900">Comfortable Rooms & Wards</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Spaciously furnished rooms with complete privacy, beautiful view of town to Sri Pada mountain range
                    </p>
                  </div>
                </div>
              </div>
            
              {/* Expert Care */}
              <div className="bg-white/95 backdrop-blur-sm border border-white/40 rounded-lg p-6 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-all duration-300">
                    <Stethoscope className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2 text-gray-900">Expert Medical Team</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Highly skilled nursing staff supervised by skill fully qualified senior nurses providing kindhearted service
                    </p>
                  </div>
                </div>
              </div>

              {/* Eye Care Excellence */}
              <div className="bg-white/95 backdrop-blur-sm border border-white/40 rounded-lg p-6 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-all duration-300">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2 text-gray-900">Eye Care Excellence</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      <span className="font-semibold text-primary">5,000+</span> successful cataract and other eye surgeries performed with precision and care
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <BookingModal
                size="lg"
                className="bg-white text-primary hover:bg-white/90 h-14 text-base font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                triggerText="Book Appointment"
              />
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-primary hover:bg-white hover:text-primary h-14 text-base font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <a href="tel:+94362222096" className="flex items-center justify-center gap-2">
                  <Phone className="h-5 w-5" />
                  <span>036 2222 096</span>
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="bg-white/95 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:scale-110 hover:rotate-2 transition-all duration-300 hover:shadow-2xl">
            <Users className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="text-3xl md:text-4xl font-bold text-primary mb-1">20 000+</p>
            <p className="text-sm text-gray-600 font-medium">Patients</p>
          </div>

          <div className="bg-white/95 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:scale-110 hover:rotate-2 transition-all duration-300 hover:shadow-2xl delay-100">
            <Stethoscope className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="text-3xl md:text-4xl font-bold text-primary mb-1">40+</p>
            <p className="text-sm text-gray-600 font-medium">Specialist Doctors</p>
          </div>

          <div className="bg-white/95 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:scale-110 hover:rotate-2 transition-all duration-300 hover:shadow-2xl delay-200">
            <Bed className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="text-3xl md:text-4xl font-bold text-primary mb-1">20+</p>
            <p className="text-sm text-gray-600 font-medium">Patient Rooms</p>
          </div>

          <div className="bg-white/95 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:scale-110 hover:rotate-2 transition-all duration-300 hover:shadow-2xl delay-300">
            <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="text-3xl md:text-4xl font-bold text-primary mb-1">14+</p>
            <p className="text-sm text-gray-600 font-medium">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
