import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-background border-b border-border px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-full"></div>
          <span className="text-xl font-bold text-foreground">StockEasy</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-foreground hover:text-primary">Profile</Link>
          <Link to="/stock" className="text-foreground hover:text-primary">Stock</Link>
          <Link to="/billing" className="text-foreground hover:text-primary">Billing</Link>
          <Link to="/plans" className="text-foreground hover:text-primary">Plans</Link>
          <Link to="/analytics" className="text-foreground hover:text-primary">Reports</Link>
          <Link to="/customers" className="text-foreground hover:text-primary">Reviews</Link>
          <Link to="/feedback" className="text-foreground hover:text-primary">Feedback</Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/auth/register">
            <Button variant="ghost" className="text-primary">Register</Button>
          </Link>
          <Link to="/auth/signin">
            <Button variant="default">Sign In</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;