import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LayoutDashboard, ShoppingCart, Package, CreditCard, Settings, LogOut, Heart, MapPin, Truck, CheckCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const BuyerOrders = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/login");
  };

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/buyer-dashboard" },
    { icon: ShoppingCart, label: "Marketplace", path: "/buyer-marketplace" },
    { icon: Package, label: "My Orders", path: "/buyer-orders", badge: "2", active: true },
    { icon: Heart, label: "Favorites", path: "/buyer-favorites" },
    { icon: CreditCard, label: "Payments", path: "/buyer-payments" },
  ];

  const orders = [
    {
      id: 1,
      orderNumber: "ORD-2024-001",
      product: "Premium Arabica Coffee - 50kg",
      cooperative: "Terimbere Coffee Cooperative",
      location: "Huye District, Southern Province",
      quantity: "2 bags",
      amount: "5,000,000 RWF",
      status: "In Transit",
      statusColor: "bg-blue-100 text-blue-700",
      orderDate: "2024-11-05",
      deliveryDate: "2024-11-10",
      image: "☕"
    },
    {
      id: 2,
      orderNumber: "ORD-2024-002",
      product: "Fresh Organic Milk - 100L",
      cooperative: "Umoja Dairy Cooperative",
      location: "Nyagatare District, Eastern Province",
      quantity: "5 containers",
      amount: "2,250,000 RWF",
      status: "Processing",
      statusColor: "bg-yellow-100 text-yellow-700",
      orderDate: "2024-11-04",
      deliveryDate: "2024-11-08",
      image: "🥛"
    },
    {
      id: 3,
      orderNumber: "ORD-2024-003",
      product: "Handwoven Baskets - Set of 10",
      cooperative: "Imena Women Cooperative",
      location: "Kigali City",
      quantity: "3 sets",
      amount: "255,000 RWF",
      status: "Delivered",
      statusColor: "bg-green-100 text-green-700",
      orderDate: "2024-10-28",
      deliveryDate: "2024-11-02",
      image: "🧺"
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
          <h1 className="text-2xl font-bold text-gray-900 mb-2">My Orders</h1>
          <p className="text-gray-600">Track and manage your orders</p>
        </header>

        <div className="p-6">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-gray-600 mb-2">Total Orders</p>
                <p className="text-3xl font-bold text-blue-600">15</p>
                <p className="text-xs text-gray-500 mt-1">All time</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-gray-600 mb-2">Active Orders</p>
                <p className="text-3xl font-bold text-yellow-600">2</p>
                <p className="text-xs text-gray-500 mt-1">In progress</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-gray-600 mb-2">Completed</p>
                <p className="text-3xl font-bold text-green-600">13</p>
                <p className="text-xs text-gray-500 mt-1">Delivered</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-gray-600 mb-2">Total Spent</p>
                <p className="text-3xl font-bold text-purple-600">8.5M</p>
                <p className="text-xs text-gray-500 mt-1">RWF</p>
              </CardContent>
            </Card>
          </div>

          {/* Orders List */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6">My Orders</h3>

              <div className="space-y-4">
                {orders.map((order) => (
                  <div key={order.id} className="border border-gray-200 rounded-lg p-5">
                    <div className="flex gap-4 mb-4">
                      {/* Product Image */}
                      <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center text-3xl">
                        {order.image}
                      </div>

                      {/* Order Details */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="text-base font-bold text-gray-900 mb-1">{order.product}</h4>
                            <p className="text-sm text-gray-600 mb-1">
                              <span className="font-medium">Order #:</span> {order.orderNumber}
                            </p>
                          </div>
                          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${order.statusColor}`}>
                            {order.status}
                          </span>
                        </div>

                        <p className="text-sm text-gray-600 mb-1">
                          <span className="font-medium">From:</span> {order.cooperative}
                        </p>
                        
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                          <MapPin className="h-4 w-4" />
                          <span>{order.location}</span>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                          <span><span className="font-medium">Quantity:</span> {order.quantity}</span>
                          <span><span className="font-medium">Amount:</span> {order.amount}</span>
                        </div>

                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span><span className="font-medium">Ordered:</span> {order.orderDate}</span>
                          <span><span className="font-medium">Expected:</span> {order.deliveryDate}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button variant="outline" className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                        <Truck className="h-4 w-4 mr-2" />
                        Track Order
                      </Button>
                      <Button variant="outline" className="flex-1">
                        View Details
                      </Button>
                      {order.status === "Delivered" && (
                        <Button className="flex-1 bg-[#22C55E] hover:bg-[#16A34A] text-white">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Confirm Receipt
                        </Button>
                      )}
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

export default BuyerOrders;

