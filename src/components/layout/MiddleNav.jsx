import { Calendar, Stethoscope, Eye, FlaskConical, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/venus-hospital-logo.png";

const quickLinks = [
  { icon: Calendar, label: "Book Appointments", href: "/appointments" },
  { icon: Stethoscope, label: "Our Services", href: "/services" },
  { icon: Eye, label: "Eye Care Center", href: "/eye-care" },
  { icon: FlaskConical, label: "Laboratory Services", href: "/services#laboratory" },
];

const MiddleNav = () => {
  return (
    <div className="bg-background py-4 border-b border-border">
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="Venus Hospital" className="h-14 w-auto" />
        </Link>

        {/* Quick Links */}
        <div className="hidden lg:flex items-center gap-3">
          {quickLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="flex items-center gap-2 px-5 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors shadow-sm hover:shadow-md"
            >
              <link.icon className="w-6 h-6 text-primary" />
              <span className="whitespace-nowrap">{link.label}</span>
            </Link>
          ))}
        </div>

        {/* Emergency Contact */}
        <div className="flex items-center gap-3 bg-destructive text-destructive-foreground px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <Phone className="w-7 h-7" />
          <div>
          <p className="font-semibold text-base">Mon-Sat 24/7</p> 
            <p className="text-xl font-bold">011 234 5678</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleNav;
