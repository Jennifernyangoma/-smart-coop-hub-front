import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LayoutDashboard, Users, Package, DollarSign, Settings, LogOut, Bell, Star, TrendingUp, Edit, Trash2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const CoopProducts = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/login");
  };

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/coop-dashboard" },
    { icon: Users, label: "Members", path: "/coop-members" },
    { icon: Package, label: "Products", path: "/coop-products", active: true },
    { icon: DollarSign, label: "Finances", path: "/coop-finances" },
    { icon: Bell, label: "Announcements", path: "/coop-announcements" },
  ];

  const products = [
    {
      id: 1,
      name: "Premium Arabica Coffee - 50kg",
      category: "Coffee",
      price: "2,500,000 RWF",
      unit: "per 50kg bag",
      stock: 120,
      sold: 45,
      rating: 4.8,
      reviews: 24,
      status: "In Stock",
      statusColor: "bg-green-100 text-green-700",
      image: "☕"
    },
    {
      id: 2,
      name: "Organic Arabica Coffee - 25kg",
      category: "Coffee",
      price: "1,350,000 RWF",
      unit: "per 25kg bag",
      stock: 85,
      sold: 32,
      rating: 4.7,
      reviews: 18,
      status: "In Stock",
      statusColor: "bg-green-100 text-green-700",
      image: "☕"
    },
    {
      id: 3,
      name: "Specialty Coffee Beans - 10kg",
      category: "Coffee",
      price: "600,000 RWF",
      unit: "per 10kg",
      stock: 5,
      sold: 15,
      rating: 4.9,
      reviews: 12,
      status: "Low Stock",
      statusColor: "bg-yellow-100 text-yellow-700",
      image: "☕"
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
            <div className="h-10 w-10 rounded-full bg-[#22C55E] flex items-center justify-center text-white font-bold">
              JM
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900">JB Mugabo</p>
              <p className="text-xs text-gray-500">Coop Admin</p>
            </div>
          </div>
          <div className="mt-2 px-2 py-1 bg-green-50 rounded text-xs text-green-700">
            Terimbere Coffee Coop
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
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Products Management</h1>
          <p className="text-gray-600">Manage your cooperative products</p>
        </header>

        <div className="p-6">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <Package className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-sm text-gray-600 mb-2">Total Products</p>
                <p className="text-3xl font-bold text-blue-600">8</p>
                <p className="text-xs text-gray-500 mt-1">Active listings</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-sm text-gray-600 mb-2">Total Sold</p>
                <p className="text-3xl font-bold text-green-600">92</p>
                <p className="text-xs text-gray-500 mt-1">This month</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-gray-600 mb-2">Revenue</p>
                <p className="text-3xl font-bold text-[#22C55E]">12.5M</p>
                <p className="text-xs text-gray-500 mt-1">RWF this month</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <Star className="h-6 w-6 text-yellow-500 fill-yellow-500" />
                </div>
                <p className="text-sm text-gray-600 mb-2">Avg. Rating</p>
                <p className="text-3xl font-bold text-yellow-600">4.8</p>
                <p className="text-xs text-gray-500 mt-1">From 54 reviews</p>
              </CardContent>
            </Card>
          </div>

          {/* Add Product Button */}
          <div className="mb-6">
            <Button className="bg-[#22C55E] hover:bg-[#16A34A] text-white px-8">
              <Package className="h-5 w-5 mr-2" />
              Add New Product
            </Button>
          </div>

          {/* Products List */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Product Catalog</h3>

              <div className="space-y-4">
                {products.map((product) => (
                  <div key={product.id} className="border border-gray-200 rounded-lg p-5">
                    <div className="flex gap-4">
                      {/* Product Image */}
                      <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center text-4xl">
                        {product.image}
                      </div>

                      {/* Product Details */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="text-lg font-bold text-gray-900 mb-1">{product.name}</h4>
                            <span className="text-xs font-semibold px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                              {product.category}
                            </span>
                          </div>
                          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${product.statusColor}`}>
                            {product.status}
                          </span>
                        </div>

                        <div className="grid grid-cols-3 gap-4 mb-3">
                          <div>
                            <p className="text-2xl font-bold text-[#22C55E]">{product.price}</p>
                            <p className="text-xs text-gray-500">{product.unit}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Stock: <span className="font-bold text-gray-900">{product.stock} units</span></p>
                            <p className="text-sm text-gray-600">Sold: <span className="font-bold text-green-600">{product.sold} units</span></p>
                          </div>
                          <div>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium">{product.rating}</span>
                              <span className="text-xs text-gray-500">({product.reviews} reviews)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3 mt-4">
                      <Button variant="outline" className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                        View Details
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit Product
                      </Button>
                      <Button variant="outline" className="flex-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
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

export default CoopProducts;

