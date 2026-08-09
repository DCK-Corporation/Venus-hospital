import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Shield, Users } from "lucide-react";

export function AboutPreview() {
  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 via-muted/40 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                About Us
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Your Healthcare Partner in Avissawella
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Venus Hospital is a private healthcare facility located in Avissawella,
              Colombo, Sri Lanka, committed to delivering trusted, compassionate, and
              patient-centered medical care.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our hospital is designed with patient comfort, safety, and convenience in mind.
              Supported by skilled doctors, experienced nurses, and dedicated support staff,
              we combine modern medical technology with personalized care.
            </p>
            <Button asChild className="group">
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-xl shadow-card border border-border space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg">Compassionate Care</h3>
              <p className="text-sm text-muted-foreground">
                We believe healthcare should be accessible and delivered with empathy.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-card border border-border space-y-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-heading font-semibold text-lg">Patient Safety</h3>
              <p className="text-sm text-muted-foreground">
                Modern medical technology with strict safety standards.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-card border border-border space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg">Expert Team</h3>
              <p className="text-sm text-muted-foreground">
                Skilled doctors and experienced nursing staff ready to help.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary to-secondary p-6 rounded-xl text-white space-y-4">
              <div className="text-3xl font-heading font-bold">24/7</div>
              <h3 className="font-heading font-semibold text-lg">Always Available</h3>
              <p className="text-sm text-white/80">
                Emergency and OPD services round the clock.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
