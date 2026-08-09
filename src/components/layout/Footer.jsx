import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { BookingModal } from "@/components/BookingModal";
import { useSiteSettings } from "@/hooks/useSiteSettings";
import logo from "@/assets/venus-hospital-logo.png";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Book Appointment", isModal: true },
  { name: "FAQ", path: "/faq" },
  { name: "Contact Us", path: "/contact" },
];

const services = [
  { name: "24/7 OPD Services", path: "/services" },
  { name: "Eye Care Unit", path: "/eye-care" },
  { name: "Diagnostic Services", path: "/services#diagnostics" },
  { name: "Laboratory", path: "/services#laboratory" },
  { name: "Dental Care", path: "/services#dental" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  const { settings } = useSiteSettings();
  const telHref = `tel:${settings.phone_primary.replace(/[^+\d]/g, "")}`;
  const mailHref = `mailto:${settings.email}`;

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="space-y-4">
            <img src={logo} alt="Venus Hospital" className="h-16 w-auto bg-white p-2 rounded-lg" />
            <p className="text-sm text-background/70 leading-relaxed">
              Venus Hospital is your reliable first point of contact for quality healthcare
              in Avissawella—providing round-the-clock OPD services supported by experienced
              doctors and modern medical facilities.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-background/10 rounded-full hover:bg-primary transition-colors"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.isModal ? (
                    <BookingModal
                      variant="link"
                      className="p-0 h-auto text-sm text-background/70 hover:text-primary font-normal justify-start"
                      triggerText={link.name}
                      showIcon={false}
                    />
                  ) : (
                    <Link
                      to={link.path}
                      className="text-sm text-background/70 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-background/70">
                  {settings.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href={telHref} className="text-sm text-background/70 hover:text-primary transition-colors">
                  {settings.phone_primary}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href={mailHref} className="text-sm text-background/70 hover:text-primary transition-colors">
                  {settings.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm text-background/70">
                  {settings.operating_hours}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
            <p>© {new Date().getFullYear()} {settings.hospital_name}. All rights reserved.</p>
            <p className="text-background/60 shrink-0">{settings.tagline}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
