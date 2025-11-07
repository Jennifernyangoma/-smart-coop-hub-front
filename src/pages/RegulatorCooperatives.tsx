import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { LayoutDashboard, Building2, FileText, AlertTriangle, Settings, LogOut, CheckCircle, Search, Eye, MapPin, Users } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "@/assets/logo.png";

const RegulatorCooperatives = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSignOut = () => {
    navigate("/login");
  };

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/regulator-dashboard" },
    { icon: Building2, label: "Cooperatives", path: "/regulator-cooperatives", active: true },
    { icon: FileText, label: "Reports", path: "/regulator-reports" },
    { icon: AlertTriangle, label: "Compliance", path: "/regulator-compliance" },
    { icon: CheckCircle, label: "Approvals", path: "/regulator-approvals", badge: "5" },
  ];

  const cooperatives = [
    {
      id: 1,
      name: "Terimbere Coffee Cooperative",
      type: "Agriculture - Coffee",
      location: "Huye District, Southern Province",
      members: 156,
      rcaNumber: "RCA/2020/0145",
      status: "Active",
      statusColor: "bg-green-100 text-green-700",
      registrationDate: "2020-03-15"
    },
    {
      id: 2,
      name: "Umoja Dairy Cooperative",
      type: "Agriculture - Dairy",
      location: "Nyagatare District, Eastern Province",
      members: 89,
      rcaNumber: "RCA/2019/0098",
      status: "Active",
      statusColor: "bg-green-100 text-green-700",
      registrationDate: "2019-08-22"
    },
    {
      id: 3,
      name: "Dukundane Farmers Cooperative",
      type: "Agriculture - Mixed Farming",
      location: "Musanze District, Northern Province",
      members: 203,
      rcaNumber: "RCA/2021/0187",
      status: "Pending",
      statusColor: "bg-yellow-100 text-yellow-700",
      registrationDate: "2024-11-05"
    },
    {
      id: 4,
      name: "Imena Women Cooperative",
      type: "Crafts & Handicrafts",
      location: "Kigali City",
      members: 45,
      rcaNumber: "RCA/2018/0067",
      status: "Active",
      statusColor: "bg-green-100 text-green-700",
      registrationDate: "2018-05-10"
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
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
            <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
              RO
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900">RCA Officer</p>
              <p className="text-xs text-gray-500">Regulator</p>
            </div>
          </div>
          <div className="mt-2 px-2 py-1 bg-blue-50 rounded text-xs text-blue-700">
            RCA - Rwanda Cooperative Agency
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

      <main className="flex-1 overflow-y-auto">
        <header className="bg-white border-b border-gray-200 p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Cooperatives Management</h1>
          <p className="text-gray-600">Monitor and manage all registered cooperatives</p>
        </header>

        <div className="p-6">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-gray-600 mb-2">Total Registered</p>
                <p className="text-3xl font-bold text-blue-600">8</p>
                <p className="text-xs text-gray-500 mt-1">Cooperatives</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-gray-600 mb-2">Active</p>
                <p className="text-3xl font-bold text-green-600">5</p>
                <p className="text-xs text-gray-500 mt-1">Operating normally</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-gray-600 mb-2">Pending</p>
                <p className="text-3xl font-bold text-yellow-600">3</p>
                <p className="text-xs text-gray-500 mt-1">Under review</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-gray-600 mb-2">Total Members</p>
                <p className="text-3xl font-bold text-purple-600">493</p>
                <p className="text-xs text-gray-500 mt-1">Across all coops</p>
              </CardContent>
            </Card>
          </div>

          {/* Search */}
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search cooperatives by name, location, or RCA number..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 h-12"
                />
              </div>
            </CardContent>
          </Card>

          {/* Cooperatives List */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Registered Cooperatives</h3>

              <div className="space-y-4">
                {cooperatives.map((coop) => (
                  <div key={coop.id} className="border border-gray-200 rounded-lg p-5">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-lg font-bold text-gray-900">{coop.name}</h4>
                          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${coop.statusColor}`}>
                            {coop.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          <span className="font-medium">Type:</span> {coop.type}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {coop.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {coop.members} members
                          </span>
                        </div>
                        <div className="mt-2 space-y-1">
                          <p className="text-xs text-gray-500">
                            <span className="font-medium">RCA Number:</span> {coop.rcaNumber}
                          </p>
                          <p className="text-xs text-gray-500">
                            <span className="font-medium">Registered:</span> {coop.registrationDate}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                      <Button className="flex-1 bg-[#22C55E] hover:bg-[#16A34A] text-white">
                        View Reports
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default RegulatorCooperatives;

