import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroIllustration from "@/assets/hero-illustration.png";

const SignIn = () => {
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
                <Tabs defaultValue="user" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="user">User</TabsTrigger>
                    <TabsTrigger value="admin">Admin</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="user" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="user-email">Email Id</Label>
                      <Input id="user-email" type="email" placeholder="Enter your email" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="user-password">Password</Label>
                      <Input id="user-password" type="password" placeholder="Enter your password" />
                    </div>
                    
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      SIGN IN AS USER
                    </Button>
                  </TabsContent>
                  
                  <TabsContent value="admin" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="admin-email">Admin Email Id</Label>
                      <Input id="admin-email" type="email" placeholder="Enter admin email" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="admin-password">Admin Password</Label>
                      <Input id="admin-password" type="password" placeholder="Enter admin password" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="admin-code">Admin Access Code</Label>
                      <Input id="admin-code" type="text" placeholder="Enter admin access code" />
                    </div>
                    
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      SIGN IN AS ADMIN
                    </Button>
                  </TabsContent>
                  
                  <div className="text-center space-x-4 text-sm mt-4">
                    <Link to="/auth/forgot-password" className="text-muted-foreground hover:text-primary">
                      Forget Password?
                    </Link>
                    <span className="text-muted-foreground">|</span>
                    <Link to="/auth/register" className="text-muted-foreground hover:text-primary">
                      Create new account
                    </Link>
                  </div>
                </Tabs>
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

export default SignIn;