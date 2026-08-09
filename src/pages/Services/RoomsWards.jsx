import ServicePageLayout from "@/components/services/ServicePageLayout";
import { ImageCarousel } from "@/components/ImageCarousel";
import { Bed } from "lucide-react";

const roomImages = [
  {
    url: "https://res.cloudinary.com/doqyzcyl5/image/upload/v1767677162/IMG_5988_xixvdk.jpg",
    alt: "Comfortable patient room with mountain view",
  },
  {
    url: "https://res.cloudinary.com/doqyzcyl5/image/upload/v1767678737/IMG_5974_xmhbb5.jpg",
    alt: "Patient ward with modern facilities",
  },

  {
    url: "https://res.cloudinary.com/doqyzcyl5/image/upload/v1767678735/IMG_5929_as8uj2.jpg",
    alt: "Modern rooms",
  },

  {
    url: "https://res.cloudinary.com/doqyzcyl5/image/upload/v1767678735/IMG_5952_pswdbd.jpg",
    alt: "Modern rooms",
  },

  {
    url: "https://res.cloudinary.com/doqyzcyl5/image/upload/v1767678736/IMG_5982_j3jypu.jpg",
    alt: "Modern rooms",
  },

  {
    url: "https://res.cloudinary.com/doqyzcyl5/image/upload/v1767678734/IMG_5956_vd7j8c.jpg",
    alt: "Modern rooms",
  },

  {
    url: "https://res.cloudinary.com/doqyzcyl5/image/upload/v1767678735/IMG_5925_dthfmc.jpg",
    alt: "Hospital corridor and facilities",
  },
];

const RoomsWards = () => {
  return (
    <ServicePageLayout
      title="Rooms & Wards"
      subtitle="Comfortable inpatient care facilities"
      icon={Bed}
      image={<ImageCarousel images={roomImages} />}
      description="Patient comfort and recovery are at the heart of our inpatient care. Venus Hospital provides clean, well-maintained rooms and wards designed to create a calm and healing environment. The perpetual vigilance and the diligence of a cadre of specially trained and highly skilled nursing staff backed, supervised and trained by government experienced senior nursing staff is delivering compassionate and considerate assistance until you become totally healthy."
      features={[
        "Spaciously furnished comfortable rooms",
        "Tailor made to protect your privacy",
        "Scenic mountain views",
        "Scenic tranquility of appealing environs",
        "Natural healing environment",
        "Specially trained and highly skilled nursing staff",
        "Supervised by government experienced senior nurses",
        "Compassionate and considerate assistance",
        "24/7 nursing care with perpetual vigilance",
      ]}
      additionalInfo={[
        {
          title: "Scenic Comfort & Natural Healing",
          content: "Our spaciously furnished comfortable rooms are tailor made to protect your privacy, offering scenic mountain views and the tranquility of appealing natural environs. These rooms provide a peaceful healing environment where you can recover comfortably, accompanied by the kindest hospitality of our medical and nursing staff.",
        },
        {
          title: "Exceptional Nursing Care",
          content: "The perpetual vigilance and the diligence of a cadre of specially trained and highly skilled nursing staff backed, supervised and trained by government experienced senior nursing staff is delivering compassionate and considerate assistance until you become totally healthy. Our nursing care creates memorable experiences that will not fade away from the minds of your family members and your relatives.",
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
