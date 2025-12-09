"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Shield, Menu, X, Globe } from "lucide-react"

import { Button } from "@/app/components/ui/button"
import { useLanguage } from "@/app/context/LanguageContext"
import { ThemeToggle } from "@/app/components/layout/ThemeToggle"
import { Menu as NavbarMenu, MenuItem, ProductItem } from "@/app/components/ui/navbar-menu"
import { solutionsAssets, servicesAssets } from "@/app/data/assets"

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { content, language, setLanguage } = useLanguage()
    const [active, setActive] = useState<string | null>(null)

    const navLinks = [
        // Solutions is handled separately via Mega Menu
        { href: "#pricing", label: content.nav.pricing },
        { href: "#calculator", label: content.nav.calculator },
        { href: "#contact", label: content.nav.contact },
    ]

    const toggleLanguage = () => {
        setLanguage(language === "he" ? "en" : "he")
    }

    return (
        <header className="fixed top-0 z-50 w-full flex justify-center">
            {/* Nav Container */}
            <nav className="w-full backdrop-blur-md bg-background/50 border-b border-border Supports-[backdrop-filter]:bg-background/20">
                <div className="w-full max-w-screen-2xl px-6 md:px-10 h-20 flex items-center justify-between mx-auto relative">

                    {/* Left: Links (Desktop) */}
                    <div className="hidden md:flex items-center gap-8 relative z-50">
                        {/* Mega Menu for Solutions */}
                        <div className="relative">
                            <NavbarMenu setActive={setActive} className="p-0 border-0 bg-transparent shadow-none">
                                <MenuItem
                                    setActive={setActive}
                                    active={active}
                                    item={content.nav.solutions}
                                    dir={language === 'he' ? 'rtl' : 'ltr'}
                                >
                                    <div className="text-sm grid grid-cols-2 gap-6 p-4 w-[600px]">
                                        {content.solutions.items.map((feature: any, index: number) => (
                                            <ProductItem
                                                key={feature.slug}
                                                title={feature.title}
                                                href={`/products/${feature.slug}`}
                                                src={solutionsAssets[index]?.img || ""}
                                                description={feature.description}
                                            />
                                        ))}
                                    </div>
                                </MenuItem>
                            </NavbarMenu>
                        </div>

                        {/* Mega Menu for Services */}
                        <div className="relative">
                            <NavbarMenu setActive={setActive} className="p-0 border-0 bg-transparent shadow-none">
                                <MenuItem
                                    setActive={setActive}
                                    active={active}
                                    item={content.nav.services}
                                    dir={language === 'he' ? 'rtl' : 'ltr'}
                                >
                                    <div className="text-sm grid grid-cols-1 gap-6 p-4 w-[350px]">
                                        {content.services.items.map((service: any, index: number) => (
                                            <ProductItem
                                                key={service.slug}
                                                title={service.title}
                                                href={`/products/${service.slug}`}
                                                src={servicesAssets[index]?.img || ""}
                                                description={service.description}
                                            />
                                        ))}
                                    </div>
                                </MenuItem>
                            </NavbarMenu>
                        </div>

                        {/* Other Left Link (Pricing) */}
                        <Link
                            href={navLinks[0].href}
                            className="text-sm font-bold uppercase tracking-wider hover:text-accent transition-colors"
                        >
                            {navLinks[0].label}
                        </Link>
                    </div>

                    {/* Center: Brand */}
                    <div className="absolute left-1/2 -translate-x-1/2 flex items-center z-50 pointer-events-none md:pointer-events-auto">
                        <Link href="/" className="flex items-center gap-2 group pointer-events-auto">
                            <div className="p-1.5 rounded-lg bg-primary/20 group-hover:bg-primary/40 transition-colors">
                                <Shield className="h-6 w-6 text-primary fill-primary/20" />
                            </div>
                            <span className="text-2xl font-black tracking-tight uppercase">Regulation<span className="text-primary dark:text-white">Kit</span></span>
                        </Link>
                    </div>

                    {/* Right: Rest of Links + Actions */}
                    <div className="hidden md:flex items-center gap-6 z-50">
                        {navLinks.slice(1).map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-bold uppercase tracking-wider hover:text-accent transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}

                        <div className="h-6 w-px bg-border mx-2" />

                        <ThemeToggle />

                        {/* Language Selector */}
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-1.5 text-sm font-bold hover:text-accent transition-colors px-2 py-1 rounded-md hover:bg-muted"
                        >
                            <Globe className="h-4 w-4" />
                            <span className="uppercase">{language === 'he' ? 'EN' : 'HE'}</span>
                        </button>

                        <Button className="gradient-accent text-white border-0 font-bold rounded-full px-6" asChild>
                            <Link href="#calculator">{content.nav.cta}</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden items-center gap-4 ml-auto z-50">
                        <ThemeToggle />
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-1 text-xs font-bold"
                        >
                            {language === 'he' ? 'EN' : 'HE'}
                        </button>

                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 rounded-lg hover:bg-muted transition-colors"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "circOut" }}
                            className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
                        >
                            <div className="container px-6 py-8 space-y-6">
                                <Link
                                    href="#features"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block text-2xl font-black uppercase tracking-tight hover:text-accent transition-colors"
                                >
                                    {content.nav.solutions}
                                </Link>
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block text-2xl font-black uppercase tracking-tight hover:text-accent transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                                    <Button className="gradient-accent text-white border-0 font-bold rounded-full px-8" asChild>
                                        <Link href="#calculator">{content.nav.cta}</Link>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    )
}
