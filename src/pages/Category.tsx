import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Filter, ChevronDown, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Mock Data
const ALL_PRODUCTS = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  name: `Premium Product ${i + 1}`,
  price: `$${(Math.random() * 150 + 20).toFixed(2)}`,
  category: i % 2 === 0 ? "Fashion" : "Home",
  rating: (Math.random() * 1 + 4).toFixed(1),
  image: `https://picsum.photos/seed/product${i + 1}/400/500`,
  isNew: i < 3,
}));

export default function Category() {
  const { slug } = useParams();
  const [priceRange, setPriceRange] = useState([0, 200]);

  const categoryName = slug ? slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'All Products';

  return (
    <div className="py-12 md:py-20">
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
                <BreadcrumbLink render={<Link to="/category/all" />}>Categories</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{categoryName}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full md:w-64 shrink-0">
            <div className="sticky top-24 space-y-8">
              <div className="flex items-center justify-between md:hidden mb-4">
                <h2 className="text-xl font-bold">Filters</h2>
                <Button variant="outline" size="sm"><Filter className="h-4 w-4 mr-2" /> Filter</Button>
              </div>

              <div className="hidden md:block space-y-8">
                {/* Categories */}
                <div>
                  <h3 className="font-semibold mb-4 text-lg">Categories</h3>
                  <div className="space-y-3">
                    {['Dresses', 'Tops & Blouses', 'Activewear', 'Outerwear', 'Accessories'].map((cat) => (
                      <div key={cat} className="flex items-center space-x-2">
                        <Checkbox id={`cat-${cat}`} />
                        <label htmlFor={`cat-${cat}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          {cat}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="font-semibold mb-4 text-lg">Price Range</h3>
                  <Slider
                    defaultValue={[0, 200]}
                    max={500}
                    step={10}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mb-4"
                  />
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>

                {/* Colors */}
                <div>
                  <h3 className="font-semibold mb-4 text-lg">Colors</h3>
                  <div className="flex flex-wrap gap-2">
                    {['bg-black', 'bg-white', 'bg-red-600', 'bg-blue-600', 'bg-green-600', 'bg-yellow-500'].map((color, i) => (
                      <button key={i} className={`h-6 w-6 rounded-full border border-border ${color} ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Header & Sort */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{categoryName}</h1>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <Button variant="outline" className="w-[160px] justify-between">
                  Recommended <ChevronDown className="h-4 w-4 opacity-50" />
                </Button>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {ALL_PRODUCTS.map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="group"
                >
                  <Link to={`/product/${product.id}`}>
                <Card className="border-1 border-red-300 ring-0 p-0 gap-0 shadow-sm overflow-hidden h-full flex flex-col group-hover:border-red-600 transition-colors">
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

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" disabled><ChevronDown className="h-4 w-4 rotate-90" /></Button>
                <Button variant="outline" size="icon" className="bg-primary text-primary-foreground">1</Button>
                <Button variant="outline" size="icon">2</Button>
                <Button variant="outline" size="icon">3</Button>
                <Button variant="outline" size="icon"><ChevronDown className="h-4 w-4 -rotate-90" /></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
