import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Loader2, Stethoscope } from "lucide-react";
import { servicesApi } from "@/lib/api";

export function ServicesGrid() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    servicesApi
      .list()
      .then(setServices)
      .catch((err) => console.error("Error fetching services:", err))
      .finally(() => setLoading(false));
  }, []);

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

        {loading ? (
          <div className="flex justify-center py-10">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                to={service.link}
                className="group bg-card p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 overflow-hidden group-hover:bg-primary group-hover:text-white transition-colors">
                  {service.image ? (
                    <img src={service.image} alt="" className="w-full h-full object-cover" />
                  ) : (
                    <Stethoscope className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                  )}
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
        )}

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
