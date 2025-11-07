import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import FeaturesPage from "./pages/FeaturesPage";
import ContactPage from "./pages/ContactPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import BuyerDashboard from "./pages/BuyerDashboard";
import BuyerMarketplace from "./pages/BuyerMarketplace";
import BuyerOrders from "./pages/BuyerOrders";
import BuyerFavorites from "./pages/BuyerFavorites";
import BuyerPayments from "./pages/BuyerPayments";
import CoopAdminDashboard from "./pages/CoopAdminDashboard";
import CoopMembers from "./pages/CoopMembers";
import CoopProducts from "./pages/CoopProducts";
import CoopFinances from "./pages/CoopFinances";
import CoopAnnouncements from "./pages/CoopAnnouncements";
import MemberDashboard from "./pages/MemberDashboard";
import MemberContributions from "./pages/MemberContributions";
import MemberProducts from "./pages/MemberProducts";
import MemberAnnouncements from "./pages/MemberAnnouncements";
import MemberDocuments from "./pages/MemberDocuments";
import RegulatorDashboard from "./pages/RegulatorDashboard";
import RegulatorCooperatives from "./pages/RegulatorCooperatives";
import RegulatorReports from "./pages/RegulatorReports";
import RegulatorCompliance from "./pages/RegulatorCompliance";
import RegulatorApprovals from "./pages/RegulatorApprovals";
import Approvals from "./pages/Approvals";
import CooperativePage from "./pages/CooperativePage";
import Announcements from "./pages/Announcements";
import Payments from "./pages/Payments";
import SettingsPage from "./pages/SettingsPage";
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
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* Super Admin Routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/approvals" element={<Approvals />} />
          <Route path="/cooperative" element={<CooperativePage />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/settings" element={<SettingsPage />} />
          
          {/* Buyer Routes */}
          <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
          <Route path="/buyer-marketplace" element={<BuyerMarketplace />} />
          <Route path="/buyer-orders" element={<BuyerOrders />} />
          <Route path="/buyer-favorites" element={<BuyerFavorites />} />
          <Route path="/buyer-payments" element={<BuyerPayments />} />
          
          {/* Coop Admin Routes */}
          <Route path="/coop-dashboard" element={<CoopAdminDashboard />} />
          <Route path="/coop-members" element={<CoopMembers />} />
          <Route path="/coop-products" element={<CoopProducts />} />
          <Route path="/coop-finances" element={<CoopFinances />} />
          <Route path="/coop-announcements" element={<CoopAnnouncements />} />
          
          {/* Member Routes */}
          <Route path="/member-dashboard" element={<MemberDashboard />} />
          <Route path="/member-contributions" element={<MemberContributions />} />
          <Route path="/member-products" element={<MemberProducts />} />
          <Route path="/member-announcements" element={<MemberAnnouncements />} />
          <Route path="/member-documents" element={<MemberDocuments />} />
          
          {/* Regulator Routes */}
          <Route path="/regulator-dashboard" element={<RegulatorDashboard />} />
          <Route path="/regulator-cooperatives" element={<RegulatorCooperatives />} />
          <Route path="/regulator-reports" element={<RegulatorReports />} />
          <Route path="/regulator-compliance" element={<RegulatorCompliance />} />
          <Route path="/regulator-approvals" element={<RegulatorApprovals />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
