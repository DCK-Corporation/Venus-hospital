import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  Menu,
  X,
  Calendar,
  Stethoscope,
  Home,
  Info,
  Eye,
  Shield,
  Phone,
  Briefcase
} from "lucide-react";
import { cn } from "@/lib/utils";
import { BookingModal } from "@/components/BookingModal";

const navItems = [
  { label: "HOME", href: "/", icon: Home },
  {
    label: "ABOUT US",
    href: "/about",
    icon: Info,
    children: [
      { label: "About Venus Hospital", href: "/about" },
      { label: "Our Vision & Mission", href: "/about#vision" },
      { label: "Our Values", href: "/about#values" },
      { label: "Our Team", href: "/about#team" },
    ],
  },
  {
    label: "MEDICAL SERVICES",
    href: "/services",
    icon: Stethoscope,
    children: [
      { label: "View All Services", href: "/services" },
      { label: "Doctor Channeling & OPD", href: "/services/opd" },
      { label: "Operation Theatre", href: "/services/surgery" },
      { label: "Eye Care Unit", href: "/services/eye-care" },
      { label: "Hearing Care", href: "/services/hearing" },
      { label: "Laboratory Services", href: "/services/laboratory" },
    ],
  },
  {
    label: "EYE CARE & OPTICAL",
    href: "/eye-care",
    icon: Eye,
    children: [
      { label: "Eye Examinations", href: "/eye-care" },
      { label: "Frames & Sunglasses", href: "/eye-care" },
      { label: "Reading Glasses", href: "/eye-care" },
      { label: "Kids Eyewear", href: "/eye-care" },
    ],
  },
  { label: "BOOK APPOINTMENT", isModal: true, icon: Calendar },
  { label: "INSURANCE", href: "/insurance", icon: Shield },
  { label: "CONTACT US", href: "/contact", icon: Phone },
  { label: "CAREERS", href: "/careers", icon: Briefcase },
];

const MainNav = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDropdownClick = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <nav className="bg-blue-900">
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center justify-center gap-1.5">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              {item.isModal ? (
                <BookingModal
                  variant="ghost"
                  className="flex items-center gap-1 px-3 py-4 text-xs font-bold text-secondary-foreground hover:bg-primary/20 transition-colors"
                  triggerText={item.label}
                  showIcon={false}
                />
              ) : item.children ? (
                <button
                  onClick={() => handleDropdownClick(item.label)}
                  className="flex items-center gap-1 px-3 py-4 text-xs font-bold text-secondary-foreground hover:bg-primary/20 transition-colors"
                >
                  {item.label}
                  <ChevronDown className={cn(
                    "w-3 h-3 transition-transform",
                    openDropdown === item.label && "rotate-180"
                  )} />
                </button>
              ) : (
                <Link
                  to={item.href}
                  className="block px-3 py-4 text-xs font-semibold text-secondary-foreground hover:bg-primary/20 transition-colors"
                >
                  {item.label}
                </Link>
              )}

              {/* Dropdown */}
              {item.children && openDropdown === item.label && (
                <div className="absolute top-full left-0 bg-popover border border-border shadow-lg z-50 min-w-[220px] animate-slide-down">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.href}
                      onClick={() => setOpenDropdown(null)}
                      className="block px-4 py-3 text-sm text-popover-foreground hover:bg-muted transition-colors border-b border-border last:border-b-0"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="xl:hidden flex items-center justify-between py-3">
          <span className="text-secondary-foreground font-semibold">Menu</span>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-secondary-foreground p-2"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-secondary border-t border-primary/20 animate-slide-down">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.isModal ? (
                  <div className="px-4 py-3 border-b border-primary/20 flex items-center gap-2">
                    {item.icon && <item.icon className="w-5 h-5 text-secondary-foreground" />}
                    <BookingModal
                      variant="ghost"
                      className="w-full justify-start text-sm font-semibold text-secondary-foreground h-auto p-0"
                      triggerText={item.label}
                      showIcon={false}
                    />
                  </div>
                ) : item.children ? (
                  <>
                    <button
                      onClick={() => handleDropdownClick(item.label)}
                      className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-secondary-foreground border-b border-primary/20"
                    >
                      <div className="flex items-center gap-2">
                        {item.icon && <item.icon className="w-5 h-5" />}
                        {item.label}
                      </div>
                      <ChevronDown className={cn(
                        "w-4 h-4 transition-transform",
                        openDropdown === item.label && "rotate-180"
                      )} />
                    </button>
                    {openDropdown === item.label && (
                      <div className="bg-primary/10">
                        {item.children.map((child, index) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            onClick={() => {
                              setOpenDropdown(null);
                              setMobileMenuOpen(false);
                            }}
                            className="flex items-center gap-2 px-6 py-2 text-sm text-secondary-foreground border-b border-primary/10"
                          >
                            {index === 0 && item.label === "MEDICAL SERVICES" && (
                              <Stethoscope className="w-4 h-4" />
                            )}
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-secondary-foreground border-b border-primary/20"
                  >
                    {item.icon && <item.icon className="w-5 h-5" />}
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default MainNav;
