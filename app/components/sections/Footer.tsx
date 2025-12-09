"use client"

import Link from "next/link"
import { Shield, MessageCircle, FileText, BookOpen } from "lucide-react"
import { useLanguage } from "@/app/context/LanguageContext"

export function Footer() {
    const { content } = useLanguage()

    return (
        <footer className="border-t bg-muted/30 w-full flex justify-center">
            <div className="w-full max-w-[95%] xl:max-w-screen-2xl px-4 md:px-6 py-12 md:py-16">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                            <div className="p-2 rounded-lg gradient-accent">
                                <Shield className="h-5 w-5 text-white" />
                            </div>
                            <span>RegulationKit</span>
                        </Link>
                        <p className="text-sm text-muted-foreground max-w-xs">
                            {content.hero.subtitle.split('.')[0]}.
                        </p>
                        <div className="flex gap-4">
                            {[MessageCircle, FileText, BookOpen].map((Icon, index) => (
                                <Link
                                    key={index}
                                    href="#"
                                    className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
                                >
                                    <Icon className="h-5 w-5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="font-semibold mb-4">{content.footer.products_title}</h3>
                        <ul className="space-y-3">
                            {content.footer.products.map((link: string, index: number) => (
                                <li key={index}>
                                    <Link
                                        href="#features"
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-semibold mb-4">{content.footer.company_title}</h3>
                        <ul className="space-y-3">
                            {content.footer.company.map((link: string, index: number) => (
                                <li key={index}>
                                    <Link
                                        href="#"
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-semibold mb-4">{content.footer.legal_title}</h3>
                        <ul className="space-y-3">
                            {content.footer.legal.map((link: string, index: number) => (
                                <li key={index}>
                                    <Link
                                        href="#"
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground">
                        {content.footer.rights}
                    </p>
                    <p className="text-sm text-muted-foreground">
                        {content.footer.tagline}
                    </p>
                </div>
            </div>
        </footer>
    )
}
