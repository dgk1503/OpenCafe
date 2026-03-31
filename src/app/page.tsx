"use client";

import { useEffect, useState, useRef } from "react";
import Navbar from "./components/Navbar";
import Preloader from "./components/PreLoader";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [loaded, SetLoaded] = useState(false);
  const mainRef = useRef(null);

  const contentRef = useRef(null);

  return (
    <div>
      {!loaded && (
        <div className="fixed inset-0 z-999 bg-black flex items-center justify-center">
          <Preloader onComplete={() => SetLoaded(true)} />
        </div>
      )}
      <div ref={mainRef} className="relative">
        <Navbar />

        <div className="h-[400vh]">
          <div className="mx-auto flex flex-col bg-amber-700 font-bold text-xl text-black rounded-4xl w-80 h-20 text-center">
            AURACAFE
            <div>
              <p>Where coffee meets calm</p>
            </div>
          </div>
        </div>

        <footer className="flex flex-col mt-auto">Footer bla bla</footer>
      </div>
    </div>
  );
}
