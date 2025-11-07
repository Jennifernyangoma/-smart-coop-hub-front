import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  LayoutDashboard, 
  ShoppingCart, 
  Package, 
  CreditCard, 
  Settings, 
  LogOut,
  Heart,
  Search,
  Star
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const BuyerDashboard = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/login");
  };

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/buyer-dashboard", active: true },
    { icon: ShoppingCart, label: "Marketplace", path: "/buyer-marketplace" },
    { icon: Package, label: "My Orders", path: "/buyer-orders", badge: "2" },
    { icon: Heart, label: "Favorites", path: "/buyer-favorites" },
    { icon: CreditCard, label: "Payments", path: "/buyer-payments" },
  ];

  const stats = [
    { label: "Active Orders", value: "2", color: "text-blue-600" },
    { label: "Total Purchases", value: "15", color: "text-green-600" },
    { label: "Total Spent", value: "8.5M RWF", color: "text-purple-600" },
    { label: "Saved Items", value: "7", color: "text-orange-600" }
  ];

  const recentOrders = [
    {
      id: 1,
      product: "Premium Arabica Coffee - 50kg",
      cooperative: "Terimbere Coffee Cooperative",
      amount: "2,500,000 RWF",
      status: "In Transit",
      date: "2024-11-05"
    },
    {
      id: 2,
      product: "Fresh Milk - 100L",
      cooperative: "Umoja Dairy Cooperative",
      amount: "450,000 RWF",
      status: "Processing",
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

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="bg-white border-b border-gray-200 p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Buyer Dashboard</h1>
          <p className="text-gray-600">Welcome back! Browse and order products from cooperatives</p>
        </header>

        <div className="p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
                  <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Search Products */}
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for products, cooperatives..."
                  className="w-full h-12 pl-11 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#22C55E]"
                />
              </div>
              <Button className="w-full mt-4 bg-[#22C55E] hover:bg-[#16A34A] text-white">
                Browse Marketplace
              </Button>
            </CardContent>
          </Card>

          {/* Recent Orders */}
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Orders</h2>
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <Card key={order.id}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{order.product}</h3>
                      <p className="text-sm text-gray-600 mb-1">From: {order.cooperative}</p>
                      <p className="text-xs text-gray-500">{order.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-900">{order.amount}</p>
                      <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${
                        order.status === "In Transit" 
                          ? "bg-blue-100 text-blue-700" 
                          : "bg-yellow-100 text-yellow-700"
                      }`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                      Track Order
                    </Button>
                    <Button className="flex-1 bg-[#22C55E] hover:bg-[#16A34A] text-white">
                      <Star className="h-4 w-4 mr-2" />
                      Rate Product
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

export default BuyerDashboard;

