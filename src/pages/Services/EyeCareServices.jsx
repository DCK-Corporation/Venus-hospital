import ServicePageLayout from "@/components/services/ServicePageLayout";
import { Eye } from "lucide-react";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import { useState, useEffect } from "react";

const bannerImages = [
  "https://res.cloudinary.com/doqyzcyl5/image/upload/v1770469321/Venus_Hospital_Banner_2_lji3e2.jpg",
  "https://res.cloudinary.com/doqyzcyl5/image/upload/v1770469320/Venus_Hospital_eye_care_banner_1_nthsrr.jpg"
];

const EyeCareServices = () => {
  // Carousel images for Eye Care Unit
  const carouselImages = [
    {
      src: "https://res.cloudinary.com/doqyzcyl5/image/upload/v1767678730/IMG_5603_gwk6xh.jpg",
      alt: "Eye Care Unit - Diagnostic Equipment",
      caption: "Advanced diagnostic equipment for comprehensive eye examinations"
    },
    {
      src: "https://res.cloudinary.com/doqyzcyl5/image/upload/v1767678730/IMG_5652_i8ivji.jpg",
      alt: "Eye Care Unit - Treatment Facilities",
      caption: "Modern treatment facilities with state-of-the-art technology"
    },
    {
      src: "https://res.cloudinary.com/doqyzcyl5/image/upload/v1767678731/IMG_5709_nkjcnb.jpg",
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
      description="We are proud to host the exceptional services of renowned Eye surgeons from across the island at Venus Hospital. Our skilled and experienced Ophthalmic Surgical Team provides the best possible service to patients seeking eye care and surgical procedures. An unmatched dedicated service is rendered to you in providing state-of-the-art methods of eye testing, visual aids, and hearing aids to the general public."
      features={[
        "Renowned Eye Surgeons and an Experienced Ophthalmic Surgical Team",
        "Visual aids and hearing aids services",
        "Sri Lanka Optometric Association (SLOA) Registered Optometrists and Dispensing Opticians",
        "Specialized in Low Vision and Child Vision",
        "Advanced Eye Testing Units - international standards",
        "Humfry Visual Field Test",
        "Optical Coherence Tomography (OCT)",
        "Fundus Photography",
        "Mobile Optical Services",
        "Outreach to far away villages and institutions",
        "Sophisticated Mobile Eye Testing Lab",
        "Comprehensive eye examinations",
        "Biometry",
        "Advanced Cataract Diagnosis and Surgery using Phaco Technology",
        "Modern Japanese and German Technology",
        "Dedicated eye operation theatre",
        "YAG and ARGON Laser Treatments",
        "High-Quality Care at Affordable Prices",
        "Fast & Efficient Service",
        "Glaucoma screening and management",
        "Diabetic retinopathy screening",
        "Refractive error correction",
      ]}
      additionalInfo={[
        {
          title: "SLOA Registered Optometrists and Dispensing Opticians",
          content: "We have with us Sri Lanka Optometric Association (SLOA) Registered Optometrists and Dispensing Opticians who are specialized in Low Vision and Child Vision, which are comparatively very rare in Sri Lanka. Add to this, we have with us Advanced Eye Testing Units that can provide a service of international standards.",
        },
        {
          title: "Mobile Optical Services",
          content: "We are proud to mention that we have launched Mobile Optical Services with a luxury bus, that is brought into action in order to render a better service to the far away villages and institutions. We take great pleasure to inform you that we are able to provide our superior services at your doorstep through our bus service equipped with the most sophisticated Mobile Eye Testing Lab.",
        },
        {
          title: "Modern Technology on Eye Testing",
          content: "Advanced diagnostic technologies including Humfry Visual Field Test, Optical Coherence Tomography (OCT), Angiogram Test, and Fundus Photography are now available at Venus Hospital. These specialized tests, which were previously only available in Colombo and suburban cities, enable our specialists to detect eye conditions early and provide accurate treatment plans.",
        },
        {
          title: "Advanced Cataract Surgery using Phaco Technology",
          content: "Phaco Technology is the most trusted and widely used cataract surgery method worldwide. Our highly sophisticated eye operation theatre is equipped with modern Japanese and German technology and the latest medical equipment, dedicated solely to eye operations. Our skilled and experienced Ophthalmic Surgical Team has successfully helped numerous visually impaired patients regain their vision through advanced cataract surgeries and other eye procedures.",
        },
        {
          title: "YAG and ARGON Laser Treatments",
          content: "We provide advanced YAG and ARGON Laser Treatments at the highest standards, making specialized eye care accessible to patients from across the island. These laser treatments are performed by our experienced eye care professionals using state-of-the-art equipment, with high-quality care at affordable prices and fast, efficient service.",
        },
      ]}
      relatedServices={[
        { name: "Optical Services", link: "/eye-care" },
        { name: "Operation Theatre", link: "/services/surgery" },
        { name: "OPD Services", link: "/services/opd" },
      ]}
      banners={bannerImages}
      faqs={[
        {
          question: "Which Eye Surgeons are available and when?",
          answer: "We host renowned surgeons from the Avissawella General Hospital, including Dr. Damayanthi Samarasinghe and Dr. Dayawansha. They are generally available on weekdays from 4:00 PM onwards. Please call reception to confirm the exact dates and times.",
        },
        {
          question: "Do I need an appointment for a routine eye checkup?",
          answer: "No appointment is necessary. You can visit us during working hours for an eye examination by our SLOA-registered Optometrists free of charge.",
        },
        {
          question: "Where are my spectacles prepared?",
          answer: "We have our own in-house Optical Laboratory. While we source high-quality frames (including our own signature brand), all lens cutting, fitting, and assembly are done on-site by our technicians for perfect accuracy.",
        },
        {
          question: "What after-sales services do you provide for spectacles?",
          answer: "Since we have an on-site lab, we provide repairs, lens fitting, and frame adjustments free of charge. We recommend calling 075-3222096 before you arrive to ensure a technician is available.",
        },
        {
          question: "What advanced eye scans do you offer?",
          answer: "Our unit is equipped for OCT (Optical Coherence Tomography), Biometry, Visual Field Tests, and CCT. When coming for a scan, please bring your current spectacles and previous medical reports.",
        },
        {
          question: "Can I send my prescription via WhatsApp?",
          answer: "Yes, you can message your prescriptions or inquiries to 075-3222096. However, for urgent matters, please call us directly as we receive a high volume of messages.",
        },
      ]}
    />
  );
};

export default EyeCareServices;
