import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { 
  LayoutDashboard, 
  CheckCircle, 
  Users, 
  Bell, 
  CreditCard, 
  Settings, 
  LogOut,
  Building2,
  Search,
  Eye,
  Ban,
  Trash2,
  MoreVertical
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const CooperativePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/login");
  };

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
    { icon: CheckCircle, label: "Approvals", path: "/approvals", badge: "3" },
    { icon: Building2, label: "Cooperative", path: "/cooperative", active: true },
    { icon: Bell, label: "Announcements", path: "/announcements" },
    { icon: CreditCard, label: "Payments", path: "/payments" },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar - Same as Dashboard */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Smart Cooperative Hub" className="h-10 w-10 rounded" />
            <div>
              <h1 className="text-lg font-bold text-blue-900">Smart Cooperative Hub</h1>
            </div>
          </Link>
        </div>

        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-[#22C55E] flex items-center justify-center text-white font-bold">
              AU
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900">Admin User</p>
              <p className="text-xs text-gray-500">Super Admin</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          <p className="text-xs font-semibold text-gray-500 uppercase mb-3">Main Menu</p>
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                item.active
                  ? "bg-[#22C55E] text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span className="flex-1 font-medium">{item.label}</span>
              {item.badge && (
                <span className="bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-200 space-y-1">
          <p className="text-xs font-semibold text-gray-500 uppercase mb-3">Settings</p>
          <Link
            to="/settings"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <Settings className="h-5 w-5" />
            <span className="font-medium">Settings</span>
          </Link>
          <button
            onClick={handleSignOut}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors"
          >
            <LogOut className="h-5 w-5" />
            <span className="font-medium">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="bg-white border-b border-gray-200 p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Cooperative Management</h1>
          <p className="text-gray-600">View, approve, suspend, or delete cooperatives</p>
        </header>

        <div className="p-6">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search cooperatives..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-11"
              />
            </div>
          </div>

          {/* Cooperative Card */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-gray-900">Terimbere Coffee Cooperative</h3>
                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                      active
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Type: Agriculture - Coffee</p>
                  <p className="text-sm text-gray-600 mb-1">📍 Huye District, Southern Province</p>
                  <p className="text-sm text-gray-600">👥 156 members</p>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <MoreVertical className="h-5 w-5 text-gray-500" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <p className="text-gray-500">RCA Number</p>
                  <p className="font-semibold text-gray-900">RCA/2020/0145</p>
                </div>
                <div>
                  <p className="text-gray-500">Location</p>
                  <p className="font-semibold text-gray-900">Southern Province</p>
                </div>
                <div>
                  <p className="text-gray-500">District</p>
                  <p className="font-semibold text-gray-900">Huye</p>
                </div>
                <div>
                  <p className="text-gray-500">Sector</p>
                  <p className="font-semibold text-gray-900">Tumba</p>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-4">
                Est. 2020-03-15 • A cooperative of coffee farmers dedicated to producing high-quality specialty coffee for export and local markets.
              </p>

              <div className="mb-4 pb-4 border-b border-gray-200">
                <p className="text-sm text-gray-600">
                  <strong>Chairperson:</strong> Jean Baptiste Mugabo •{" "}
                  <strong>Treasurer:</strong> Alice Mukamana •{" "}
                  <strong>Secretary:</strong> Patrick Habimana
                </p>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                  <Eye className="h-4 w-4 mr-2" />
                  View
                </Button>
                <Button className="flex-1 bg-white text-blue-900 border-2 border-blue-900 hover:bg-blue-900 hover:text-white">
                  <Ban className="h-4 w-4 mr-2" />
                  Suspend
                </Button>
                <Button variant="outline" className="flex-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default CooperativePage;

