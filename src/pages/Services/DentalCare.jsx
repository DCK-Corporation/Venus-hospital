import ServicePageLayout from "@/components/services/ServicePageLayout";
import { Smile } from "lucide-react";

const DentalCare = () => {
  return (
    <ServicePageLayout
      title="Dental Care"
      subtitle="Complete dental health services"
      icon={Smile}
      description="Venus Hospital offers comprehensive dental services delivered by qualified dental professionals. Our dental care focuses on both preventive and restorative treatments to maintain oral health. From routine check-ups to dental treatments, we provide quality care in a comfortable and hygienic environment."
      features={[
        "Routine dental check-ups",
        "Teeth cleaning and scaling",
        "Dental fillings",
        "Tooth extractions",
        "Root canal treatment",
        "Oral hygiene education",
        "Gum disease treatment",
        "Dental consultations",
      ]}
      additionalInfo={[
        {
          title: "Preventive Dental Care",
          content: "Regular dental check-ups are essential for maintaining oral health. Our dental team provides thorough examinations, professional cleaning, and guidance on proper oral hygiene practices to prevent dental problems before they develop.",
        },
        {
          title: "Restorative Treatments",
          content: "When dental issues arise, our qualified dentists provide effective restorative treatments including fillings, extractions, and root canal therapy. We use modern techniques to ensure comfortable procedures and successful outcomes.",
        },
      ]}
      relatedServices={[
        { name: "OPD Services", link: "/services/opd" },
        { name: "Pharmacy", link: "/services/pharmacy" },
        { name: "Diagnostic Services", link: "/services/diagnostics" },
      ]}
    />
  );
};

export default DentalCare;
