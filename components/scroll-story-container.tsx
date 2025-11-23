"use client"

import React, { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

interface ScrollStoryContainerProps {
    children: React.ReactNode
}

export function ScrollStoryContainer({ children }: ScrollStoryContainerProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    })

    // Smooth out the scroll progress
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

    return (
        <div ref={containerRef} className="relative min-h-screen w-full overflow-hidden bg-background">
            {/* Background Elements that persist/morph */}
            <BackgroundEffects progress={smoothProgress} />

            <div className="relative z-10">
                {children}
            </div>
        </div>
    )
}

function BackgroundEffects({ progress }: { progress: any }) {
    const backgroundY = useTransform(progress, [0, 1], ["0%", "20%"])
    const opacity = useTransform(progress, [0, 0.2, 0.8, 1], [0.5, 0.8, 0.8, 0.5])

    return (
        <motion.div
            className="fixed inset-0 z-0 pointer-events-none"
            style={{ y: backgroundY, opacity }}
        >
            {/* Gradient Orbs */}
            <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary/20 blur-[100px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-accent/10 blur-[120px]" />
            <div className="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] rounded-full bg-secondary/20 blur-[80px]" />

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
        </motion.div>
    )
}
