import { Layout } from "@/components/layout/Layout";
import { Heart, Shield, Users, Target, Compass, Scale, Building, CheckCircle } from "lucide-react";

const values = [
  { icon: Heart, label: "Compassion & Respect", description: "We treat every patient with dignity and understanding" },
  { icon: Target, label: "Medical Excellence", description: "Committed to the highest standards of healthcare" },
  { icon: Scale, label: "Ethical Practice", description: "Integrity in all our medical decisions and actions" },
  { icon: Shield, label: "Patient Safety", description: "Your safety is our top priority in every procedure" },
  { icon: Building, label: "Community Responsibility", description: "Dedicated to serving the Avissawella community" },
];

const highlights = [
  "24/7 Emergency and OPD Services",
  "Experienced and Qualified Medical Staff",
  "Modern Medical Equipment and Facilities",
  "Patient-Centered Care Approach",
  "Affordable Healthcare Services",
  "Convenient Location with Easy Access",
  "Comprehensive Range of Medical Services",
  "Clean and Hygienic Environment",
];

const About = () => {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <nav className="text-sm text-white/70 mb-4">
              <span>Home</span> / <span className="text-white">About Us</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              About Venus Hospital
            </h1>
            <p className="text-lg text-white/90">
              Your trusted healthcare partner in Avissawella since day one
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-4">
                About Venus Hospital
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-lg leading-relaxed">
                Venus Hospital is a private healthcare facility located in Avissawella,
                Colombo, Sri Lanka, committed to delivering trusted, compassionate, and
                patient-centered medical care. As a leading first-contact healthcare provider
                in the region, our Outpatient Department (OPD) operates 24 hours a day,
                ensuring that patients receive timely medical attention whenever it is needed.
              </p>
              <p className="text-lg leading-relaxed">
                Our hospital is designed with patient comfort, safety, and convenience in mind.
                Supported by skilled doctors, experienced nurses, and dedicated support staff,
                we combine modern medical technology with personalized care to ensure the best
                possible outcomes for our community.
              </p>
              <p className="text-lg leading-relaxed font-medium text-foreground">
                At Venus Hospital, we believe healthcare should be accessible, reliable, and
                delivered with empathy—because every patient deserves care they can trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Vision */}
            <div className="bg-gradient-to-br from-primary to-primary/80 p-8 rounded-2xl text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center">
                  <Compass className="h-7 w-7" />
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
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center">
                  <Target className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-heading font-bold">Our Mission</h3>
              </div>
              <p className="text-white/90 leading-relaxed text-lg">
                To provide accessible, affordable, and comprehensive medical services
                through skilled professionals, modern facilities, and patient-focused care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
              What We Stand For
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-4">
              Our Core Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((value) => (
              <div
                key={value.label}
                className="bg-card p-6 rounded-xl border border-border shadow-card"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {value.label}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-4">
                What Makes Venus Hospital Different
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-3 bg-card p-4 rounded-lg border border-border"
                >
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-foreground font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
