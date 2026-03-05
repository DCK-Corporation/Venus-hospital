import ServicePageLayout from "@/components/services/ServicePageLayout";
import { Stethoscope } from "lucide-react";

const OPDServices = () => {
  return (
    <ServicePageLayout
      title="Doctor Channeling & OPD"
      subtitle="Round-the-clock outpatient care with qualified doctors"
      image="https://res.cloudinary.com/doqyzcyl5/image/upload/v1767678737/IMG_6030_ibrvko.jpg"
      icon={Stethoscope}
      description="Our Outpatient Department (OPD) operates 24 hours a day, 7 days a week, making Venus Hospital a dependable first point of contact for medical care in Avissawella. We have government certified medical professionals including consultants from Avissawella Base Hospital and renowned specialists from across the island covering the entire channelling service. Whether you need routine check-ups, specialist consultations, or urgent care, our dedicated team is always ready to assist you."
      features={[
        "24/7 availability for emergencies",
        "Government certified medical professionals",
        "Medical Consultants from Avissawella Base Hospital",
        "Renowned specialists from across the island",
        "Wound dressing and treatment",
      ]}
      additionalInfo={[
        {
          title: "How It Works",
          content: "Simply walk in or book an appointment through our reception. Our staff will guide you to the appropriate doctor based on your needs. For specialist consultations, we recommend booking in advance to secure your preferred time slot.",
        },
        {
          title: "Highly Qualified Medical Consultants",
          content: "We have government certified medical professionals including all the Medical Consultants from Avissawella Base Hospital and renowned specialists from across the island covering the entire channelling service. We offer consultations with specialists in various fields including general medicine, pediatrics, gynecology, orthopedics, and more, ensuring you receive expert care from highly qualified professionals.",
        },
      ]}
      relatedServices={[
        { name: "Laboratory Services", link: "/services/laboratory" },
        { name: "Diagnostic Services", link: "/services/diagnostics" },
        { name: "Pharmacy", link: "/services/pharmacy" },
      ]}
      faqs={[
        {
          question: "How do I book an appointment with a Specialist Consultant?",
          answer: "To book a visiting consultant, please call our reception at 036-2222096 or 036-2222064. To ensure your slot is reserved and to minimize waiting time, we highly recommend pre-booking via our dedicated booking line: +94 75 322 2101.",
        },
        {
          question: "Is the hospital accessible for elderly or disabled patients?",
          answer: "Yes. We have dedicated private parking on-site and the facility is equipped with elevator (lift) access to all floors for your convenience.",
        },
      ]}
    />
  );
};

export default OPDServices;
