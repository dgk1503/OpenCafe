
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

      
        gsap.set(content, { opacity: 0 })
        gsap.set(panels, { y: "100%" })
        gsap.set(logo, { opacity: 0, y: 16, letterSpacing: "0.4em" })

        const tl = gsap.timeline()

        tl
           
            .to(panels, {
                y: "0%",
                duration: 0.65,
                stagger: 0.07,
                ease: "power4.inOut",
            })
         
            .to(logo, {
                opacity: 1,
                y: 0,
                duration: 0.35,
                ease: "power3.out",
            }, "-=0.05")
           
            .set(content, { opacity: 1 })
          
            .to(logo, {
                opacity: 0,
                y: -12,
                duration: 0.25,
                ease: "power2.in",
                delay: 0.35,
            })
           
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
        
            <div
                ref={overlayRef}
                className="fixed inset-0 z-9999 overflow-hidden pointer-events-none"
            >
             
                <div className="panel absolute top-0 left-0 h-full w-1/4"
                    style={{ background: "linear-gradient(180deg, #1a0e08 0%, #0d0704 100%)" }} />
                <div className="panel absolute top-0 left-1/4 h-full w-1/4"
                    style={{ background: "linear-gradient(180deg, #1c1008 0%, #0f0805 100%)" }} />
                <div className="panel absolute top-0 left-2/4 h-full w-1/4"
                    style={{ background: "linear-gradient(180deg, #1a0e08 0%, #0d0704 100%)" }} />
                <div className="panel absolute top-0 left-3/4 h-full w-1/4"
                    style={{ background: "linear-gradient(180deg, #1c1008 0%, #0f0805 100%)" }} />

              
             

           
                <div
                    ref={logoRef}
                    className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10"
                >
                   
                   
                </div>
            </div>

           
            <div ref={contentRef}>
                {children}
            </div>
        </>
    )
}