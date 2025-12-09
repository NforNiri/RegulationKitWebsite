"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { NeonGradientCard } from "@/app/components/ui/neon-gradient-card"
import { CardContainer, CardBody, CardItem } from "@/app/components/ui/3d-card"
import { useLanguage } from "@/app/context/LanguageContext"
import { solutionsAssets } from "@/app/data/assets"

export function Features() {
    const { content } = useLanguage()

    // Merge dynamic content with static assets
    const features = content.solutions.items.map((item, index) => ({
        ...item,
        ...solutionsAssets[index]
    }))

    return (
        <section id="features" className="py-24 md:py-32 relative overflow-hidden w-full flex justify-center">
            <div className="container px-4 md:px-6 flex flex-col items-center">
                {/* Section Header */}
                <div className="text-center space-y-6 max-w-4xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
                        {content.solutions.title_start}
                        <br />
                        <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                            {content.solutions.title_end}
                        </span>
                    </h2>
                    <p className="text-xl md:text-2xl text-muted-foreground/80 leading-relaxed font-medium">
                        {content.solutions.subtitle}
                    </p>
                </div>

                {/* 3D + Neon Cards Grid - Widened */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full max-w-[95%] xl:max-w-screen-2xl">
                    {features.map((feature, index) => (
                        <CardContainer key={index} className="inter-var w-full h-full min-h-[350px]" containerClassName="h-full">
                            {/* 
                CardBody with h-full to stretch to container height
              */}
                            <CardBody className="relative group/card w-full h-full rounded-xl text-start">

                                {/* 
                   NeonGradientCard as the main visual container.
                   Provides the glowing border.
                */}
                                <NeonGradientCard
                                    className="w-full h-full items-start justify-between text-start !bg-background/90"
                                    borderSize={3}
                                    neonColors={feature.colors}
                                >
                                    <div className="flex flex-col h-full justify-between w-full relative z-20">
                                        <div className="w-full">
                                            {/* 3D Floating Icon */}
                                            <CardItem translateZ="50" className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 text-accent">
                                                <feature.icon className="h-7 w-7" />
                                            </CardItem>

                                            <CardItem translateZ="40" as="h3" className="text-2xl font-bold mb-3 dark:text-white leading-tight">
                                                {feature.title}
                                            </CardItem>

                                            <CardItem translateZ="30" as="p" className="text-base text-neutral-500 dark:text-neutral-300">
                                                {feature.description}
                                            </CardItem>
                                        </div>

                                        <div className="w-full mt-8 space-y-4">
                                            {/* 3D Floating Image - REMOVED zoom hover effect */}
                                            <CardItem translateZ="60" className="w-full">
                                                <div className="h-44 w-full rounded-2xl overflow-hidden shadow-lg border border-border">
                                                    <img
                                                        src={feature.img}
                                                        alt={feature.title}
                                                        className="h-full w-full object-cover"
                                                    />
                                                </div>
                                            </CardItem>

                                            <div className="flex justify-end w-full">
                                                <CardItem
                                                    translateZ="40"
                                                    className=""
                                                >
                                                    <Link
                                                        href={`/products/${feature.slug}`}
                                                        className="px-5 py-2.5 rounded-full bg-black dark:bg-white dark:text-black text-white text-sm font-bold shadow-lg hover:shadow-xl transition-all inline-block relative z-50 cursor-pointer"
                                                    >
                                                        {content.solutions.learn_more}
                                                    </Link>
                                                </CardItem>
                                            </div>
                                        </div>
                                    </div>
                                </NeonGradientCard>
                            </CardBody>
                        </CardContainer>
                    ))}
                </div>
            </div>
        </section>
    )
}
