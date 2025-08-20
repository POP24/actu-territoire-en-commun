import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Investir from "./pages/Investir";
import Opportunites from "./pages/Opportunites";
import Vision from "./pages/Vision";
import Volontariat from "./pages/Volontariat";
import Parrainage from "./pages/Parrainage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/investir" element={<Investir />} />
          <Route path="/opportunites" element={<Opportunites />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/volontariat" element={<Volontariat />} />
          <Route path="/parrainage" element={<Parrainage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
