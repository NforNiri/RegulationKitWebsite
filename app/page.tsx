import { Navbar } from "@/app/components/layout/Navbar"
import { Hero } from "@/app/components/sections/Hero"
import { Features } from "@/app/components/sections/Features"
import { Calculator } from "@/app/components/sections/Calculator"
import { Pricing } from "@/app/components/sections/Pricing"
import { Contact } from "@/app/components/sections/Contact"
import { Footer } from "@/app/components/sections/Footer"
import LiquidEther from "@/app/components/ui/LiquidEther"
import { LanguageProvider } from "@/app/context/LanguageContext"

import { Services } from "@/app/components/sections/Services";

export default function Home() {
  return (
    <HomeContent />
  )
}

function HomeContent() {
  return (
    <div className="relative flex min-h-screen flex-col items-center w-full overflow-x-hidden bg-background">

      {/* Liquid Ether Background Fixed Layer */}
      <div className="fixed inset-0 z-0 w-full h-full pointer-events-none hidden dark:block">
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
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
        <Navbar />
        {/* Widened main container - removed max-w-1920 to allow more fluid width as requested */}
        <main className="flex-1 w-full flex flex-col items-center">
          <Hero />
          <Features />
          <Services />
          <Calculator />
          <Pricing />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
