import ServicePageLayout from "@/components/services/ServicePageLayout";
import { Smile } from "lucide-react";

const DentalCare = () => {
  return (
    <ServicePageLayout
      title="Dental Care & OMF Surgery"
      subtitle="Complete dental health and advanced surgical services"
      image="https://res.cloudinary.com/doqyzcyl5/image/upload/v1767678732/IMG_5778_h08sjs.jpg"
      icon={Smile}
      description="Ours is the only private hospital in Avissawella that performs Oral, Maxillofacial and Facial surgical operations. Our totally sterilized Dental surgery and the general operation theatres are available for all kinds of surgical procedures. Venus Hospital offers comprehensive dental services delivered by qualified dental professionals, from routine check-ups to advanced surgical treatments."
      features={[
        "Oral, Maxillofacial & Facial (OMF) surgical operations",
        "Only private hospital in Avissawella offering OMF surgery",
        "Totally sterilized Dental surgery theatre",
        "Routine dental check-ups",
        "Teeth cleaning and scaling",
        "Dental fillings",
        "Tooth extractions",
        "Root canal treatment",
        "Oral hygiene education",
        "Gum disease treatment",
        "Dental consultations",
        "Advanced surgical procedures",
      ]}
      additionalInfo={[
        {
          title: "Advanced OMF Surgical Services",
          content: "Venus Hospital is proud to be the only private hospital in Avissawella that performs Oral, Maxillofacial and Facial (OMF) surgical operations. Our totally sterilized dental surgery theatre and general operation theatres are equipped to handle all kinds of surgical procedures, ensuring the highest standards of safety and care.",
        },
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
        { name: "Operation Theatre", link: "/services/surgery" },
        { name: "OPD Services", link: "/services/opd" },
        { name: "Pharmacy", link: "/services/pharmacy" },
      ]}
      faqs={[
        {
          question: "What are the X-ray department's working hours?",
          answer: "The unit is open daily from 8:00 AM to 5:00 PM, offering both Digital X-rays and Dental X-rays.",
        },
        {
          question: "Do I need an appointment for Dental services?",
          answer: "For dental checkups or procedures, we recommend calling the main reception (036-2222096) to check the dentist's availability and secure a time slot.",
        },
      ]}
    />
  );
};

export default DentalCare;
