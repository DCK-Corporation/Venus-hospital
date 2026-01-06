import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronLeft, ChevronRight, Eye, Stethoscope, Heart } from "lucide-react";

const slides = [
  {
    image: "https://res.cloudinary.com/doqyzcyl5/image/upload/v1767678731/IMG_5476_hagamm.jpg",
    title: "Welcome to Venus Hospital",
    subtitle: "Trusted Healthcare in Avissawella",
    description: "Providing round-the-clock medical care with experienced doctors and modern facilities since 1995.",
    icon: Heart,
    primaryBtn: { text: "Book an Appointment", link: "/appointments", icon: Calendar },
    secondaryBtn: { text: "Explore Services", link: "/services" },
  },
  {
    image: "https://res.cloudinary.com/doqyzcyl5/image/upload/v1767678616/IMG_5449_tnchy2.jpg",
    title: "Expert Eye Care Services",
    subtitle: "Complete Vision Solutions",  
    description: "State-of-the-art eye examinations, optical services, and a wide range of frames and sunglasses for all ages.",
    icon: Eye,
    primaryBtn: { text: "Visit Eye Care Center", link: "/eye-care", icon: Eye },
    secondaryBtn: { text: "View Eyewear Collection", link: "/eye-care" },
  },
  {
    image: "https://res.cloudinary.com/doqyzcyl5/image/upload/v1767678732/IMG_5778_h08sjs.jpg",
    title: "24/7 Medical Services",
    subtitle: "Always Here for You",
    description: "Round-the-clock doctor channeling, OPD services, and emergency care with experienced medical professionals.",
    icon: Stethoscope,
    primaryBtn: { text: "Channel a Doctor", link: "/appointments", icon: Calendar },
    secondaryBtn: { text: "Our Medical Team", link: "/about#team" },
  },
  {
    image: "https://res.cloudinary.com/doqyzcyl5/image/upload/v1767678731/IMG_5764_bmwnho.jpg",
    title: "Advanced Laboratory Services",
    subtitle: "Accurate Diagnostics",
    description: "Comprehensive laboratory testing with modern equipment and quick results for accurate diagnosis and treatment.",
    icon: Heart,
    primaryBtn: { text: "Book Lab Test", link: "/appointments", icon: Calendar },
    secondaryBtn: { text: "View All Services", link: "/services" },
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const slide = slides[currentSlide];
  const Icon = slide.icon;
  const PrimaryIcon = slide.primaryBtn.icon;


  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((s, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${s.image}')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/60" />
          </div>

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-60">
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-white/20 blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
          </div>
        </div>
      ))}

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center z-10">
        <div className="max-w-2xl text-white">
          <div className="mb-4 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Icon className="w-5 h-5" />
            <span className="text-sm font-semibold">{slide.subtitle}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-heading animate-fade-in">
            {slide.title}
          </h1>
          <p className="text-base md:text-lg mb-8 opacity-90 max-w-xl">
            {slide.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-white/90 font-extralight px-8">
              <Link to={slide.primaryBtn.link}>
                <PrimaryIcon className="mr-2 h-5 w-5" />
                {slide.primaryBtn.text}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-white bg-white/10 text-white hover:bg-white/20 font-sans px-8">
              <Link to={slide.secondaryBtn.link}>
                {slide.secondaryBtn.text}
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${index === currentSlide
              ? "bg-white w-8"
              : "bg-white/50 hover:bg-white/75"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 100" className="w-full h-auto fill-background">
          <path d="M0,50 C360,100 720,0 1080,50 C1260,75 1380,75 1440,50 L1440,100 L0,100 Z" />
        </svg>
      </div>
    </section>
  );
}
