import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { ChevronDown, ChevronUp, Phone, Eye, Ear, FlaskConical, Stethoscope, Building2 } from "lucide-react";

const faqCategories = [
    {
        id: "general",
        icon: Building2,
        title: "General Hospital Information",
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200",
        faqs: [
            {
                question: "Do you accept medical insurance?",
                answer: `Yes, we work with a wide range of partners for both hospital services and optical needs.\n\n**Government/Semi-Government:** Agrahara and Suraksha.\n\n**Private Providers:** Softlogic Life, SLIC (Sri Lanka Insurance), Sanasa Life, Fairfirst, HNB Assurance (under Medilink), AIA, Union Assurance, Arpico Insurance, and Orient Insurance.`,
            },
            {
                question: "Is the hospital accessible for elderly or disabled patients?",
                answer:
                    "Yes. We have dedicated private parking on-site and the facility is equipped with elevator (lift) access to all floors for your convenience.",
            },
            {
                question: "How do I book an appointment with a Specialist Consultant?",
                answer:
                    "To book a visiting consultant, please call our reception at 036-2222096 or 036-2222064. To ensure your slot is reserved and to minimize waiting time, we highly recommend pre-booking via our dedicated booking line: +94 75 322 2101.",
            },
        ],
    },
    {
        id: "eye-care",
        icon: Eye,
        title: "Optical & Eye Care",
        color: "text-cyan-600",
        bgColor: "bg-cyan-50",
        borderColor: "border-cyan-200",
        faqs: [
            {
                question: "Which Eye Surgeons are available and when?",
                answer:
                    "We host renowned surgeons from the Avissawella General Hospital, including Dr. Damayanthi Samarasinghe and Dr. Dayawansha. They are generally available on weekdays from 4:00 PM onwards. Please call reception to confirm the exact dates and times.",
            },
            {
                question: "Do I need an appointment for a routine eye checkup?",
                answer:
                    "No appointment is necessary. You can visit us during working hours for an eye examination by our SLOA-registered Optometrists free of charge.",
            },
            {
                question: "Where are my spectacles prepared?",
                answer:
                    "We have our own in-house Optical Laboratory. While we source high-quality frames (including our own signature brand), all lens cutting, fitting, and assembly are done on-site by our technicians for perfect accuracy.",
            },
            {
                question: "What after-sales services do you provide for spectacles?",
                answer:
                    "Since we have an on-site lab, we provide repairs, lens fitting, and frame adjustments free of charge. We recommend calling 075-3222096 before you arrive to ensure a technician is available.",
            },
            {
                question: "What advanced eye scans do you offer?",
                answer:
                    "Our unit is equipped for OCT (Optical Coherence Tomography), Biometry, Visual Field Tests, and CCT. When coming for a scan, please bring your current spectacles and previous medical reports.",
            },
            {
                question: "Can I send my prescription via WhatsApp?",
                answer:
                    "Yes, you can message your prescriptions or inquiries to 075-3222096. However, for urgent matters, please call us directly as we receive a high volume of messages.",
            },
        ],
    },
    {
        id: "hearing",
        icon: Ear,
        title: "Hearing & ENT (Venus Hearing Solutions)",
        color: "text-purple-600",
        bgColor: "bg-purple-50",
        borderColor: "border-purple-200",
        faqs: [
            {
                question: "What hearing services are available?",
                answer:
                    "Through Venus Hearing Solutions, we provide routine hearing checkups and specialist ENT consultations.",
            },
            {
                question: "Can I buy or service hearing aids here?",
                answer:
                    "Yes. We sell renowned international brands of hearing aids and accessories. We also provide professional servicing and maintenance for your devices.\n\nHearing Unit Contact: +94 77 189 9611 (Call or WhatsApp)",
            },
        ],
    },
    {
        id: "lab-pharmacy",
        icon: FlaskConical,
        title: "Laboratory & Pharmacy",
        color: "text-emerald-600",
        bgColor: "bg-emerald-50",
        borderColor: "border-emerald-200",
        faqs: [
            {
                question: "How do I book Laboratory tests?",
                answer:
                    "To ensure your samples are collected promptly and to avoid queues, please pre-book your lab appointment at +94 75 322 2101.",
            },
            {
                question: "When will my lab reports be ready?",
                answer:
                    "Most routine reports are available within the same day. Our staff will inform you of the exact pickup time during your visit.",
            },
            {
                question: "How can I check if a medicine is available?",
                answer:
                    "For all pharmacy-related inquiries and drug availability, please call our pharmacy directly at 075-3222090.",
            },
        ],
    },
    {
        id: "dental-radiology",
        icon: Stethoscope,
        title: "Dental & Radiology (X-Ray)",
        color: "text-rose-600",
        bgColor: "bg-rose-50",
        borderColor: "border-rose-200",
        faqs: [
            {
                question: "What are the X-ray department's working hours?",
                answer:
                    "The unit is open daily from 8:00 AM to 5:00 PM, offering both Digital X-rays and Dental X-rays.",
            },
            {
                question: "Do I need an appointment for Dental services?",
                answer:
                    "For dental checkups or procedures, we recommend calling the main reception (036-2222096) to check the dentist's availability and secure a time slot.",
            },
        ],
    },
];

const contactSummary = [
    { label: "Reception / Consultants", numbers: ["036-2222096", "036-2222064"], href: "tel:+94362222096" },
    { label: "Appointment Bookings (Lab / Visiting Physicians)", numbers: ["+94 75 322 2101"], href: "tel:+94753222101" },
    { label: "Optical & WhatsApp", numbers: ["075-3222096"], href: "tel:+94753222096" },
    { label: "Pharmacy", numbers: ["075-3222090"], href: "tel:+94753222090" },
    { label: "Hearing Unit", numbers: ["+94 77 189 9611"], href: "tel:+94771899611" },
];

function FAQItem({ question, answer }) {
    const [open, setOpen] = useState(false);

    // Parse bold markdown in answer text
    const renderAnswer = (text) => {
        return text.split("\n").map((line, i) => {
            const parts = line.split(/(\*\*[^*]+\*\*)/g);
            return (
                <p key={i} className={i > 0 ? "mt-2" : ""}>
                    {parts.map((part, j) =>
                        part.startsWith("**") && part.endsWith("**") ? (
                            <strong key={j}>{part.slice(2, -2)}</strong>
                        ) : (
                            part
                        )
                    )}
                </p>
            );
        });
    };

    return (
        <div className="border border-border rounded-xl overflow-hidden transition-shadow hover:shadow-md">
            <button
                className="w-full text-left flex items-center justify-between gap-4 p-5 bg-card hover:bg-muted/40 transition-colors"
                onClick={() => setOpen((prev) => !prev)}
                aria-expanded={open}
            >
                <span className="font-semibold text-foreground text-sm md:text-base leading-snug">{question}</span>
                {open ? (
                    <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                )}
            </button>
            {open && (
                <div className="px-5 pb-5 pt-2 bg-card border-t border-border">
                    <div className="text-sm text-muted-foreground leading-relaxed space-y-1">
                        {renderAnswer(answer)}
                    </div>
                </div>
            )}
        </div>
    );
}

const FAQ = () => {
    return (
        <Layout>
            {/* Hero Banner */}
            <section className="gradient-hero text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl">
                        <nav className="text-sm text-white/70 mb-4">
                            <span>Home</span> / <span className="text-white">FAQ</span>
                        </nav>
                        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                            Frequently Asked Questions
                        </h1>
                        <p className="text-lg text-white/90">
                            Find quick answers to common questions about our services, appointments, insurance, and more.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Categories */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-12">
                        {faqCategories.map((category) => {
                            const Icon = category.icon;
                            return (
                                <div key={category.id} id={category.id}>
                                    {/* Category Header */}
                                    <div className={`flex items-center gap-3 mb-5 pb-3 border-b ${category.borderColor}`}>
                                        <div className={`w-10 h-10 ${category.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                                            <Icon className={`h-5 w-5 ${category.color}`} />
                                        </div>
                                        <h2 className="text-xl font-heading font-bold text-foreground">
                                            {category.title}
                                        </h2>
                                    </div>

                                    {/* FAQ Items */}
                                    <div className="space-y-3">
                                        {category.faqs.map((faq, idx) => (
                                            <FAQItem key={idx} question={faq.question} answer={faq.answer} />
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Contact Summary */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-10">
                            <h2 className="text-2xl font-heading font-bold text-foreground">
                                Quick Contact Reference
                            </h2>
                            <p className="text-muted-foreground mt-2">
                                Reach the right department directly — no waiting.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {contactSummary.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="group flex flex-col gap-2 bg-card border border-border rounded-xl p-5 hover:border-primary hover:shadow-md transition-all"
                                >
                                    <div className="flex items-center gap-2 text-primary">
                                        <Phone className="h-4 w-4 flex-shrink-0" />
                                        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground group-hover:text-primary transition-colors">
                                            {item.label}
                                        </span>
                                    </div>
                                    <div className="space-y-1">
                                        {item.numbers.map((num) => (
                                            <p key={num} className="text-base font-semibold text-foreground">
                                                {num}
                                            </p>
                                        ))}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default FAQ;
