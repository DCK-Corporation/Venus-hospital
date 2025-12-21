import ServicePageLayout from "@/components/services/ServicePageLayout";
import { Activity } from "lucide-react";

const Diagnostics = () => {
  return (
    <ServicePageLayout
      title="Diagnostic Services"
      subtitle="X-ray, ECG, and 2D Echo services"
      icon={Activity}
      description="Venus Hospital offers reliable diagnostic facilities to support accurate medical evaluations. Our diagnostic services assist doctors in early detection, monitoring, and effective treatment planning. With modern equipment and trained technicians, we provide essential imaging and cardiac diagnostic services to help identify and manage various health conditions."
      features={[
        "Digital X-ray imaging",
        "ECG (Electrocardiogram)",
        "2D Echocardiography",
        "Cardiac monitoring",
        "Fast result delivery",
        "Experienced technicians",
        "Modern equipment",
        "OPD and inpatient services",
      ]}
      additionalInfo={[
        {
          title: "Digital X-Ray Services",
          content: "Our digital X-ray facility provides high-quality imaging with reduced radiation exposure. Digital technology allows for quick image processing and easy sharing with referring physicians, enabling faster diagnosis and treatment decisions.",
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
