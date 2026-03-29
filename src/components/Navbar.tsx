import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ShoppingBag, User, Menu, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Link, useNavigate } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-white py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          <Link to="/" className="text-2xl font-bold tracking-tighter text-primary">
            ROMAYA
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base font-medium bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">Clothing</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-3 gap-6 p-6 w-[600px]">
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">Women's</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link to="/category/womens-dresses" className="hover:text-primary transition-colors">Dresses</Link></li>
                        <li><Link to="/category/womens-tops" className="hover:text-primary transition-colors">Tops & Blouses</Link></li>
                        <li><Link to="/category/womens-activewear" className="hover:text-primary transition-colors">Activewear</Link></li>
                        <li><Link to="/category/womens-outerwear" className="hover:text-primary transition-colors">Outerwear</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">Men's</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link to="/category/mens-shirts" className="hover:text-primary transition-colors">Shirts</Link></li>
                        <li><Link to="/category/mens-trousers" className="hover:text-primary transition-colors">Trousers & Jeans</Link></li>
                        <li><Link to="/category/mens-suits" className="hover:text-primary transition-colors">Suits</Link></li>
                        <li><Link to="/category/mens-accessories" className="hover:text-primary transition-colors">Accessories</Link></li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg flex flex-col justify-end relative overflow-hidden group cursor-pointer" onClick={() => navigate('/category/summer-collection')}>
                      <img src="https://picsum.photos/seed/fashion/300/400" alt="Fashion Promo" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                      <div className="relative z-10">
                        <Badge className="mb-2">New Collection</Badge>
                        <p className="font-medium text-sm">Summer Essentials 2026</p>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base font-medium bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent text-primary">Home & Living</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-3 gap-6 p-6 w-[600px]">
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">Bedroom</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link to="/category/home-bedding" className="hover:text-primary transition-colors">Bedding Sets</Link></li>
                        <li><Link to="/category/home-pillows" className="hover:text-primary transition-colors">Pillows & Throws</Link></li>
                        <li><Link to="/category/home-mattresses" className="hover:text-primary transition-colors">Mattresses</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">Kitchen & Dining</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link to="/category/home-cookware" className="hover:text-primary transition-colors">Cookware</Link></li>
                        <li><Link to="/category/home-dinnerware" className="hover:text-primary transition-colors">Dinnerware</Link></li>
                        <li><Link to="/category/home-appliances" className="hover:text-primary transition-colors">Small Appliances</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">Decor</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link to="/category/home-rugs" className="hover:text-primary transition-colors">Rugs</Link></li>
                        <li><Link to="/category/home-lighting" className="hover:text-primary transition-colors">Lighting</Link></li>
                        <li><Link to="/category/home-art" className="hover:text-primary transition-colors">Wall Art</Link></li>
                      </ul>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/category/electronics" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-base font-medium transition-colors hover:text-primary focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Electronics
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/category/deals" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-base font-medium text-red-600 transition-colors hover:text-red-700 focus:text-red-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Deals
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Search & Icons */}
        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden lg:flex relative w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search products..." className="pl-9 bg-muted/50 border-none focus-visible:ring-primary rounded-full" />
          </div>
          <button className="lg:hidden text-foreground hover:text-primary transition-colors">
            <Search className="h-5 w-5" />
          </button>
          <Link to="/signin" className="text-foreground hover:text-primary transition-colors">
            <User className="h-5 w-5" />
          </Link>
          <Link to="/cart" className="text-foreground hover:text-primary transition-colors relative">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -top-1.5 -right-1.5 bg-primary text-primary-foreground text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
              3
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t mt-3 overflow-hidden"
          >
            <div className="flex flex-col px-4 py-4 space-y-4">
              <Link to="/category/clothing" className="text-lg font-medium py-2 border-b" onClick={() => setMobileMenuOpen(false)}>Clothing</Link>
              <Link to="/category/home" className="text-lg font-medium py-2 border-b text-primary" onClick={() => setMobileMenuOpen(false)}>Home & Living</Link>
              <Link to="/category/electronics" className="text-lg font-medium py-2 border-b" onClick={() => setMobileMenuOpen(false)}>Electronics</Link>
              <Link to="/category/deals" className="text-lg font-medium py-2 text-red-600" onClick={() => setMobileMenuOpen(false)}>Deals</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
