import ServicePageLayout from "@/components/services/ServicePageLayout";
import { Scissors } from "lucide-react";

const OperationTheatre = () => {
  return (
    <ServicePageLayout
      title="Operation Theatre"
      subtitle="Modern surgical facilities for various procedures"
      icon={Scissors}
      description="We take pride in possessing the highest standard and sterilized modern operation theatre in the area constructed with ultra modern Japanese and German Technology. Our surgical team follows internationally accepted protocols, supported by advanced equipment and a sterile environment. We perform a wide range of surgical procedures with utmost precision and care, ensuring patient safety and successful outcomes."
      features={[
        "Ultra modern Japanese and German Technology",
        "Highest standard sterilized operation theatre",
        "Highly skilled and experienced nursing staff",
        "Cataract surgeries",
        "Cesarean sections with Consultant Obstetricians & Gynaecologists",
        "Paediatrician assistance for maternity care",
        "OMF (Oral, Maxillofacial & Facial) surgical operations",
        "Post-operative care",
      ]}
      additionalInfo={[
        {
          title: "Advanced Technology & Expert Team",
          content: "Our operation theatre is constructed with ultra modern Japanese and German Technology, representing the highest standards in the area. We have highly skilled and experienced nursing staff available to assist the veteran medical professionals, ensuring optimal surgical outcomes and patient safety.",
        },
        {
          title: "Cesarean Surgery Excellence",
          content: "Cesarean Surgeries are performed personally by Skilled Consultant Obstetricians and Gynaecologists and assisted by an experienced consultant paediatrician and a medical officer together with a specially trained nursing staff. The mother can decide on a convenient day under the advice of the Consultant Obstetrician and Gynaecologist and will receive an optimum service for a very reasonable charge.",
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
