import { Brain, Clock, CheckCircle, Bell } from "lucide-react";

const features = [
    {
        icon: Brain,
        title: "Auto Focus Detection",
        description: "Our AI continuously monitors your work patterns and biometrics to detect when you're in peak focus mode.",
    },
    {
        icon: Clock,
        title: "Smart Micro-Breaks",
        description: "Scientifically-timed breaks that refresh your mind without breaking flow. Personalized to your rhythm.",
    },
    {
        icon: CheckCircle,
        title: "Task Sync with Focus Level",
        description: "Tasks automatically queue based on your current cognitive state. Complex tasks wait for deep focus.",
    },
    {
        icon: Bell,
        title: "Intelligent Notifications",
        description: "Notifications are held and delivered at optimal moments. Never interrupt flow for non-urgent updates.",
    },
];

const FeaturesSection = () => {
    return (
        <section id="features" className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 rounded-full bg-[#2A9D8F]/10 text-[#2A9D8F] text-base font-medium mb-6">
                        Features
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-bold text-[#0F172A] mb-6 leading-tight">
                        Everything you need to stay in the zone
                    </h2>
                    <p className="text-xl text-slate-500 leading-relaxed">
                        FocusSync combines cutting-edge AI with proven productivity science to help you work smarter, not harder.
                    </p>
                </div>

                {/* Features grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className="group p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >

                            <div className="w-14 h-14 rounded-xl bg-[#2A9D8F]/10 flex items-center justify-center mb-6 group-hover:bg-[#2A9D8F] group-hover:shadow-lg group-hover:shadow-[#2A9D8F]/25 transition-all duration-300">
                                <feature.icon className="w-7 h-7 text-[#2A9D8F] group-hover:text-white transition-colors" />
                            </div>

                            <h3 className="text-xl font-bold text-[#0F172A] mb-3">{feature.title}</h3>
                            <p className="text-slate-500 text-base leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;