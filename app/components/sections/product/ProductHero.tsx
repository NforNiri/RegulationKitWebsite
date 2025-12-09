"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/app/context/LanguageContext"

interface ProductHeroProps {
    title: string;
    subtitle: string;
    badge?: string;
    icon?: React.ElementType; // Optional, can be added later
}

export function ProductHero({ title, subtitle, badge }: ProductHeroProps) {
    const { language } = useLanguage()

    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex justify-center items-center text-center">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="container relative z-10 px-4 md:px-6 max-w-4xl mx-auto">
                {badge && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-md mb-8"
                    >
                        {badge}
                    </motion.div>
                )}

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-white drop-shadow-2xl"
                >
                    {title}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl md:text-2xl text-neutral-200 leading-relaxed font-medium max-w-2xl mx-auto"
                >
                    {subtitle}
                </motion.p>
            </div>
        </section>
    )
}
