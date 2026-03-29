import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle2, CreditCard, Lock, MapPin, Truck, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';

const CHECKOUT_STEPS = [
  { id: 'shipping', title: 'Shipping', icon: MapPin },
  { id: 'payment', title: 'Payment', icon: CreditCard },
  { id: 'review', title: 'Review', icon: CheckCircle2 },
];

export default function Checkout() {
  const [currentStep, setCurrentStep] = useState('shipping');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleNext = () => {
    const currentIndex = CHECKOUT_STEPS.findIndex(s => s.id === currentStep);
    if (currentIndex < CHECKOUT_STEPS.length - 1) {
      setCurrentStep(CHECKOUT_STEPS[currentIndex + 1].id);
    } else {
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        // Handle successful checkout here (e.g., redirect to success page)
        alert('Order placed successfully!');
      }, 2000);
    }
  };

  const handleBack = () => {
    const currentIndex = CHECKOUT_STEPS.findIndex(s => s.id === currentStep);
    if (currentIndex > 0) {
      setCurrentStep(CHECKOUT_STEPS[currentIndex - 1].id);
    }
  };

  return (
    <div className="container mx-auto px-4 py-24 md:py-32 max-w-5xl">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Checkout</h1>
        <Button variant="ghost" render={<Link to="/cart" />} className="hidden sm:flex">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Cart
        </Button>
      </div>

      {/* Progress Bar */}
      <div className="mb-12">
        <div className="flex items-center justify-between relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-muted -z-10" />
          <div 
            className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary -z-10 transition-all duration-500"
            style={{ 
              width: `${(CHECKOUT_STEPS.findIndex(s => s.id === currentStep) / (CHECKOUT_STEPS.length - 1)) * 100}%` 
            }}
          />
          
          {CHECKOUT_STEPS.map((step, index) => {
            const isActive = currentStep === step.id;
            const isPast = CHECKOUT_STEPS.findIndex(s => s.id === currentStep) > index;
            
            return (
              <div key={step.id} className="flex flex-col items-center gap-2 bg-background px-4">
                <div 
                  className={`h-10 w-10 rounded-full flex items-center justify-center border-2 transition-colors
                    ${isActive ? 'border-primary bg-primary text-primary-foreground' : 
                      isPast ? 'border-primary bg-primary text-primary-foreground' : 
                      'border-muted bg-background text-muted-foreground'}`}
                >
                  <step.icon className="h-5 w-5" />
                </div>
                <span className={`text-sm font-medium ${isActive || isPast ? 'text-foreground' : 'text-muted-foreground'}`}>
                  {step.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* Main Content Area */}
        <div className="lg:col-span-2">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {currentStep === 'shipping' && (
              <Card>
                <CardHeader>
                  <CardTitle>Shipping Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" placeholder="123 Main St" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="apartment">Apartment, suite, etc. (optional)</Label>
                    <Input id="apartment" placeholder="Apt 4B" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="Colombo" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="postalCode">Postal Code</Label>
                      <Input id="postalCode" placeholder="00300" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="+94 77 123 4567" />
                  </div>

                  <Separator className="my-6" />

                  <h3 className="font-semibold text-lg mb-4">Shipping Method</h3>
                  <RadioGroup defaultValue="standard" className="space-y-3">
                    <div className="flex items-center justify-between space-x-2 border p-4 rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="standard" id="standard" />
                        <Label htmlFor="standard" className="font-medium cursor-pointer">Standard Delivery (3-5 Days)</Label>
                      </div>
                      <span className="font-medium text-muted-foreground">Free</span>
                    </div>
                    <div className="flex items-center justify-between space-x-2 border p-4 rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="express" id="express" />
                        <Label htmlFor="express" className="font-medium cursor-pointer">Express Delivery (1-2 Days)</Label>
                      </div>
                      <span className="font-medium">$15.00</span>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>
            )}

            {currentStep === 'payment' && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    Payment Method <Lock className="h-4 w-4 text-muted-foreground" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <RadioGroup defaultValue="card" className="space-y-4">
                    <div className="border rounded-lg p-4 space-y-4">
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="font-medium cursor-pointer flex items-center gap-2">
                          Credit / Debit Card
                        </Label>
                      </div>
                      
                      <div className="pl-7 space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input id="cardNumber" placeholder="0000 0000 0000 0000" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expiry">Expiry Date</Label>
                            <Input id="expiry" placeholder="MM/YY" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvc">CVC</Label>
                            <Input id="cvc" placeholder="123" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="nameOnCard">Name on Card</Label>
                          <Input id="nameOnCard" placeholder="John Doe" />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 border p-4 rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                      <RadioGroupItem value="paypal" id="paypal" />
                      <Label htmlFor="paypal" className="font-medium cursor-pointer">PayPal</Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>
            )}

            {currentStep === 'review' && (
              <Card>
                <CardHeader>
                  <CardTitle>Review Your Order</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg border-b pb-2">Shipping Details</h3>
                    <div className="text-sm text-muted-foreground">
                      <p>John Doe</p>
                      <p>123 Main St, Apt 4B</p>
                      <p>Colombo, 00300</p>
                      <p>+94 77 123 4567</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg border-b pb-2">Payment Method</h3>
                    <div className="text-sm text-muted-foreground flex items-center gap-2">
                      <CreditCard className="h-4 w-4" />
                      <span>Visa ending in 4242</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="mt-8 flex justify-between">
              <Button 
                variant="outline" 
                onClick={handleBack}
                disabled={currentStep === 'shipping'}
              >
                Back
              </Button>
              <Button 
                onClick={handleNext}
                disabled={isProcessing}
                className="w-32"
              >
                {isProcessing ? 'Processing...' : currentStep === 'review' ? 'Place Order' : 'Continue'}
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Order Summary Sidebar */}
        <div className="lg:col-span-1">
          <Card className="bg-zinc-50 border-none shadow-sm sticky top-24">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-6">
                {/* Mock Items */}
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-muted rounded overflow-hidden shrink-0">
                    <img src="https://picsum.photos/seed/vase/100/100" alt="Item" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex-1 text-sm">
                    <p className="font-medium line-clamp-1">Minimalist Ceramic Vase</p>
                    <p className="text-muted-foreground">Qty: 1</p>
                    <p className="font-medium mt-1">$45.00</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-muted rounded overflow-hidden shrink-0">
                    <img src="https://picsum.photos/seed/blazer/100/100" alt="Item" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex-1 text-sm">
                    <p className="font-medium line-clamp-1">Linen Blend Blazer</p>
                    <p className="text-muted-foreground">Qty: 2</p>
                    <p className="font-medium mt-1">$240.00</p>
                  </div>
                </div>
              </div>

              <Separator className="mb-4" />

              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>$285.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Taxes</span>
                  <span>$22.80</span>
                </div>
              </div>

              <Separator className="mb-4" />

              <div className="flex justify-between items-center">
                <span className="font-bold">Total</span>
                <span className="text-xl font-bold">${(285.00 + 22.80).toFixed(2)}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
