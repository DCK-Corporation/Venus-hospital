import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center z-10">
        <div className="max-w-2xl text-primary-foreground">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-heading">
            Welcome to Venus Hospital
          </h1>
          <p className="text-lg md:text-xl mb-2 opacity-90">
            Trusted Healthcare in Avissawella
          </p>
          <p className="text-base md:text-lg mb-8 opacity-80">
            Providing round-the-clock medical care with experienced doctors and modern facilities since 1995.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8">
              <Link to="/appointments">
                <Calendar className="mr-2 h-5 w-5" />
                Book an Appointment
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8">
              <Link to="/services">
                Explore Services
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" className="w-full h-auto fill-background">
          <path d="M0,50 C360,100 720,0 1080,50 C1260,75 1380,75 1440,50 L1440,100 L0,100 Z" />
        </svg>
      </div>
    </section>
  );
}
