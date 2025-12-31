import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
    return (
        // Background
        <section className="py-24 bg-[#F0FDFA] relative overflow-hidden">

            {/* Background Glow Effects*/}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2A9D8F]/5 rounded-full blur-3xl mix-blend-multiply" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#2A9D8F]/5 rounded-full blur-3xl mix-blend-multiply" />

            <div className="container mx-auto px-6 relative z-10 text-center">


                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#2A9D8F]/20 mb-8 shadow-sm">
                    <Sparkles className="w-4 h-4 text-[#2A9D8F]" />
                    <span className="text-sm font-medium text-[#2A9D8F]">7-Day Free Trial</span>
                </div>

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] mb-6 leading-tight">
                    Stop Managing Time. <br className="hidden sm:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2A9D8F] to-[#2dd4bf]">
                        Start Managing Energy.
                    </span>
                </h2>

                <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Join 2,500+ professionals who have already reclaimed 20+ hours of deep work every month. No credit card required.
                </p>


                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

                    <Button
                        size="lg"
                        className="w-full sm:w-auto h-12 px-8 bg-[#2A9D8F] hover:bg-[#238b7e] text-white shadow-lg shadow-[#2A9D8F]/20 text-base font-semibold transition-all hover:scale-105"
                    >
                        Start For Free
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>

                    <Button
                        variant="outline"
                        size="lg"
                        className="w-full sm:w-auto h-12 px-8 border-slate-300 bg-white text-[#0F172A] hover:bg-slate-50 text-base"
                    >
                        Book a Demo
                    </Button>
                </div>

                {/* Small Trust Signal */}
                <p className="mt-8 text-sm text-slate-500">
                    Trusted by teams at <span className="font-semibold text-[#0F172A]">Google</span>, <span className="font-semibold text-[#0F172A]">Meta</span>, and <span className="font-semibold text-[#0F172A]">Notion</span>.
                </p>
            </div>
        </section>
    );
};

export default CTASection;