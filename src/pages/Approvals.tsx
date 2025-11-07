import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  LayoutDashboard, 
  CheckCircle, 
  Users, 
  Bell, 
  CreditCard, 
  Settings, 
  LogOut,
  Building2,
  XCircle,
  Check
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const Approvals = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/login");
  };

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
    { icon: CheckCircle, label: "Approvals", path: "/approvals", active: true, badge: "3" },
    { icon: Building2, label: "Cooperative", path: "/cooperative" },
    { icon: Bell, label: "Announcements", path: "/announcements" },
    { icon: CreditCard, label: "Payments", path: "/payments" },
  ];

  const pendingApprovals = [
    {
      id: 1,
      name: "Dukundane Farmers Cooperative",
      type: "Agriculture - Tea",
      location: "Nyaruguru District",
      members: 89,
      date: "2024-11-05",
      status: "pending"
    },
    {
      id: 2,
      name: "Imena Women Cooperative",
      type: "Handicrafts",
      location: "Kigali City",
      members: 45,
      date: "2024-11-04",
      status: "pending"
    },
    {
      id: 3,
      name: "Umoja Dairy Cooperative",
      type: "Livestock - Dairy",
      location: "Gatsibo District",
      members: 67,
      date: "2024-11-03",
      status: "pending"
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
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Pending Approvals</h1>
          <p className="text-gray-600">Review and approve cooperative registration requests</p>
        </header>

        <div className="p-6">
          <div className="space-y-4">
            {pendingApprovals.map((approval) => (
              <Card key={approval.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-gray-900">{approval.name}</h3>
                        <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full">
                          {approval.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">Type: {approval.type}</p>
                      <p className="text-sm text-gray-600 mb-1"> {approval.location}</p>
                      <p className="text-sm text-gray-600 mb-1"> {approval.members} members</p>
                      <p className="text-xs text-gray-500">Submitted: {approval.date}</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button className="flex-1 bg-[#22C55E] hover:bg-[#16A34A] text-white">
                      <Check className="h-4 w-4 mr-2" />
                      Approve
                    </Button>
                    <Button variant="outline" className="flex-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                      <XCircle className="h-4 w-4 mr-2" />
                      Reject
                    </Button>
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

export default Approvals;

