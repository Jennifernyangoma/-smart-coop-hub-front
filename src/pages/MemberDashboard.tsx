import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  LayoutDashboard, 
  DollarSign, 
  Package, 
  Bell, 
  Settings, 
  LogOut,
  TrendingUp,
  Calendar,
  FileText
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const MemberDashboard = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/login");
  };

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/member-dashboard", active: true },
    { icon: DollarSign, label: "My Contributions", path: "/member-contributions" },
    { icon: Package, label: "My Products", path: "/member-products" },
    { icon: Bell, label: "Announcements", path: "/member-announcements" },
    { icon: FileText, label: "Documents", path: "/member-documents" },
  ];

  const stats = [
    { label: "Total Contributions", value: "850K RWF", color: "text-green-600" },
    { label: "Products Listed", value: "3", color: "text-blue-600" },
    { label: "Earnings", value: "2.3M RWF", color: "text-purple-600" },
    { label: "Member Since", value: "2023", color: "text-orange-600" }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
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
            <div className="h-10 w-10 rounded-full bg-pink-600 flex items-center justify-center text-white font-bold">
              MT
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900">Marie Terimbere</p>
              <p className="text-xs text-gray-500">Member</p>
            </div>
          </div>
          <div className="mt-2 px-2 py-1 bg-green-50 rounded text-xs text-green-700">
            Terimbere Coffee Coop
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
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Member Dashboard</h1>
          <p className="text-gray-600">Track your contributions, products, and cooperative activities</p>
        </header>

        <div className="p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-2">
                    <TrendingUp className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
                  <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recent Transactions */}
          <Card className="mb-6">
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Contributions</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                      <DollarSign className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Monthly Contribution</p>
                      <p className="text-xs text-gray-500">November 2024</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-base font-bold text-gray-900">50,000 RWF</p>
                    <span className="text-xs text-green-600 font-medium">Paid</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pb-4 border-b">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Package className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Product Sale</p>
                      <p className="text-xs text-gray-500">Arabica Coffee - 5kg</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-base font-bold text-gray-900">125,000 RWF</p>
                    <span className="text-xs text-blue-600 font-medium">Received</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Upcoming Events</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-purple-100 flex flex-col items-center justify-center">
                    <Calendar className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900">General Assembly Meeting</p>
                    <p className="text-xs text-gray-500">November 15, 2024 at 10:00 AM</p>
                    <p className="text-xs text-gray-600 mt-1">Discuss cooperative quarterly results</p>
                  </div>
                  <Button size="sm" className="bg-[#22C55E] hover:bg-[#16A34A] text-white">
                    Attend
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default MemberDashboard;

