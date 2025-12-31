import ServicePageLayout from "@/components/services/ServicePageLayout";
import { Stethoscope } from "lucide-react";

const OPDServices = () => {
  return (
    <ServicePageLayout
      title="Doctor Channeling & OPD"
      subtitle="Round-the-clock outpatient care with qualified doctors"
      icon={Stethoscope}
      description="Our Outpatient Department (OPD) operates 24 hours a day, 7 days a week, making Venus Hospital a dependable first point of contact for medical care in Avissawella. All the Medical Consultants from Avissawella Base Hospital and a number of famous & popular consultants in the island are covering the entire channelling service. Whether you need routine check-ups, specialist consultations, or urgent care, our dedicated team is always ready to assist you."
      features={[
        "24/7 availability for emergencies",
        "Medical Consultants from Avissawella Base Hospital",
        "Famous & popular consultants from across the island",
      ]}
      additionalInfo={[
        {
          title: "How It Works",
          content: "Simply walk in or book an appointment through our reception. Our staff will guide you to the appropriate doctor based on your needs. For specialist consultations, we recommend booking in advance to secure your preferred time slot.",
        },
        {
          title: "Highly Qualified Medical Consultants",
          content: "All the Medical Consultants from Avissawella Base Hospital and a number of famous & popular consultants in the island are covering the entire channelling service. We offer consultations with specialists in various fields including general medicine, pediatrics, gynecology, orthopedics, and more, ensuring you receive expert care from highly qualified professionals.",
        },
      ]}
      relatedServices={[
        { name: "Laboratory Services", link: "/services/laboratory" },
        { name: "Diagnostic Services", link: "/services/diagnostics" },
        { name: "Pharmacy", link: "/services/pharmacy" },
      ]}
    />
  );
};

export default OPDServices;
