"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const AccordionContext = React.createContext<{
    value?: string
    onValueChange?: (value: string) => void
}>({})

interface AccordionProps {
    children: React.ReactNode
    type?: "single" | "multiple" // Simplified, we only support single for now in this custom impl
    collapsible?: boolean
    className?: string
}

export function Accordion({ children, className }: AccordionProps) {
    const [value, setValue] = React.useState<string>("")

    return (
        <AccordionContext.Provider value={{ value, onValueChange: setValue }}>
            <div className={cn("space-y-2", className)}>{children}</div>
        </AccordionContext.Provider>
    )
}

interface AccordionItemProps {
    children: React.ReactNode
    value: string
    className?: string
}

export function AccordionItem({ children, value, className }: AccordionItemProps) {
    return (
        <div className={cn("border-b", className)} data-value={value}>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child as React.ReactElement<any>, { value })
                }
                return child
            })}
        </div>
    )
}

interface AccordionTriggerProps {
    children: React.ReactNode
    className?: string
    value?: string // Injected by Item
}

export function AccordionTrigger({ children, className, value }: AccordionTriggerProps) {
    const { value: selectedValue, onValueChange } = React.useContext(AccordionContext)
    const isOpen = selectedValue === value

    return (
        <button
            onClick={() => onValueChange?.(isOpen ? "" : value!)}
            className={cn(
                "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline",
                className
            )}
        >
            {children}
            <ChevronDown
                className={cn(
                    "h-4 w-4 shrink-0 transition-transform duration-200",
                    isOpen && "rotate-180"
                )}
            />
        </button>
    )
}

interface AccordionContentProps {
    children: React.ReactNode
    className?: string
    value?: string // Injected by Item
}

export function AccordionContent({ children, className, value }: AccordionContentProps) {
    const { value: selectedValue } = React.useContext(AccordionContext)
    const isOpen = selectedValue === value

    return (
        <AnimatePresence initial={false}>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                >
                    <div className={cn("pb-4 pt-0", className)}>{children}</div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
