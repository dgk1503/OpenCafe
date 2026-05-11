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
    const pathname = usePathname()

    useEffect(() => {
        const overlay = overlayRef.current
        if (!overlay) return

        const panels = overlay.querySelectorAll<HTMLDivElement>(".panel")

        const tl = gsap.timeline()

        tl.fromTo(
            panels,
            { y: "100%" },
            {
                y: "0%",
                duration: 0.6,
                stagger: 0.1,
                ease: "power4.inOut",
            }
        ).to(panels, {
            y: "-100%",
            duration: 0.8,
            stagger: 0.1,
            ease: "power4.inOut",
            delay: 0.8,
        })

        return () => {
            tl.kill()
        }
    }, [pathname])

    return (
        <>
            <div
                ref={overlayRef}
                className="fixed inset-0 z-9999 flex overflow-hidden pointer-events-none"
            >
                <div className="panel h-full w-1/4 bg-black" />
                <div className="panel h-full w-1/4 bg-black" />
                <div className="panel h-full w-1/4 bg-black" />
                <div className="panel h-full w-1/4 bg-black" />
            </div>
            {children}
        </>
    )
}