"use client"

import { Button } from "@/app/components/ui/button"
import { motion } from "framer-motion"
import { ShoppingCart } from "lucide-react"

export function ProductCTA({ title = "Ready to Get Started?", subtitle = "Secure your business today with our advanced compliance solutions." }) {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5" />

            <div className="container px-4 md:px-6 mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto space-y-8"
                >
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">
                        {title}
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        {subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="rounded-full text-lg px-8 py-6 gradient-accent text-white font-bold hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all">
                            <ShoppingCart className="mr-2 h-5 w-5" />
                            Buy Now
                        </Button>
                        <Button variant="outline" size="lg" className="rounded-full text-lg px-8 py-6 border-white/20 hover:bg-white/10 text-white font-bold transition-all">
                            Contact Sales
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
