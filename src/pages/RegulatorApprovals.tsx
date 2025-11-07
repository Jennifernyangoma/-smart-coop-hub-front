import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LayoutDashboard, Building2, FileText, AlertTriangle, Settings, LogOut, CheckCircle, Eye, XCircle, MapPin, Users, Clock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const RegulatorApprovals = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/login");
  };

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/regulator-dashboard" },
    { icon: Building2, label: "Cooperatives", path: "/regulator-cooperatives" },
    { icon: FileText, label: "Reports", path: "/regulator-reports" },
    { icon: AlertTriangle, label: "Compliance", path: "/regulator-compliance" },
    { icon: CheckCircle, label: "Approvals", path: "/regulator-approvals", badge: "5", active: true },
  ];

  const pendingApprovals = [
    {
      id: 1,
      name: "Dukundane Farmers Cooperative",
      type: "New Registration",
      category: "Agriculture - Mixed Farming",
      location: "Musanze District, Northern Province",
      members: 203,
      submittedDate: "2024-11-05",
      priority: "High",
      priorityColor: "bg-red-100 text-red-700",
      description: "A cooperative of farmers specializing in mixed farming including vegetables, beans, and potatoes."
    },
    {
      id: 2,
      name: "Imena Women Cooperative",
      type: "Expansion Approval",
      category: "Crafts & Handicrafts",
      location: "Kigali City",
      members: 45,
      submittedDate: "2024-11-04",
      priority: "Medium",
      priorityColor: "bg-yellow-100 text-yellow-700",
      description: "Requesting approval to expand operations into Northern Province."
    },
    {
      id: 3,
      name: "Twubakane Tea Cooperative",
      type: "New Registration",
      category: "Agriculture - Tea",
      location: "Rubavu District, Western Province",
      members: 178,
      submittedDate: "2024-11-02",
      priority: "Medium",
      priorityColor: "bg-yellow-100 text-yellow-700",
      description: "Tea farmers cooperative focused on organic tea production for export."
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
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Approvals</h1>
          <p className="text-gray-600">Review and approve cooperative registrations</p>
        </header>

        <div className="p-6">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <Clock className="h-6 w-6 text-yellow-600" />
                </div>
                <p className="text-sm text-gray-600 mb-2">Pending Approvals</p>
                <p className="text-3xl font-bold text-yellow-600">5</p>
                <p className="text-xs text-gray-500 mt-1">Awaiting review</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-sm text-gray-600 mb-2">Approved</p>
                <p className="text-3xl font-bold text-green-600">23</p>
                <p className="text-xs text-gray-500 mt-1">This month</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <XCircle className="h-6 w-6 text-red-600" />
                </div>
                <p className="text-sm text-gray-600 mb-2">Rejected</p>
                <p className="text-3xl font-bold text-red-600">3</p>
                <p className="text-xs text-gray-500 mt-1">This month</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <Building2 className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-sm text-gray-600 mb-2">Avg Review Time</p>
                <p className="text-3xl font-bold text-blue-600">7</p>
                <p className="text-xs text-gray-500 mt-1">Days</p>
              </CardContent>
            </Card>
          </div>

          {/* Pending Approvals List */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Pending Approvals</h3>

              <div className="space-y-4">
                {pendingApprovals.map((approval) => (
                  <div key={approval.id} className="border border-gray-200 rounded-lg p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-lg font-bold text-gray-900">{approval.name}</h4>
                          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${approval.priorityColor}`}>
                            {approval.priority} Priority
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          <span className="font-medium">Type:</span> {approval.type} | <span className="font-medium">Category:</span> {approval.category}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {approval.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {approval.members} members
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{approval.description}</p>
                        <p className="text-xs text-gray-500">
                          <span className="font-medium">Submitted:</span> {approval.submittedDate}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                        <Eye className="h-4 w-4 mr-2" />
                        Review Application
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

export default RegulatorApprovals;

