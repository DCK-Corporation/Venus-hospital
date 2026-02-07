import ServicePageLayout from "@/components/services/ServicePageLayout";
import { Eye } from "lucide-react";
import { ImageCarousel } from "@/components/ui/ImageCarousel";


const EyeCareServices = () => {
  // Carousel images for Eye Care Unit
  const carouselImages = [
    {
      src: "https://res.cloudinary.com/doqyzcyl5/image/upload/v1767678730/IMG_5603_gwk6xh.jpg",
      alt: "Eye Care Unit - Diagnostic Equipment",
      caption: "Advanced diagnostic equipment for comprehensive eye examinations"
    },
    {
      src: "https://res.cloudinary.com/doqyzcyl5/image/upload/v1767678737/IMG_5974_xmhbb5.jpg",
      alt: "Eye Care Unit - Treatment Facilities",
      caption: "Modern treatment facilities with state-of-the-art technology"
    },
    {
      src: "https://res.cloudinary.com/doqyzcyl5/image/upload/v1767678737/IMG_6052_csduat.jpg",
      alt: "Eye Care Unit - Consultation Area",
      caption: "Comfortable consultation rooms for personalized care"
    }
  ];

  return (
    <ServicePageLayout
      title="Eye Care Unit"
      subtitle="Comprehensive eye diagnostics and treatments"
      image={<ImageCarousel images={carouselImages} autoPlayInterval={2000} />}
      icon={Eye}
      description="We are proud to host the exceptional services of Consultant Eye Surgeons from Colombo National Eye Hospital and the Kandy Teaching Hospital and that of famous Eye surgeons in the whole island are available to you at Venus Hospital. Adding to the veterans, there is an expert team of specially trained nursing staff to provide the ever best possible service to the patients who patronize our services with regard to eye operations. An unmatched dedicated service is rendered to you in providing the state of the art methods of eye testing, providing visual aids and hearing aids to the general public."
      features={[
        "Consultant Eye Surgeons from Colombo National Eye Hospital",
        "Consultant Eye Surgeons from Kandy Teaching Hospital",
        "Famous Eye surgeons from across the island",
        "Expert team of specially trained nursing staff for eye operations",
        "Visual aids and hearing aids services",
        "Qualified Ophthalmic Technologist with local & overseas training",
        "Specialized in Low Vision and Child Vision",
        "03 Advanced Eye Testing Units - international standards",
        "Humfry Visual Field Test",
        "OCT with Angiogram Test",
        "Fundus Camera Test",
        "Mobile Optical Service with luxury bus",
        "Eye testing services at your doorstep",
        "Outreach to far away villages and institutions",
        "Sophisticated Mobile Eye Testing Lab",
        "Comprehensive eye examinations",
        "Biometry for lens calculations",
        "Phaco System cataract surgery",
        "German Carl Zeiss Microscope for eye operations",
        "Cornea draft transplant capabilities",
        "Dedicated eye operation theatre",
        "YAG and ARGON Laser Treatments",
        "Yag Casulotomy for diabetic retinopathy",
        "Affordable charges without pending lists",
        "Cataract diagnosis and surgery",
        "Glaucoma screening and management",
        "Diabetic retinopathy screening",
        "Refractive error correction",
      ]}
      additionalInfo={[
        {
          title: "Qualified Ophthalmic Technologists",
          content: "We have with us, the services of an Ophthalmic Technologist who possesses local and overseas training for latest updates. Such resource persons who are specialized in Low Vision and Child Vision are comparatively very rare in Sri Lanka. Add to this, we have with us 03 Advanced Eye Testing Units that can provide a service of international standards.",
        },
        {
          title: "Mobile Optical Service",
          content: "We are proud to mention that we have launched a Mobile Optical Service with a luxury bus, that is brought into action in order to render a better service to the far away villages and institutions. We take great pleasure to inform you that we are able to provide our superior services at your doorstep through our bus service equipped with the most sophisticated eye testing Mobile Eye Testing Lab.",
        },
        {
          title: "Modern Technology on Eye Testing",
          content: "Humfry Visual Field Test, OCT with Angiogram Test and our Fundus Camera Test which are only available in Colombo and the suburban cities are now available in Venus Hospital at our service. Some of these test done by us are done only in a very few hospitals in the island. Our Eye Care Unit is equipped with these state-of-the-art diagnostic technologies enabling our specialists to detect eye conditions early and provide accurate treatment plans.",
        },
        {
          title: "Phaco System Cataract Surgery & Eye Operations",
          content: "Phaco Technology is the most popular and highly trusted cataract eye operation methodology presently in the whole world. We possess a highly sophisticated eye operation theatre which consists the German Carl Zeiss Microscope and latest medical equipment, solely dedicated only for eye operations. The number of visually impaired patients who have later gained vision from simpler cataract to most advance Cornea draft transplant from our hospital is remarkable during the past few years.",
        },
        {
          title: "YAG and ARGON Laser Treatments",
          content: "The 'Yag Casulotomy' operation performed in the Retinal Membrane inside the eyes of diabetic patients, specially in order to restore their vision, is done in a limited number of leading hospitals in the island at present. But we take great pleasure in providing the same services at its highest standards in Venus Hospital, delivering an opportunity to the most deserving segment of the society from distant parts of the island, at very affordable charges without being stuck in pending lists.",
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
