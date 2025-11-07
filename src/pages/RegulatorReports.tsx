import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LayoutDashboard, Building2, FileText, AlertTriangle, Settings, LogOut, CheckCircle, Download, Eye, Calendar } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const RegulatorReports = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/login");
  };

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/regulator-dashboard" },
    { icon: Building2, label: "Cooperatives", path: "/regulator-cooperatives" },
    { icon: FileText, label: "Reports", path: "/regulator-reports", active: true },
    { icon: AlertTriangle, label: "Compliance", path: "/regulator-compliance" },
    { icon: CheckCircle, label: "Approvals", path: "/regulator-approvals", badge: "5" },
  ];

  const reports = [
    {
      id: 1,
      title: "Terimbere Coffee Cooperative - Q4 2024",
      type: "Quarterly Financial Report",
      cooperative: "Terimbere Coffee Cooperative",
      submittedDate: "2024-11-01",
      status: "Reviewed",
      statusColor: "bg-green-100 text-green-700"
    },
    {
      id: 2,
      title: "Umoja Dairy Cooperative - Annual Report 2024",
      type: "Annual Performance Report",
      cooperative: "Umoja Dairy Cooperative",
      submittedDate: "2024-10-28",
      status: "Pending Review",
      statusColor: "bg-yellow-100 text-yellow-700"
    },
    {
      id: 3,
      title: "Dukundane Farmers - Compliance Report",
      type: "Compliance Report",
      cooperative: "Dukundane Farmers Cooperative",
      submittedDate: "2024-10-25",
      status: "Under Review",
      statusColor: "bg-blue-100 text-blue-700"
    },
    {
      id: 4,
      title: "Imena Women Cooperative - Monthly Report",
      type: "Monthly Activity Report",
      cooperative: "Imena Women Cooperative",
      submittedDate: "2024-10-20",
      status: "Reviewed",
      statusColor: "bg-green-100 text-green-700"
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
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Reports</h1>
          <p className="text-gray-600">Review and analyze cooperative reports</p>
        </header>

        <div className="p-6">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-gray-600 mb-2">Total Reports</p>
                <p className="text-3xl font-bold text-blue-600">23</p>
                <p className="text-xs text-gray-500 mt-1">This month</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-gray-600 mb-2">Pending Review</p>
                <p className="text-3xl font-bold text-yellow-600">4</p>
                <p className="text-xs text-gray-500 mt-1">Awaiting action</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-gray-600 mb-2">Reviewed</p>
                <p className="text-3xl font-bold text-green-600">17</p>
                <p className="text-xs text-gray-500 mt-1">Completed</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-gray-600 mb-2">Issues Found</p>
                <p className="text-3xl font-bold text-red-600">2</p>
                <p className="text-xs text-gray-500 mt-1">Need attention</p>
              </CardContent>
            </Card>
          </div>

          {/* Reports List */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">Submitted Reports</h3>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Calendar className="h-4 w-4 mr-2" />
                  Filter by Date
                </Button>
              </div>

              <div className="space-y-4">
                {reports.map((report) => (
                  <div key={report.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-base font-bold text-gray-900">{report.title}</h4>
                          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${report.statusColor}`}>
                            {report.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">
                          <span className="font-medium">Type:</span> {report.type}
                        </p>
                        <p className="text-sm text-gray-600 mb-1">
                          <span className="font-medium">Cooperative:</span> {report.cooperative}
                        </p>
                        <p className="text-xs text-gray-500">
                          <span className="font-medium">Submitted:</span> {report.submittedDate}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                        <Eye className="h-4 w-4 mr-2" />
                        View Report
                      </Button>
                      <Button className="flex-1 bg-[#22C55E] hover:bg-[#16A34A] text-white">
                        <Download className="h-4 w-4 mr-2" />
                        Download
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

export default RegulatorReports;

