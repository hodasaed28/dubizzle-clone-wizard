
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/properties" element={<Index />} />
          <Route path="/vehicles" element={<Index />} />
          <Route path="/electronics" element={<Index />} />
          <Route path="/mobiles" element={<Index />} />
          <Route path="/furniture" element={<Index />} />
          <Route path="/fashion" element={<Index />} />
          <Route path="/pets" element={<Index />} />
          <Route path="/jobs" element={<Index />} />
          <Route path="/services" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
