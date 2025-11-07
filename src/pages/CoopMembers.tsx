import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { LayoutDashboard, Users, Package, DollarSign, Settings, LogOut, Bell, Search, Mail, Phone, MapPin, Calendar } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "@/assets/logo.png";

const CoopMembers = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSignOut = () => {
    navigate("/login");
  };

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/coop-dashboard" },
    { icon: Users, label: "Members", path: "/coop-members", active: true },
    { icon: Package, label: "Products", path: "/coop-products" },
    { icon: DollarSign, label: "Finances", path: "/coop-finances" },
    { icon: Bell, label: "Announcements", path: "/coop-announcements" },
  ];

  const members = [
    {
      id: 1,
      name: "Marie Mukamana",
      role: "Member",
      membershipId: "TCC-2023-045",
      phone: "+250 788 123 456",
      email: "marie@terimbere.coop",
      location: "Huye District",
      joinedDate: "2023-03-15",
      contributions: "850,000 RWF",
      status: "Active",
      statusColor: "bg-green-100 text-green-700"
    },
    {
      id: 2,
      name: "Patrick Habimana",
      role: "Secretary",
      membershipId: "TCC-2020-012",
      phone: "+250 788 234 567",
      email: "patrick@terimbere.coop",
      location: "Huye District",
      joinedDate: "2020-03-15",
      contributions: "2,500,000 RWF",
      status: "Active",
      statusColor: "bg-green-100 text-green-700"
    },
    {
      id: 3,
      name: "Alice Mukamana",
      role: "Treasurer",
      membershipId: "TCC-2020-008",
      phone: "+250 788 345 678",
      email: "alice@terimbere.coop",
      location: "Huye District",
      joinedDate: "2020-03-15",
      contributions: "3,200,000 RWF",
      status: "Active",
      statusColor: "bg-green-100 text-green-700"
    },
    {
      id: 4,
      name: "Jean Claude Niyonzima",
      role: "Member",
      membershipId: "TCC-2024-089",
      phone: "+250 788 456 789",
      email: "jean@terimbere.coop",
      location: "Huye District",
      joinedDate: "2024-01-10",
      contributions: "450,000 RWF",
      status: "Active",
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
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Members Management</h1>
          <p className="text-gray-600">Manage your cooperative members</p>
        </header>

        <div className="p-6">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-gray-600 mb-2">Total Members</p>
                <p className="text-3xl font-bold text-blue-600">156</p>
                <p className="text-xs text-gray-500 mt-1">Active members</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-gray-600 mb-2">New This Month</p>
                <p className="text-3xl font-bold text-green-600">12</p>
                <p className="text-xs text-gray-500 mt-1">+8% growth</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-gray-600 mb-2">Total Contributions</p>
                <p className="text-3xl font-bold text-[#22C55E]">45.2M</p>
                <p className="text-xs text-gray-500 mt-1">RWF</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-gray-600 mb-2">Active Producers</p>
                <p className="text-3xl font-bold text-orange-600">89</p>
                <p className="text-xs text-gray-500 mt-1">Currently producing</p>
              </CardContent>
            </Card>
          </div>

          {/* Search and Add Member */}
          <div className="flex gap-4 mb-6">
            <Card className="flex-1">
              <CardContent className="pt-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search members by name, ID, or phone..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-11 h-12"
                  />
                </div>
              </CardContent>
            </Card>
            <Button className="h-16 bg-[#22C55E] hover:bg-[#16A34A] text-white px-8">
              <Users className="h-5 w-5 mr-2" />
              Add New Member
            </Button>
          </div>

          {/* Members List */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Members Directory</h3>

              <div className="space-y-4">
                {members.map((member) => (
                  <div key={member.id} className="border border-gray-200 rounded-lg p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex gap-4 flex-1">
                        <div className="h-16 w-16 rounded-full bg-[#22C55E] flex items-center justify-center text-white font-bold text-xl">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="text-lg font-bold text-gray-900">{member.name}</h4>
                            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${member.statusColor}`}>
                              {member.status}
                            </span>
                            <span className="text-xs font-semibold px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                              {member.role}
                            </span>
                          </div>

                          <div className="grid grid-cols-2 gap-2 mb-2">
                            <p className="text-sm text-gray-600 flex items-center gap-2">
                              <span className="font-medium">ID:</span> {member.membershipId}
                            </p>
                            <p className="text-sm text-gray-600 flex items-center gap-2">
                              <Phone className="h-4 w-4" />
                              {member.phone}
                            </p>
                            <p className="text-sm text-gray-600 flex items-center gap-2">
                              <Mail className="h-4 w-4" />
                              {member.email}
                            </p>
                            <p className="text-sm text-gray-600 flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              {member.location}
                            </p>
                          </div>

                          <div className="flex items-center gap-4 text-sm">
                            <p className="text-gray-600">
                              <span className="font-medium">Joined:</span> {member.joinedDate}
                            </p>
                            <p className="text-[#22C55E] font-bold">
                              <span className="text-gray-600 font-medium">Contributions:</span> {member.contributions}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button variant="outline" className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                        View Profile
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Mail className="h-4 w-4 mr-2" />
                        Send Message
                      </Button>
                      <Button className="flex-1 bg-[#22C55E] hover:bg-[#16A34A] text-white">
                        View Contributions
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

export default CoopMembers;

