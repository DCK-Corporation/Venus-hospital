import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, MapPin, Clock } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="py-20 gradient-hero text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-72 h-72 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute bottom-10 left-20 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
            <Clock className="h-4 w-4" />
            <span>We're Here 24/7</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Need Medical Assistance?
          </h2>
          <p className="text-lg text-white/90 max-w-xl mx-auto">
            Visit Venus Hospital or contact us for OPD services, doctor channeling,
            diagnostics, and comprehensive medical care—all in one trusted location.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
              <Link to="/appointments">
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white bg-white/10 hover:bg-white/20 font-semibold">
              <a href="tel:+94112345678">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white bg-white/10 hover:bg-white/20 font-semibold">
              <Link to="/contact">
                <MapPin className="mr-2 h-5 w-5" />
                Get Directions
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
