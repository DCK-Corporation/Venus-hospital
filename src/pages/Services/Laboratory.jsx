import ServicePageLayout from "@/components/services/ServicePageLayout";
import { FlaskConical } from "lucide-react";

const laboratoryImage = undefined;
const Laboratory = () => {
  return (
    <ServicePageLayout
      title="Laboratory Services"
      subtitle="Wide range of medical tests with accuracy"

      icon={FlaskConical}
      image={laboratoryImage}
      description="Our fully equipped laboratory provides a wide range of medical tests with accuracy and efficiency. We adhere to strict quality standards to ensure reliable test results that support timely clinical decisions. From routine blood tests to specialized investigations, our laboratory is staffed by experienced technicians committed to delivering precise results."

      features={[
        "Most sophisticated world class brands equipment",
        "Highest standards used by major government hospitals",
        "Quality Controlled by qualified specialist chemical pathologist",
        "Government experienced laboratory technicians",
        "Perpetual supervision for accuracy",
        "Fasting Blood Sugar (FBS)",
        "Post Prandial Blood Sugar (PPBS)",
        "Full Blood Count (FBC)",
        "ESR (Erythrocyte Sedimentation Rate)",
        "Lipid Profile",
        "Liver Function Test",
        "Renal Profile",
        "Thyroid Profile",
        "TSH (Thyroid Stimulating Hormone)",
        "Uric Acid",
        "Stool Occult Blood Test",
        "Pap Smear",
        "Vitamin D Level",
        "PSA (Prostate-Specific Antigen)",
        "Serum Electrolytes",
        "Vitamin B12",
        "Serum Calcium",
        "Bone Profile",
        "Urine Full Report",
        "HbA1c (Glycated Hemoglobin)",
        "Urine Microalbumin",
        "SGPT (Serum Glutamic Pyruvic Transaminase)",
        "SGOT (Serum Glutamic Oxaloacetic Transaminase)",
        "Serum Creatinine & GFR",
        "And many more tests available",
        "Quick turnaround time",
      ]}
      additionalInfo={[
        {
          title: "International Quality Standards",
          content: "Bio-chemistry equipment available with us are of most sophisticated world class brands of highest standards, used by the major government hospitals and top class private hospitals in the island. Laboratory tests are personally Quality Controlled by a qualified specialist chemical pathologist. The most accurate reports are delivered to you under the perpetual supervision of skilled laboratory technicians.",
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
