import ServicePageLayout from "@/components/services/ServicePageLayout";
import { Sparkles } from "lucide-react";


const SkinClinic = () => {
    return (
        <ServicePageLayout
            title="Skin Clinic"
            subtitle="Comprehensive dermatology care for healthy, radiant skin"
            icon={Sparkles}
            description="Our Skin Clinic offers comprehensive dermatological services with state-of-the-art facilities and experienced dermatologists. We provide personalized treatment plans for various skin conditions, cosmetic procedures, and preventive care. From medical dermatology to aesthetic treatments, we are committed to helping you achieve and maintain healthy, beautiful skin."
            features={[
                "Experienced Consultant Dermatologists",
                "Advanced diagnostic equipment",
                "Medical dermatology treatments",
                "Cosmetic dermatology procedures",
                "Acne and scar treatment",
                "Skin allergy testing and management",
                "Anti-aging treatments",
                "Laser therapy and skin rejuvenation",
                "Hair loss treatment and consultation",
                "Pediatric dermatology services",
            ]}
            additionalInfo={[
                {
                    title: "Medical Dermatology",
                    content: "Our medical dermatology services address a wide range of skin conditions including eczema, psoriasis, dermatitis, fungal infections, and skin cancer screening. Our experienced dermatologists use evidence-based treatments and the latest medical protocols to provide effective care for acute and chronic skin conditions.",
                },
                {
                    title: "Cosmetic Dermatology",
                    content: "We offer advanced cosmetic procedures including chemical peels, microdermabrasion, laser treatments, botox, dermal fillers, and skin rejuvenation therapies. Our aesthetic treatments are performed by qualified dermatologists using FDA-approved products and cutting-edge technology to help you look and feel your best.",
                },
                {
                    title: "Specialized Treatments",
                    content: "Our clinic provides specialized services for acne management, scar reduction, pigmentation disorders, hair loss treatment, and anti-aging solutions. We create customized treatment plans tailored to your specific skin type, concerns, and goals, ensuring optimal results with minimal downtime.",
                },
            ]}
            relatedServices={[
                { name: "Laboratory", link: "/services/laboratory" },
                { name: "Pharmacy", link: "/services/pharmacy" },
                { name: "Channeling Center", link: "/services/channeling" },
            ]}
        />
    );
};
export default SkinClinic;