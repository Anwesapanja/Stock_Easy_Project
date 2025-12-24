import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroIllustration from "@/assets/hero-illustration.png";

const ForgotPassword = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-16 px-6 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-foreground">StockEasy</h1>
              <p className="text-muted-foreground">
                Now it is very easy to maintain stock.<br />
                Save your time and enjoy the day.
              </p>
              
              <div className="bg-background p-6 rounded-lg shadow-sm max-w-md">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Id</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" placeholder="Enter new password" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input id="confirmPassword" type="password" placeholder="Confirm password" />
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Submit
                  </Button>
                  
                  <p className="text-center text-sm text-muted-foreground">
                    Password recalled{" "}
                    <Link to="/auth/signin" className="text-primary hover:underline">
                      Sign in here
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroIllustration} 
                alt="Medical professionals illustration" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ForgotPassword;