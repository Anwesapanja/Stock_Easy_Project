import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroIllustration from "@/assets/hero-illustration.png";

const Feedback = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-16 px-6 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-foreground">Feedback</h1>
              <p className="text-muted-foreground">
                Your response is most valuable to us.
              </p>
              
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Enter your message" 
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button className="bg-primary hover:bg-primary/90">
                    Submit
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-foreground">StockEasy</h1>
              <p className="text-muted-foreground">
                Now it is very easy to maintain stock.<br />
                Save your time and enjoy the day.
              </p>
              
              <div className="relative">
                <img 
                  src={heroIllustration} 
                  alt="Medical professionals illustration" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Feedback;