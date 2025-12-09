"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import { translations } from "@/app/data/translations"

type Language = "he" | "en"
type Content = typeof translations.he

interface LanguageContextType {
    language: Language
    content: Content
    setLanguage: (lang: Language) => void
    dir: "rtl" | "ltr"
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>("en")

    useEffect(() => {
        // Update document direction when language changes
        const dir = language === "he" ? "rtl" : "ltr"
        document.documentElement.dir = dir
        document.documentElement.lang = language
    }, [language])

    const value = {
        language,
        content: translations[language],
        setLanguage,
        dir: language === "he" ? "rtl" : "ltr" as "rtl" | "ltr"
    }

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider")
    }
    return context
}
