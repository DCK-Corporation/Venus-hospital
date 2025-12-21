import ServicePageLayout from "@/components/services/ServicePageLayout";
import { Stethoscope } from "lucide-react";

const OPDServices = () => {
  return (
    <ServicePageLayout
      title="Doctor Channeling & OPD"
      subtitle="Round-the-clock outpatient care with qualified doctors"
      icon={Stethoscope}
      description="Our Outpatient Department (OPD) operates 24 hours a day, 7 days a week, making Venus Hospital a dependable first point of contact for medical care in Avissawella. Patients can consult qualified General Practitioners and specialist doctors for prompt diagnosis, treatment, and follow-up care. Whether you need routine check-ups, medical consultations, or urgent care, our dedicated team is always ready to assist you."
      features={[
        "24/7 availability for emergencies",
        "Qualified and experienced doctors",
        "Minimal waiting time",
        "Walk-in and appointment options",
        "General medical consultations",
        "Specialist doctor channeling",
        "Follow-up care management",
        "Health screening services",
      ]}
      additionalInfo={[
        {
          title: "How It Works",
          content: "Simply walk in or book an appointment through our reception. Our staff will guide you to the appropriate doctor based on your needs. For specialist consultations, we recommend booking in advance to secure your preferred time slot.",
        },
        {
          title: "Available Specialties",
          content: "We offer consultations with specialists in various fields including general medicine, pediatrics, gynecology, orthopedics, and more. Our doctors are committed to providing comprehensive care tailored to your health needs.",
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
