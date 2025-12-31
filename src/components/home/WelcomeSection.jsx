import { Heart, Shield, Clock, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "Patient-centered healthcare with empathy and dedication",
  },
  {
    icon: Shield,
    title: "Quality Services",
    description: "Modern facilities meeting highest medical standards",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock emergency and OPD services",
  },
];

export function WelcomeSection() {
  return (
    <section className="py-16 -mt-16 md:py-20 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-primary mb-4">
            <Heart className="h-4 w-4" />
            <span>Since 1999</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-heading">
           Trusted Care, Compassionate Healing.
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Venus Hospital is your reliable first point of contact for quality healthcare
              in Avissawella. We provide round-the-clock OPD services supported by experienced
              doctors, modern medical facilities, and a commitment to compassionate healing.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-xl bg-card border border-border p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <div className="w-14 h-14 mb-4 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 font-heading">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl p-8 backdrop-blur-sm">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/50" />
              <span className="font-medium text-foreground">24/7 Emergency Available</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-border" />
            <div className="flex items-center gap-2 text-foreground">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="font-medium">Experienced Doctors</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-border" />
            <div className="flex items-center gap-2 text-foreground">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="font-medium">Modern Facilities</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-border" />
            <div className="flex items-center gap-2 text-foreground">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="font-medium">Trusted by Community</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
