import ServicePageLayout from "@/components/services/ServicePageLayout";
import { Ear } from "lucide-react";

const HearingCare = () => {
  return (
    <ServicePageLayout
      title="Hearing Care Unit"
      subtitle="Professional hearing assessments and support"
      icon={Ear}
      description="The Hearing Care Unit at Venus Hospital provides professional hearing assessments and support services. We assist patients in identifying hearing-related conditions and guide them toward appropriate treatment. Our team uses modern diagnostic equipment to evaluate hearing health and provide personalized recommendations for hearing improvement."
      features={[
        "Comprehensive hearing assessments",
        "Audiometry testing",
        "Professional consultation",
        "Hearing aid guidance",
        "Tinnitus evaluation",
        "Ear health examinations",
        "Treatment guidance",
        "All age groups welcome",
      ]}
      additionalInfo={[
        {
          title: "Hearing Assessment Process",
          content: "Our hearing assessment begins with a thorough examination of your ears followed by precise audiometry tests. Based on the results, our specialists will explain your hearing health status and recommend appropriate solutions if needed.",
        },
        {
          title: "Support for All Ages",
          content: "We provide hearing care services for patients of all ages, from children to seniors. Early detection of hearing issues is crucial, and our team is trained to work with patients at every stage of life to ensure optimal hearing health.",
        },
      ]}
      relatedServices={[
        { name: "OPD Services", link: "/services/opd" },
        { name: "Diagnostic Services", link: "/services/diagnostics" },
        { name: "Laboratory Services", link: "/services/laboratory" },
      ]}
    />
  );
};

export default HearingCare;
