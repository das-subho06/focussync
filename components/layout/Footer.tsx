import { Focus } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        // 1. Background: Navy (#0F172A) | Text: White
        <footer className="bg-[#0F172A] text-white py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo & Tagline */}
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <div className="flex items-center gap-2">
                            {/* 2. Logo Icon: Teal Background (#2A9D8F) */}
                            <div className="w-10 h-10 rounded-xl bg-[#2A9D8F] flex items-center justify-center shadow-lg shadow-[#2A9D8F]/20">
                                <Focus className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold">FocusSync</span>
                        </div>
                        {/* 3. Muted text: Slate-400 */}
                        <p className="text-slate-400 text-sm">
                            Work when your mind is ready.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-8 text-sm">
                        <a href="#features" className="text-slate-400 hover:text-white transition-colors">
                            Features
                        </a>
                        <a href="#how-it-works" className="text-slate-400 hover:text-white transition-colors">
                            How It Works
                        </a>
                        <a href="#" className="text-slate-400 hover:text-white transition-colors">
                            Privacy
                        </a>
                    </div>

                    {/* Copyright */}
                    <p className="text-slate-500 text-sm">
                        © {currentYear} FocusSync. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;