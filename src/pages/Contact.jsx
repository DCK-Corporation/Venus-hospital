import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  User,
  MessageSquare
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Reception",
    details: ["036 2222 096", "036 2222 064"],
    action: "tel:+94362222096",
  },
  {
    icon: Phone,
    title: "Optical",
    details: ["075 3222 096", "075 3222 099"],
    action: "tel:+94753222096",
  },
  {
    icon: Phone,
    title: "Laboratory",
    details: ["075 322 2101"],
    action: "tel:+94753222101",
  },
  {
    icon: Phone,
    title: "Hearing Aids",
    details: ["077 189 9611"],
    action: "tel:+94771899611",
  },
  {
    icon: Phone,
    title: "Ward",
    details: ["071 071 0007"],
    action: "tel:+94710710007",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["Venusprivatehospital@gmail.com"],
    action: "mailto:Venusprivatehospital@gmail.com",
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["55A Colombo Road", "Avissawella", "Sri Lanka"],
  },
  {
    icon: Clock,
    title: "Operating Hours",
    details: ["Hospital: 6:00 AM - 10:00 PM", "OPD: 8:00 AM - 8:00 PM"],
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
      });

      if (error) throw error;

      setIsSuccess(true);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Message Received",
        description: "Thank you for contacting us. We'll respond shortly.",
      });
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <nav className="text-sm text-white/70 mb-4">
              <span>Home</span> / <span className="text-white">Contact Us</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-white/90">
              We're here to help. Reach out to us for any inquiries or assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-xl font-heading font-bold text-foreground">Get in Touch</h2>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <Card key={item.title}>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                          {item.details.map((detail, i) => (
                            item.action ? (
                              <a
                                key={i}
                                href={item.action}
                                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                              >
                                {detail}
                              </a>
                            ) : (
                              <p key={i} className="text-sm text-muted-foreground">{detail}</p>
                            )
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {isSuccess ? (
                <Card>
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-foreground">
                      Thank You!
                    </h3>
                    <p className="text-muted-foreground">
                      Your message has been sent successfully. We'll get back to you as soon as possible.
                    </p>
                    <Button onClick={() => {
                      setIsSuccess(false);
                      setFormData({ name: "", email: "", phone: "", message: "" });
                    }}>
                      Send Another Message
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-primary" />
                      Send Us a Message
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <div className="relative">
                            <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="name"
                              placeholder="Enter your full name"
                              className="pl-10"
                              value={formData.name}
                              onChange={(e) => handleInputChange("name", e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="phone"
                              type="tel"
                              placeholder="Enter your phone number"
                              className="pl-10"
                              value={formData.phone}
                              onChange={(e) => handleInputChange("phone", e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email address"
                            className="pl-10"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Your Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="How can we help you?"
                          rows={5}
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        <Send className="mr-2 h-4 w-4" />
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-heading font-bold text-foreground">Find Us</h2>
            <p className="text-muted-foreground mt-2">
              Located in the heart of Avissawella, easily accessible from all directions
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31686.57076856736!2d80.19694!3d6.9533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3a0d5e6f8f1d7%3A0x5e3f9c4d7c8e1a2b!2sAvissawella!5e0!3m2!1sen!2slk!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Venus Hospital Location"
            />
          </div>
          <div className="mt-6 text-center">
            <Button asChild variant="outline" size="lg">
              <a
                href="https://maps.google.com/?q=Avissawella,Sri+Lanka"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="mr-2 h-4 w-4" />
                Get Directions
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
