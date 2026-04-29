import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Offerings from "./pages/Offerings";
import ArchitectureAudit from "./pages/ArchitectureAudit";
import AppliedAI from "./pages/AppliedAI";
import DrupalAI from "./pages/DrupalAI";
import AIInPractice from "./pages/AIInPractice";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Insights from "./pages/Insights";
import InsightArticle from "./pages/InsightArticle";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/offerings" element={<Offerings />} />
            <Route path="/architecture-audit" element={<ArchitectureAudit />} />
            <Route path="/applied-ai" element={<AppliedAI />} />
            <Route path="/drupal-ai" element={<DrupalAI />} />
            <Route path="/ai-in-practice" element={<AIInPractice />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/insights" element={<Insights />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
