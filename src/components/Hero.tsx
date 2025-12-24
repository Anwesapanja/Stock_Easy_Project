import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroIllustration from "@/assets/hero-illustration.png";

const Hero = () => {
  return (
    <section className="bg-muted py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              StockEasy
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Now it is very easy to maintain stock.<br />
              Save your time and enjoy the day.
            </p>
            <Link to="/auth/register">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">
                Get Started
              </Button>
            </Link>
          </div>
          
          <div className="relative">
            <img 
              src={heroIllustration} 
              alt="Medical professionals with healthcare illustration" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;