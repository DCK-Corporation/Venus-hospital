import ServicePageLayout from "@/components/services/ServicePageLayout";
import { Accessibility } from "lucide-react";

const AccessibilityServices = () => {
  return (
    <ServicePageLayout
      title="Accessibility"
      subtitle="Accessible facilities for all patients including elevator access"
      icon={Accessibility}
      description="Venus Hospital is designed to be accessible and convenient for all patients. We have provided elevator facilities for those in need, ensuring easy access for the elderly and disabled. Along with wheelchair access throughout the hospital and dedicated parking facilities, our commitment to accessibility ensures that patients of all abilities can receive quality healthcare in a comfortable and welcoming environment."
      features={[
        "Elevator facilities for easy access",
        "Specially designed for elderly and disabled patients",
        "Full wheelchair accessibility",
        "Dedicated parking spaces",
        "Ramps throughout the hospital",
        "Elderly-friendly facilities",
        "Easy navigation signage",
        "Accessible restrooms",
        "Wide corridors and doorways",
        "Priority assistance available",
      ]}
      additionalInfo={[
        {
          title: "Elevator Access for Elderly and Disabled",
          content: "We have provided modern elevator facilities specifically for those in need, ensuring easy and comfortable access to all floors of the hospital. The elevators are designed with the elderly and disabled in mind, featuring spacious interiors, handrails, and easy-to-use controls. This ensures that patients with mobility challenges can access all departments and services without difficulty.",
        },
        {
          title: "Wheelchair Accessibility",
          content: "Our hospital is fully equipped with ramps, elevators, and wide doorways to ensure that patients using wheelchairs or mobility aids can move freely throughout all areas. Our staff is trained to provide assistance whenever needed, making your visit as comfortable as possible.",
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
