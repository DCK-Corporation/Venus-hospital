import ServicePageLayout from "@/components/services/ServicePageLayout";
import { Activity } from "lucide-react";

const Diagnostics = () => {
  return (
    <ServicePageLayout
      title="Diagnostic Services"
      subtitle="Advanced imaging and cardiac diagnostics"
      image="https://res.cloudinary.com/doqyzcyl5/image/upload/v1767678734/IMG_5871_wafnxm.jpg"
      icon={Activity}
      description="We possess a Digital X-ray Machine powered by Japanese Toshiba and Fuji technology that provides you crystal clear X-ray reports. Our dental X-Ray facilities render a tremendous service to our own Dental Surgery and other dental surgeons in the area. We have upgraded our cardiac department with the most advanced, high-definition ECG machines in the Seethawakapura area to ensure faster, more accurate results. With modern equipment and trained technicians, we provide essential imaging and cardiac diagnostic services to help identify and manage various health conditions."
      features={[
        "Digital X-ray powered by Japanese Toshiba and Fuji technology",
        "Crystal clear X-ray reports",
        "Dental X-ray facilities",
        "Service to dental surgeons in the area",
        "Ultrasound Scanning",
        "2D Echocardiography (2D Echo)",
        "Advanced high-definition ECG machines",
        "Fastest and most accurate cardiac diagnostics in Seethawakapura area",
      ]}
      additionalInfo={[
        {
          title: "Advanced Digital X-Ray Technology",
          content: "We possess a Digital X-ray Machine powered by Japanese Toshiba and Fuji technology that provides you crystal clear X-ray reports. Our dental X-Ray facilities render a tremendous service to our own Dental Surgery and other dental surgeons in the area. Digital technology allows for quick image processing and easy sharing with referring physicians, enabling faster diagnosis and treatment decisions.",
        },
        {
          title: "Upgraded Cardiac Department",
          content: "We have upgraded our cardiac department with the most advanced, high-definition ECG machines in the Seethawakapura area to ensure faster, more accurate results. Our ECG and 2D Echo services are essential for evaluating heart health. These non-invasive tests help detect heart conditions, monitor cardiac function, and guide treatment plans. Our trained technicians ensure accurate recordings for proper interpretation.",
        },
        {
          title: "Ultrasound Scanning Services",
          content: "Our ultrasound scanning services provide safe, non-invasive imaging for various diagnostic purposes. Using advanced ultrasound technology, we can examine internal organs, monitor pregnancies, and assist in diagnosing a wide range of medical conditions with precision and care.",
        },
      ]}
      relatedServices={[
        { name: "Laboratory Services", link: "/services/laboratory" },
        { name: "OPD Services", link: "/services/opd" },
        { name: "Operation Theatre", link: "/services/surgery" },
      ]}
    />
  );
};

export default Diagnostics;
