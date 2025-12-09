"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Scan, Terminal, ShieldAlert, Loader2, Wand2 } from "lucide-react"

import { Button } from "@/app/components/ui/button"
import { useLanguage } from "@/app/context/LanguageContext"

export function Calculator() {
    const { content } = useLanguage()
    const [url, setUrl] = useState("")
    const [isScanning, setIsScanning] = useState(false)
    const [currentStep, setCurrentStep] = useState(0)
    const [scanComplete, setScanComplete] = useState(false)

    const scanningSteps = content.calculator.steps

    useEffect(() => {
        if (isScanning && currentStep < scanningSteps.length) {
            const timeout = setTimeout(() => {
                setCurrentStep((prev) => prev + 1)
            }, 600) // Speed of each step
            return () => clearTimeout(timeout)
        } else if (isScanning && currentStep >= scanningSteps.length) {
            setTimeout(() => setScanComplete(true), 500)
        }
    }, [isScanning, currentStep, scanningSteps.length])

    const handleScan = (e: React.FormEvent) => {
        e.preventDefault()
        if (!url) return
        setIsScanning(true)
        setScanComplete(false)
        setCurrentStep(0)
    }

    const resetScan = () => {
        setIsScanning(false)
        setScanComplete(false)
        setCurrentStep(0)
        setUrl("")
    }

    return (
        <section id="calculator" className="py-24 md:py-32 relative overflow-hidden flex justify-center w-full bg-gradient-to-b from-transparent via-black/5 to-transparent dark:via-white/5">
            <div className="w-full max-w-[95%] xl:max-w-screen-2xl px-4 md:px-6 relative z-10">

                {/* Restored grid layout without centering items forcibly */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <div className="max-w-xl space-y-6 lg:text-start mr-auto">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                                <Wand2 className="h-4 w-4" />
                                <span>{content.calculator.badge}</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold leading-tight whitespace-pre-line">
                                {content.calculator.title}
                            </h2>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-muted-foreground"
                        >
                            {content.calculator.subtitle}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            {!isScanning ? (
                                <form onSubmit={handleScan} className="flex flex-col sm:flex-row gap-3 mt-4">
                                    <input
                                        type="url"
                                        value={url}
                                        onChange={(e) => setUrl(e.target.value)}
                                        placeholder={content.calculator.placeholder}
                                        className="flex-1 px-6 py-4 rounded-xl glass bg-background/50 border-2 border-transparent focus:border-accent focus:outline-none transition-all text-left text-lg shadow-inner"
                                        dir="ltr"
                                        required
                                    />
                                    <Button
                                        type="submit"
                                        size="xl"
                                        className="gradient-accent text-white border-0 shadow-lg hover:shadow-accent/25 hover:scale-105 transition-all text-lg min-w-[140px]"
                                    >
                                        <Scan className="ml-2 h-5 w-5" />
                                        {content.calculator.cta}
                                    </Button>
                                </form>
                            ) : (
                                <Button
                                    onClick={resetScan}
                                    variant="outline"
                                    size="xl"
                                    className="w-full sm:w-auto border-2 border-dashed"
                                >
                                    New Check
                                </Button>
                            )}
                        </motion.div>
                    </div>

                    {/* Scanner Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative w-full max-w-lg"
                    >
                        {/* The Device Frame */}
                        <div className={`
              relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-border shadow-2xl transition-all duration-500
              ${isScanning ? "bg-black" : "glass-card bg-gradient-to-br from-background to-secondary/10"}
            `}>

                            {!isScanning ? (
                                // Idle State
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground p-8 text-center">
                                    <div className="w-24 h-24 mb-6 rounded-full bg-accent/5 flex items-center justify-center animate-pulse-glow">
                                        <Search className="h-10 w-10 text-accent opacity-50" />
                                    </div>
                                    <p className="text-xl font-medium">{content.calculator.idle_title}</p>
                                    <p className="text-sm opacity-70 mt-2">{content.calculator.idle_subtitle}</p>

                                    {/* Decorative Code Lines */}
                                    <div className="absolute bottom-6 left-6 right-6 space-y-2 opacity-20 pointer-events-none">
                                        <div className="h-2 w-3/4 bg-current rounded-full" />
                                        <div className="h-2 w-1/2 bg-current rounded-full" />
                                    </div>
                                </div>
                            ) : (
                                // Active Scanning State
                                <div className="absolute inset-0 p-6 flex flex-col font-mono text-left text-green-400">
                                    {/* Header */}
                                    <div className="flex items-center justify-between border-b border-green-500/30 pb-4 mb-4">
                                        <div className="flex items-center gap-2">
                                            <Terminal className="h-5 w-5" />
                                            <span className="text-sm font-bold">TERMINAL v4.2</span>
                                        </div>
                                        <div className="flex gap-1.5">
                                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                            <div className="w-3 h-3 rounded-full bg-green-500" />
                                        </div>
                                    </div>

                                    {/* Log Output */}
                                    <div className="flex-1 overflow-hidden relative">
                                        {/* Scanning Beam */}
                                        {!scanComplete && (
                                            <motion.div
                                                animate={{ top: ["0%", "100%", "0%"] }}
                                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                                className="absolute left-0 right-0 h-[2px] bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.5)] z-10"
                                            />
                                        )}

                                        <div className="space-y-2 text-sm md:text-base">
                                            <div className="text-white/50 mb-4">Target: {url}</div>
                                            {scanningSteps.map((step: string, index: number) => (
                                                <div
                                                    key={index}
                                                    className={`flex items-center gap-2 transition-all duration-300 ${index === currentStep
                                                        ? "text-white opacity-100 scale-102 font-bold"
                                                        : index < currentStep
                                                            ? "text-green-500/50"
                                                            : "opacity-0"
                                                        }`}
                                                >
                                                    {index < currentStep ? <span>✓</span> : <span>{">"}</span>}
                                                    {step}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Result Overlay */}
                                    <AnimatePresence>
                                        {scanComplete && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center text-center p-6 z-20"
                                            >
                                                <ShieldAlert className="h-16 w-16 text-yellow-500 mb-4 animate-bounce" />
                                                <h3 className="text-2xl font-bold text-white mb-2">{content.calculator.result_title}</h3>
                                                <p className="text-gray-400 mb-6 max-w-xs">
                                                    {content.calculator.result_text}
                                                </p>
                                                <Button className="gradient-accent text-white border-0 w-full" asChild>
                                                    <a href="#contact">{content.calculator.result_cta}</a>
                                                </Button>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                </div>
                            )}
                        </div>

                        {/* Decorative blobs behind scanner */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent opacity-20 blur-xl -z-10 rounded-[2rem]" />
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
