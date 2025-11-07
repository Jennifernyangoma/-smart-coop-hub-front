import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", { email, password });
    
    // Navigate to appropriate dashboard based on user role
    // In production, you would validate credentials first
    let dashboardPath = "/dashboard";
    
    if (email === "admin@cooperativehub.rw") {
      dashboardPath = "/dashboard"; // Super Admin
    } else if (email === "officer@rca.gov.rw") {
      dashboardPath = "/regulator-dashboard"; // Regulator
    } else if (email === "jb.mugabo@terimbere.coop") {
      dashboardPath = "/coop-dashboard"; // Coop Admin
    } else if (email === "marie@terimbere.coop") {
      dashboardPath = "/member-dashboard"; // Member
    } else if (email === "david@buyer.com") {
      dashboardPath = "/buyer-dashboard"; // Buyer
    }
    
    alert(`Login successful for ${email}`);
    navigate(dashboardPath);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-3 justify-center mb-6">
            <img src={logo} alt="Smart Cooperative Hub" className="h-12 w-12 rounded" />
            <span className="text-2xl font-bold text-blue-900">Smart Cooperative Hub</span>
          </Link>
        </div>

        {/* Single Card Container */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Address */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-11 pl-11 bg-gray-50 border-gray-200"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-semibold text-gray-900">
                  Password
                </label>
                <a href="#" className="text-sm text-[#22C55E] hover:text-[#16A34A] font-medium">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-11 pl-11 bg-gray-50 border-gray-200"
                />
              </div>
            </div>

            {/* Sign In Button */}
            <Button
              type="submit"
              className="w-full h-11 text-base font-semibold bg-[#22C55E] hover:bg-[#16A34A] text-white"
            >
              Sign In <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>

          {/* Divider */}
          <div className="my-6 border-t border-gray-200"></div>

          {/* Create Account Section */}
          <div className="text-center space-y-3">
            <p className="text-sm text-gray-600">Don't have an account?</p>
            <Link to="/signup">
              <Button
                variant="outline"
                className="w-full h-11 text-base font-semibold border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              >
                Create Account
              </Button>
            </Link>
          </div>

          {/* Demo Accounts Section - Inside the same card */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="mb-3 bg-blue-50 p-3 rounded-md">
              <p className="text-xs font-bold text-gray-900 mb-1">Members:</p>
              <p className="text-xs text-gray-700">
                If you received an invitation code from your cooperative, please use the invitation link provided in your email.
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-semibold text-gray-700">Demo Accounts for Testing:</p>
              <div className="text-xs font-mono space-y-1 text-gray-700 bg-gray-50 p-3 rounded-md">
                <p><span className="font-bold">Super Admin:</span> admin@cooperativehub.rw / password123</p>
                <p><span className="font-bold">Regulator:</span> officer@rca.gov.rw / password123</p>
                <p><span className="font-bold">Coop Admin:</span> jb.mugabo@terimbere.coop / password123</p>
                <p><span className="font-bold">Member:</span> marie@terimbere.coop / password123</p>
                <p><span className="font-bold">Buyer:</span> david@buyer.com / password123</p>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Home Link */}
        <div className="text-center mt-6">
          <Link to="/" className="text-sm text-gray-600 hover:text-gray-800 inline-flex items-center gap-1">
            ← Back to Home Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

