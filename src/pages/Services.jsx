import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookingModal } from "@/components/BookingModal";
import {
  ArrowRight,
  Loader2,
} from "lucide-react";
import { servicesApi } from "@/lib/api";

const localServices = [
  {
    title: "8 a.m - 8 p.m OPD Services",
    description: "Round-the-clock outpatient care with qualified doctors",
    link: "/services/opd",
    image: "https://res.cloudinary.com/doqyzcyl5/image/upload/v1767678737/IMG_6030_ibrvko.jpg",
  },
  {
    title: "Operation Theatre",
    description: "Modern surgical facilities for various procedures",
    link: "/services/surgery",
    image: "https://res.cloudinary.com/doqyzcyl5/image/upload/v1770487301/Operation_T_2_gclq2x.jpg",
  },
  {
    title: "Rooms & Wards",
    description: "Comfortable inpatient care facilities",
    link: "/services/rooms",
    image: "https://res.cloudinary.com/doqyzcyl5/image/upload/v1767677162/IMG_5988_xixvdk.jpg",
  },
  {
    title: "Eye Care Unit",
    description: "Comprehensive eye diagnostics and treatments",
    link: "/services/eye-care",
    image: "https://res.cloudinary.com/doqyzcyl5/image/upload/v1767678731/IMG_5709_nkjcnb.jpg",
  },
  {
    title: "Hearing Unit",
    description: "Professional hearing assessments and support",
    link: "/services/hearing",
    image: "https://res.cloudinary.com/doqyzcyl5/image/upload/v1770487879/AdobeStock_1822017679_lzxzjx.jpg",
  },
  {
    title: "Optical Services",
    description: "Vision correction and eyewear solutions",
    link: "/eye-care",
    image: "https://res.cloudinary.com/doqyzcyl5/image/upload/v1767678739/IMG_6062_bext85.jpg",
  },
  {
    title: "Diagnostics",
    description: "X-ray, ECG, and 2D Echo services",
    link: "/services/diagnostics",
    image: "https://res.cloudinary.com/doqyzcyl5/image/upload/v1767678731/IMG_5728_qguyl3.jpg",
  },
  {
    title: "Laboratory",
    description: "Wide range of medical tests with accuracy",
    link: "/services/laboratory",
    image: "https://res.cloudinary.com/doqyzcyl5/image/upload/v1767678731/IMG_5764_bmwnho.jpg",
  },
  {
    title: "Dental Care",
    description: "Complete dental health services",
    link: "/services/dental",
    image: "https://res.cloudinary.com/doqyzcyl5/image/upload/v1767678732/IMG_5778_h08sjs.jpg",
  },
  {
    title: "Pharmacy",
    description: "On-site pharmacy for prescribed medications",
    link: "/services/pharmacy",
    image: "https://res.cloudinary.com/doqyzcyl5/image/upload/v1767678733/IMG_5876_xjlmsd.jpg",
  },
  {
    title: "Accessibility",
    description: "Wheelchair access and dedicated parking",
    link: "/services/accessibility",
    image: "https://res.cloudinary.com/doqyzcyl5/image/upload/v1767678739/IMG_6006_qtowem.jpg",
  },

  {
    title: "Skin Clinic",
    description: "The best skin care services in Avissawella",
    link: "/services/skinclinic",
    image: "https://res.cloudinary.com/doqyzcyl5/image/upload/v1770487300/skin-care-routine-2-scaled_pvntyt.webp",
  },
];

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await servicesApi.list();
        setServices(data && data.length > 0 ? data : localServices);
      } catch (error) {
        console.error("Error fetching services:", error);
        setServices(localServices);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <nav className="text-sm text-white/70 mb-4">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span> / </span>
              <span className="text-white">Our Services</span>
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

      {/* Services Grid */}
      <section className="py-20 bg-muted">
        <div className="mx-16 px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-4">
              Complete Healthcare Solutions
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Venus Hospital offers a wide range of medical services under one roof—designed
              to meet everyday healthcare needs as well as specialized medical care.
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-10 w-10 animate-spin text-primary" />
            </div>
          ) : (
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Link
                  key={service.title}
                  to={service.link}
                  className="group relative rounded-2xl overflow-hidden min-h-[380px] flex flex-col justify-end shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                  {/* Content */}
                  <div className="relative z-10 p-6">
                    <h3 className="font-heading font-bold text-xl text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-white/80 mb-4 line-clamp-2">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center text-sm text-primary font-semibold group-hover:text-white transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Why Choose Venus Hospital?
            </h2>
            <p className="text-muted-foreground mb-8">
              We combine modern facilities with compassionate care to deliver healthcare services
              that prioritize your well-being and comfort.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="p-6 bg-muted/50 rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <p className="text-sm text-muted-foreground">Emergency & OPD Services</p>
              </div>
              <div className="p-6 bg-muted/50 rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2">11+</div>
                <p className="text-sm text-muted-foreground">Medical Services</p>
              </div>
              <div className="p-6 bg-muted/50 rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2">Expert</div>
                <p className="text-sm text-muted-foreground">Medical Professionals</p>
              </div>
            </div>
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
            <BookingModal size="lg" />
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
