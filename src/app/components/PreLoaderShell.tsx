"use client"

import { useEffect, useState } from "react"
import Preloader from "./PreLoader"

export default function PreloaderShell() {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const alreadySeen = sessionStorage.getItem("preloader_done")
        if (!alreadySeen) {
            setShow(true)
        }
    }, [])

    if (!show) return null

    return (
        <div className="fixed inset-0 z-99999 bg-black flex items-center justify-center">
            <Preloader
                onComplete={() => {
                    sessionStorage.setItem("preloader_done", "true")
                    setShow(false)
                }}
            />
        </div>
    )
}