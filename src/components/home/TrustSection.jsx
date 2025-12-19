import { Award, Clock, Users, Building } from "lucide-react";

const stats = [
  { icon: Clock, value: "24/7", label: "Emergency Services" },
  { icon: Users, value: "50+", label: "Medical Staff" },
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Building, value: "11", label: "Medical Services" },
];

export function TrustSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-4">
            Healthcare You Can Trust
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            At Venus Hospital, we take pride in serving the Avissawella community with
            integrity, professionalism, and compassion. Our commitment extends beyond
            treatment—we strive to build lasting relationships with patients and families.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-card p-8 rounded-xl border border-border text-center shadow-card"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-7 w-7 text-primary" />
              </div>
              <div className="text-3xl font-heading font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
