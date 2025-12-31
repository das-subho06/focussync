"use client"; //Required for animation counter

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap } from "lucide-react";

//Animated Counter function
const AnimatedCounter = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime = null;
        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            setCount(Math.floor(progress * end));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    }, [end, duration]);

    return <span>{count.toLocaleString()}</span>;
};

const HeroSection = () => {
    return (
        <section className="relative min-h-screen bg-[#F0FDFA] overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#2A9D8F]/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0F172A]/5 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2A9D8F]/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="flex flex-col items-center justify-center">


                    <div className="w-full max-w-4xl text-center">


                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#2A9D8F]/20 mb-8 animate-fade-in-up shadow-sm">
                            <Zap className="w-4 h-4 text-[#2A9D8F]" />
                            <span className="text-sm font-medium text-[#2A9D8F]">
                                Smart Productivity Companion
                            </span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                            <span className="text-[#0F172A]">FocusSync</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0F172A] to-[#2A9D8F]">
                                Work When Your Mind Is Ready
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                            Harness the power of focus-based productivity. FocusSync intelligently detects your mental state and syncs your tasks to when you are truly ready to perform.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                            <Button
                                size="lg"
                                className="w-full sm:w-auto bg-[#2A9D8F] hover:bg-[#238b7e] text-white shadow-lg shadow-[#2A9D8F]/20 border-0 group"
                            >
                                Get Started
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                className="w-full sm:w-auto border-slate-300 text-[#0F172A] hover:bg-slate-50 group"
                            >
                                <Play className="w-5 h-5 mr-2" />
                                View Dashboard
                            </Button>
                        </div>

                        <div className="mt-16 flex flex-col items-center justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                            <div className="flex items-baseline gap-1">
                                {/* The Counter Number */}
                                <span className="text-5xl sm:text-6xl font-extrabold text-[#0F172A] tracking-tight">
                                    <AnimatedCounter end={2500} duration={2000} />
                                </span>
                                <span className="text-4xl sm:text-5xl font-extrabold text-[#2A9D8F]">+</span>
                            </div>

                            {/*Label */}
                            <p className="mt-2 text-lg font-medium text-slate-500">
                                Active users staying in the zone
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;