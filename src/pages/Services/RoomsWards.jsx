import ServicePageLayout from "@/components/services/ServicePageLayout";
import { Bed } from "lucide-react";

const RoomsWards = () => {
  return (
    <ServicePageLayout
      title="Rooms & Wards"
      subtitle="Comfortable inpatient care facilities"
      icon={Bed}
      description="Patient comfort and recovery are at the heart of our inpatient care. Venus Hospital provides clean, well-maintained rooms and wards designed to create a calm and healing environment. The perpetual vigilance and the diligence of a cadre of specially trained and highly skilled nursing staff backed, supervised and trained by government experienced senior nursing staff is delivering a kindhearted and friendly service till you become totally healthy."
      features={[
        "Spaciously furnished comfortable rooms",
        "Tailor made to protect your privacy",
        "Historic Verdha Mountain Range views",
        "Scenic tranquility of appealing environs",
        "Natural healing environment",
        "Specially trained and highly skilled nursing staff",
        "Supervised by government experienced senior nurses",
        "Kindhearted and friendly service",
        "24/7 nursing care with perpetual vigilance",
      ]}
      additionalInfo={[
        {
          title: "Scenic Comfort & Natural Healing",
          content: "Our spaciously furnished comfortable rooms are tailor made to protect your privacy, facing the Historic Verdha Mountain Range touching your eyes right at your front of Kingdom of Seethawaka. These rooms will cure you with the blessings of Nature. While being mingled with the scenic tranquility of the appealing environs, you will certainly be cured with a shorter time, accompanied by the kindest hospitality of our medical and nursing staff.",
        },
        {
          title: "Exceptional Nursing Care",
          content: "The perpetual vigilance and the diligence of a cadre of specially trained and highly skilled nursing staff backed, supervised and trained by government experienced senior nursing staff is delivering a kindhearted and friendly service till you become totally healthy. Our nursing care creates memorable experiences that will not fade away from the minds of your family members and your relatives.",
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
