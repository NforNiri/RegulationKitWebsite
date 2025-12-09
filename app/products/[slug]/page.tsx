"use client"

import { useParams } from "next/navigation"
import { useLanguage } from "@/app/context/LanguageContext"
import { Navbar } from "@/app/components/layout/Navbar"
import { Footer } from "@/app/components/sections/Footer"
import { ProductHero } from "@/app/components/sections/product/ProductHero"
import { ProductFeatures } from "@/app/components/sections/product/ProductFeatures"
import { ProductProcess } from "@/app/components/sections/product/ProductProcess"
import { TechnicalSpecs } from "@/app/components/sections/product/TechnicalSpecs"
import { ProductCTA } from "@/app/components/sections/product/ProductCTA"
// We can reuse the Contact section as a CTA or create a specific one
import { Contact } from "@/app/components/sections/Contact"
import LiquidEther from "@/app/components/ui/LiquidEther"

/* 
   Since this is a client component (due to useLanguage), 
   we handle the logic here. In a real app, we might do static generation with generateStaticParams,
   but for now, we'll just check content on load.
*/

export default function ProductPage() {
    const params = useParams()
    const { content } = useLanguage()

    // Find product in solutions OR services
    const slug = params?.slug as string

    if (!slug || !content) {
        return <div className="min-h-screen flex items-center justify-center text-white bg-[#000510]">Loading...</div>
    }

    const product =
        content.solutions.items.find((i: any) => i.slug === slug) ||
        content.services.items.find((i: any) => i.slug === slug)

    if (!product) {
        // Simple fallback if not found
        return <div className="min-h-screen flex items-center justify-center text-white bg-[#000510]">Product Not Found</div>
    }

    const { detailed } = product

    return (
        <div className="relative flex min-h-screen flex-col items-center w-full overflow-x-hidden bg-[#000510]">

            {/* Background */}
            <div className="fixed inset-0 z-0 w-full h-full pointer-events-none opacity-50">
                <LiquidEther
                    colors={['#050E3C', '#002455', '#B19EEF']}
                    mouseForce={20}
                    cursorSize={100}
                    isViscous={false}
                    viscous={30}
                    iterationsViscous={32}
                    iterationsPoisson={32}
                    resolution={0.5}
                    isBounce={false}
                    autoDemo={true}
                    autoSpeed={0.5}
                />
            </div>

            <div className="relative z-10 w-full flex flex-col items-center">
                <Navbar />

                <main className="flex-1 w-full flex flex-col items-center mt-20">
                    <ProductHero
                        title={detailed?.hero?.title || product.title}
                        subtitle={detailed?.hero?.subtitle || product.description}
                        badge={detailed?.hero?.badge}
                    />

                    {detailed?.features && (
                        <ProductFeatures features={detailed.features} />
                    )}

                    {detailed?.process && (
                        <ProductProcess
                            title={detailed.process.title}
                            steps={detailed.process.steps}
                        />
                    )}

                    {detailed?.technical && (
                        <TechnicalSpecs
                            title={detailed.technical.title}
                            items={detailed.technical.items}
                        />
                    )}

                    <ProductCTA />

                    <Contact />
                </main>

                <Footer />
            </div>
        </div>
    )
}
