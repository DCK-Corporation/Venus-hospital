import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Briefcase, Clock, MapPin, Send, Upload, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const jobListings = [
  {
    id: 1,
    title: "Registered Nurse",
    department: "Nursing Department",
    type: "Full-time",
    location: "Avissawella",
    description: "We are looking for a compassionate and dedicated Registered Nurse to join our healthcare team. The ideal candidate will provide high-quality patient care and work collaboratively with medical staff.",
    requirements: [
      "Valid nursing registration with SLMC",
      "Minimum 2 years of experience in a hospital setting",
      "Excellent communication and interpersonal skills",
      "Ability to work in shifts including nights and weekends",
      "Basic computer literacy",
    ],
  },
  {
    id: 2,
    title: "Laboratory Technician",
    department: "Laboratory Services",
    type: "Full-time",
    location: "Avissawella",
    description: "Join our laboratory team to perform diagnostic tests and ensure accurate results for patient care. You will be responsible for operating laboratory equipment and maintaining quality standards.",
    requirements: [
      "Diploma or Degree in Medical Laboratory Technology",
      "Registration with relevant professional body",
      "Experience with modern laboratory equipment",
      "Attention to detail and accuracy",
      "Good organizational skills",
    ],
  },
  {
    id: 3,
    title: "Receptionist",
    department: "Front Office",
    type: "Full-time",
    location: "Avissawella",
    description: "We are seeking a friendly and organized Receptionist to be the first point of contact for our patients. You will manage appointments, handle inquiries, and ensure smooth front desk operations.",
    requirements: [
      "Excellent communication skills in Sinhala, Tamil, and English",
      "Previous experience in healthcare or hospitality preferred",
      "Proficiency in MS Office applications",
      "Strong customer service orientation",
      "Ability to multitask in a fast-paced environment",
    ],
  },
  {
    id: 4,
    title: "Pharmacist",
    department: "Pharmacy",
    type: "Full-time",
    location: "Avissawella",
    description: "We are looking for a qualified Pharmacist to manage our hospital pharmacy. You will be responsible for dispensing medications, counseling patients, and ensuring compliance with regulations.",
    requirements: [
      "Bachelor's degree in Pharmacy",
      "Valid registration with the Sri Lanka Pharmacy Council",
      "Minimum 1 year of experience",
      "Knowledge of pharmaceutical regulations",
      "Excellent attention to detail",
    ],
  },
];

const Careers = () => {
  const { toast } = useToast();
  const [selectedJob, setSelectedJob] = useState(jobListings[0]);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [fileName, setFileName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type === "application/pdf") {
        setFileName(file.name);
      } else {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF file only.",
          variant: "destructive",
        });
        e.target.value = "";
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Application Submitted!",
        description: `Thank you for applying for the ${selectedJob.title} position. We will contact you soon.`,
      });
      setFormData({ fullName: "", email: "", mobile: "", message: "" });
      setFileName("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <nav className="text-sm text-white/70 mb-4">
              <span>Home</span> / <span className="text-white">Careers</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Join Our Team
            </h1>
            <p className="text-lg text-white/90">
              Build your career with Venus Hospital and make a difference in healthcare
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Why Work at Venus Hospital?
            </h2>
            <p className="text-muted-foreground">
              Join a team of dedicated healthcare professionals committed to providing
              exceptional patient care. We offer competitive benefits, professional
              development opportunities, and a supportive work environment.
            </p>
          </div>
        </div>
      </section>

      {/* Job Listings & Application Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Job Listings */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                Current Openings
              </h2>

              {jobListings.map((job) => (
                <div
                  key={job.id}
                  className={`bg-card border rounded-lg p-6 cursor-pointer transition-all ${
                    selectedJob.id === job.id
                      ? "border-primary shadow-md"
                      : "border-border hover:border-primary/50"
                  }`}
                  onClick={() => setSelectedJob(job)}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {job.title}
                      </h3>
                      <p className="text-primary font-medium">{job.department}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1 text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">{job.description}</p>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Application Form */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
                <div className="flex items-center gap-2 mb-6">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">
                    Apply Now
                  </h3>
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                  Applying for: <span className="font-semibold text-primary">{selectedJob.title}</span>
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="mobile">Mobile Number *</Label>
                    <Input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      required
                      value={formData.mobile}
                      onChange={handleInputChange}
                      placeholder="Enter your mobile number"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="resume">Resume/CV (PDF) *</Label>
                    <div className="mt-1">
                      <label
                        htmlFor="resume"
                        className="flex items-center justify-center gap-2 border-2 border-dashed border-border rounded-lg p-4 cursor-pointer hover:border-primary/50 transition-colors"
                      >
                        <Upload className="w-5 h-5 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          {fileName || "Click to upload PDF"}
                        </span>
                      </label>
                      <input
                        id="resume"
                        name="resume"
                        type="file"
                        accept=".pdf"
                        required
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Cover Letter (Optional)</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us why you're interested in this position..."
                      className="mt-1 min-h-[100px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Submit Application
                      </>
                    )}
                  </Button>
                </form>

                <p className="text-xs text-muted-foreground mt-4 text-center">
                  By submitting, you agree to our privacy policy and terms of service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Careers */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-heading font-bold text-foreground mb-2">
            Have Questions About Careers?
          </h3>
          <p className="text-muted-foreground mb-4">
            Contact our HR department at{" "}
            <a href="mailto:careers@venushospital.lk" className="text-primary hover:underline">
              careers@venushospital.lk
            </a>{" "}
            or call{" "}
            <a href="tel:+94362222963" className="text-primary hover:underline">
              036 2222 963
            </a>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
