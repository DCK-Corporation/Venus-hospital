import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Phone, MapPin, Clock, Star } from "lucide-react";
import { useState } from "react";

const categories = [
  { id: "all", label: "All" },
  { id: "frames", label: "Frames" },
  { id: "sunglasses", label: "Sunglasses" },
  { id: "reading", label: "Reading Glasses" },
  { id: "kids", label: "Kids" },
];

const products = [
  {
    id: 1,
    name: "Classic Rectangle Frame",
    category: "frames",
    price: "Rs. 4,500",
    originalPrice: "Rs. 5,500",
    image: "https://res.cloudinary.com/doqyzcyl5/image/upload/v1768735968/Classic_Rectangle_Frame_fz2xor.webp",
    rating: 4.8,
    description: "Timeless rectangular design suitable for all face shapes",
    features: ["Lightweight", "Anti-scratch coating", "UV protection ready"],
    isNew: true,
  },
  {
    id: 2,
    name: "Modern Round Frame",
    category: "frames",
    price: "Rs. 5,200",
    image: "https://res.cloudinary.com/doqyzcyl5/image/upload/v1768735967/Modern_Round_Frame_lxqf8v.avif",
    rating: 4.6,
    description: "Contemporary round design with premium materials",
    features: ["Flexible hinges", "Hypoallergenic", "Durable"],
  },
  {
    id: 3,
    name: "Aviator Sunglasses",
    category: "sunglasses",
    price: "Rs. 6,800",
    image: "https://res.cloudinary.com/doqyzcyl5/image/upload/v1768735970/Aviator_Sunglasses_yuo3uh.jpg",
    rating: 4.9,
    description: "Classic aviator style with polarized lenses",
    features: ["Polarized", "100% UV protection", "Metal frame"],
    isBestSeller: true,
  },
  {
    id: 4,
    name: "Sporty Wrap Sunglasses",
    category: "sunglasses",
    price: "Rs. 5,500",
    image: "https://res.cloudinary.com/doqyzcyl5/image/upload/v1768735968/Sporty_Wrap_Sunglasses_tg6ae7.avif",
    rating: 4.7,
    description: "Perfect for outdoor activities and sports",
    features: ["Impact resistant", "Non-slip grip", "Wraparound design"],
  },
  {
    id: 5,
    name: "Premium Reading Glasses",
    category: "reading",
    price: "Rs. 3,200",
    image: "https://res.cloudinary.com/doqyzcyl5/image/upload/v1768735968/Premium_Reading_Glasses_ngerfl.webp",
    rating: 4.5,
    description: "Comfortable reading glasses for extended use",
    features: ["Blue light filter", "Spring hinges", "Multiple powers"],
  },
  {
    id: 6,
    name: "Compact Folding Readers",
    category: "reading",
    price: "Rs. 2,800",
    image: "https://res.cloudinary.com/doqyzcyl5/image/upload/v1768735968/Framesvista-Classic-Rectangle-Eyeglasses-For-Men-Gray-2_agvvsm.png",
    rating: 4.4,
    description: "Portable folding design with protective case",
    features: ["Foldable", "Includes case", "Lightweight"],
  },
  {
    id: 7,
    name: "Kids Fun Frames",
    category: "kids",
    price: "Rs. 3,500",
    image: "https://res.cloudinary.com/doqyzcyl5/image/upload/v1768735967/Kids_Fun_Frames_ozjuhj.webp",
    rating: 4.8,
    description: "Colorful and durable frames designed for children",
    features: ["Flexible", "Impact resistant", "Fun colors"],
    isNew: true,
  },
  {
    id: 8,
    name: "Teen Style Frame",
    category: "kids",
    price: "Rs. 4,000",
    image: "https://res.cloudinary.com/doqyzcyl5/image/upload/v1768735969/Teen_Style_Frame_ciq0w6.jpg",
    rating: 4.6,
    description: "Trendy designs perfect for teenagers",
    features: ["Trendy", "Durable", "Comfortable fit"],
  },
];

const EyeCare = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts = selectedCategory === "all"
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <nav className="text-sm text-white/70 mb-4">
              <span>Home</span> / <span className="text-white">Eye Care & Optical</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Visual Eye Optical Services
            </h1>
            <p className="text-lg text-white/90">
              Wholly affiliated entity to Venus Hospital with branches across neighboring cities, offering world famous brands at international quality standards
            </p>
          </div>
        </div>
      </section>

      {/* Visual Eye Optical Services Info */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-8 text-center">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-3">
              About Visual Eye Optical Services
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Visual Eye Optical Services is a wholly affiliated entity to Venus Hospital (Pvt) Ltd with a number of branches in the neighboring cities, with its main branch located within the Venus Hospital premises. Our totally computerized Automated Optical Processing Workshop is ready to provide a range of world famous brands of optical products including frames, lenses, contact lenses, Sunglasses etc, at international quality and standards with a guarantee of continuous service.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-xl border border-border flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold mb-1">Multiple Branches</h3>
                <p className="text-sm text-muted-foreground">Main branch at Venus Hospital with branches in neighboring cities</p>
              </div>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold mb-1">Computerized Workshop</h3>
                <p className="text-sm text-muted-foreground">Totally computerized Automated Optical Processing Workshop</p>
              </div>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold mb-1">International Quality</h3>
                <p className="text-sm text-muted-foreground">World famous brands at international standards with service guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-heading font-bold text-foreground">
              Our Eyewear Collection
            </h2>
            <p className="text-muted-foreground mt-2">
              Browse our range of quality frames, sunglasses, and reading glasses
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.label}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group overflow-hidden">
                <div className="relative bg-muted aspect-square flex items-center justify-center overflow-hidden p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    {product.isNew && (
                      <Badge className="bg-primary">New</Badge>
                    )}
                    {product.isBestSeller && (
                      <Badge className="bg-secondary">Best Seller</Badge>
                    )}
                  </div>
                </div>
                <CardContent className="p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {categories.find(c => c.id === product.category)?.label}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{product.rating}</span>
                    </div>
                  </div>
                  <h3 className="font-heading font-semibold text-foreground">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {product.features.slice(0, 2).map((f) => (
                      <span key={f} className="text-xs bg-muted px-2 py-1 rounded">
                        {f}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <div>
                      <span className="text-lg font-bold text-primary">{}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through ml-2">
                          {}
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us CTA */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-card">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                  Visit Our Optical Center
                </h2>
                <p className="text-muted-foreground">
                  Get expert advice on choosing the right eyewear. Our trained opticians
                  will help you find the perfect fit for your needs and style.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-foreground">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>123 Hospital Road, Avissawella</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+94 11 234 5678</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>Mon - Sat: 8:00 AM - 8:00 PM</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
                <Button asChild size="lg">
                  <a href="tel:+94112345678">
                    <Phone className="mr-2 h-5 w-5" />
                    Call to Inquire
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/services#eye-care">
                    <Eye className="mr-2 h-5 w-5" />
                    Eye Care Services
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EyeCare;
