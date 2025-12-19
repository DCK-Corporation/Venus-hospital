import { Phone, Mail, Clock, Facebook, Youtube, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2 text-sm">
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
        <div className="flex items-center gap-4 flex-wrap">
          <Link to="/about" className="hover:underline">About</Link>
          <span className="hidden sm:inline">|</span>
          <Link to="/contact" className="hover:underline">Contact Us</Link>
          <span className="hidden sm:inline">|</span>
          <Link to="/services" className="hover:underline hidden sm:inline">Services</Link>
          <span className="hidden md:inline">|</span>
          <Link to="/appointments" className="hover:underline hidden md:inline">Book Appointment</Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span className="font-semibold">24/7 Emergency</span>
          </div>
          <span className="hidden sm:inline">|</span>
          <div className="hidden sm:flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <a href="tel:+94112345678" className="hover:underline font-semibold">011 234 5678</a>
          </div>
          <span className="hidden md:inline">|</span>
          <div className="hidden md:flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <a href="mailto:info@venushospital.lk" className="hover:underline">info@venushospital.lk</a>
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
