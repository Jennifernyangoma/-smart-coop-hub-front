import { Button } from "@/components/ui/button";
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
  Plus
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const Announcements = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/login");
  };

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
    { icon: CheckCircle, label: "Approvals", path: "/approvals", badge: "3" },
    { icon: Building2, label: "Cooperative", path: "/cooperative" },
    { icon: Bell, label: "Announcements", path: "/announcements", active: true },
    { icon: CreditCard, label: "Payments", path: "/payments" },
  ];

  const announcements = [
    {
      id: 1,
      title: "Platform Maintenance Schedule",
      message: "System maintenance will be performed on Sunday, November 10th from 2:00 AM to 6:00 AM",
      date: "2024-11-06",
      type: "System"
    },
    {
      id: 2,
      title: "New Feature: Blockchain Verification",
      message: "All financial transactions are now verified and stored on blockchain for enhanced transparency",
      date: "2024-11-05",
      type: "Feature"
    }
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
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Announcements</h1>
              <p className="text-gray-600">Create and manage platform-wide announcements</p>
            </div>
            <Button className="bg-[#22C55E] hover:bg-[#16A34A] text-white">
              <Plus className="h-4 w-4 mr-2" />
              New Announcement
            </Button>
          </div>
        </header>

        <div className="p-6">
          <div className="space-y-4">
            {announcements.map((announcement) => (
              <Card key={announcement.id}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-gray-900">{announcement.title}</h3>
                        <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                          {announcement.type}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{announcement.message}</p>
                      <p className="text-xs text-gray-500">Posted: {announcement.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Announcements;

