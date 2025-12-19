import { Target, Compass, Heart, Shield, Users, Scale, Building } from "lucide-react";

const values = [
  { icon: Heart, label: "Compassion & Respect" },
  { icon: Target, label: "Medical Excellence" },
  { icon: Scale, label: "Ethical Practice" },
  { icon: Shield, label: "Patient Safety" },
  { icon: Building, label: "Community Responsibility" },
];

export function VisionMissionSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
            Our Foundation
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-4">
            Vision, Mission & Values
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Vision */}
          <div className="bg-gradient-to-br from-primary to-primary/80 p-8 rounded-2xl text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <Compass className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-heading font-bold">Our Vision</h3>
            </div>
            <p className="text-white/90 leading-relaxed text-lg">
              To be the most trusted community hospital in the region, delivering
              high-quality healthcare with compassion and integrity.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-gradient-to-br from-secondary to-secondary/80 p-8 rounded-2xl text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-heading font-bold">Our Mission</h3>
            </div>
            <p className="text-white/90 leading-relaxed text-lg">
              To provide accessible, affordable, and comprehensive medical services
              through skilled professionals, modern facilities, and patient-focused care.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="bg-card border border-border rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-foreground">Our Values</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {values.map((value) => (
              <div
                key={value.label}
                className="flex items-center gap-3 p-4 bg-muted rounded-xl"
              >
                <value.icon className="h-5 w-5 text-primary shrink-0" />
                <span className="font-medium text-foreground text-sm">{value.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
