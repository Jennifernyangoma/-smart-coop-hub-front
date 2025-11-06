const HowItWorks = () => {
  const steps = [
    {
      title: "Register Your Cooperative",
      description: "Sign up and complete your cooperative profile with RCA certificate verification."
    },
    {
      title: "Add Members & Products",
      description: "Import members via CSV and list your cooperative's products on the marketplace."
    },
    {
      title: "Manage Operations",
      description: "Track finances, manage orders, and communicate with members through announcements."
    },
    {
      title: "Grow & Scale",
      description: "Access analytics, generate reports, and expand your market reach with blockchain transparency."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Get started with Smart Cooperative Hub in four simple steps
            </p>

            <div className="space-y-3">
              {steps.map((step, index) => (
                <div key={index}>
                  <h3 className="text-sm font-semibold text-blue-900">{step.title}</h3>
                  <p className="text-xs text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img 
              src="/steps.png" 
              alt="How Smart Cooperative Hub Works" 
              className="w-full max-w-2xl h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
