import { Phone, Mail, Clock, Facebook, Youtube, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { BookingModal } from "@/components/BookingModal";
import { useSiteSettings } from "@/hooks/useSiteSettings";

const TopBar = () => {
  const { settings } = useSiteSettings();
  const telHref = `tel:${settings.phone_primary.replace(/[^+\d]/g, "")}`;
  const mailHref = `mailto:${settings.email}`;

  return (


    <div className="bg-blue-900 text-primary-foreground py-2 text-sm">
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
        <div className="flex items-center gap-4 flex-wrap">
          <Link to="/about" className="hover:underline">About</Link>
          <span className="hidden sm:inline">|</span>
          <Link to="/contact" className="hover:underline">Contact Us</Link>
          <span className="hidden sm:inline">|</span>
          <Link to="/services" className="hover:underline hidden sm:inline">Services</Link>
          <span className="hidden md:inline">|</span>
          <div className="hidden md:inline">
            <BookingModal
              variant="link"
              className="p-0 h-auto text-primary-foreground hover:underline font-normal text-sm"
              triggerText="Book Appointment"
              showIcon={false}
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span className="font-semibold">{settings.operating_hours}</span>
          </div>
          <span className="hidden sm:inline">|</span>
          <div className="hidden sm:flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <a href={telHref} className="hover:underline font-semibold">{settings.phone_primary}</a>
          </div>
          <span className="hidden md:inline">|</span>
          <div className="hidden md:flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <a href={mailHref} className="hover:underline">{settings.email}</a>
          </div>
          <span className="hidden lg:inline">|</span>
          <div className="hidden lg:flex items-center gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground/80">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground/80">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground/80">
              <Linkedin className="w-4 h-4" />

            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
