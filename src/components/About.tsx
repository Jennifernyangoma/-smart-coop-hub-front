import { CheckCircle2 } from "lucide-react";

const About = () => {
  const features = [
    "Multi-tenant platform supporting multiple cooperatives",
    "Comprehensive member and financial management",
    "Integrated marketplace for product visibility",
    "Blockchain-anchored transparency for trust",
    "Mobile money integration via Paypack",
    "Role-based access control for security"
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">
              About Smart Cooperative Hub
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Smart Cooperative Hub (SCH) is a revolutionary multi-tenant digital platform designed specifically for cooperatives in Rwanda. Our platform digitalizes cooperative operations, enabling efficient management of members, finances, products, and announcements.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              By connecting cooperatives with buyers through an integrated marketplace and leveraging blockchain technology for transparency, we're transforming how cooperatives operate and grow in the digital age.
            </p>
          </div>
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-lg text-blue-900">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
