import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/auth/SignIn";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Stock from "./pages/dashboard/Stock";
import Plans from "./pages/dashboard/Plans";
import Analytics from "./pages/dashboard/Analytics";
import Feedback from "./pages/dashboard/Feedback";
import Billing from "./pages/dashboard/Billing";
import Customers from "./pages/dashboard/Customers";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/forgot-password" element={<ForgotPassword />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/payment" element={<Plans />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/reports" element={<Analytics />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/customers" element={<Customers />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
