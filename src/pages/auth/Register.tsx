import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroIllustration from "@/assets/hero-illustration.png";

const Register = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-16 px-6 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <Tabs defaultValue="user" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="user">User Registration</TabsTrigger>
                    <TabsTrigger value="admin">Admin Registration</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="user" className="space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="userFirstName">First Name</Label>
                        <Input id="userFirstName" placeholder="First Name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="userMiddleName">Middle Name</Label>
                        <Input id="userMiddleName" placeholder="Middle Name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="userLastName">Last Name</Label>
                        <Input id="userLastName" placeholder="Last Name" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="userBusinessName">Business Name</Label>
                      <Input id="userBusinessName" placeholder="Business Name" />
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="userCountry">Country</Label>
                        <Input id="userCountry" placeholder="Country" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="userCity">City</Label>
                        <Input id="userCity" placeholder="City" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="userState">State</Label>
                        <Input id="userState" placeholder="State" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="userEmail">Email Id</Label>
                      <Input id="userEmail" type="email" placeholder="Email Id" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="userPhone">Phone Number</Label>
                      <Input id="userPhone" placeholder="Phone Number" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="userPassword">Password</Label>
                      <Input id="userPassword" type="password" placeholder="Create Password" />
                    </div>
                    
                    <Button className="bg-primary hover:bg-primary/90 w-full">
                      REGISTER AS USER
                    </Button>
                  </TabsContent>
                  
                  <TabsContent value="admin" className="space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="adminFirstName">First Name</Label>
                        <Input id="adminFirstName" placeholder="First Name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="adminMiddleName">Middle Name</Label>
                        <Input id="adminMiddleName" placeholder="Middle Name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="adminLastName">Last Name</Label>
                        <Input id="adminLastName" placeholder="Last Name" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="adminBusinessName">Business Name</Label>
                      <Input id="adminBusinessName" placeholder="Business Name" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="adminGst">GST Number</Label>
                        <Input id="adminGst" placeholder="GST Number" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="adminPan">Pan Card Number</Label>
                        <Input id="adminPan" placeholder="Pan Card Number" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="adminEmail">Admin Email Id</Label>
                      <Input id="adminEmail" type="email" placeholder="Admin Email Id" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="adminPhone">Phone Number</Label>
                      <Input id="adminPhone" placeholder="Phone Number" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="adminPassword">Admin Password</Label>
                      <Input id="adminPassword" type="password" placeholder="Create Admin Password" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="adminCode">Admin Access Code</Label>
                      <Input id="adminCode" type="text" placeholder="Enter Admin Access Code" />
                    </div>
                    
                    <Button className="bg-primary hover:bg-primary/90 w-full">
                      REGISTER AS ADMIN
                    </Button>
                  </TabsContent>
                  
                  <p className="text-center text-sm text-muted-foreground mt-4">
                    Have you already an account?{" "}
                    <Link to="/auth/signin" className="text-primary hover:underline">
                      Sign in Here
                    </Link>
                  </p>
                </Tabs>
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

export default Register;