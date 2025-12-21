import ServicePageLayout from "@/components/services/ServicePageLayout";
import { Pill } from "lucide-react";

const Pharmacy = () => {
  return (
    <ServicePageLayout
      title="In-House Pharmacy"
      subtitle="On-site pharmacy for prescribed medications"
      icon={Pill}
      description="Our on-site pharmacy ensures easy access to prescribed medications for both OPD and inpatient care. The pharmacy is managed by trained professionals and stocked with essential medicines. We provide convenient access to quality medications right within the hospital premises, making it easier for patients to obtain their prescriptions."
      features={[
        "Wide range of medicines",
        "Trained pharmacists",
        "Prescription fulfillment",
        "OTC medications available",
        "Quality assured products",
        "Medication counseling",
        "Convenient location",
        "Extended operating hours",
      ]}
      additionalInfo={[
        {
          title: "Quality Medications",
          content: "Our pharmacy stocks medications from reputable pharmaceutical companies. All products are stored properly to maintain their efficacy, and our pharmacists ensure that patients receive the correct medications as prescribed by their doctors.",
        },
        {
          title: "Pharmacist Consultation",
          content: "Our trained pharmacists are available to answer questions about medications, including proper usage, potential side effects, and drug interactions. We believe in empowering patients with knowledge for safe and effective medication use.",
        },
      ]}
      relatedServices={[
        { name: "OPD Services", link: "/services/opd" },
        { name: "Laboratory Services", link: "/services/laboratory" },
        { name: "Rooms & Wards", link: "/services/rooms" },
      ]}
    />
  );
};

export default Pharmacy;
