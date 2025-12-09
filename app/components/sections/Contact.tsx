"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Phone, Mail, MapPin, CheckCircle } from "lucide-react"

import { Button } from "@/app/components/ui/button"
import { useLanguage } from "@/app/context/LanguageContext"

export function Contact() {
    const { content } = useLanguage()
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    })
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Would send to backend
        setIsSubmitted(true)
    }

    return (
        <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/20 rounded-full blur-3xl -z-10" />

            <div className="w-full max-w-[95%] xl:max-w-screen-2xl px-4 md:px-6 mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 w-full mx-auto">
                    {/* Left Column - Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                                {content.contact.title}
                                <br />
                                <span className="gradient-text">{content.contact.title_highlight}</span>
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                {content.contact.subtitle}
                            </p>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-4">
                            {[
                                { icon: Phone, label: content.contact.info.phone, value: "03-1234567" },
                                { icon: Mail, label: content.contact.info.email, value: "hello@regulationkit.co.il" },
                                { icon: MapPin, label: content.contact.info.address, value: "Tel Aviv, Israel" },
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                                        <item.icon className="h-5 w-5 text-accent" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">{item.label}</p>
                                        <p className="font-medium">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="glass-card p-8">
                            {isSubmitted ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/10 flex items-center justify-center">
                                        <CheckCircle className="h-8 w-8 text-green-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">{content.contact.form.success_title}</h3>
                                    <p className="text-muted-foreground">
                                        {content.contact.form.success_text}
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">{content.contact.form.name}</label>
                                        <input
                                            type="text"
                                            required
                                            value={formState.name}
                                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-accent/50"
                                            placeholder="Israel Israeli"
                                        />
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-2">{content.contact.form.email}</label>
                                            <input
                                                type="email"
                                                required
                                                value={formState.email}
                                                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-accent/50"
                                                placeholder="email@example.com"
                                                dir="ltr"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">{content.contact.form.phone}</label>
                                            <input
                                                type="tel"
                                                value={formState.phone}
                                                onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-accent/50"
                                                placeholder="050-1234567"
                                                dir="ltr"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">{content.contact.form.message}</label>
                                        <textarea
                                            rows={4}
                                            value={formState.message}
                                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
                                            placeholder="..."
                                        />
                                    </div>
                                    <Button type="submit" size="lg" className="w-full gradient-accent text-white border-0">
                                        <Send className="ml-2 h-5 w-5" />
                                        {content.contact.form.submit}
                                    </Button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
