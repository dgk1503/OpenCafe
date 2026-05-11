"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Preloader from "./components/PreLoader";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Bean, Candy, GlassWater, Milk, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [loaded, SetLoaded] = useState(false);
  const mainRef = useRef(null);
  const parallaxImageRef = useRef(null);

  useEffect(() => {
    if (loaded && parallaxImageRef.current) {
      gsap.to(parallaxImageRef.current, {
        scrollTrigger: {
          trigger: "#home",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          markers: false,
        },
        yPercent: 30,
        ease: "none",
      });
    }
  }, [loaded]);

  return (
    <div>
      {!loaded && (
        <div className="fixed inset-0 z-999 bg-black flex items-center justify-center">
          <Preloader onComplete={() => SetLoaded(true)} />
        </div>
      )}
      <Navbar />
      <div ref={mainRef} className="relative">
        <section
          id="home"
          className="min-h-screen w-full flex flex-col items-center justify-center pt-20 bg-gradient-to-br from-amber-900 to-amber-800 relative overflow-hidden"
        >
          <img
            ref={parallaxImageRef}
            src="/coffee_home_image.jpg"
            alt="Coffee background"
            className="absolute inset-0 w-full h-full object-cover opacity-78"
            style={{ willChange: "transform" }}
          />
          <div className="relative z-10 flex flex-col bg-black font-medium text-3xl text-white rounded-4xl w-96 h-40 text-center items-center justify-center shadow-2xl opacity-100">
            <h1 className="text-4xl mb-4 font-medium">OpenCafé</h1>
            <p className="text-2xl ">Where coffee meets calm</p>
          </div>
          <Link
            href="/locations"
            className="relative z-10 mt-12 px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-white font-medium rounded-full hover:from-amber-500 hover:to-amber-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-2 group"
          >
            <MapPin className="h-5 w-5 group-hover:scale-110 transition-transform" />
            <span>Explore Our Locations</span>
          </Link>
        </section>

        <section
          id="ingredients"
          className="min-h-screen w-full flex flex-col items-center justify-center py-20 bg-gradient-to-br from-amber-700 to-amber-600 font-"
        >
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-5xl  text-white text-center mb-16 font-sans">
              Ingredients
            </h2>
            <div className="mx-auto my-8 grid w-full max-w-7xl grid-cols-2 gap-6 p-4 lg:grid-cols-4">
              <div
                className="scale-in group visible cursor-pointer"
                style={{ transform: "translateY(0px) scale(1)" }}
              >
                <div className="relative transform overflow-hidden rounded-2xl p-6 shadow-lg transition-all duration-300 group-hover:scale-105 hover:shadow-xl">
                  <div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background:
                        "url(https://images.presentationgo.com/2025/04/roasted-coffee-beans-floating-dark.jpg)",
                      backgroundSize: "cover",
                      filter: "blur(3px)",
                    }}
                  />
                  <div className="relative z-10">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/20">
                      <Bean className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="mb-2 font-sans text-lg font-medium text-white">
                      Signature Coffee Beans
                    </h3>
                    <p className="mb-4 font-sans text-sm text-white/80">
                      We use handpicked , ethically sourced beans ranging from
                      bold single origin roasts to smooth house blends.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="scale-in group visible cursor-pointer"
                style={{ transform: "transform: translateY(0px) scale(1)" }}
              >
                <div className="relative transform overflow-hidden rounded-2xl p-6 shadow-lg transition-all duration-300 group-hover:scale-105 hover:shadow-xl">
                  <div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background:
                        "url(https://wild-kaffee.com/cdn/shop/articles/Was-ist-Latte-Art-warum-ist-es-wichtig-Wildkaffee-Roesterei-Milch-schaeumen.jpg?v=1711997998)",
                      backgroundSize: "cover",
                      filter: "blur(3px)",
                    }}
                  />
                  <div className="relative z-10">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/20">
                      <Milk className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="mb-2 font-sans text-lg font-medium text-white">
                      Creamy Milks
                    </h3>
                    <p className="mb-4 font-sans text-sm text-white/80">
                      From rich dairy to silky oat, almond, and soy milk each
                      option is chosen to complement our coffee and create that
                      perfect velvety texture
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="scale-in group visible cursor-pointer"
                style={{ transform: "transform: translateY(0px) scale(1)" }}
              >
                <div className="relative transform overflow-hidden rounded-2xl p-6 shadow-lg transition-all duration-300 group-hover:scale-105 hover:shadow-xl">
                  <div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background:
                        "url(https://www.carabellocoffee.com/cdn/shop/files/coffeesyrup4_800x.webp?v=1736473291)",
                      backgroundSize: "cover",
                      filter: "blur(3px)",
                    }}
                  />
                  <div className="relative z-10">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/20">
                      <Candy className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="mb-2 font-sans text-lg font-medium text-white">
                      Natural Sweetness
                    </h3>
                    <p className="mb-4 font-sans text-sm text-white/80">
                      We go beyond basic sugar with raw honey, brown sugar, and
                      handcrafted syrups like vanilla, caramel, and
                      hazelnut—adding warmth and personality to every drink.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="scale-in group visible cursor-pointer"
                style={{ transform: "transform: translateY(0px) scale(1)" }}
              >
                <div className="relative transform overflow-hidden rounded-2xl p-6 shadow-lg transition-all duration-300 group-hover:scale-105 hover:shadow-xl">
                  <div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background:
                        "url(https://cdn.shopify.com/s/files/1/0330/7333/files/TRP-February-05_480x480.jpg?v=1620602480)",
                      backgroundSize: "cover",
                      filter: "blur(3px)",
                    }}
                  />
                  <div className="relative z-10">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/20">
                      <GlassWater className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="mb-2 font-sans text-lg font-medium text-white">
                      Pure water
                    </h3>
                    <p className="mb-4 font-sans text-sm text-white/80">
                      Often overlooked, but essential our carefully filtered
                      water ensures clarity, balance, and consistency in every
                      brew.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="min-h-screen w-full flex flex-col items-center justify-center py-20 bg-gradient-to-br from-amber-800 to-amber-900"
        >
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-5xl font-medium text-white text-center mb-8">
              About{""}
              <Link
                href="/locations"
                className="group relative inline-flex h-12 items-center justify-center rounded-md bg-transparent px-6 font-medium text-neutral-200 hover:text-white transition-colors"
              >
                <span>Aura Cafe</span>
                <div className="ml-1 -rotate-45 transition-all duration-200 group-hover:rotate-0">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                  >
                    <path
                      d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </Link>
            </h2>

            <p className="text-xl text-amber-100 text-center leading-relaxed mb-6">
              Welcome to Aura Cafe, where every cup tells a story. We believe
              that coffee is more than just a beverage it's a moment of
              tranquility in a busy world.
            </p>
            <p className="text-xl text-amber-100 text-center leading-relaxed mb-6">
              Our mission is to craft the perfect blend of premium ingredients
              with a focus on quality, sustainability, and the serene experience
              each sip brings.
            </p>
            <p className="text-xl text-amber-100 text-center leading-relaxed">
              Join us in discovering the perfect harmony of coffee and calm.
            </p>
          </div>
        </section>

        <footer className="flex flex-col items-center justify-center py-8 bg-black text-white text-center">
          <p className="text-amber-400 font-bold">Aura Cafe © 2026</p>
          <p className="text-sm font-bold text-gray-300">
            Made by{" "}
            <a
              href="https://github.com/dgk1503"
              className="outline-none text-sm text-gray-300  font-serif"
              target="_blank"
            >
              DGK
            </a>{" "}
          </p>
        </footer>
      </div>
    </div>
  );
}
