import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LayoutDashboard, ShoppingCart, Package, CreditCard, Settings, LogOut, Heart, MapPin, Star, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const BuyerFavorites = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/login");
  };

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/buyer-dashboard" },
    { icon: ShoppingCart, label: "Marketplace", path: "/buyer-marketplace" },
    { icon: Package, label: "My Orders", path: "/buyer-orders", badge: "2" },
    { icon: Heart, label: "Favorites", path: "/buyer-favorites", active: true },
    { icon: CreditCard, label: "Payments", path: "/buyer-payments" },
  ];

  const favorites = [
    {
      id: 1,
      name: "Premium Arabica Coffee - 50kg",
      cooperative: "Terimbere Coffee Cooperative",
      location: "Huye District, Southern Province",
      price: "2,500,000 RWF",
      unit: "per 50kg bag",
      rating: 4.8,
      reviews: 24,
      inStock: true,
      image: "☕"
    },
    {
      id: 2,
      name: "Handwoven Baskets - Set of 10",
      cooperative: "Imena Women Cooperative",
      location: "Kigali City",
      price: "85,000 RWF",
      unit: "per set",
      rating: 4.9,
      reviews: 32,
      inStock: true,
      image: "🧺"
    },
    {
      id: 3,
      name: "Organic Honey - 5kg",
      cooperative: "Dukundane Farmers Cooperative",
      location: "Musanze District, Northern Province",
      price: "125,000 RWF",
      unit: "per 5kg",
      rating: 4.7,
      reviews: 15,
      inStock: true,
      image: "🍯"
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
          <h1 className="text-2xl font-bold text-gray-900 mb-2">My Favorites</h1>
          <p className="text-gray-600">Manage your saved products and cooperatives</p>
        </header>

        <div className="p-6">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <Heart className="h-6 w-6 text-red-500 fill-red-500" />
                </div>
                <p className="text-sm text-gray-600 mb-2">Total Favorites</p>
                <p className="text-3xl font-bold text-red-500">7</p>
                <p className="text-xs text-gray-500 mt-1">Saved items</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-gray-600 mb-2">In Stock</p>
                <p className="text-3xl font-bold text-green-600">5</p>
                <p className="text-xs text-gray-500 mt-1">Available now</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-gray-600 mb-2">Out of Stock</p>
                <p className="text-3xl font-bold text-gray-600">2</p>
                <p className="text-xs text-gray-500 mt-1">Not available</p>
              </CardContent>
            </Card>
          </div>

          {/* Favorites Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {favorites.map((product) => (
              <Card key={product.id}>
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    {/* Product Image */}
                    <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center text-4xl">
                      {product.image}
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                        <Button
                          variant="outline"
                          size="sm"
                          className="ml-2 text-red-500 border-red-500 hover:bg-red-50"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-1">
                        <span className="font-medium">From:</span> {product.cooperative}
                      </p>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                        <MapPin className="h-4 w-4" />
                        <span>{product.location}</span>
                      </div>

                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{product.rating}</span>
                        </div>
                        <span className="text-xs text-gray-500">({product.reviews} reviews)</span>
                        {product.inStock && (
                          <span className="text-xs font-semibold px-2 py-1 bg-green-100 text-green-700 rounded-full ml-auto">
                            In Stock
                          </span>
                        )}
                      </div>

                      <div className="flex items-end justify-between">
                        <div>
                          <p className="text-2xl font-bold text-[#22C55E]">{product.price}</p>
                          <p className="text-xs text-gray-500">{product.unit}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-4">
                    <Button variant="outline" className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                      View Details
                    </Button>
                    <Button className="flex-1 bg-[#22C55E] hover:bg-[#16A34A] text-white">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
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

export default BuyerFavorites;

