import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ImageCarousel({ images, autoPlayInterval = 5000, className = "" }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Auto-play functionality
    useEffect(() => {
        if (!images || images.length <= 1) return;

        const interval = setInterval(() => {
            nextSlide();
        }, autoPlayInterval);

        return () => clearInterval(interval);
    }, [currentIndex, images, autoPlayInterval]);

    const nextSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setTimeout(() => setIsTransitioning(false), 500);
    };

    const prevSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
        setTimeout(() => setIsTransitioning(false), 500);
    };

    const goToSlide = (index) => {
        if (isTransitioning || index === currentIndex) return;
        setIsTransitioning(true);
        setCurrentIndex(index);
        setTimeout(() => setIsTransitioning(false), 500);
    };

    if (!images || images.length === 0) {
        return null;
    }

    // If only one image, display it without carousel controls
    if (images.length === 1) {
        return (
            <div className={`relative rounded-2xl overflow-hidden ${className}`}>
                <img
                    src={images[0].src}
                    alt={images[0].alt || "Image"}
                    className="w-full h-auto object-cover"
                />
            </div>
        );
    }

    return (
        <div className={`relative rounded-2xl overflow-hidden group ${className}`}>
            {/* Images Container */}
            <div className="relative aspect-video bg-gray-100">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                            }`}
                    >
                        <img
                            src={image.src}
                            alt={image.alt || `Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                        {/* Optional Caption */}
                        {image.caption && (
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                                <p className="text-white text-sm md:text-base font-medium">
                                    {image.caption}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <Button
                variant="default"
                size="icon"
                onClick={prevSlide}
                disabled={isTransitioning}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 disabled:opacity-50"
                aria-label="Previous slide"
            >
                <ChevronLeft className="h-6 w-6 text-gray-800" />
            </Button>

            <Button
                variant="ghost"
                size="icon"
                onClick={nextSlide}
                disabled={isTransitioning}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 disabled:opacity-50"
                aria-label="Next slide"
            >
                <ChevronRight className="h-6 w-6 text-gray-800" />
            </Button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        disabled={isTransitioning}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                ? "bg-white w-8"
                                : "bg-white/50 hover:bg-white/75"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Slide Counter */}
            <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">
                {currentIndex + 1} / {images.length}
            </div>
        </div>
    );
}
