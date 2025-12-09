import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

const transition = {
    type: "spring" as const,
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
};

export const MenuItem = ({
    setActive,
    active,
    item,
    children,
    dir = "ltr"
}: {
    setActive: (item: string) => void;
    active: string | null;
    item: string;
    children?: React.ReactNode;
    dir?: "ltr" | "rtl";
}) => {
    return (
        <div onMouseEnter={() => setActive(item)} className="relative h-full flex items-center group/menu-item">
            <motion.div
                transition={{ duration: 0.3 }}
                className="cursor-pointer text-sm font-bold uppercase tracking-wider hover:text-accent transition-colors flex items-center gap-1"
                style={{ lineHeight: "1.25rem" }}
            >
                {item}
                <ChevronDown
                    className={cn(
                        "h-3 w-3 transition-transform duration-300",
                        active === item ? "rotate-180" : "group-hover/menu-item:translate-y-0.5"
                    )}
                />
            </motion.div>
            <AnimatePresence>
                {active === item && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.85, y: 10 }}
                        transition={transition}
                        className={cn(
                            "absolute top-full pt-4 w-max z-[100]",
                            dir === "rtl" ? "right-0 origin-top-right" : "left-0 origin-top-left"
                        )}
                    >
                        {/* 
                           Inner container for the actual visual card. 
                           The outer motion.div handles positioning and entrance animation.
                           This inner div handles the visual look (bg, border, shadow).
                        */}
                        <div className="bg-primary text-primary-foreground rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                            <div className="w-max h-full p-4">
                                {children}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// Simplified Menu component without delay logic to fix "not opening" bug
export const Menu = ({
    setActive,
    children,
    className
}: {
    setActive: (item: string | null) => void;
    children: React.ReactNode;
    className?: string
}) => {
    return (
        <nav
            onMouseLeave={() => setActive(null)}
            className={cn("relative flex justify-center space-x-4 px-8 py-6", className)}
        >
            {children}
        </nav>
    );
};

export const ProductItem = ({
    title,
    description,
    href,
    src,
}: {
    title: string;
    description: string;
    href: string;
    src: string;
}) => {
    return (
        <Link href={href} className="flex space-x-4 group text-start">
            <div className="shrink-0 rounded-lg overflow-hidden w-[140px] h-[70px] border border-border group-hover:border-accent/50 transition-colors">
                <img
                    src={src}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>
            <div>
                <h4 className="text-lg font-bold mb-1 text-foreground group-hover:text-accent transition-colors">
                    {title}
                </h4>
                <p className="text-muted-foreground text-sm max-w-[10rem] line-clamp-2">
                    {description}
                </p>
            </div>
        </Link>
    );
};

export const HoveredLink = ({ children, ...rest }: any) => {
    return (
        <Link
            {...rest}
            className="text-muted-foreground hover:text-accent transition-colors"
        >
            {children}
        </Link>
    );
};
