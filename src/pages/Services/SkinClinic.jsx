import ServicePageLayout from "@/components/services/ServicePageLayout";
import { Sparkles } from "lucide-react";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";


const SkinClinic = () => {
    // Carousel images for Skin Clinic
    const carouselImages = [
        {
            src: "https://res.cloudinary.com/doqyzcyl5/image/upload/v1770487302/Skin_Care1_wk6st0.jpg",
            alt: "Skin Care Treatment",
            caption: "Professional skin care treatments"
        },
        {
            src: "https://res.cloudinary.com/doqyzcyl5/image/upload/v1770487300/skin-care-routine-2-scaled_pvntyt.webp",
            alt: "Advanced Skin Care",
            caption: "Advanced dermatology and aesthetic procedures"
        }
    ];

    return (
        <>
            <ServicePageLayout
                title="Skin Clinic"
                subtitle="Dr. LJ Cosmetic Clinic - Advanced dermatology and aesthetic treatments"
                icon={Sparkles}
                image={<ImageCarousel images={carouselImages} autoPlayInterval={3000} />}
                description="Our Skin Clinic features Dr. LJ Cosmetic Clinic, offering comprehensive dermatological services with state-of-the-art facilities and experienced dermatologists. We provide personalized treatment plans for various skin conditions, advanced cosmetic procedures, and preventive care. From medical dermatology to cutting-edge aesthetic treatments, we are committed to helping you achieve and maintain healthy, beautiful skin."
                features={[
                    "Dr. LJ Cosmetic Clinic - Advanced Aesthetic Treatments",
                    "Hydrafacial (Deep Cleansing Facial)",
                    "Laser Hair Removal",
                    "Pigmentation & Melasma Treatment",
                    "Acne & Acne Scar Treatment",
                    "Botox / Anti-Wrinkle Treatment",
                    "Dermal Fillers (Lips, Chin, Jawline)",
                    "PRP Treatment (Face & Hair)",
                    "HIFU - Non-Surgical Face Lift",
                    "Hair Loss Treatment (PRP + Mesotherapy)",
                    "Experienced Consultant Dermatologists",
                    "Advanced diagnostic equipment",
                    "Medical dermatology treatments",
                    "Skin allergy testing and management",
                    "Anti-aging treatments",
                    "Laser therapy and skin rejuvenation",
                    "Pediatric dermatology services",
                ]}
                additionalInfo={[
                    {
                        title: "Dr. LJ Cosmetic Clinic - Available Treatments",
                        content: "We are proud to feature Dr. LJ Cosmetic Clinic, offering a comprehensive range of advanced aesthetic treatments. Our available treatments include: Hydrafacial for deep cleansing, Laser Hair Removal, Pigmentation & Melasma Treatment, Acne & Acne Scar Treatment, Botox/Anti-Wrinkle Treatment, Dermal Fillers for Lips, Chin, and Jawline enhancement, PRP Treatment for both face and hair rejuvenation, HIFU Non-Surgical Face Lift, and specialized Hair Loss Treatment combining PRP with Mesotherapy. All treatments are performed by qualified professionals using the latest technology and FDA-approved products. For more information, visit the official Dr. LJ Cosmetic Clinic website at ljhospitals.com",
                    },
                    {
                        title: "Featured: Transform Your Skin with Chemical Peels",
                        content: "Discover how chemical peels can rejuvenate your skin and address various skin concerns. Chemical peels are one of the most effective non-invasive treatments for improving skin texture, reducing fine lines, treating acne scars, and achieving a radiant complexion. At Dr. LJ Cosmetic Clinic, we offer customized chemical peel treatments tailored to your specific skin type and concerns. Our experienced dermatologists use medical-grade peeling agents to safely and effectively transform your skin. Read our comprehensive guide to learn about the different types of chemical peels, benefits, procedure details, and what to expect during recovery. Visit: ljhospitals.com/transform-your-skin-with-chemical-peels-at-dr-lj-cosmetic-clinic/",
                    },
                    {
                        title: "Medical Dermatology",
                        content: "Our medical dermatology services address a wide range of skin conditions including eczema, psoriasis, dermatitis, fungal infections, and skin cancer screening. Our experienced dermatologists use evidence-based treatments and the latest medical protocols to provide effective care for acute and chronic skin conditions.",
                    },
                    {
                        title: "Cosmetic Dermatology & Aesthetic Procedures",
                        content: "We offer advanced cosmetic procedures including chemical peels, microdermabrasion, laser treatments, botox, dermal fillers, and skin rejuvenation therapies. Our Hydrafacial treatment provides deep cleansing and rejuvenation, while our HIFU technology offers non-surgical face lifting. All aesthetic treatments are performed by qualified dermatologists using cutting-edge technology to help you look and feel your best.",
                    },
                    {
                        title: "Specialized Treatments",
                        content: "Our clinic provides specialized services for acne management, scar reduction, pigmentation disorders, melasma treatment, hair loss treatment with PRP and Mesotherapy, and comprehensive anti-aging solutions. We create customized treatment plans tailored to your specific skin type, concerns, and goals, ensuring optimal results with minimal downtime.",
                    },
                ]}
                relatedServices={[
                    { name: "Dr. LJ Cosmetic Clinic Website", link: "https://ljhospitals.com", external: true },
                    { name: "Chemical Peels Treatment Guide", link: "https://ljhospitals.com/transform-your-skin-with-chemical-peels-at-dr-lj-cosmetic-clinic/", external: true },
                    { name: "Laboratory", link: "/services/laboratory" },
                    { name: "Pharmacy", link: "/services/pharmacy" },
                    { name: "Channeling Center", link: "/services/channeling" },
                ]}
                brandAffiliation={{
                    image: "https://res.cloudinary.com/doqyzcyl5/image/upload/v1770488653/Gemini_Generated_Image_wrr7x6wrr7x6wrr7_soajkf.png",
                    alt: "Dr. LJ Cosmetic Clinic Brand Affiliation",
                    link: "https://ljhospitals.com"
                }}
            />
        </>
    );
};
export default SkinClinic;