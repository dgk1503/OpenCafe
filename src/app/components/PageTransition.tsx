// components/PageTransition.tsx
"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import gsap from "gsap"

interface PageTransitionProps {
    children: React.ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
    const overlayRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)
    const logoRef = useRef<HTMLDivElement>(null)
    const pathname = usePathname()

    useEffect(() => {
        const overlay = overlayRef.current
        const content = contentRef.current
        const logo = logoRef.current
        if (!overlay || !content || !logo) return

        const panels = overlay.querySelectorAll<HTMLDivElement>(".panel")

        // ✅ Hide new page content immediately — no flash
        gsap.set(content, { opacity: 0 })
        gsap.set(panels, { y: "100%" })
        gsap.set(logo, { opacity: 0, y: 16, letterSpacing: "0.4em" })

        const tl = gsap.timeline()

        tl
            // 1. Panels sweep up and cover the screen
            .to(panels, {
                y: "0%",
                duration: 0.65,
                stagger: 0.07,
                ease: "power4.inOut",
            })
            // 2. Brand moment — logo fades in while screen is covered
            .to(logo, {
                opacity: 1,
                y: 0,
                duration: 0.35,
                ease: "power3.out",
            }, "-=0.05")
            // 3. New page content becomes visible (still hidden behind panels)
            .set(content, { opacity: 1 })
            // 4. Logo fades out
            .to(logo, {
                opacity: 0,
                y: -12,
                duration: 0.25,
                ease: "power2.in",
                delay: 0.35,
            })
            // 5. Panels sweep away upward to reveal new page
            .to(panels, {
                y: "-100%",
                duration: 0.65,
                stagger: 0.07,
                ease: "power4.inOut",
            }, "-=0.05")

        return () => {
            tl.kill()
        }
    }, [pathname])

    return (
        <>
            {/* Transition overlay */}
            <div
                ref={overlayRef}
                className="fixed inset-0 z-9999 overflow-hidden pointer-events-none"
            >
                {/* 4 staggered panels */}
                <div className="panel absolute top-0 left-0 h-full w-1/4"
                    style={{ background: "linear-gradient(180deg, #1a0e08 0%, #0d0704 100%)" }} />
                <div className="panel absolute top-0 left-1/4 h-full w-1/4"
                    style={{ background: "linear-gradient(180deg, #1c1008 0%, #0f0805 100%)" }} />
                <div className="panel absolute top-0 left-2/4 h-full w-1/4"
                    style={{ background: "linear-gradient(180deg, #1a0e08 0%, #0d0704 100%)" }} />
                <div className="panel absolute top-0 left-3/4 h-full w-1/4"
                    style={{ background: "linear-gradient(180deg, #1c1008 0%, #0f0805 100%)" }} />

                {/* Thin seam lines between panels — adds depth */}
                <div className="absolute top-0 left-1/4 h-full w-px bg-white/5" />
                <div className="absolute top-0 left-2/4 h-full w-px bg-white/5" />
                <div className="absolute top-0 left-3/4 h-full w-px bg-white/5" />

                {/* Brand moment — centered logo */}
                <div
                    ref={logoRef}
                    className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10"
                >
                    {/* Optional: swap this for your actual <Logo /> component */}
                    <div className="flex flex-col items-center gap-2">
                        <div
                            className="w-6 h-px"
                            style={{ background: "linear-gradient(90deg, transparent, #c8a97e, transparent)" }}
                        />
                        <span
                            className="text-xs font-light tracking-[0.5em] uppercase"
                            style={{ color: "#c8a97e", fontFamily: "serif" }}
                        >
                            OpenCafe
                        </span>
                        <div
                            className="w-6 h-px"
                            style={{ background: "linear-gradient(90deg, transparent, #c8a97e, transparent)" }}
                        />
                    </div>
                </div>
            </div>

            {/* Page content — starts hidden, revealed mid-transition */}
            <div ref={contentRef}>
                {children}
            </div>
        </>
    )
}