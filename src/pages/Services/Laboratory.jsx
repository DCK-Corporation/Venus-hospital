import ServicePageLayout from "@/components/services/ServicePageLayout";
import { FlaskConical } from "lucide-react";

const Laboratory = () => {
  return (
    <ServicePageLayout
      title="Laboratory Services"
      subtitle="Wide range of medical tests with accuracy"
      icon={FlaskConical}
      description="Our fully equipped laboratory provides a wide range of medical tests with accuracy and efficiency. We adhere to strict quality standards to ensure reliable test results that support timely clinical decisions. From routine blood tests to specialized investigations, our laboratory is staffed by experienced technicians committed to delivering precise results."
      features={[
        "Complete blood count (CBC)",
        "Blood chemistry panels",
        "Lipid profile testing",
        "Thyroid function tests",
        "Diabetes monitoring (HbA1c)",
        "Liver and kidney function tests",
        "Urine analysis",
        "Quick turnaround time",
      ]}
      additionalInfo={[
        {
          title: "Quality Standards",
          content: "Our laboratory follows strict quality control procedures to ensure the accuracy and reliability of all test results. We use modern analyzers and equipment that are regularly calibrated and maintained to meet healthcare standards.",
        },
        {
          title: "Convenient Service",
          content: "Laboratory services are available for both OPD patients and inpatients. We offer prompt sample collection and fast result delivery, with most routine tests available within the same day. Reports can be collected from the hospital or received via phone.",
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
