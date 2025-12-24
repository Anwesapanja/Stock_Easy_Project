import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Activity, DollarSign, Package, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";

const Analytics = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const getAnalyticsData = (period: string) => {
    const data = {
      all: {
        revenue: { current: "52.3K", previous: "47.8K", growth: "+9.4%" },
        sales: { current: "1,247", previous: "1,156", growth: "+7.9%" },
        customers: { current: "542", previous: "498", growth: "+8.8%" },
        products: { current: "89", previous: "76", growth: "+17.1%" },
        chartData: [
          { period: "2020", revenue: "14.2K" },
          { period: "2021", revenue: "17.5K" },
          { period: "2022", revenue: "21.8K" },
          { period: "2023", revenue: "28.4K" },
          { period: "2024", revenue: "35.7K" }
        ]
      },
      "6months": {
        revenue: { current: "28.7K", previous: "24.1K", growth: "+19.1%" },
        sales: { current: "687", previous: "598", growth: "+14.9%" },
        customers: { current: "312", previous: "267", growth: "+16.9%" },
        products: { current: "67", previous: "54", growth: "+24.1%" },
        chartData: [
          { period: "Jan", revenue: "4.2K" },
          { period: "Feb", revenue: "4.8K" },
          { period: "Mar", revenue: "5.1K" },
          { period: "Apr", revenue: "4.9K" },
          { period: "May", revenue: "5.3K" },
          { period: "Jun", revenue: "4.4K" }
        ]
      },
      "3months": {
        revenue: { current: "15.4K", previous: "12.8K", growth: "+20.3%" },
        sales: { current: "398", previous: "321", growth: "+24.0%" },
        customers: { current: "187", previous: "156", growth: "+19.9%" },
        products: { current: "45", previous: "38", growth: "+18.4%" },
        chartData: [
          { period: "Apr", revenue: "4.9K" },
          { period: "May", revenue: "5.3K" },
          { period: "Jun", revenue: "5.2K" }
        ]
      },
      "month": {
        revenue: { current: "5.2K", previous: "4.7K", growth: "+10.6%" },
        sales: { current: "134", previous: "118", growth: "+13.6%" },
        customers: { current: "67", previous: "59", growth: "+13.6%" },
        products: { current: "23", previous: "19", growth: "+21.1%" },
        chartData: [
          { period: "Week 1", revenue: "1.3K" },
          { period: "Week 2", revenue: "1.2K" },
          { period: "Week 3", revenue: "1.4K" },
          { period: "Week 4", revenue: "1.3K" }
        ]
      },
      "week": {
        revenue: { current: "1.3K", previous: "1.1K", growth: "+18.2%" },
        sales: { current: "32", previous: "28", growth: "+14.3%" },
        customers: { current: "18", previous: "15", growth: "+20.0%" },
        products: { current: "12", previous: "9", growth: "+33.3%" },
        chartData: [
          { period: "Mon", revenue: "180" },
          { period: "Tue", revenue: "220" },
          { period: "Wed", revenue: "190" },
          { period: "Thu", revenue: "240" },
          { period: "Fri", revenue: "210" },
          { period: "Sat", revenue: "160" },
          { period: "Sun", revenue: "130" }
        ]
      },
      "today": {
        revenue: { current: "240", previous: "210", growth: "+14.3%" },
        sales: { current: "8", previous: "6", growth: "+33.3%" },
        customers: { current: "5", previous: "4", growth: "+25.0%" },
        products: { current: "3", previous: "2", growth: "+50.0%" },
        chartData: [
          { period: "9AM", revenue: "25" },
          { period: "11AM", revenue: "45" },
          { period: "1PM", revenue: "65" },
          { period: "3PM", revenue: "55" },
          { period: "5PM", revenue: "50" }
        ]
      }
    };
    return data[period as keyof typeof data] || data.all;
  };

  const currentData = getAnalyticsData(activeFilter);

  const filterOptions = [
    { key: "all", label: "All" },
    { key: "6months", label: "Last 6 Months" },
    { key: "3months", label: "Last 3 Months" },
    { key: "month", label: "Current Month" },
    { key: "week", label: "Current Week" },
    { key: "today", label: "Today" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-foreground mb-8">Analytics & Reports</h1>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 mb-8">
            {filterOptions.map((option) => (
              <Button
                key={option.key}
                onClick={() => setActiveFilter(option.key)}
                className={activeFilter === option.key 
                  ? "bg-primary hover:bg-primary/90" 
                  : "bg-secondary hover:bg-secondary/90"
                }
              >
                {option.label}
              </Button>
            ))}
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="hover-scale">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{currentData.revenue.current}</div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <TrendingUp className="h-3 w-3 text-green-500" />
                  {currentData.revenue.growth} from last period
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
                <Activity className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{currentData.sales.current}</div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <TrendingUp className="h-3 w-3 text-green-500" />
                  {currentData.sales.growth} from last period
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Customers</CardTitle>
                <Users className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{currentData.customers.current}</div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <TrendingUp className="h-3 w-3 text-green-500" />
                  {currentData.customers.growth} from last period
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Products</CardTitle>
                <Package className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{currentData.products.current}</div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <TrendingUp className="h-3 w-3 text-green-500" />
                  {currentData.products.growth} from last period
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Revenue Chart */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="lg:col-span-2 hover-scale">
              <CardHeader>
                <CardTitle>Revenue Trends</CardTitle>
                <CardDescription>Revenue performance over {activeFilter === 'all' ? 'years' : 'selected period'}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gradient-to-r from-primary/20 to-primary/5 rounded-lg flex items-end justify-between px-4 pb-4">
                  {currentData.chartData.map((item, index) => (
                    <div key={index} className="text-center animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                      <div className="text-xs text-muted-foreground mb-1">{item.period}</div>
                      <div className="text-lg font-bold">{item.revenue}</div>
                      <div 
                        className="bg-primary/60 rounded-t-lg mt-2 transition-all duration-1000 hover:bg-primary/80"
                        style={{ 
                          height: `${Math.min((parseInt(item.revenue.replace('K', '').replace(',', '')) / 10), 60)}px`,
                          width: '20px',
                          margin: '0 auto'
                        }}
                      ></div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Enhanced Stats */}
            <Card className="hover-scale">
              <CardHeader>
                <CardTitle>Key Performance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-primary/10 rounded-lg">
                    <div className="text-2xl font-bold text-primary">95%</div>
                    <div className="text-xs text-muted-foreground">Stock Accuracy</div>
                  </div>
                  <div className="text-center p-3 bg-secondary/20 rounded-lg">
                    <div className="text-2xl font-bold text-secondary-foreground">24h</div>
                    <div className="text-xs text-muted-foreground">Avg Response</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">87%</div>
                    <div className="text-xs text-muted-foreground">Customer Satisfaction</div>
                  </div>
                  <div className="text-center p-3 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">12%</div>
                    <div className="text-xs text-muted-foreground">Waste Reduction</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Enhanced Sales & Customer Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="hover-scale">
              <CardHeader>
                <CardTitle>Interactive Sales Dashboard</CardTitle>
                <CardDescription>Real-time sales performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-primary/5 rounded-lg">
                    <span className="text-sm font-medium">Prescription Medicines</span>
                    <Badge className="bg-primary text-primary-foreground">67%</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-secondary/10 rounded-lg">
                    <span className="text-sm font-medium">OTC Medicines</span>
                    <Badge variant="secondary">23%</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-sm font-medium">Medical Supplies</span>
                    <Badge className="bg-green-600 text-white">10%</Badge>
                  </div>
                  <div className="h-32 flex items-end justify-center space-x-2 mt-4">
                    {[67, 23, 45, 78, 34, 89].map((height, i) => (
                      <div 
                        key={i} 
                        className="bg-gradient-to-t from-primary to-primary/60 rounded-t-lg hover:from-primary/80 hover:to-primary/40 transition-all duration-300 cursor-pointer"
                        style={{ 
                          height: `${height}px`, 
                          width: '20px',
                          animationDelay: `${i * 0.1}s`
                        }}
                        title={`Sales: ${height}%`}
                      ></div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover-scale">
              <CardHeader>
                <CardTitle>Customer Reviews & Feedback</CardTitle>
                <CardDescription>What our customers are saying</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-3 py-2 bg-primary/5 rounded-r-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium">Dr. Sarah Johnson</span>
                      <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                    </div>
                    <p className="text-xs text-muted-foreground">"Excellent stock management system. Very intuitive!"</p>
                  </div>
                  
                  <div className="border-l-4 border-secondary pl-3 py-2 bg-secondary/5 rounded-r-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium">Pharmacy Plus</span>
                      <div className="flex text-yellow-400">{"★".repeat(4)}{"☆"}</div>
                    </div>
                    <p className="text-xs text-muted-foreground">"Great for inventory tracking and waste reduction."</p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-3 py-2 bg-green-50 rounded-r-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium">MedCare Center</span>
                      <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                    </div>
                    <p className="text-xs text-muted-foreground">"Saved us thousands in expired inventory!"</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Analytics;