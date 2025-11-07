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
  DollarSign
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const Payments = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/login");
  };

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
    { icon: CheckCircle, label: "Approvals", path: "/approvals", badge: "3" },
    { icon: Building2, label: "Cooperative", path: "/cooperative" },
    { icon: Bell, label: "Announcements", path: "/announcements" },
    { icon: CreditCard, label: "Payments", path: "/payments", active: true },
  ];

  const transactions = [
    {
      id: 1,
      cooperative: "Terimbere Coffee Cooperative",
      amount: "1,250,000 RWF",
      type: "Subscription Fee",
      status: "Completed",
      date: "2024-11-05"
    },
    {
      id: 2,
      cooperative: "Imena Women Cooperative",
      amount: "850,000 RWF",
      type: "Product Sale",
      status: "Completed",
      date: "2024-11-04"
    },
    {
      id: 3,
      cooperative: "Umoja Dairy Cooperative",
      amount: "2,200,000 RWF",
      type: "Product Sale",
      status: "Pending",
      date: "2024-11-03"
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
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Payments & Transactions</h1>
          <p className="text-gray-600">Monitor all platform financial transactions</p>
        </header>

        <div className="p-6">
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <Card key={transaction.id}>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                        <DollarSign className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-gray-900">{transaction.cooperative}</h3>
                        <p className="text-sm text-gray-600">{transaction.type}</p>
                        <p className="text-xs text-gray-500">{transaction.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-900">{transaction.amount}</p>
                      <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${
                        transaction.status === "Completed" 
                          ? "bg-green-100 text-green-700" 
                          : "bg-yellow-100 text-yellow-700"
                      }`}>
                        {transaction.status}
                      </span>
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

export default Payments;

