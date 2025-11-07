import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LayoutDashboard, Building2, FileText, AlertTriangle, Settings, LogOut, CheckCircle, Eye, AlertCircle, Clock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const RegulatorCompliance = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/login");
  };

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/regulator-dashboard" },
    { icon: Building2, label: "Cooperatives", path: "/regulator-cooperatives" },
    { icon: FileText, label: "Reports", path: "/regulator-reports" },
    { icon: AlertTriangle, label: "Compliance", path: "/regulator-compliance", active: true },
    { icon: CheckCircle, label: "Approvals", path: "/regulator-approvals", badge: "5" },
  ];

  const complianceIssues = [
    {
      id: 1,
      cooperative: "Imena Women Cooperative",
      issue: "Late Financial Report Submission",
      severity: "Medium",
      severityColor: "bg-yellow-100 text-yellow-700",
      description: "Q3 2024 financial report was submitted 15 days past the deadline.",
      reportedDate: "2024-10-30",
      status: "Under Review"
    },
    {
      id: 2,
      cooperative: "Dukundane Farmers Cooperative",
      issue: "Incomplete Member Records",
      severity: "High",
      severityColor: "bg-red-100 text-red-700",
      description: "Member registration documents are incomplete for 23 members.",
      reportedDate: "2024-10-25",
      status: "Action Required"
    },
    {
      id: 3,
      cooperative: "Terimbere Coffee Cooperative",
      issue: "Governance Meeting Minutes Missing",
      severity: "Low",
      severityColor: "bg-blue-100 text-blue-700",
      description: "General assembly meeting minutes for August 2024 not submitted.",
      reportedDate: "2024-10-18",
      status: "Resolved"
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
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Compliance Management</h1>
          <p className="text-gray-600">Monitor compliance issues and violations</p>
        </header>

        <div className="p-6">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <AlertCircle className="h-6 w-6 text-red-600" />
                </div>
                <p className="text-sm text-gray-600 mb-2">Critical Issues</p>
                <p className="text-3xl font-bold text-red-600">2</p>
                <p className="text-xs text-gray-500 mt-1">Require immediate action</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <AlertTriangle className="h-6 w-6 text-yellow-600" />
                </div>
                <p className="text-sm text-gray-600 mb-2">Medium Priority</p>
                <p className="text-3xl font-bold text-yellow-600">5</p>
                <p className="text-xs text-gray-500 mt-1">Under review</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-sm text-gray-600 mb-2">Resolved</p>
                <p className="text-3xl font-bold text-green-600">18</p>
                <p className="text-xs text-gray-500 mt-1">This quarter</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-sm text-gray-600 mb-2">Pending</p>
                <p className="text-3xl font-bold text-blue-600">7</p>
                <p className="text-xs text-gray-500 mt-1">Awaiting response</p>
              </CardContent>
            </Card>
          </div>

          {/* Compliance Issues */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Compliance Issues</h3>

              <div className="space-y-4">
                {complianceIssues.map((issue) => (
                  <div key={issue.id} className="border border-gray-200 rounded-lg p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <AlertTriangle className="h-5 w-5 text-red-600" />
                          <h4 className="text-base font-bold text-gray-900">{issue.issue}</h4>
                          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${issue.severityColor}`}>
                            {issue.severity} Severity
                          </span>
                        </div>
                        <p className="text-sm font-medium text-gray-700 mb-2">
                          Cooperative: {issue.cooperative}
                        </p>
                        <p className="text-sm text-gray-600 mb-2">
                          {issue.description}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span>
                            <span className="font-medium">Reported:</span> {issue.reportedDate}
                          </span>
                          <span>
                            <span className="font-medium">Status:</span> {issue.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                      <Button className="flex-1 bg-[#22C55E] hover:bg-[#16A34A] text-white">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Mark as Resolved
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

export default RegulatorCompliance;

