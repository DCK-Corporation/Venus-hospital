import ServicePageLayout from "@/components/services/ServicePageLayout";
import { Activity } from "lucide-react";

const Diagnostics = () => {
  return (
    <ServicePageLayout
      title="Diagnostic Services"
      subtitle="X-ray, ECG, and 2D Echo services"
      icon={Activity}
      description="We possess a Digital X-ray Machine powered by Japanese Toshiba and Fuji technology that provides you crystal clear X-ray reports. Our dental X-Ray facilities render a tremendous service to our own Dental Surgery and other dental surgeons in the area. With modern equipment and trained technicians, we provide essential imaging and cardiac diagnostic services to help identify and manage various health conditions."
      features={[
        "Digital X-ray powered by Japanese Toshiba and Fuji technology",
        "Crystal clear X-ray reports",
        "Dental X-ray facilities",
        "Service to dental surgeons in the area",
        "ECG (Electrocardiogram)",
        "2D Echocardiography",
      ]}
      additionalInfo={[
        {
          title: "Advanced Digital X-Ray Technology",
          content: "We possess a Digital X-ray Machine powered by Japanese Toshiba and Fuji technology that provides you crystal clear X-ray reports. Our dental X-Ray facilities render a tremendous service to our own Dental Surgery and other dental surgeons in the area. Digital technology allows for quick image processing and easy sharing with referring physicians, enabling faster diagnosis and treatment decisions.",
        },
        {
          title: "Cardiac Diagnostics",
          content: "Our ECG and 2D Echo services are essential for evaluating heart health. These non-invasive tests help detect heart conditions, monitor cardiac function, and guide treatment plans. Our trained technicians ensure accurate recordings for proper interpretation.",
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
