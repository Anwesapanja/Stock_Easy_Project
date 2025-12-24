import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted py-8 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-muted-foreground mb-4">© Copyright - StockEasy</p>
        <div className="flex justify-center space-x-4">
          <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer" />
          <div className="w-5 h-5 bg-muted-foreground hover:bg-primary cursor-pointer rounded"></div>
          <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer" />
          <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;