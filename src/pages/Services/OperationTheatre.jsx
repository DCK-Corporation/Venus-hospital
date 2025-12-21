import ServicePageLayout from "@/components/services/ServicePageLayout";
import { Scissors } from "lucide-react";

const OperationTheatre = () => {
  return (
    <ServicePageLayout
      title="Operation Theatre"
      subtitle="Modern surgical facilities for various procedures"
      icon={Scissors}
      description="Venus Hospital features a fully equipped, modern operation theatre designed to meet strict medical and safety standards. Our surgical team follows internationally accepted protocols, supported by advanced equipment and a sterile environment. We perform a wide range of surgical procedures with utmost precision and care, ensuring patient safety and successful outcomes."
      features={[
        "Modern surgical equipment",
        "Sterile and safe environment",
        "Experienced surgical team",
        "Cataract surgeries",
        "Cesarean sections",
        "General surgical procedures",
        "Minor surgical procedures",
        "Post-operative care",
      ]}
      additionalInfo={[
        {
          title: "Our Surgical Standards",
          content: "Our operation theatre adheres to international safety and hygiene standards. All surgical instruments are properly sterilized, and our team follows strict protocols to minimize any risk of complications. Patient safety is our top priority.",
        },
        {
          title: "Pre & Post Surgery Care",
          content: "We provide comprehensive care before and after surgery. Our medical team will guide you through pre-operative preparations and ensure proper recovery through attentive post-operative monitoring and care in our comfortable wards.",
        },
      ]}
      relatedServices={[
        { name: "Rooms & Wards", link: "/services/rooms" },
        { name: "Eye Care Unit", link: "/services/eye-care" },
        { name: "Pharmacy", link: "/services/pharmacy" },
      ]}
    />
  );
};

export default OperationTheatre;
