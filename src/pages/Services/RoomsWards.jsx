import ServicePageLayout from "@/components/services/ServicePageLayout";
import { Bed } from "lucide-react";

const RoomsWards = () => {
  return (
    <ServicePageLayout
      title="Rooms & Wards"
      subtitle="Comfortable inpatient care facilities"
      icon={Bed}
      description="Patient comfort and recovery are at the heart of our inpatient care. Venus Hospital provides clean, well-maintained rooms and wards designed to create a calm and healing environment. Our nursing staff ensures round-the-clock care and attention to help patients recover comfortably and safely."
      features={[
        "Clean and comfortable rooms",
        "Well-maintained wards",
        "24/7 nursing care",
        "Regular housekeeping",
        "Visitor-friendly hours",
        "Patient call systems",
        "Comfortable bedding",
        "Hygienic environment",
      ]}
      additionalInfo={[
        {
          title: "Room Facilities",
          content: "Our rooms are designed with patient comfort in mind. Each room is equipped with essential amenities and maintained to high cleanliness standards. We ensure a peaceful environment conducive to rest and recovery.",
        },
        {
          title: "Nursing Care",
          content: "Our dedicated nursing team provides compassionate care around the clock. They monitor patient progress, administer medications, assist with daily needs, and ensure communication with attending physicians for optimal recovery.",
        },
      ]}
      relatedServices={[
        { name: "Operation Theatre", link: "/services/surgery" },
        { name: "Pharmacy", link: "/services/pharmacy" },
        { name: "OPD Services", link: "/services/opd" },
      ]}
    />
  );
};

export default RoomsWards;
