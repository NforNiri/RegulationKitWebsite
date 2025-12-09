"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowLeft, Play, ShieldCheck, Star } from "lucide-react"
import Link from "next/link"
import { Button } from "@/app/components/ui/button"
import { useLanguage } from "@/app/context/LanguageContext"

export function Hero() {
    const { content, dir } = useLanguage()
    const { scrollY } = useScroll()
    const y1 = useTransform(scrollY, [0, 500], [0, 200])
    const y2 = useTransform(scrollY, [0, 500], [0, -150])

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-40 w-full">
            {/* Background Layer */}
            <div className="absolute inset-0 z-0">
                {/* DotGrid removed as requested */}
            </div>

            {/* Dynamic Background Gradients (Behind Dots) */}
            <div className="absolute inset-0 -z-10 bg-background w-full h-full opacity-50">
                {/* Animated Blobs */}
                <motion.div
                    style={{ y: y1 }}
                    className="absolute top-20 right-[10%] w-[30rem] h-[30rem] bg-secondary/20 rounded-full blur-[80px] opacity-60 animate-blob"
                />
                <motion.div
                    style={{ y: y2 }}
                    className="absolute bottom-20 left-[10%] w-[25rem] h-[25rem] bg-accent/10 rounded-full blur-[80px] opacity-60 animate-blob animation-delay-2000"
                />
            </div>

            <div className="container relative px-4 md:px-6 z-10 flex flex-col items-center w-full pointer-events-none">
                {/* Pointer events none on container to let clicks pass through to LiquidEther, 
            but re-enable on interactive elements */}

                <div className="flex flex-col items-center text-center space-y-10 w-full max-w-screen-xl mx-auto">

                    {/* Top Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-border bg-muted/20 backdrop-blur-md shadow-sm pointer-events-auto"
                    >
                        <ShieldCheck className="h-5 w-5 text-accent" />
                        <span className="text-base font-bold tracking-wide uppercase">{content.hero.badge}</span>
                    </motion.div>

                    {/* Main Headline - MASSIVE SIZE */}
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="text-5xl sm:text-7xl lg:text-9xl font-black tracking-tighter leading-[0.9] text-center pointer-events-auto drop-shadow-2xl"
                    >
                        {content.hero.title_start}
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary dark:via-white to-accent filter drop-shadow-lg">
                            {content.hero.title_end}
                        </span>
                    </motion.h1>

                    {/* Subheadline - Larger */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl md:text-2xl text-muted-foreground max-w-4xl leading-relaxed text-center font-medium pointer-events-auto"
                    >
                        {content.hero.subtitle}
                    </motion.p>

                    {/* CTA Buttons - Big Pills */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto justify-center pt-8 pointer-events-auto"
                    >
                        <Button size="xl" className="h-16 px-10 text-xl font-black rounded-full gradient-accent text-white border-0 hover:shadow-[0_0_40px_-5px_rgba(var(--accent),0.6)] hover:scale-105 transition-all" asChild>
                            <Link href="#contact">
                                {content.hero.cta_primary}
                                {dir === 'rtl' ? <ArrowLeft className="mr-3 h-6 w-6" /> : <ArrowLeft className="ml-3 h-6 w-6 rotate-180" />}
                            </Link>
                        </Button>
                        <Button size="xl" variant="outline" className="h-16 px-10 text-xl font-bold rounded-full glass border-border hover:bg-muted hover:scale-105 transition-all" asChild>
                            <Link href="#calculator">
                                {content.hero.cta_secondary}
                                {dir === 'rtl' ? <Play className="mr-3 h-6 w-6 fill-current" /> : <Play className="ml-3 h-6 w-6 fill-current" />}
                            </Link>
                        </Button>
                    </motion.div>

                    {/* Social Proof / Trust */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="pt-16 flex flex-col items-center gap-3 w-full pointer-events-auto"
                    >
                        <div className="flex -space-x-4 space-x-reverse justify-center pb-2">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-12 h-12 rounded-full border-4 border-background bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground">
                                    User
                                </div>
                            ))}
                            <div className="w-12 h-12 rounded-full border-4 border-background bg-accent text-white flex items-center justify-center text-xs font-bold">
                                +2k
                            </div>
                        </div>

                        <span className="text-base font-bold text-muted-foreground uppercase tracking-wider text-center">
                            {content.hero.trust}
                        </span>

                        <div className="flex items-center justify-center gap-1">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
