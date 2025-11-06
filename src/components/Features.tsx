const Features = () => {
  const features = [
    {
      title: "Member Management",
      description: "Efficiently manage cooperative members with comprehensive profiles, invitation flows, and CSV import capabilities."
    },
    {
      title: "Financial Management",
      description: "Track income, expenses, contributions, and generate detailed financial reports with blockchain-anchored transparency."
    },
    {
      title: "Marketplace Integration",
      description: "Connect with buyers through an integrated marketplace. List products, manage orders, and grow your sales."
    },
    {
      title: "Blockchain Security",
      description: "Leverage blockchain technology for transparent, tamper-proof record keeping and enhanced trust."
    },
    {
      title: "Smart Notifications",
      description: "Stay informed with real-time notifications via email, SMS, and in-app alerts for important updates."
    },
    {
      title: "Analytics & Reporting",
      description: "Access comprehensive reports and analytics for better decision-making and regulatory compliance."
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center lg:justify-start">
            <img 
              src="/feature.png" 
              alt="Smart Cooperative Hub Features" 
              className="w-full max-w-lg h-auto"
            />
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
              Powerful Features for Modern Cooperatives
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Everything you need to digitalize and grow your cooperative, all in one comprehensive platform.
            </p>
            
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index}>
                  <h3 className="text-sm font-semibold text-blue-900">{feature.title}</h3>
                  <p className="text-xs text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
