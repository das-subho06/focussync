import { Activity, Eye, Repeat } from "lucide-react";

const steps = [
    {
        number: "01",
        icon: Activity,
        title: "Monitor Work Behavior",
        description: "FocusSync quietly observes your typing patterns, mouse movements, and app usage to understand your work rhythm.",
    },
    {
        number: "02",
        icon: Eye,
        title: "Detect Focus Level",
        description: "Our AI analyzes behavioral signals in real-time to accurately determine your current cognitive focus state.",
    },
    {
        number: "03",
        icon: Repeat,
        title: "Sync Tasks and Breaks",
        description: "Tasks are intelligently scheduled and breaks are suggested at the perfect moments to maximize productivity.",
    },
];

const HowItWorksSection = () => {
    return (

        <section id="how-it-works" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">

                    <span className="inline-block px-4 py-2 rounded-full bg-[#2A9D8F]/10 text-[#2A9D8F] text-base font-medium mb-6">
                        How It Works
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-bold text-[#0F172A] mb-6 leading-tight">
                        Three simple steps to peak productivity
                    </h2>

                    <p className="text-xl text-slate-500 leading-relaxed">
                        No complex setup. No learning curve. Just smarter work from day one.
                    </p>
                </div>


                <div className="relative">

                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-200 to-transparent -translate-y-1/2" />

                    <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                        {steps.map((step, index) => (
                            <div
                                key={step.number}
                                className="relative group"
                            >

                                <div className="relative bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1">


                                    <div className="absolute -top-4 left-8 px-4 py-1 bg-[#2A9D8F] text-white text-sm font-bold rounded-full shadow-lg shadow-[#2A9D8F]/20">
                                        Step {step.number}
                                    </div>


                                    <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mb-6 mt-2 group-hover:bg-[#2A9D8F]/10 transition-colors">
                                        {/* Icon: Default Navy, Hover Teal */}
                                        <step.icon className="w-8 h-8 text-[#0F172A] group-hover:text-[#2A9D8F] transition-colors" />
                                    </div>


                                    <h3 className="text-2xl font-bold text-[#0F172A] mb-3">{step.title}</h3>
                                    <p className="text-base text-slate-500 leading-relaxed">{step.description}</p>
                                </div>

                                {/* Arrow connector: Mobile*/}
                                {index < steps.length - 1 && (
                                    <div className="lg:hidden flex justify-center py-4">
                                        <div className="w-0.5 h-8 bg-slate-200" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;