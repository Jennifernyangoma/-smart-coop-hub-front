import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  LayoutDashboard, 
  Building2, 
  FileText, 
  AlertTriangle, 
  Settings, 
  LogOut,
  CheckCircle,
  XCircle,
  Eye
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const RegulatorDashboard = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/login");
  };

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/regulator-dashboard", active: true },
    { icon: Building2, label: "Cooperatives", path: "/regulator-cooperatives" },
    { icon: FileText, label: "Reports", path: "/regulator-reports" },
    { icon: AlertTriangle, label: "Compliance", path: "/regulator-compliance" },
    { icon: CheckCircle, label: "Approvals", path: "/regulator-approvals", badge: "5" },
  ];

  const stats = [
    { label: "Total Cooperatives", value: "8", color: "text-blue-600", description: "Registered" },
    { label: "Pending Approvals", value: "5", color: "text-orange-600", description: "Awaiting review" },
    { label: "Compliance Issues", value: "2", color: "text-red-600", description: "Need attention" },
    { label: "Reports Reviewed", value: "23", color: "text-green-600", description: "This month" }
  ];

  const pendingReviews = [
    {
      id: 1,
      name: "Dukundane Farmers Cooperative",
      type: "Registration",
      priority: "High",
      date: "2024-11-05"
    },
    {
      id: 2,
      name: "Imena Women Cooperative",
      type: "Compliance Report",
      priority: "Medium",
      date: "2024-11-04"
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

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="bg-white border-b border-gray-200 p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Regulator Dashboard</h1>
          <p className="text-gray-600">Monitor and regulate cooperative activities across Rwanda</p>
        </header>

        <div className="p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
                  <p className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</p>
                  <p className="text-xs text-gray-500">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pending Reviews */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Pending Reviews</h3>
              <div className="space-y-4">
                {pendingReviews.map((review) => (
                  <div key={review.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-base font-bold text-gray-900">{review.name}</h4>
                          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                            review.priority === "High" 
                              ? "bg-red-100 text-red-700" 
                              : "bg-yellow-100 text-yellow-700"
                          }`}>
                            {review.priority} Priority
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">Type: {review.type}</p>
                        <p className="text-xs text-gray-500">Submitted: {review.date}</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                        <Eye className="h-4 w-4 mr-2" />
                        Review
                      </Button>
                      <Button className="flex-1 bg-[#22C55E] hover:bg-[#16A34A] text-white">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Approve
                      </Button>
                      <Button variant="outline" className="flex-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                        <XCircle className="h-4 w-4 mr-2" />
                        Reject
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

export default RegulatorDashboard;

