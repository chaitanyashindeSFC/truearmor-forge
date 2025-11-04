import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Introduction from "./pages/docs/Introduction";
import Installation from "./pages/docs/Installation";
import Quickstart from "./pages/Quickstart";
import Alerts from "./pages/docs/components/Alerts";
import Buttons from "./pages/docs/components/Buttons";
import Theming from "./pages/docs/Theming";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/docs" element={<Introduction />} />
          <Route path="/docs/installation" element={<Installation />} />
          <Route path="/quickstart" element={<Quickstart />} />
          <Route path="/docs/components/alerts" element={<Alerts />} />
          <Route path="/docs/components/buttons" element={<Buttons />} />
          <Route path="/docs/theming" element={<Theming />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
