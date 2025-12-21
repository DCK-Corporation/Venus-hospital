import ServicePageLayout from "@/components/services/ServicePageLayout";
import { Accessibility } from "lucide-react";

const AccessibilityServices = () => {
  return (
    <ServicePageLayout
      title="Accessibility"
      subtitle="Wheelchair access and dedicated parking"
      icon={Accessibility}
      description="Venus Hospital is designed to be accessible and convenient for all patients. We provide wheelchair access throughout the hospital and dedicated parking facilities for a stress-free visit. Our commitment to accessibility ensures that patients of all abilities can receive quality healthcare in a comfortable and welcoming environment."
      features={[
        "Full wheelchair accessibility",
        "Dedicated parking spaces",
        "Ramps and elevators",
        "Elderly-friendly facilities",
        "Easy navigation signage",
        "Accessible restrooms",
        "Wide corridors and doorways",
        "Priority assistance available",
      ]}
      additionalInfo={[
        {
          title: "Wheelchair Accessibility",
          content: "Our hospital is fully equipped with ramps, elevators, and wide doorways to ensure that patients using wheelchairs or mobility aids can move freely throughout all areas. Our staff is trained to provide assistance whenever needed.",
        },
        {
          title: "Parking Facilities",
          content: "We provide dedicated parking spaces near the hospital entrance for patients with mobility challenges. Our parking area is designed to accommodate various needs, ensuring convenient access to the hospital facilities.",
        },
      ]}
      relatedServices={[
        { name: "OPD Services", link: "/services/opd" },
        { name: "Rooms & Wards", link: "/services/rooms" },
        { name: "Pharmacy", link: "/services/pharmacy" },
      ]}
    />
  );
};

export default AccessibilityServices;
