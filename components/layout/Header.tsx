import { Button } from "@/components/ui/button";
import { Focus } from "lucide-react";

const Header = () => {
  return (

      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 border-b border-slate-200">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">

            {/* Logo */}
            <div className="flex items-center gap-2">

              <div className="w-10 h-10 rounded-xl bg-[#2A9D8F] flex items-center justify-center shadow-lg shadow-[#2A9D8F]/20">
                <Focus className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-[#0F172A]">FocusSync</span>
            </div>

            {/* Navigation Links Desktop */}
            <div className="hidden md:flex items-center gap-8">
              <a
                  href="#features"
                  className="text-slate-500 hover:text-[#2A9D8F] transition-colors font-medium"
              >
                Features
              </a>
              <a
                  href="#how-it-works"
                  className="text-slate-500 hover:text-[#2A9D8F] transition-colors font-medium"
              >
                How It Works
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">

              <Button
                  variant="ghost"
                  size="sm"
                  className="hidden sm:inline-flex text-[#0F172A] hover:bg-slate-100 hover:text-[#2A9D8F]">
                Sign In
              </Button>


              <Button
                  size="sm"
                  className="bg-[#2A9D8F] hover:bg-[#238b7e] text-white shadow-md shadow-[#2A9D8F]/20 border-0">
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      </header>
  );
};

export default Header;