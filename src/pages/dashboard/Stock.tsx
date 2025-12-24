import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShoppingCart, Eye, Plus } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroIllustration from "@/assets/hero-illustration.png";

const Stock = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-16 px-6 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="flex space-x-4 mb-6">
                <Button className="bg-primary hover:bg-primary/90 flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  Add Record
                </Button>
                <Button variant="secondary" className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  View Record
                </Button>
                <Button className="bg-destructive hover:bg-destructive/90 flex items-center gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  Sell
                </Button>
              </div>
              
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="medicineName">Medicine Name</Label>
                    <Input id="medicineName" placeholder="Enter medicine name" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="medicineManf">Medicine Manf.</Label>
                    <Input id="medicineManf" placeholder="Enter manufacturer" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="sellerName">Seller Name</Label>
                    <Input id="sellerName" placeholder="Enter seller name" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="medicineType">Type of Medicine</Label>
                    <Input id="medicineType" placeholder="Enter medicine type" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="qty">QTY</Label>
                    <Input id="qty" type="number" placeholder="Enter quantity" />
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Go
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

export default Stock;