import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Signup = () => {
  const [formData, setFormData] = useState({
    cooperativeName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Signup attempt:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-3 justify-center mb-6">
            <img src={logo} alt="Smart Cooperative Hub" className="h-12 w-12 rounded" />
            <span className="text-2xl font-bold text-blue-900">Smart Cooperative Hub</span>
          </Link>
        </div>

        <Card className="bg-white shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-blue-900 text-center">
              Get Started
            </CardTitle>
            <CardDescription className="text-center">
              Create your cooperative account to get started
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="cooperativeName" className="text-sm font-medium text-blue-900">
                  Cooperative Name
                </label>
                <Input
                  id="cooperativeName"
                  type="text"
                  placeholder="Enter your cooperative name"
                  value={formData.cooperativeName}
                  onChange={handleChange}
                  required
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-blue-900">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-blue-900">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+250 XXX XXX XXX"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-blue-900">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="text-sm font-medium text-blue-900">
                  Confirm Password
                </label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="h-11"
                />
              </div>

              <div className="flex items-start gap-2 text-sm text-gray-600">
                <input type="checkbox" required className="mt-1 rounded" />
                <span>
                  I agree to the{" "}
                  <a href="#" className="text-blue-900 hover:text-blue-800">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-900 hover:text-blue-800">
                    Privacy Policy
                  </a>
                </span>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white h-11 text-base"
              >
                Create Account
              </Button>

              <div className="text-center text-sm text-gray-600">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-900 hover:text-blue-800 font-semibold">
                  Sign in
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <Link to="/" className="text-sm text-gray-600 hover:text-gray-800">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;

