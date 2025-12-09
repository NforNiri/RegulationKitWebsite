"use client"

import { GlareCard } from "@/app/components/ui/glare-card"
import { CheckCircle2 } from "lucide-react"

interface ProductFeaturesProps {
    features: { title: string; description: string }[];
}

export function ProductFeatures({ features }: ProductFeaturesProps) {
    return (
        <section className="py-20 relative">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <GlareCard key={index} className="flex flex-col items-center justify-center p-6 text-center h-full min-h-[300px]">
                            <div className="mb-6 p-4 rounded-full bg-white/5 text-primary backdrop-blur-sm group-hover:bg-primary/20 transition-colors">
                                <CheckCircle2 className="w-8 h-8" />
                            </div>
                            <h3 className="text-white font-bold text-xl mb-4 leading-tight">{feature.title}</h3>
                            <p className="text-neutral-300 text-sm leading-relaxed">{feature.description}</p>
                        </GlareCard>
                    ))}
                </div>
            </div>
        </section>
    )
}
