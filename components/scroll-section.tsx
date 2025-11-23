"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ScrollSectionProps {
    children: React.ReactNode
    className?: string
    delay?: number
}

export function ScrollSection({ children, className = "", delay = 0 }: ScrollSectionProps) {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
    const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])
    const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

    return (
        <motion.div
            ref={ref}
            style={{ opacity, y, scale }}
            className={`relative z-10 py-20 ${className}`}
        >
            {children}
        </motion.div>
    )
}
