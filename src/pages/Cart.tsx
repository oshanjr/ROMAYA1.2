import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';

// Mock Cart Data
const INITIAL_CART = [
  {
    id: 1,
    name: "Minimalist Ceramic Vase",
    price: 45.00,
    quantity: 1,
    image: "https://picsum.photos/seed/vase/400/500",
    color: "White",
  },
  {
    id: 2,
    name: "Linen Blend Blazer",
    price: 120.00,
    quantity: 2,
    image: "https://picsum.photos/seed/blazer/400/500",
    color: "Navy",
    size: "M",
  },
];

export default function Cart() {
  const [cartItems, setCartItems] = useState(INITIAL_CART);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 150 ? 0 : 15;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 md:py-20 flex flex-col items-center text-center min-h-[60vh] justify-center">
        <div className="h-24 w-24 bg-muted rounded-full flex items-center justify-center mb-6 text-muted-foreground">
          <ShoppingBag className="h-10 w-10" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-4">Your cart is empty</h1>
        <p className="text-muted-foreground mb-8 max-w-md">
          Looks like you haven't added anything to your cart yet. Explore our collections and find something you love.
        </p>
        <Button render={<Link to="/" />} size="lg" className="rounded-full px-8">
          Continue Shopping
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">Shopping Cart</h1>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {cartItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-4 sm:p-6 flex flex-col sm:flex-row gap-6">
                  {/* Product Image */}
                  <div className="w-full sm:w-32 aspect-square rounded-md overflow-hidden bg-muted shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h3 className="font-semibold text-lg mb-1">
                          <Link to={`/product/${item.id}`} className="hover:text-primary transition-colors">
                            {item.name}
                          </Link>
                        </h3>
                        <div className="text-sm text-muted-foreground space-y-1">
                          {item.color && <p>Color: {item.color}</p>}
                          {item.size && <p>Size: {item.size}</p>}
                        </div>
                      </div>
                      <p className="font-semibold text-lg">${item.price.toFixed(2)}</p>
                    </div>

                    <div className="flex items-center justify-between mt-6">
                      {/* Quantity Control */}
                      <div className="flex items-center border rounded-md">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-10 text-center font-medium text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Remove
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="sticky top-24"
          >
            <Card className="bg-zinc-50 border-none shadow-sm">
              <CardContent className="p-6 sm:p-8">
                <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                
                <div className="space-y-4 text-sm mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium">
                      {shipping === 0 ? <span className="text-green-600">Free</span> : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  {shipping > 0 && (
                    <p className="text-xs text-muted-foreground mt-1">
                      Free shipping on orders over $150. Add ${(150 - subtotal).toFixed(2)} more to qualify.
                    </p>
                  )}
                </div>

                <Separator className="mb-6" />

                <div className="flex justify-between items-center mb-8">
                  <span className="text-base font-bold">Total</span>
                  <span className="text-2xl font-bold">${total.toFixed(2)}</span>
                </div>

                <div className="space-y-4">
                  <Button render={<Link to="/checkout" />} className="w-full rounded-full" size="lg">
                    Proceed to Checkout <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-zinc-50 px-2 text-muted-foreground">or</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Input placeholder="Promo code" className="bg-white" />
                    <Button variant="outline">Apply</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
