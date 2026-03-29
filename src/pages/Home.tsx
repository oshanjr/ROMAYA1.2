import { motion } from 'motion/react';
import { MapPin, Truck, ShieldCheck, Store, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
};

function Hero() {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <motion.h1 variants={FADE_UP_ANIMATION_VARIANTS} className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            ROMAYA: Your Lifestyle, <span className="text-primary italic font-serif">Reimagined.</span>
          </motion.h1>
          <motion.p variants={FADE_UP_ANIMATION_VARIANTS} className="text-lg md:text-xl text-muted-foreground mb-8">
            Everything you love about ROMAYA Fashion, now for your Home. Discover our newly expanded collections.
          </motion.p>
          <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto rounded-full px-8" render={<Link to="/category/home" />}>
              Shop Home
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-8" render={<Link to="/category/clothing" />}>
              Explore Fashion
            </Button>
          </motion.div>
        </motion.div>

        {/* Split Screen Hero Images */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 h-[500px] md:h-[600px]">
          <Link to="/category/fashion">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden group cursor-pointer h-full"
            >
              <img src="https://picsum.photos/seed/highfashion/800/1000" alt="Signature Fashion" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <Badge className="w-max mb-4 bg-white text-black hover:bg-white/90">Signature Fashion</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">The Fashion Gallery</h2>
                <p className="text-white/90 flex items-center gap-2 group-hover:gap-4 transition-all">
                  Shop the collection <ChevronRight className="h-4 w-4" />
                </p>
              </div>
            </motion.div>
          </Link>

          <Link to="/category/home">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative rounded-2xl overflow-hidden group cursor-pointer h-full"
            >
              <img src="https://picsum.photos/seed/modernhome/800/1000" alt="Modern Home Essentials" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <Badge className="w-max mb-4 bg-primary text-primary-foreground">New Department</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Modern Home Essentials</h2>
                <p className="text-white/90 flex items-center gap-2 group-hover:gap-4 transition-all">
                  Discover ROMAYA Home <ChevronRight className="h-4 w-4" />
                </p>
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const features = [
    { icon: Truck, title: "Island-wide Delivery", desc: "Fast & reliable shipping" },
    { icon: ShieldCheck, title: "Quality Guaranteed", desc: "Premium materials & finish" },
    { icon: Store, title: "Visit Our Branches", desc: "Experience it in person" },
  ];

  return (
    <section className="py-12 bg-muted/30 border-y">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center text-center pt-8 md:pt-0 px-4 first:pt-0"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PRODUCTS = [
  { id: 1, name: "Minimalist Ceramic Vase", price: "$45.00", category: "Home", rating: 4.8, image: "https://picsum.photos/seed/vase/400/500", isNew: true },
  { id: 2, name: "Linen Blend Blazer", price: "$120.00", category: "Fashion", rating: 4.9, image: "https://picsum.photos/seed/blazer/400/500", isNew: false },
  { id: 3, name: "Organic Cotton Bedding Set", price: "$185.00", category: "Home", rating: 5.0, image: "https://picsum.photos/seed/bedding/400/500", isNew: true },
  { id: 4, name: "Pleated Midi Skirt", price: "$65.00", category: "Fashion", rating: 4.7, image: "https://picsum.photos/seed/skirt/400/500", isNew: false },
];

function ProductGrid() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">New Arrivals</h2>
            <p className="text-muted-foreground">The latest additions to Fashion and Home.</p>
          </div>
          <Button variant="ghost" className="hidden sm:flex items-center gap-2" render={<Link to="/category/new-arrivals" />}>
            View All <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {PRODUCTS.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <Link to={`/product/${product.id}`}>
                <Card className="border border-border/50 shadow-sm overflow-hidden h-full flex flex-col group-hover:border-border transition-colors">
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    {product.isNew && (
                      <Badge className="absolute top-3 left-3 z-10 bg-primary">New</Badge>
                    )}
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/60 to-transparent flex justify-center">
                      <Button className="w-full rounded-full shadow-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        View Details
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-4 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{product.category}</span>
                      <div className="flex items-center gap-1 text-yellow-500">
                        <Star className="h-3 w-3 fill-current" />
                        <span className="text-xs font-medium text-foreground">{product.rating}</span>
                      </div>
                    </div>
                    <h3 className="font-semibold text-base mb-1 group-hover:text-primary transition-colors line-clamp-1">{product.name}</h3>
                    <p className="font-medium mt-auto pt-2">{product.price}</p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 flex justify-center sm:hidden">
          <Button variant="outline" className="w-full rounded-full" render={<Link to="/category/new-arrivals" />}>
            View All
          </Button>
        </div>
      </div>
    </section>
  );
}

function LocationMap() {
  return (
    <section className="py-20 bg-zinc-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="mb-4 text-primary border-primary">Find Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Visit Our Branches</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Experience the new ROMAYA Home collection in person. Our flagship stores have been redesigned to bring you the ultimate lifestyle shopping experience.
            </p>
            
            <div className="space-y-6">
              {[
                { name: "Colombo Flagship Store", address: "123 Galle Road, Colombo 03", hours: "Mon-Sun: 9AM - 9PM" },
                { name: "Kandy Branch", address: "45 Dalada Vidiya, Kandy", hours: "Mon-Sun: 9AM - 8PM" }
              ].map((store, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl bg-white shadow-sm border border-border/50">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full h-max text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{store.name}</h4>
                    <p className="text-muted-foreground">{store.address}</p>
                    <p className="text-sm mt-2 font-medium">{store.hours}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-xl h-[400px] lg:h-[600px] relative bg-muted"
          >
            <img src="https://picsum.photos/seed/map/800/800?grayscale&blur=2" alt="Map Location" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-4 rounded-full shadow-2xl animate-bounce">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ProductGrid />
      <LocationMap />
    </>
  );
}
