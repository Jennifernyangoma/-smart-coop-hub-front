import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Smart Cooperative Hub" className="h-10 w-10 rounded" />
              <span className="text-lg font-bold text-blue-900">Smart Cooperative Hub</span>
            </div>
            <p className="text-gray-600">
              Empowering cooperatives through digital innovation and transparent marketplace solutions.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-blue-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-600 hover:text-green-600">Home</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-green-600">About</a></li>
              <li><a href="#features" className="text-gray-600 hover:text-green-600">Features</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-green-600">Services</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-blue-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-green-600">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600">Support</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-blue-900 mb-4">Connect With Us</h3>
            <div className="flex gap-3">
              <a href="#" className="h-10 w-10 rounded-full bg-blue-900 flex items-center justify-center text-white hover:bg-blue-800">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-blue-900 flex items-center justify-center text-white hover:bg-blue-800">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-blue-900 flex items-center justify-center text-white hover:bg-blue-800">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-blue-900 flex items-center justify-center text-white hover:bg-blue-800">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Smart Cooperative Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
