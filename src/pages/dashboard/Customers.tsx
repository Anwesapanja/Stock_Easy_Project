import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Star, MessageSquare, Phone, Mail, MapPin, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Customers = () => {
  const { toast } = useToast();
  const [feedback, setFeedback] = useState("");
  const [query, setQuery] = useState("");

  const customerReviews = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      avatar: "SJ",
      rating: 5,
      date: "2024-01-15",
      review: "StockEasy has completely transformed how we manage our pharmacy inventory. The real-time tracking and expiry alerts have saved us thousands of dollars in wasted medication. Highly recommended!",
      verified: true,
      category: "Healthcare Professional"
    },
    {
      id: 2,
      name: "MedCare Pharmacy",
      avatar: "MP",
      rating: 5,
      date: "2024-01-10",
      review: "Outstanding customer service and an intuitive platform. The analytics dashboard gives us insights we never had before. Our inventory waste has reduced by 40% since implementation.",
      verified: true,
      category: "Pharmacy Chain"
    },
    {
      id: 3,
      name: "City Hospital",
      avatar: "CH",
      rating: 4,
      date: "2024-01-08",
      review: "Great system for hospital inventory management. The bulk operations feature and integration capabilities are excellent. Would love to see more customization options in future updates.",
      verified: true,
      category: "Hospital"
    },
    {
      id: 4,
      name: "Dr. Michael Chen",
      avatar: "MC",
      rating: 5,
      date: "2024-01-05",
      review: "As a small clinic owner, StockEasy fits perfectly within our budget while providing enterprise-level features. The mobile app is particularly useful for on-the-go inventory checks.",
      verified: true,
      category: "Small Practice"
    },
    {
      id: 5,
      name: "PharmNet Solutions",
      avatar: "PS",
      rating: 4,
      date: "2024-01-03",
      review: "Comprehensive solution with robust reporting. The API integration made it easy to connect with our existing systems. Customer support is responsive and knowledgeable.",
      verified: true,
      category: "Distributor"
    }
  ];

  const handleFeedbackSubmit = () => {
    if (!feedback.trim()) {
      toast({
        title: "Error",
        description: "Please enter your feedback before submitting.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Feedback Submitted",
      description: "Thank you for your feedback! We'll review it carefully.",
    });
    setFeedback("");
  };

  const handleQuerySubmit = () => {
    if (!query.trim()) {
      toast({
        title: "Error", 
        description: "Please enter your query before submitting.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Query Submitted",
      description: "Your query has been submitted. We'll get back to you within 24 hours.",
    });
    setQuery("");
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= rating
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  const getAverageRating = () => {
    const total = customerReviews.reduce((sum, review) => sum + review.rating, 0);
    return (total / customerReviews.length).toFixed(1);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Users className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Customer Reviews & Support</h1>
          </div>

          {/* Customer Satisfaction Overview */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="hover-scale">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">{getAverageRating()}</div>
                <div className="flex justify-center mb-2">
                  {renderStars(Math.round(parseFloat(getAverageRating())))}
                </div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </CardContent>
            </Card>
            
            <Card className="hover-scale">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
              </CardContent>
            </Card>
            
            <Card className="hover-scale">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">24h</div>
                <div className="text-sm text-muted-foreground">Avg Response Time</div>
              </CardContent>
            </Card>
            
            <Card className="hover-scale">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">2.8K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Customer Reviews */}
            <div className="lg:col-span-2">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Customer Reviews</CardTitle>
                  <CardDescription>
                    See what our customers are saying about StockEasy
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {customerReviews.map((review) => (
                      <div key={review.id} className="animate-fade-in">
                        <div className="flex items-start space-x-4">
                          <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-semibold">
                            {review.avatar}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <div>
                                <h4 className="font-semibold">{review.name}</h4>
                                <div className="flex items-center gap-2">
                                  {renderStars(review.rating)}
                                  {review.verified && (
                                    <Badge variant="outline" className="text-xs">
                                      Verified Customer
                                    </Badge>
                                  )}
                                </div>
                              </div>
                              <div className="text-right">
                                <Badge variant="secondary" className="mb-1">
                                  {review.category}
                                </Badge>
                                <div className="text-xs text-muted-foreground">
                                  {new Date(review.date).toLocaleDateString()}
                                </div>
                              </div>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {review.review}
                            </p>
                          </div>
                        </div>
                        {review.id < customerReviews.length && (
                          <Separator className="mt-6" />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Feedback & Query Forms */}
            <div className="space-y-6">
              {/* Contact Information */}
              <Card className="hover-scale">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Get In Touch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="text-sm">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="text-sm">support@stockeasy.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-sm">123 Healthcare Ave, Medical District</span>
                  </div>
                </CardContent>
              </Card>

              {/* Feedback Form */}
              <Card className="hover-scale">
                <CardHeader>
                  <CardTitle>Share Your Feedback</CardTitle>
                  <CardDescription>
                    Help us improve StockEasy with your valuable feedback
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="feedback">Your Feedback</Label>
                      <Textarea
                        id="feedback"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        placeholder="Tell us about your experience with StockEasy..."
                        className="min-h-[100px]"
                      />
                    </div>
                    <Button 
                      onClick={handleFeedbackSubmit}
                      className="w-full bg-primary hover:bg-primary/90"
                    >
                      Submit Feedback
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Query Form */}
              <Card className="hover-scale">
                <CardHeader>
                  <CardTitle>Have a Question?</CardTitle>
                  <CardDescription>
                    Submit your query and we'll get back to you quickly
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="query">Your Question</Label>
                      <Textarea
                        id="query"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="What would you like to know about StockEasy?"
                        className="min-h-[100px]"
                      />
                    </div>
                    <Button 
                      onClick={handleQuerySubmit}
                      variant="outline"
                      className="w-full"
                    >
                      Submit Query
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Customers;