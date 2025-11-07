import { Card, CardContent } from "@/components/ui/card";
import { LayoutDashboard, Users, Package, DollarSign, Settings, LogOut, Bell } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const CoopFinances = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/login");
  };

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/coop-dashboard" },
    { icon: Users, label: "Members", path: "/coop-members" },
    { icon: Package, label: "Products", path: "/coop-products" },
    { icon: DollarSign, label: "Finances", path: "/coop-finances", active: true },
    { icon: Bell, label: "Announcements", path: "/coop-announcements" },
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
            <div className="h-10 w-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
              JM
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900">JB Mugabo</p>
              <p className="text-xs text-gray-500">Coop Admin</p>
            </div>
          </div>
          <div className="mt-2 px-2 py-1 bg-blue-50 rounded text-xs text-blue-700">
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

      <main className="flex-1 overflow-y-auto">
        <header className="bg-white border-b border-gray-200 p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Financial Management</h1>
          <p className="text-gray-600">Manage your cooperative finances and transactions</p>
        </header>

        <div className="p-6">
          <Card>
            <CardContent className="pt-6">
              <p className="text-gray-600 text-center py-12">Financial management content coming soon...</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default CoopFinances;

