import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-300 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white tracking-tighter mb-6">ROMAYA</h3>
            <p className="text-zinc-400 mb-6 max-w-xs">
              Your premier destination for signature fashion and modern home essentials.
            </p>
            <div className="flex gap-4">
              {/* Social Icons Placeholders */}
              {['Facebook', 'Instagram', 'Twitter'].map((social) => (
                <a key={social} href="#" className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <span className="sr-only">{social}</span>
                  <div className="h-4 w-4 bg-current rounded-[2px]" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/category/womens" className="hover:text-white transition-colors">Women's Fashion</Link></li>
              <li><Link to="/category/mens" className="hover:text-white transition-colors">Men's Fashion</Link></li>
              <li><Link to="/category/home" className="hover:text-white transition-colors">Home & Living</Link></li>
              <li><Link to="/category/electronics" className="hover:text-white transition-colors">Electronics</Link></li>
              <li><Link to="/category/deals" className="hover:text-white transition-colors text-primary">Sale & Deals</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/locations" className="hover:text-white transition-colors">Store Locations</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Newsletter</h4>
            <p className="text-zinc-400 mb-4 text-sm">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Enter your email" className="bg-zinc-900 border-zinc-800 focus-visible:ring-primary text-white" />
              <Button className="bg-primary hover:bg-primary/90 text-white">Subscribe</Button>
            </div>
          </div>
        </div>

        <Separator className="bg-zinc-800 mb-8" />
        
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-zinc-500">
          <p>&copy; {new Date().getFullYear()} ROMAYA. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/shipping" className="hover:text-white transition-colors">Shipping Info</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
