"use client"

import { useLanguage } from "@/app/context/LanguageContext"
import { servicesAssets } from "@/app/data/assets"
import { GlareCard } from "@/app/components/ui/glare-card"
import Link from "next/link"

export function Services() {
    const { content } = useLanguage()

    // Merge dynamic content with static assets
    const services = content.services.items.map((item, index) => ({
        ...item,
        ...servicesAssets[index]
    }))

    return (
        <section id="services" className="py-24 md:py-32 relative overflow-hidden w-full flex justify-center">
            <div className="container px-4 md:px-6 flex flex-col items-center">
                {/* Section Header */}
                <div className="text-center space-y-6 max-w-4xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
                        {content.services.title_start}
                        <br />
                        <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                            {content.services.title_end}
                        </span>
                    </h2>
                    <p className="text-xl md:text-2xl text-muted-foreground/80 leading-relaxed font-medium">
                        {content.services.subtitle}
                    </p>
                </div>

                {/* Services Grid - Glare Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {services.map((service, index) => (
                        <Link href={`/products/${service.slug}`} key={service.slug} className="block group">
                            <GlareCard className="flex flex-col items-center justify-center p-8 text-center h-full">
                                <div className="mb-6 p-4 rounded-2xl bg-white/10 text-white backdrop-blur-sm group-hover:bg-accent/20 transition-colors">
                                    <service.icon className="h-10 w-10" />
                                </div>
                                <h3 className="text-white font-bold text-xl mb-4 leading-tight">
                                    {service.title}
                                </h3>
                                <p className="text-neutral-300 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </GlareCard>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
