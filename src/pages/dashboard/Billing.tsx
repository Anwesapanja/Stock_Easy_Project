import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Calendar, CreditCard, Save, ArrowRight, ShoppingCart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Billing = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [billItems, setBillItems] = useState([
    {
      id: 1,
      medicineName: "Paracetamol 500mg",
      batchNo: "PCM2024001",
      manufDate: "2024-01-15",
      expDate: "2026-01-15",
      quantity: 100,
      unitPrice: 2.50,
      total: 250.00
    }
  ]);
  
  const { toast } = useToast();

  const addNewItem = () => {
    const newItem = {
      id: billItems.length + 1,
      medicineName: "",
      batchNo: "",
      manufDate: "",
      expDate: "",
      quantity: 0,
      unitPrice: 0,
      total: 0
    };
    setBillItems([...billItems, newItem]);
  };

  const updateItem = (id: number, field: string, value: any) => {
    setBillItems(billItems.map(item => {
      if (item.id === id) {
        const updated = { ...item, [field]: value };
        if (field === 'quantity' || field === 'unitPrice') {
          updated.total = updated.quantity * updated.unitPrice;
        }
        return updated;
      }
      return item;
    }));
  };

  const getTotalBill = () => {
    return billItems.reduce((sum, item) => sum + item.total, 0);
  };

  const handleSaveAndProceed = () => {
    toast({
      title: "Bill Saved Successfully",
      description: "Proceeding to payment details...",
    });
    setShowPayment(true);
  };

  const handlePayment = () => {
    toast({
      title: "Payment Processed",
      description: "Your payment has been processed successfully!",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <ShoppingCart className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Billing & Payment</h1>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Billing Section */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="hover-scale">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Medicine Bill Details
                  </CardTitle>
                  <CardDescription>
                    Add medicines to generate a comprehensive bill
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {billItems.map((item, index) => (
                      <div key={item.id} className="p-4 border rounded-lg bg-secondary/5 animate-fade-in">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="text-lg font-medium">Item #{item.id}</h3>
                          <Badge variant="outline">Medicine</Badge>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div className="space-y-2">
                            <Label htmlFor={`medicine-${item.id}`}>Medicine Name</Label>
                            <Input 
                              id={`medicine-${item.id}`}
                              value={item.medicineName}
                              onChange={(e) => updateItem(item.id, 'medicineName', e.target.value)}
                              placeholder="Enter medicine name" 
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor={`batch-${item.id}`}>Batch Number</Label>
                            <Input 
                              id={`batch-${item.id}`}
                              value={item.batchNo}
                              onChange={(e) => updateItem(item.id, 'batchNo', e.target.value)}
                              placeholder="Enter batch number" 
                            />
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-4 gap-4 mb-4">
                          <div className="space-y-2">
                            <Label htmlFor={`manuf-${item.id}`}>Manufacturing Date</Label>
                            <Input 
                              id={`manuf-${item.id}`}
                              type="date"
                              value={item.manufDate}
                              onChange={(e) => updateItem(item.id, 'manufDate', e.target.value)}
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor={`exp-${item.id}`}>Expiry Date</Label>
                            <Input 
                              id={`exp-${item.id}`}
                              type="date"
                              value={item.expDate}
                              onChange={(e) => updateItem(item.id, 'expDate', e.target.value)}
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor={`qty-${item.id}`}>Quantity</Label>
                            <Input 
                              id={`qty-${item.id}`}
                              type="number"
                              value={item.quantity.toString()}
                              onChange={(e) => updateItem(item.id, 'quantity', parseFloat(e.target.value) || 0)}
                              placeholder="0" 
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor={`price-${item.id}`}>Unit Price ($)</Label>
                            <Input 
                              id={`price-${item.id}`}
                              type="number"
                              step="0.01"
                              value={item.unitPrice.toString()}
                              onChange={(e) => updateItem(item.id, 'unitPrice', parseFloat(e.target.value) || 0)}
                              placeholder="0.00" 
                            />
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center pt-3 border-t">
                          <span className="text-sm text-muted-foreground">Item Total:</span>
                          <span className="text-lg font-bold text-primary">${item.total.toFixed(2)}</span>
                        </div>
                      </div>
                    ))}
                    
                    <Button 
                      onClick={addNewItem} 
                      variant="outline" 
                      className="w-full hover-scale"
                    >
                      Add Another Medicine
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <div className="flex gap-4">
                <Button 
                  onClick={handleSaveAndProceed}
                  className="flex-1 bg-primary hover:bg-primary/90 flex items-center gap-2"
                >
                  <Save className="h-4 w-4" />
                  Save & Proceed to Payment
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Bill Summary & Payment */}
            <div className="space-y-6">
              <Card className="hover-scale">
                <CardHeader>
                  <CardTitle>Bill Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {billItems.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span className="truncate pr-2">{item.medicineName || `Item #${item.id}`}</span>
                        <span className="font-medium">${item.total.toFixed(2)}</span>
                      </div>
                    ))}
                    <Separator />
                    <div className="flex justify-between items-center pt-2">
                      <span className="font-bold">Total Amount:</span>
                      <span className="text-xl font-bold text-primary">${getTotalBill().toFixed(2)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Details */}
              {showPayment && (
                <Card className="hover-scale animate-fade-in">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5" />
                      Payment Details
                    </CardTitle>
                    <CardDescription>
                      Complete your payment securely
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input 
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input 
                            id="expiry"
                            placeholder="MM/YY"
                            maxLength={5}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV</Label>
                          <Input 
                            id="cvv"
                            placeholder="123"
                            maxLength={4}
                            type="password"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="cardName">Cardholder Name</Label>
                        <Input 
                          id="cardName"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="billingAddress">Billing Address</Label>
                        <Input 
                          id="billingAddress"
                          placeholder="123 Main St, City, State, ZIP"
                        />
                      </div>
                      
                      <Button 
                        onClick={handlePayment}
                        className="w-full bg-green-600 hover:bg-green-700 text-white"
                      >
                        Process Payment - ${getTotalBill().toFixed(2)}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Billing;