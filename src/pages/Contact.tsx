import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-6xl">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
        >
          Get in Touch
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted-foreground"
        >
          Have a question about an order, our products, or just want to say hello? We'd love to hear from you.
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Contact Information */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-12"
        >
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Headquarters</h3>
                  <p className="text-muted-foreground">123 Galle Road, Colombo 03, Sri Lanka</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-muted-foreground">+94 11 234 5678</p>
                  <p className="text-sm text-muted-foreground mt-1">Mon-Fri from 9am to 6pm</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-muted-foreground">hello@romaya.com</p>
                  <p className="text-sm text-muted-foreground mt-1">We'll respond within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Store Hours</h2>
            <div className="bg-zinc-50 p-6 rounded-2xl border">
              <div className="flex items-center gap-3 mb-4 text-primary">
                <Clock className="h-5 w-5" />
                <span className="font-semibold">Opening Times</span>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex justify-between"><span>Monday - Friday</span> <span>9:00 AM - 9:00 PM</span></li>
                <li className="flex justify-between"><span>Saturday</span> <span>9:00 AM - 8:00 PM</span></li>
                <li className="flex justify-between"><span>Sunday</span> <span>10:00 AM - 6:00 PM</span></li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white p-8 rounded-3xl shadow-sm border"
        >
          <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
          {isSubmitted ? (
            <div className="bg-green-50 text-green-800 p-6 rounded-xl border border-green-200 text-center">
              <h3 className="text-xl font-semibold mb-2">Thank you!</h3>
              <p>Your message has been sent successfully. We'll get back to you soon.</p>
              <Button className="mt-6" onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }}>
              <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="John" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Doe" required />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="john@example.com" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="How can we help?" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea 
                id="message" 
                placeholder="Write your message here..." 
                className="min-h-[150px] resize-none" 
                required 
              />
            </div>
            
            <Button type="submit" className="w-full rounded-full" size="lg">
              Send Message
            </Button>
          </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
