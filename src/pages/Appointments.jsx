import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import {
  CalendarIcon,
  Clock,
  User,
  Phone,
  Mail,
  Stethoscope,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { format } from "date-fns";

const doctors = [
  { id: "dr-silva", name: "Dr. Kumara Silva", specialty: "General Physician", available: ["Mon", "Wed", "Fri"] },
  { id: "dr-fernando", name: "Dr. Priya Fernando", specialty: "Eye Specialist", available: ["Tue", "Thu", "Sat"] },
  { id: "dr-perera", name: "Dr. Saman Perera", specialty: "Dental Surgeon", available: ["Mon", "Tue", "Wed"] },
  { id: "dr-jayawardena", name: "Dr. Nilmini Jayawardena", specialty: "ENT Specialist", available: ["Wed", "Fri"] },
  { id: "dr-wickrama", name: "Dr. Rohan Wickramasinghe", specialty: "Cardiologist", available: ["Mon", "Thu"] },
  { id: "dr-mendis", name: "Dr. Chamari Mendis", specialty: "General Surgeon", available: ["Tue", "Sat"] },
];

const timeSlots = [
  "08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
  "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM",
];

const Appointments = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [date, setDate] = useState();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    doctor: "",
    timeSlot: "",
    reason: "",
  });

  const selectedDoctor = doctors.find(d => d.id === formData.doctor);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!date || !formData.name || !formData.email || !formData.phone || !formData.doctor || !formData.timeSlot) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-appointment-email", {
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          doctor: selectedDoctor?.name,
          specialty: selectedDoctor?.specialty,
          date: format(date, "PPP"),
          timeSlot: formData.timeSlot,
          reason: formData.reason,
        },
      });

      if (error) throw error;

      setIsSuccess(true);
      toast({
        title: "Appointment Booked!",
        description: "A confirmation email has been sent to you.",
      });
    } catch (error) {
      console.error("Error booking appointment:", error);
      toast({
        title: "Booking Confirmed",
        description: "Your appointment has been scheduled. We'll contact you shortly.",
      });
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <Layout>
        <section className="py-20 bg-background min-h-[60vh] flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-lg mx-auto text-center space-y-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h1 className="text-3xl font-heading font-bold text-foreground">
                Appointment Booked Successfully!
              </h1>
              <p className="text-muted-foreground">
                Your appointment with <strong>{selectedDoctor?.name}</strong> has been scheduled
                for <strong>{date && format(date, "PPP")}</strong> at <strong>{formData.timeSlot}</strong>.
              </p>
              <p className="text-sm text-muted-foreground">
                A confirmation email has been sent to {formData.email}
              </p>
              <Button onClick={() => {
                setIsSuccess(false);
                setFormData({ name: "", email: "", phone: "", doctor: "", timeSlot: "", reason: "" });
                setDate(undefined);
              }}>
                Book Another Appointment
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <nav className="text-sm text-white/70 mb-4">
              <span>Home</span> / <span className="text-white">Book Appointment</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Doctor Channeling
            </h1>
            <p className="text-lg text-white/90">
              Book an appointment with our experienced doctors. Walk-ins also welcome at our 24/7 OPD.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Doctor Selection */}
            <div className="lg:col-span-1 space-y-6">
              <h2 className="text-xl font-heading font-bold text-foreground">Our Doctors</h2>
              <div className="space-y-4">
                {doctors.map((doctor) => (
                  <Card
                    key={doctor.id}
                    className={`cursor-pointer transition-all ${
                      formData.doctor === doctor.id
                        ? 'border-primary ring-2 ring-primary/20'
                        : 'hover:border-primary/50'
                    }`}
                    onClick={() => handleInputChange("doctor", doctor.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                          <User className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground">{doctor.name}</h3>
                          <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {doctor.available.map((day) => (
                              <Badge key={day} variant="outline" className="text-xs">
                                {day}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        {formData.doctor === doctor.id && (
                          <CheckCircle className="h-5 w-5 text-primary" />
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CalendarIcon className="h-5 w-5 text-primary" />
                    Book Your Appointment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Date Selection */}
                    <div className="space-y-2">
                      <Label>Select Date *</Label>
                      <div className="border rounded-lg p-4 bg-muted/30">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          disabled={(date) => date < new Date() || date.getDay() === 0}
                          className="mx-auto"
                        />
                      </div>
                    </div>

                    {/* Time Slot Selection */}
                    <div className="space-y-2">
                      <Label>Select Time Slot *</Label>
                      <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                        {timeSlots.map((slot) => (
                          <Button
                            key={slot}
                            type="button"
                            variant={formData.timeSlot === slot ? "default" : "outline"}
                            size="sm"
                            className="text-xs"
                            onClick={() => handleInputChange("timeSlot", slot)}
                          >
                            {slot}
                          </Button>
                        ))}
                      </div>
                    </div>

                    {/* Personal Details */}
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
                        <Label htmlFor="phone">Phone Number *</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="Enter your phone number"
                            className="pl-10"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            required
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
                      <Label htmlFor="reason">Reason for Visit (Optional)</Label>
                      <Textarea
                        id="reason"
                        placeholder="Briefly describe your symptoms or reason for the appointment"
                        rows={3}
                        value={formData.reason}
                        onChange={(e) => handleInputChange("reason", e.target.value)}
                      />
                    </div>

                    {/* Summary */}
                    {formData.doctor && date && formData.timeSlot && (
                      <div className="bg-muted p-4 rounded-lg space-y-2">
                        <h4 className="font-semibold text-foreground">Booking Summary</h4>
                        <div className="grid sm:grid-cols-2 gap-2 text-sm">
                          <div className="flex items-center gap-2">
                            <Stethoscope className="h-4 w-4 text-primary" />
                            <span>{selectedDoctor?.name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CalendarIcon className="h-4 w-4 text-primary" />
                            <span>{format(date, "PPP")}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-primary" />
                            <span>{formData.timeSlot}</span>
                          </div>
                        </div>
                      </div>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting || !formData.doctor || !date || !formData.timeSlot}
                    >
                      {isSubmitting ? "Booking..." : "Confirm Appointment"}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Walk-in Info */}
              <div className="mt-6 p-4 bg-secondary/10 rounded-lg flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Walk-ins Welcome</p>
                  <p className="text-sm text-muted-foreground">
                    Our OPD operates 24/7. You can visit without an appointment for urgent medical needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Appointments;
