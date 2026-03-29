import { motion } from 'motion/react';
import { Store, Users, Leaf, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-6xl">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
        >
          Our Story
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted-foreground"
        >
          From a small boutique to a premier lifestyle destination, ROMAYA has always been about bringing quality, style, and elegance to your everyday life.
        </motion.p>
      </div>

      {/* Image Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-24">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden h-[400px] bg-muted"
        >
          <img src="https://picsum.photos/seed/boutique/800/600" alt="Our first store" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden h-[400px] bg-muted md:mt-12"
        >
          <img src="https://picsum.photos/seed/modernstore/800/600" alt="Modern flagship store" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </motion.div>
      </div>

      {/* Mission & Values */}
      <div className="mb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Our Values</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The principles that guide everything we do, from sourcing materials to serving our customers.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Award, title: "Uncompromising Quality", desc: "We source only the finest materials and partner with skilled artisans." },
            { icon: Users, title: "Customer First", desc: "Your satisfaction is our ultimate goal. We're here to serve you." },
            { icon: Leaf, title: "Sustainable Practices", desc: "Committed to reducing our environmental footprint step by step." },
            { icon: Store, title: "Community Focus", desc: "Supporting local communities and creating spaces for connection." }
          ].map((value, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-zinc-50 p-8 rounded-2xl text-center"
            >
              <div className="mx-auto w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                <value.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-xl mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* The Future */}
      <div className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Looking Forward</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
          As we expand into Home & Living, our commitment remains the same: to curate collections that inspire and elevate your lifestyle. Thank you for being part of the ROMAYA journey.
        </p>
      </div>
    </div>
  );
}
