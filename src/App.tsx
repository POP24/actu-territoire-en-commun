import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThirdwebProvider } from "thirdweb/react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Investir from "./pages/Investir";
import Opportunites from "./pages/Opportunites";
import Territoires from "./pages/Territoires";
import Gouvernance from "./pages/Gouvernance";

const queryClient = new QueryClient();

const App = () => (
  <ThirdwebProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/investir" element={<Investir />} />
            <Route path="/opportunites" element={<Opportunites />} />
            <Route path="/territoires" element={<Territoires />} />
            <Route path="/gouvernance" element={<Gouvernance />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThirdwebProvider>
);

export default App;
