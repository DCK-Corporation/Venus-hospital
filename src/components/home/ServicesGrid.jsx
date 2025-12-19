import { Link } from "react-router-dom";
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
  Smile
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "24/7 OPD Services",
    description: "Round-the-clock outpatient care with qualified doctors",
    link: "/services#opd",
  },
  {
    icon: Scissors,
    title: "Operation Theatre",
    description: "Modern surgical facilities for various procedures",
    link: "/services#surgery",
  },
  {
    icon: Bed,
    title: "Rooms & Wards",
    description: "Comfortable inpatient care facilities",
    link: "/services#rooms",
  },
  {
    icon: Eye,
    title: "Eye Care Unit",
    description: "Comprehensive eye diagnostics and treatments",
    link: "/services#eye-care",
  },
  {
    icon: Ear,
    title: "Hearing Unit",
    description: "Professional hearing assessments and support",
    link: "/services#hearing",
  },
  {
    icon: Glasses,
    title: "Optical Services",
    description: "Vision correction and eyewear solutions",
    link: "/eye-care",
  },
  {
    icon: Activity,
    title: "Diagnostics",
    description: "X-ray, ECG, and 2D Echo services",
    link: "/services#diagnostics",
  },
  {
    icon: FlaskConical,
    title: "Laboratory",
    description: "Wide range of medical tests with accuracy",
    link: "/services#laboratory",
  },
  {
    icon: Smile,
    title: "Dental Care",
    description: "Complete dental health services",
    link: "/services#dental",
  },
  {
    icon: Pill,
    title: "Pharmacy",
    description: "On-site pharmacy for prescribed medications",
    link: "/services#pharmacy",
  },
  {
    icon: Accessibility,
    title: "Accessibility",
    description: "Wheelchair access and dedicated parking",
    link: "/services#accessibility",
  },
];

export function ServicesGrid() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-4">
            Our Medical Services
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Venus Hospital offers a wide range of medical services under one roof—designed
            to meet everyday healthcare needs as well as specialized medical care.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.link}
              className="group bg-card p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <service.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            className="text-primary font-medium hover:underline"
          >
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  );
}
