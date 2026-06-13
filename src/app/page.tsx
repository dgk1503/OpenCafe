"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Navbar from "./components/Navbar";
import AnimatedCounter from "./components/Counter";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Bean, Candy, GlassWater, Milk, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const parallaxImageRef = useRef<HTMLImageElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "https://plus.unsplash.com/premium_photo-1664970900025-1e3099ca757a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1337&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(parallaxImageRef.current, {
        scrollTrigger: {
          trigger: "#home",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
        yPercent: 30,
        ease: "none",
      });

      const cards =
        cardsContainerRef.current?.querySelectorAll(".ingredient-card");
      if (cards) {
        gsap.from(cards, {
          scrollTrigger: {
            trigger: "#ingredients",
            start: "top center",
            end: "center center",
          },
          opacity: 0,
          scale: 0.8,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out",
        });
      }
    });

    return () => ctx.revert();
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div>
      <Navbar />
      <div className="relative">
        <section
          id="home"
          className="min-h-screen w-full flex flex-col items-center justify-center pt-20 bg-black relative overflow-hidden"
        >
        
          <div className="absolute inset-0 w-full h-full">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
                style={{
                  opacity: currentSlide === index ? 1 : 0,
                  backgroundImage: `url(${slide})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/40" />
              </div>
            ))}
          </div>

        
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <Link
              href="/locations"
              className="mt-auto mb-16 px-8 py-4 bg-linear-to-r from-amber-400 to-amber-500 text-white font-medium rounded-full hover:from-amber-500 hover:to-amber-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-2 group"
            >
              <MapPin className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span>Explore Our Locations</span>
            </Link>
          </div>

   
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === index
                    ? "bg-amber-400 w-8 h-3"
                    : "bg-amber-400/40 w-3 h-3 hover:bg-amber-400/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </section>

        <section
          id="story"
          className="min-h-screen w-full flex flex-col items-center justify-center py-20 bg-linear-to-b from-amber-900 to-amber-800"
        >
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-5xl font-medium text-amber-50 text-center mb-12">
              Why OpenCafé Exists
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-amber-100 text-center leading-relaxed">
                OpenCafé began as a late-night project between developers,
                designers, and dreamers who believed coffee should be as
                thoughtfully crafted as great software.
              </p>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-amber-400/20">
                <p className="text-lg text-amber-50 text-center leading-relaxed font-medium mb-4">
                  Every bean is selected with{" "}
                  <span className="text-amber-300">precision</span>.<br />
                  Every cup is brewed with{" "}
                  <span className="text-amber-300">intention</span>.
                </p>
              </div>
              <p className="text-lg text-amber-100 text-center leading-relaxed">
                Our mission is simple:
              </p>
              <div className="bg-gradient-to-r from-amber-400/10 to-amber-500/10 rounded-xl p-8 border border-amber-400/30">
                <p className="text-2xl font-medium text-center text-amber-50">
                  <span className="text-amber-300">Fuel curiosity.</span>
                  <br />
                  <span className="text-amber-300">Inspire creativity.</span>
                  <br />
                  <span className="text-amber-300">
                    Keep the code compiling.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="ingredients"
          className="min-h-screen w-full flex flex-col items-center justify-center py-20 bg-linear-to-br from-amber-700 to-amber-600"
        >
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-5xl text-white text-center mb-16 font-sans">
              Ingredients
            </h2>
            <div
              className="mx-auto my-8 grid w-full max-w-7xl grid-cols-2 gap-6 p-4 lg:grid-cols-4"
              ref={cardsContainerRef}
            >
              {[
                {
                  icon: <Bean className="h-6 w-6 text-white" />,
                  title: "Signature Coffee Beans",
                  desc: "We use handpicked, ethically sourced beans ranging from bold single origin roasts to smooth house blends.",
                  bg: "https://images.presentationgo.com/2025/04/roasted-coffee-beans-floating-dark.jpg",
                },
                {
                  icon: <Milk className="h-6 w-6 text-white" />,
                  title: "Creamy Milks",
                  desc: "From rich dairy to silky oat, almond, and soy milk — each option is chosen to complement our coffee.",
                  bg: "https://wild-kaffee.com/cdn/shop/articles/Was-ist-Latte-Art-warum-ist-es-wichtig-Wildkaffee-Roesterei-Milch-schaeumen.jpg?v=1711997998",
                },
                {
                  icon: <Candy className="h-6 w-6 text-white" />,
                  title: "Natural Sweetness",
                  desc: "Raw honey, brown sugar, and handcrafted syrups like vanilla, caramel, and hazelnut — warmth in every cup.",
                  bg: "https://www.carabellocoffee.com/cdn/shop/files/coffeesyrup4_800x.webp?v=1736473291",
                },
                {
                  icon: <GlassWater className="h-6 w-6 text-white" />,
                  title: "Pure Water",
                  desc: "Often overlooked, but essential — our carefully filtered water ensures clarity, balance, and consistency.",
                  bg: "https://cdn.shopify.com/s/files/1/0330/7333/files/TRP-February-05_480x480.jpg?v=1620602480",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="ingredient-card group cursor-pointer"
                >
                  <div className="relative transform overflow-hidden rounded-2xl p-6 shadow-lg transition-all duration-300 group-hover:scale-105 hover:shadow-xl">
                    <div
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        background: `url(${item.bg})`,
                        backgroundSize: "cover",
                        filter: "blur(3px)",
                      }}
                    />
                    <div className="relative z-10">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/20">
                        {item.icon}
                      </div>
                      <h3 className="mb-2 font-sans text-lg font-medium text-white">
                        {item.title}
                      </h3>
                      <p className="mb-4 font-sans text-sm text-white/80">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="stats"
          className="min-h-screen w-full flex flex-col items-center justify-center py-20 bg-linear-to-br from-amber-900 via-amber-800 to-amber-900"
        >
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-5xl font-bold text-amber-50 text-center mb-24 tracking-tight">
              Our Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-40">
              <div className="flex flex-col items-center justify-center">
                <div className="mb-8 text-center">
                  <div className="text-6xl font-black text-amber-300 tracking-tight font-mono">
                    <AnimatedCounter from={0} to={1240000} />
                    <span className="text-6xl text-amber-300 font-bold">+</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-amber-50 text-center leading-tight">
                  Lines of Code
                </h3>
                <p className="text-sm text-amber-200 text-center mt-3 font-medium">
                  Written Here
                </p>
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="mb-8 text-center">
                  <div className="text-6xl font-black text-amber-300 tracking-tight font-mono">
                    <AnimatedCounter from={0} to={350000} />
                    <span className="text-6xl text-amber-300 font-bold">+</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-amber-50 text-center leading-tight">
                  Cups Brewed
                </h3>
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="mb-8 text-center">
                  <div className="text-6xl font-black text-amber-300  font-mono">
                    <AnimatedCounter from={0} to={99} />
                    <span className="text-2xl text-amber-300 font-bold">%</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-amber-50 text-center leading-tight">
                  Developer
                </h3>
                <p className="text-sm text-amber-200 text-center mt-3 font-medium">
                  Satisfaction
                </p>
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="mb-8 text-center">
                  <div className="text-6xl font-black text-amber-300 tracking-tight">
                    24<span className="text-6xl"> / </span>7
                  </div>
                </div>
                <h3 className="text-xl font-bold text-amber-50 text-center leading-tight">
                  Creative Energy
                </h3>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="min-h-screen w-full flex flex-col items-center justify-center py-20 bg-linear-to-br from-amber-800 to-amber-900"
        >
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-5xl font-medium text-white text-center mb-8">
              About{" "}
              <Link
                href="/locations"
                className="group relative inline-flex h-12 items-center justify-center rounded-md bg-transparent px-6 font-medium text-neutral-200 hover:text-white transition-colors"
              >
                <span>Aura Cafe</span>
                <div className="ml-1 -rotate-45 transition-all duration-200 group-hover:rotate-0">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path
                      d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </Link>
            </h2>
            <p className="text-xl text-amber-100 text-center leading-relaxed mb-6">
              Where every cup tells a story. We believe coffee is more than a
              beverage — it's a moment of tranquility in a busy world.
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
            Made with ♡ by{" "}
            <a
              href="https://github.com/dgk1503"
              className="text-sm text-gray-300 font-serif"
              target="_blank"
              rel="noopener noreferrer"
            >
              DGK
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
