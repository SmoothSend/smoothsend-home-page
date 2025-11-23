"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const tokens = [
    { name: "Aptos", src: "/aptos-apt-logo.png", size: 60, x: "10%", y: "20%", delay: 0 },
    { name: "Arbitrum", src: "/arbitrum-arb-logo.svg", size: 50, x: "85%", y: "15%", delay: 1 },
    { name: "Avalanche", src: "/avalanche-avax-logo.svg", size: 55, x: "15%", y: "75%", delay: 2 },
    { name: "Base", src: "/base-logo.svg", size: 45, x: "80%", y: "70%", delay: 3 },
    { name: "USDC", src: "/usd-coin-usdc-logo.svg", size: 50, x: "50%", y: "10%", delay: 4 },
    { name: "Sui", src: "/sui-sui-logo.svg", size: 55, x: "5%", y: "45%", delay: 1.5 },
    { name: "PYUSD", src: "/paypal-usd-pyusd-logo.svg", size: 45, x: "90%", y: "50%", delay: 2.5 },
];

export const FloatingTokens = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {tokens.map((token, index) => (
                <motion.div
                    key={index}
                    className="absolute cursor-pointer pointer-events-auto"
                    style={{
                        left: token.x,
                        top: token.y,
                        width: token.size,
                        height: token.size,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: [0, -20, 0],
                        rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                        opacity: { duration: 1, delay: token.delay },
                        scale: { duration: 1, delay: token.delay },
                        y: {
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: token.delay,
                        },
                        rotate: {
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: token.delay,
                        },
                    }}
                    whileHover={{
                        scale: 1.2,
                        filter: "blur(0px)",
                        opacity: 1,
                        transition: { duration: 0.3 },
                    }}
                >
                    <div className="relative w-full h-full transition-all duration-300 filter blur-[3px] hover:blur-0 opacity-60 hover:opacity-100">
                        <Image
                            src={token.src}
                            alt={token.name}
                            fill
                            className={`object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] ${token.name === "Aptos" ? "rounded-full" : ""}`}
                        />
                    </div>
                </motion.div>
            ))}
        </div>
    );
};
