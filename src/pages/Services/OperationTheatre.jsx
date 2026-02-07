import ServicePageLayout from "@/components/services/ServicePageLayout";
import { Scissors } from "lucide-react";
import { ImageCarousel } from "@/components/ui/ImageCarousel";


const OperationTheatre = () => {
  // Carousel images for Operation Theatre
  const carouselImages = [
    {
      src: "https://res.cloudinary.com/doqyzcyl5/image/upload/v1770487301/Operation_T_2_gclq2x.jpg",
      alt: "Modern Operation Theatre",
      caption: "State-of-the-art surgical facilities"
    },
    {
      src: "https://res.cloudinary.com/doqyzcyl5/image/upload/v1770487302/Operation_t_tvkqjs.jpg",
      alt: "Surgical Equipment",
      caption: "Advanced Japanese and German technology"
    },
    {
      src: "https://res.cloudinary.com/doqyzcyl5/image/upload/v1770487301/Operation_T_gbrato.jpg",
      alt: "Sterile Environment",
      caption: "Highest standard sterilized operation theatre"
    }
  ];

  return (
    <ServicePageLayout
      title="Operation Theatre"
      subtitle="Modern surgical facilities for various procedures"
      image={<ImageCarousel images={carouselImages} autoPlayInterval={3000} />}
      icon={Scissors}
      description="We take pride in possessing the highest standard and sterilized modern operation theatre in the area constructed with ultra modern Japanese and German Technology. Our surgical team follows internationally accepted protocols, supported by advanced equipment and a sterile environment. We perform a wide range of surgical procedures with utmost precision and care, ensuring patient safety and successful outcomes."
      features={[
        "Ultra modern Japanese and German Technology",
        "Highest standard sterilized operation theatre",
        "Highly skilled and experienced nursing staff",
        "General surgeries",
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