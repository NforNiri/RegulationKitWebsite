"use client"

import { motion } from "framer-motion"
import { Check, Sparkles } from "lucide-react"
import Link from "next/link"

import { Button } from "@/app/components/ui/button"
import { useLanguage } from "@/app/context/LanguageContext"

export function Pricing() {
    const { content } = useLanguage()

    return (
        <section id="pricing" className="py-24 md:py-32 relative">
            <div className="w-full max-w-[95%] xl:max-w-screen-2xl px-4 md:px-6 mx-auto">
                <div className="text-center space-y-4 mb-20 max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold"
                    >
                        {content.pricing.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-muted-foreground"
                    >
                        {content.pricing.subtitle}
                    </motion.p>
                </div>

                <div className="grid gap-8 lg:grid-cols-3 w-full mx-auto items-start">
                    {content.pricing.plans.map((plan: any, index: number) => {
                        const isPopular = index === 1; // Middle plan is popular
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`
                relative flex flex-col p-8 rounded-3xl h-full
                ${isPopular
                                        ? "glass-card border-accent/20 shadow-2xl shadow-accent/10 scale-105 z-10"
                                        : "glass border-transparent bg-secondary/5"
                                    }
              `}
                            >
                                {isPopular && (
                                    <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                                        <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-accent text-white text-sm font-semibold shadow-lg">
                                            <Sparkles className="h-3.5 w-3.5" />
                                            Recommended
                                        </div>
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                                    <p className="text-muted-foreground mt-2 text-sm h-10">{plan.description}</p>
                                    <div className="mt-6 flex items-baseline gap-1">
                                        <span className="text-5xl font-extrabold tracking-tight">₪{plan.price}</span>
                                        <span className="text-muted-foreground">/mo</span>
                                    </div>
                                </div>

                                <div className="flex-grow">
                                    <ul className="space-y-4 mb-8">
                                        {plan.features.map((feature: string, idx: number) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center mt-0.5">
                                                    <Check className="h-3.5 w-3.5 text-green-500" />
                                                </div>
                                                <span className="text-sm leading-tight text-foreground/80">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Button
                                    size="lg"
                                    className={`w-full rounded-xl py-6 font-semibold shadow-lg transition-all hover:scale-[1.02] ${isPopular
                                        ? "bg-accent hover:bg-accent-light text-white border-0"
                                        : "bg-white dark:bg-slate-800 border hover:bg-slate-50 dark:hover:bg-slate-700"
                                        }`}
                                    asChild
                                >
                                    <Link href="#contact">{plan.cta}</Link>
                                </Button>

                                {!isPopular && (
                                    <div className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none" />
                                )}
                            </motion.div>
                        )
                    })}
                </div>

                <p className="text-center text-sm text-muted-foreground mt-12 opacity-60">
                    {content.pricing.disclaimer}
                </p>
            </div>
        </section>
    )
}
