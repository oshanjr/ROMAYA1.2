import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Star, Truck, ShieldCheck, Heart, Share2, Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function ProductDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('M');

  const product = {
    id,
    name: "Linen Blend Tailored Blazer",
    price: "$120.00",
    rating: 4.9,
    reviews: 128,
    category: "Women's Fashion",
    description: "Elevate your everyday style with our Linen Blend Tailored Blazer. Designed with a relaxed yet structured fit, this blazer is perfect for both office wear and weekend outings. Features a single-button closure, notched lapels, and two front flap pockets.",
    images: [
      "https://picsum.photos/seed/blazer1/800/1000",
      "https://picsum.photos/seed/blazer2/800/1000",
      "https://picsum.photos/seed/blazer3/800/1000",
      "https://picsum.photos/seed/blazer4/800/1000",
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Beige', class: 'bg-[#E5D3B3]' },
      { name: 'Navy', class: 'bg-[#1D2951]' },
      { name: 'Black', class: 'bg-black' },
    ]
  };

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink render={<Link to="/" />}>Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink render={<Link to="/category/womens" />}>Women's Fashion</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{product.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Product Images */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible pb-2 md:pb-0 md:w-24 shrink-0">
              {product.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative aspect-[3/4] rounded-lg overflow-hidden border-2 transition-colors ${selectedImage === idx ? 'border-primary' : 'border-transparent hover:border-primary/50'}`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <motion.div 
              key={selectedImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-[3/4] md:aspect-[4/5] rounded-2xl overflow-hidden bg-muted flex-1"
            >
              <Badge className="absolute top-4 left-4 z-10 bg-primary">Best Seller</Badge>
              <img src={product.images[selectedImage]} alt={product.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </motion.div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-6">
              <span className="text-sm font-medium text-primary uppercase tracking-wider mb-2 block">{product.category}</span>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-muted-foreground/30'}`} />
                  ))}
                </div>
                <span className="text-sm font-medium">{product.rating} ({product.reviews} reviews)</span>
              </div>
              
              <p className="text-3xl font-semibold">{product.price}</p>
            </div>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              {product.description}
            </p>

            <Separator className="mb-8" />

            {/* Color Selection */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">Color</h3>
              </div>
              <RadioGroup defaultValue={product.colors[0].name} className="flex gap-3">
                {product.colors.map((color) => (
                  <div key={color.name} className="flex items-center space-x-2">
                    <RadioGroupItem value={color.name} id={`color-${color.name}`} className="sr-only" />
                    <label
                      htmlFor={`color-${color.name}`}
                      className={`h-10 w-10 rounded-full border-2 cursor-pointer flex items-center justify-center transition-all ${color.class} ring-offset-background hover:ring-2 hover:ring-ring hover:ring-offset-2 peer-data-[state=checked]:ring-2 peer-data-[state=checked]:ring-primary peer-data-[state=checked]:ring-offset-2`}
                    >
                      <span className="sr-only">{color.name}</span>
                    </label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Size Selection */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">Size</h3>
                <button className="text-sm text-primary hover:underline font-medium">Size Guide</button>
              </div>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`h-12 w-12 rounded-lg border flex items-center justify-center font-medium transition-colors ${selectedSize === size ? 'border-primary bg-primary text-primary-foreground' : 'border-border hover:border-primary/50'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center border rounded-lg h-14 w-full sm:w-32 shrink-0">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="flex-1 text-center font-medium">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <Button size="lg" className="flex-1 h-14 text-lg rounded-lg">Add to Cart</Button>
              <Button size="icon" variant="outline" className="h-14 w-14 rounded-lg shrink-0">
                <Heart className="h-6 w-6" />
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 py-6 border-y">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full text-primary">
                  <Truck className="h-5 w-5" />
                </div>
                <div className="text-sm">
                  <p className="font-semibold">Free Shipping</p>
                  <p className="text-muted-foreground">On orders over $100</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full text-primary">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div className="text-sm">
                  <p className="font-semibold">Easy Returns</p>
                  <p className="text-muted-foreground">30-day return policy</p>
                </div>
              </div>
            </div>

            {/* Share */}
            <div className="mt-6 flex items-center gap-4">
              <span className="text-sm font-medium">Share:</span>
              <button className="text-muted-foreground hover:text-primary transition-colors"><Share2 className="h-5 w-5" /></button>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-20">
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent space-x-8">
              <TabsTrigger value="details" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none bg-transparent py-4 px-0 text-base font-semibold">Product Details</TabsTrigger>
              <TabsTrigger value="shipping" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none bg-transparent py-4 px-0 text-base font-semibold">Shipping & Returns</TabsTrigger>
              <TabsTrigger value="reviews" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none bg-transparent py-4 px-0 text-base font-semibold">Reviews (128)</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="pt-8 text-muted-foreground leading-relaxed">
              <p className="mb-4">
                Crafted from a premium blend of European linen and sustainable viscose, this blazer offers the perfect balance of breathability and drape. The tailored silhouette features a slightly oversized fit, making it an ideal layering piece for any season.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Material: 55% Linen, 45% Viscose</li>
                <li>Lining: 100% Recycled Polyester</li>
                <li>Care: Dry clean only</li>
                <li>Fit: Relaxed tailored fit. True to size.</li>
                <li>Model is 5'9" and wears a size Small.</li>
              </ul>
            </TabsContent>
            <TabsContent value="shipping" className="pt-8 text-muted-foreground leading-relaxed">
              <h4 className="font-semibold text-foreground mb-2">Shipping</h4>
              <p className="mb-4">We offer standard and express shipping options. Standard shipping takes 3-5 business days, while express shipping takes 1-2 business days. Free standard shipping is available on all orders over $100.</p>
              <h4 className="font-semibold text-foreground mb-2">Returns</h4>
              <p>If you are not completely satisfied with your purchase, you can return it within 30 days of delivery for a full refund. Items must be unworn, unwashed, and have original tags attached.</p>
            </TabsContent>
            <TabsContent value="reviews" className="pt-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="text-5xl font-bold">4.9</div>
                <div>
                  <div className="flex text-yellow-500 mb-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                  </div>
                  <p className="text-muted-foreground text-sm">Based on 128 reviews</p>
                </div>
              </div>
              {/* Review Placeholder */}
              <div className="space-y-6">
                {[1, 2, 3].map((review) => (
                  <div key={review} className="border-b pb-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-semibold">Sarah M.</div>
                      <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">October 12, 2025</p>
                    <p>Absolutely love this blazer! The fit is perfect and the material feels so premium. I've received so many compliments wearing it to the office.</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
