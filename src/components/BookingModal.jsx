import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar, ExternalLink } from "lucide-react";


export function BookingModal({
    trigger,
    size = "default",
    variant = "default",
    className = "",
    triggerText = "Book Appointment",
    showIcon = true,
    icon: ExternalIcon = null,
}) {
    const [open, setOpen] = useState(false);

    const bookingOptions = [
        {
            name: "eChanneling",
            url: "https://www.echannelling.com/doctor-search?hospital_code=H350&hospital_name=Venus%20Hospital%20%28Private%29%20Limited-Avissawella&isSpec=true",
            description: "Book your appointment through eChanneling platform",
            logo: "https://res.cloudinary.com/doqyzcyl5/image/upload/v1768743082/eChannelling-removebg-preview.png_zeo5o6.webp",
        },
        {
            name: "Doc990",
            url: "https://www.doc.lk/",
            description: "Book your appointment through Doc990 platform",
            logo: "https://res.cloudinary.com/doqyzcyl5/image/upload/v1768743082/doc990_y26yjh.jpg",
        }
    ];

    const handleBookingClick = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
        setOpen(false);
    };

    // If custom trigger is provided, use it; otherwise create default button
    const triggerButton = trigger || (
        variant === "ghost" ? (
            <button className={className}>
                {ExternalIcon && <ExternalIcon className="w-5 h-5" />}
                {showIcon && !ExternalIcon && <Calendar className="mr-2 h-5 w-5" />}
                {triggerText}
            </button>
        ) : (
            <Button size={size} variant={variant} className={className}>
                {showIcon && <Calendar className="mr-2 h-5 w-5" />}
                {triggerText}
            </Button>
        )
    );

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {triggerButton}
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-heading">Book Your Appointment</DialogTitle>
                    <DialogDescription>
                        Choose your preferred booking platform to schedule an appointment with Venus Hospital
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    {bookingOptions.map((option) => (
                        <button
                            key={option.name}
                            onClick={() => handleBookingClick(option.url)}
                            className="flex items-center gap-4 p-4 rounded-lg border-2 border-border hover:border-primary transition-all bg-card hover:bg-muted group"
                        >
                            <div className="flex-shrink-0 w-20 h-20 bg-white rounded-lg flex items-center justify-center p-2 shadow-md border border-border">
                                <img
                                    src={option.logo}
                                    alt={`${option.name} logo`}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="flex-1 text-left">
                                <h3 className="font-bold text-lg mb-1 text-foreground">
                                    {option.name}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {option.description}
                                </p>
                            </div>
                            <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </button>
                    ))}
                </div>
                <div className="text-center text-sm text-muted-foreground border-t pt-4">
                    <p>Need help? Call us at <a href="tel:+94362222963" className="text-primary font-semibold hover:underline">036 2222 963</a></p>
                </div>
            </DialogContent>
        </Dialog>
    );
}
