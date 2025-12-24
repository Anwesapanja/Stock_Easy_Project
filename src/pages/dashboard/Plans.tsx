import { Button } from "@/components/ui/button";
import { Phone, AlertCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Plans = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Trial Period Plan */}
            <div className="bg-card p-6 rounded-lg border">
              <div className="text-center mb-6">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">TRIAL PERIOD</h3>
                <p className="text-2xl font-bold text-foreground">10 Days Left</p>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Storage</span>
                  <span className="text-foreground">100 MB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Reports</span>
                  <span className="text-foreground">Limited</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Email Support</span>
                  <span className="text-foreground">No</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Call Support</span>
                  <span className="text-foreground">No</span>
                </div>
              </div>
              
              <Button className="w-full bg-primary hover:bg-primary/90">
                Current Plan
              </Button>
            </div>
            
            {/* Business Plan */}
            <div className="bg-card p-6 rounded-lg border">
              <div className="text-center mb-6">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">BUSINESS</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-foreground">700</span>
                  <span className="text-muted-foreground ml-1">/mo</span>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Storage</span>
                  <span className="text-foreground">1 GB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Reports</span>
                  <span className="text-foreground">Customization Allowed</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Email Support</span>
                  <span className="text-foreground">Yes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Call Support</span>
                  <span className="text-foreground">No</span>
                </div>
              </div>
              
              <Link to="/auth/register">
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Upgrade
                </Button>
              </Link>
            </div>
            
            {/* Special Plan */}
            <div className="bg-card p-6 rounded-lg border border-primary">
              <div className="text-center mb-6">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">SPECIAL</h3>
                <div className="text-4xl font-bold text-foreground mb-4">∞</div>
              </div>
              
              <div className="space-y-2 mb-6 text-sm text-muted-foreground">
                <p>Unlimited Storage</p>
                <p>Stock Reports</p>
                <p>Stock Unavailable Reports</p>
                <p>Call Support</p>
              </div>
              
              <Button className="w-full bg-primary hover:bg-primary/90 flex items-center justify-center gap-2 mb-4">
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
              
              <Button variant="ghost" className="w-full text-primary flex items-center justify-center gap-2">
                <AlertCircle className="w-4 h-4" />
                Upgrade
              </Button>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Features</h2>
            <p className="text-muted-foreground">Compare our plans and find the perfect fit for your needs</p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Plans;