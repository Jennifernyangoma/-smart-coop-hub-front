import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  LayoutDashboard, 
  Users, 
  Package, 
  DollarSign, 
  Settings, 
  LogOut,
  Bell,
  TrendingUp,
  UserPlus,
  FileText
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const CoopAdminDashboard = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/login");
  };

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/coop-dashboard", active: true },
    { icon: Users, label: "Members", path: "/coop-members" },
    { icon: Package, label: "Products", path: "/coop-products" },
    { icon: DollarSign, label: "Finances", path: "/coop-finances" },
    { icon: Bell, label: "Announcements", path: "/coop-announcements" },
  ];

  const stats = [
    { label: "Total Members", value: "156", color: "text-blue-600", change: "+12 this month" },
    { label: "Active Products", value: "8", color: "text-green-600", change: "+2 new" },
    { label: "Monthly Revenue", value: "12.5M RWF", color: "text-purple-600", change: "+18% growth" },
    { label: "Pending Orders", value: "5", color: "text-orange-600", change: "2 urgent" }
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
            <div className="h-10 w-10 rounded-full bg-[#22C55E] flex items-center justify-center text-white font-bold">
              JM
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900">JB Mugabo</p>
              <p className="text-xs text-gray-500">Coop Admin</p>
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
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-gray-900">Cooperative Admin Dashboard</h1>
            <p className="text-gray-600">Manage your cooperative operations and members</p>
          </div>
          
          <div className="flex gap-3">
            <Button className="bg-[#22C55E] hover:bg-[#16A34A] text-white">
              <UserPlus className="h-4 w-4 mr-2" />
              Add Member
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Package className="h-4 w-4 mr-2" />
              Add Product
            </Button>
            <Button className="bg-[#22C55E] hover:bg-[#16A34A] text-white">
              <FileText className="h-4 w-4 mr-2" />
              Generate Report
            </Button>
          </div>
        </header>

        <div className="p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gray-50 ${stat.color}`}>
                      <TrendingUp className="h-6 w-6" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
                  <p className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</p>
                  <p className="text-xs text-gray-500">{stat.change}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recent Activity */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 pb-4 border-b">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <UserPlus className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900">New member joined</p>
                    <p className="text-xs text-gray-500">Marie joined Terimbere Coffee Cooperative</p>
                  </div>
                  <span className="text-xs text-gray-500">2 hours ago</span>
                </div>
                <div className="flex items-center gap-4 pb-4 border-b">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Package className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900">New order received</p>
                    <p className="text-xs text-gray-500">Premium Arabica Coffee - 50kg</p>
                  </div>
                  <span className="text-xs text-gray-500">5 hours ago</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <DollarSign className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900">Payment received</p>
                    <p className="text-xs text-gray-500">2,500,000 RWF from buyer</p>
                  </div>
                  <span className="text-xs text-gray-500">1 day ago</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default CoopAdminDashboard;

