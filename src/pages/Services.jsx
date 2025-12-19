import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Stethoscope,
  Eye,
  Ear,
  Glasses,
  Activity,
  FlaskConical,
  Pill,
  Bed,
  Scissors,
  Accessibility,
  Smile,
  Calendar,
  CheckCircle
} from "lucide-react";

const services = [
  {
    id: "opd",
    icon: Stethoscope,
    title: "Doctor Channeling & 24/7 OPD Services",
    description: "Our Outpatient Department (OPD) operates 24 hours a day, making Venus Hospital a dependable first point of contact for medical care. Patients can consult qualified General Practitioners and specialist doctors for prompt diagnosis, treatment, and follow-up care.",
    features: ["24/7 availability", "Qualified doctors", "Minimal waiting time", "Walk-in & appointments"],
  },
  {
    id: "surgery",
    icon: Scissors,
    title: "Modern Operation Theatre",
    description: "Venus Hospital features a fully equipped, modern operation theatre designed to meet strict medical and safety standards. Our surgical team follows internationally accepted protocols, supported by advanced equipment and a sterile environment.",
    features: ["Cataract surgeries", "Cesarean sections", "General surgical procedures", "Sterile environment"],
  },
  {
    id: "rooms",
    icon: Bed,
    title: "Comfortable Rooms & Wards",
    description: "Patient comfort and recovery are at the heart of our inpatient care. Venus Hospital provides clean, well-maintained rooms and wards designed to create a calm and healing environment.",
    features: ["Comfortable bedding", "Clean surroundings", "Attentive nursing care", "Visitor access"],
  },
  {
    id: "eye-care",
    icon: Eye,
    title: "Complete Eye Care Unit",
    description: "Our comprehensive Eye Unit delivers advanced diagnostic and treatment services for a wide range of eye conditions. Equipped with modern technology, the unit supports accurate diagnosis and effective treatment.",
    features: ["Visual Field Testing", "OCT", "Biometry", "Cataract management"],
  },
  {
    id: "hearing",
    icon: Ear,
    title: "Hearing Care Unit",
    description: "The Hearing Unit at Venus Hospital provides professional hearing assessments and support services. We assist patients in identifying hearing-related conditions and guide them toward appropriate treatment.",
    features: ["Hearing assessments", "Professional consultation", "Treatment guidance", "All ages welcome"],
  },
  {
    id: "optical",
    icon: Glasses,
    title: "Optical Services",
    description: "Our in-house optical services provide convenient access to vision correction solutions following eye examinations. Patients can receive guidance on suitable eyewear, ensuring comfort, clarity, and eye protection.",
    features: ["Vision correction", "Eyewear guidance", "Complete care", "Quality products"],
    link: "/eye-care",
  },
  {
    id: "diagnostics",
    icon: Activity,
    title: "Advanced Diagnostic Services",
    description: "Venus Hospital offers reliable diagnostic facilities to support accurate medical evaluations. Our diagnostic services assist doctors in early detection, monitoring, and effective treatment planning.",
    features: ["Digital X-ray", "ECG", "2D Echocardiography", "Accurate results"],
  },
  {
    id: "laboratory",
    icon: FlaskConical,
    title: "Laboratory Services",
    description: "Our fully equipped laboratory provides a wide range of medical tests with accuracy and efficiency. We adhere to strict quality standards to ensure reliable test results that support timely clinical decisions.",
    features: ["Wide test range", "Quality standards", "Timely results", "OPD & inpatient"],
  },
  {
    id: "dental",
    icon: Smile,
    title: "Complete Dental Care",
    description: "Venus Hospital offers comprehensive dental services delivered by qualified dental professionals. Our dental care focuses on both preventive and restorative treatments to maintain oral health.",
    features: ["Routine check-ups", "Dental treatments", "Oral hygiene education", "Qualified dentists"],
  },
  {
    id: "pharmacy",
    icon: Pill,
    title: "In-House Pharmacy",
    description: "Our on-site pharmacy ensures easy access to prescribed medications for both OPD and inpatient care. The pharmacy is managed by trained professionals and stocked with essential medicines.",
    features: ["Essential medicines", "Trained pharmacists", "OPD & inpatient", "Convenient access"],
  },
  {
    id: "accessibility",
    icon: Accessibility,
    title: "Patient-Friendly Accessibility",
    description: "Venus Hospital is designed to be accessible and convenient for all patients. We provide wheelchair access throughout the hospital and dedicated parking facilities for a stress-free visit.",
    features: ["Wheelchair access", "Dedicated parking", "Elderly-friendly", "Easy navigation"],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <nav className="text-sm text-white/70 mb-4">
              <span>Home</span> / <span className="text-white">Our Services</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Our Medical Services
            </h1>
            <p className="text-lg text-white/90">
              Comprehensive healthcare services under one roof, delivered with professionalism and compassion.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`scroll-mt-32 ${index % 2 === 0 ? '' : ''}`}
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-foreground">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {service.link && (
                      <Button asChild>
                        <Link to={service.link}>
                          View Optical Products
                        </Link>
                      </Button>
                    )}
                  </div>
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-12 flex items-center justify-center">
                      <service.icon className="h-32 w-32 text-primary/30" />
                    </div>
                  </div>
                </div>
                {index < services.length - 1 && (
                  <div className="border-t border-border mt-16" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
            Need Any of Our Services?
          </h2>
          <p className="text-muted-foreground mb-6">
            Book an appointment or visit our 24/7 OPD for immediate assistance.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/appointments">
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
