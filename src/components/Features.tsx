import { Heart, Package, TrendingDown, Clock } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Package className="w-8 h-8 text-primary" />,
      title: "Smart Stock Management",
      description: "Efficiently track and manage your medicine inventory with real-time updates and automated alerts."
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Patient Care Focused",
      description: "Ensure medicine availability for better patient care and treatment outcomes."
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-primary" />,
      title: "Waste Reduction",
      description: "Minimize medicine waste through expiry tracking and intelligent stock rotation."
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Time Saving",
      description: "Automate routine inventory tasks and focus more on patient care and business growth."
    }
  ];

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Why Choose StockEasy?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our medicine management system helps healthcare providers streamline operations, 
            reduce waste, and improve patient care through intelligent stock management.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4 p-6 rounded-lg hover:bg-muted transition-colors">
              <div className="flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;