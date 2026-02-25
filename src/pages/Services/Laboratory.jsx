import ServicePageLayout from "@/components/services/ServicePageLayout";
import { FlaskConical } from "lucide-react";


const Laboratory = () => {

  // Carousel images for Laboratory

  return (
    <ServicePageLayout
      title="Laboratory Services"
      subtitle="Wide range of medical tests with accuracy"

      icon={FlaskConical}
      image="https://res.cloudinary.com/doqyzcyl5/image/upload/v1767678731/IMG_5764_bmwnho.jpg "
      description="Our fully equipped laboratory provides a wide range of medical tests with accuracy and efficiency. We adhere to strict quality standards to ensure reliable test results that support timely clinical decisions. From routine blood tests to specialized investigations, our laboratory is staffed by experienced technicians committed to delivering precise results."

      features={[
        "Modern laboratory technology and equipment",
        "Highest standards used by major government hospitals",
        "Quality Controlled by qualified specialist chemical pathologist",
        "Government certified and experienced laboratory technicians",
        "Perpetual supervision for accuracy",
        "Diabetes Monitoring",
        "Cardiovascular Health Monitoring (Heart-Related Blood Tests)",
        "Cholesterol & Lipid Profile Testing",
        "Liver Function Tests (LFT)",
        "Kidney Function Tests (KFT)",
        "Thyroid Function Tests",
        "Complete Blood Count (CBC)",
        "Hormone Testing",
        "Infection & Inflammation Tests",
        "Routine & Specialized Blood Tests",
        "Fast and accurate test results",
        "Reports available in a short time",
        "Online report delivery for patients",
        "Reliable and confidential service",
        "Easy and convenient testing process",
      ]}
      additionalInfo={[
        {
          title: "International Quality Standards",
          content: "Our laboratory is equipped with modern technology and equipment of the highest standards, used by major government hospitals and top-class private hospitals in the island. Laboratory tests are personally Quality Controlled by a qualified specialist chemical pathologist. The most accurate reports are delivered to you under the perpetual supervision of government certified and experienced laboratory technicians.",
        },
        {
          title: "Convenient Service",
          content: "Laboratory services are available for both OPD patients and inpatients. We offer prompt sample collection and fast result delivery, with most routine tests available within the same day. Reports can be collected from the hospital or received via phone and online delivery for your convenience.",
        },
      ]}
      relatedServices={[
        { name: "OPD Services", link: "/services/opd" },
        { name: "Diagnostic Services", link: "/services/diagnostics" },
        { name: "Pharmacy", link: "/services/pharmacy" },
      ]}
    />
  );
};

export default Laboratory;
