import { Layout } from "@/components/layout/Layout";
import { Shield, CheckCircle, Phone, Mail, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden transition-shadow hover:shadow-md">
      <button
        className="w-full text-left flex items-center justify-between gap-4 p-5 bg-card hover:bg-muted/40 transition-colors"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        <span className="font-semibold text-foreground text-sm md:text-base leading-snug">{question}</span>
        {open ? (
          <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-5 pb-5 pt-2 bg-card border-t border-border">
          <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{answer}</p>
        </div>
      )}
    </div>
  );
}

const insurancePartners = [
  // Government / Semi-Government
  "Agrahara Insurance",
  "Suraksha Insurance",
  // Private Providers
  "Softlogic Life Insurance",
  "SLIC (Sri Lanka Insurance Corporation)",
  "Sanasa Life Insurance",
  "Fairfirst Insurance",
  "HNB Assurance PLC (Medilink)",
  "AIA Insurance",
  "Union Assurance",
  "Arpico Insurance",
  "Orient Insurance",
];

const Insurance = () => {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <nav className="text-sm text-white/70 mb-4">
              <span>Home</span> / <span className="text-white">Insurance</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Insurance Services
            </h1>
            <p className="text-lg text-white/90">
              We work with major insurance providers to make healthcare accessible
            </p>
          </div>
        </div>
      </section>

      {/* Insurance Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                Insurance Partners
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-4 mb-4">
                Accepted Insurance Providers
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Venus Hospital accepts a wide range of insurance plans to ensure you receive
                the care you need without financial stress. We are partnered with leading
                insurance providers in Sri Lanka.
              </p>
            </div>

            {/* Insurance Partners Grid */}
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {insurancePartners.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-card border border-border rounded-lg p-4"
                >
                  <Shield className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{partner}</span>
                </div>
              ))}
            </div>

            {/* Information Card */}
            <div className="bg-muted/30 rounded-xl p-8 mb-12">
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                How to Use Your Insurance
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Bring your insurance card and a valid ID when visiting the hospital
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Inform our front desk staff about your insurance coverage before treatment
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    We will verify your coverage and process claims directly with your provider
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    For any co-payments or non-covered services, our billing team will assist you
                  </span>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                Need Help with Insurance?
              </h3>
              <p className="text-muted-foreground mb-6">
                Our billing department is here to help you understand your coverage
                and answer any insurance-related questions.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                <a
                  href="tel:+94362222096"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <Phone className="w-4 h-4" />
                  036 2222 096
                </a>
                <a
                  href="tel:+94362222064"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <Phone className="w-4 h-4" />
                  036 2222 064
                </a>
                <a
                  href="mailto:venushospitalward@gmail.com"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <Mail className="w-4 h-4" />
                  venushospitalward@gmail.com
                </a>
              </div>
              <Button asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance FAQ */}
      <section className="py-14 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-heading font-bold text-foreground">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground mt-2 text-sm">
                Common questions about our insurance services
              </p>
            </div>
            <div className="space-y-3">
              <FAQItem
                question="Do you accept medical insurance?"
                answer={`Yes, we work with a wide range of partners for both hospital services and optical needs.

Government/Semi-Government: Agrahara and Suraksha.

Private Providers: Softlogic Life, SLIC (Sri Lanka Insurance), Sanasa Life, Fairfirst, HNB Assurance (under Medilink), AIA, Union Assurance, Arpico Insurance, and Orient Insurance.`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            <strong>Note:</strong> Insurance coverage varies depending on your policy.
            Please contact your insurance provider or our billing department to confirm
            coverage for specific services before your visit.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Insurance;
