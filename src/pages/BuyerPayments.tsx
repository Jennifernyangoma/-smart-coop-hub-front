import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LayoutDashboard, ShoppingCart, Package, CreditCard, Settings, LogOut, Heart, Download, CheckCircle, Clock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const BuyerPayments = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/login");
  };

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/buyer-dashboard" },
    { icon: ShoppingCart, label: "Marketplace", path: "/buyer-marketplace" },
    { icon: Package, label: "My Orders", path: "/buyer-orders", badge: "2" },
    { icon: Heart, label: "Favorites", path: "/buyer-favorites" },
    { icon: CreditCard, label: "Payments", path: "/buyer-payments", active: true },
  ];

  const payments = [
    {
      id: 1,
      transactionId: "TXN-2024-001",
      orderNumber: "ORD-2024-001",
      cooperative: "Terimbere Coffee Cooperative",
      product: "Premium Arabica Coffee - 50kg",
      amount: "5,000,000 RWF",
      paymentMethod: "Mobile Money",
      date: "2024-11-05",
      status: "Completed",
      statusColor: "bg-green-100 text-green-700"
    },
    {
      id: 2,
      transactionId: "TXN-2024-002",
      orderNumber: "ORD-2024-002",
      cooperative: "Umoja Dairy Cooperative",
      product: "Fresh Organic Milk - 100L",
      amount: "2,250,000 RWF",
      paymentMethod: "Bank Transfer",
      date: "2024-11-04",
      status: "Processing",
      statusColor: "bg-yellow-100 text-yellow-700"
    },
    {
      id: 3,
      transactionId: "TXN-2024-003",
      orderNumber: "ORD-2024-003",
      cooperative: "Imena Women Cooperative",
      product: "Handwoven Baskets - Set of 10",
      amount: "255,000 RWF",
      paymentMethod: "Mobile Money",
      date: "2024-10-28",
      status: "Completed",
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
              DB
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900">David Buyer</p>
              <p className="text-xs text-gray-500">Buyer</p>
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

      <main className="flex-1 overflow-y-auto">
        <header className="bg-white border-b border-gray-200 p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Payment History</h1>
          <p className="text-gray-600">View and manage your payment transactions</p>
        </header>

        <div className="p-6">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <CreditCard className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-sm text-gray-600 mb-2">Total Transactions</p>
                <p className="text-3xl font-bold text-blue-600">15</p>
                <p className="text-xs text-gray-500 mt-1">All time</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-sm text-gray-600 mb-2">Completed</p>
                <p className="text-3xl font-bold text-green-600">13</p>
                <p className="text-xs text-gray-500 mt-1">Successful</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <Clock className="h-6 w-6 text-yellow-600" />
                </div>
                <p className="text-sm text-gray-600 mb-2">Processing</p>
                <p className="text-3xl font-bold text-yellow-600">2</p>
                <p className="text-xs text-gray-500 mt-1">In progress</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-gray-600 mb-2">Total Amount</p>
                <p className="text-3xl font-bold text-purple-600">8.5M</p>
                <p className="text-xs text-gray-500 mt-1">RWF</p>
              </CardContent>
            </Card>
          </div>

          {/* Payment History */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Payment History</h3>

              <div className="space-y-4">
                {payments.map((payment) => (
                  <div key={payment.id} className="border border-gray-200 rounded-lg p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-base font-bold text-gray-900">{payment.product}</h4>
                          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${payment.statusColor}`}>
                            {payment.status}
                          </span>
                        </div>
                        
                        <div className="space-y-1 mb-2">
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Transaction ID:</span> {payment.transactionId}
                          </p>
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Order #:</span> {payment.orderNumber}
                          </p>
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Cooperative:</span> {payment.cooperative}
                          </p>
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Payment Method:</span> {payment.paymentMethod}
                          </p>
                        </div>

                        <div className="flex items-center gap-4">
                          <p className="text-xs text-gray-500">
                            <span className="font-medium">Date:</span> {payment.date}
                          </p>
                          <p className="text-lg font-bold text-[#22C55E]">{payment.amount}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button variant="outline" className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                        <Download className="h-4 w-4 mr-2" />
                        Download Receipt
                      </Button>
                      <Button variant="outline" className="flex-1">
                        View Details
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

export default BuyerPayments;

