"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

interface TechnicalSpecsProps {
    title: string;
    items: string[];
}

export function TechnicalSpecs({ title, items }: TechnicalSpecsProps) {
    return (
        <section className="py-20">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="max-w-3xl mx-auto p-8 rounded-3xl bg-neutral-900/50 border border-white/10">
                    <h3 className="text-2xl font-bold mb-8 text-center">{title}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {items.map((item, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                <span className="text-neutral-300">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
