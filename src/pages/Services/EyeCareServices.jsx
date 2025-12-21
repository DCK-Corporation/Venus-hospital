import ServicePageLayout from "@/components/services/ServicePageLayout";
import { Eye } from "lucide-react";

const EyeCareServices = () => {
  return (
    <ServicePageLayout
      title="Eye Care Unit"
      subtitle="Comprehensive eye diagnostics and treatments"
      icon={Eye}
      description="Our comprehensive Eye Care Unit delivers advanced diagnostic and treatment services for a wide range of eye conditions. Equipped with modern technology, the unit supports accurate diagnosis and effective treatment. From routine eye examinations to complex procedures like cataract surgery, our experienced ophthalmologists provide personalized care to protect and improve your vision."
      features={[
        "Comprehensive eye examinations",
        "Visual Field Testing",
        "OCT (Optical Coherence Tomography)",
        "Biometry for lens calculations",
        "Cataract diagnosis and surgery",
        "Glaucoma screening and management",
        "Diabetic retinopathy screening",
        "Refractive error correction",
      ]}
      additionalInfo={[
        {
          title: "Advanced Diagnostic Equipment",
          content: "Our Eye Care Unit is equipped with state-of-the-art diagnostic equipment including Visual Field analyzers, OCT machines, and advanced biometry systems. These tools enable our specialists to detect eye conditions early and provide accurate treatment plans.",
        },
        {
          title: "Cataract Surgery",
          content: "We specialize in modern cataract surgery techniques performed in our well-equipped operation theatre. Our experienced surgeons use advanced intraocular lenses to restore clear vision, helping patients return to their normal activities quickly.",
        },
      ]}
      relatedServices={[
        { name: "Optical Services", link: "/eye-care" },
        { name: "Operation Theatre", link: "/services/surgery" },
        { name: "OPD Services", link: "/services/opd" },
      ]}
    />
  );
};

export default EyeCareServices;
