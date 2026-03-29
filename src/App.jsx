import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import OPDServices from "./pages/Services/OPDServices";
import OperationTheatre from "./pages/Services/OperationTheatre";
import EyeCareServices from "./pages/Services/EyeCareServices";
import HearingCare from "./pages/Services/HearingCare";
import Laboratory from "./pages/Services/Laboratory";
import Diagnostics from "./pages/Services/Diagnostics";
import RoomsWards from "./pages/Services/RoomsWards";
import DentalCare from "./pages/Services/DentalCare";
import Pharmacy from "./pages/Services/Pharmacy";
import SkinClinic from "./pages/Services/SkinClinic";
import AccessibilityServices from "./pages/Services/AccessibilityServices";
import EyeCare from "./pages/EyeCare";
import Appointments from "./pages/Appointments";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Insurance from "./pages/Insurance";
import News from "./pages/News";
import NewsArticle from "./pages/NewsArticle";
import FAQ from "./pages/FAQ";
import Dashboard from "./pages/Admin/Dashboard";
import Login from "./pages/Admin/Login";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/opd" element={<OPDServices />} />
          <Route path="/services/surgery" element={<OperationTheatre />} />
          <Route path="/services/eye-care" element={<EyeCareServices />} />
          <Route path="/services/hearing" element={<HearingCare />} />
          <Route path="/services/laboratory" element={<Laboratory />} />
          <Route path="/services/diagnostics" element={<Diagnostics />} />
          <Route path="/services/rooms" element={<RoomsWards />} />
          <Route path="/services/dental" element={<DentalCare />} />
          <Route path="/services/pharmacy" element={<Pharmacy />} />
          <Route path="/services/skinclinic" element={<SkinClinic />} />
          <Route path="/services/accessibility" element={<AccessibilityServices />} />
          <Route path="/eye-care" element={<EyeCare />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsArticle />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
