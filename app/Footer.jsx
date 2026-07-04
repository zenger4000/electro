import logo from "../public/logopng.png"
import Image from "next/image";

export default function Footer() {
    return (
      <footer className="border-t border-hidden  bg-zinc-950 text-zinc-400">
        <div className="relative h-2 overflow-hidden">
          <div className="absolute inset-0 animate-gradient bg-[length:200%_100%] bg-gradient-to-r from-zinc-950 via-[#25aaaa]  to-zinc-950 " />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-10 grid-cols-3">
            {/* Brand */}
            <div className="col-span-3 md:col-span-1">
                <div className="mb-4 -mt-6">
                    <Image src={logo} alt="logo" width={200}></Image>
                </div>
  
              <p className="text-sm leading-relaxed">
                Evidence-based information about electrolytes,
                hydration, nutrition, and human physiology,
                organized in an accessible way for learners,
                athletes, and health-conscious individuals.
              </p>
            </div>
  
            {/* Navigation */}
            <div className="mx-auto">
              <h4 className="mb-3 font-semibold text-white">
                Explore
              </h4>
  
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="/electrolytes"
                    className="transition hover:text-white"
                  >
                    Electrolytes
                  </a>
                </li>
  
                <li>
                  <a
                    href="/foods"
                    className="transition hover:text-white"
                  >
                    Food Sources
                  </a>
                </li>
  
                <li>
                  <a
                    href="/blog"
                    className="transition hover:text-white"
                  >
                    Articles
                  </a>
                </li>
  
                <li>
                  <a
                    href="/specialists"
                    className="transition hover:text-white"
                  >
                    Specialists
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Disclaimer */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="mb-3 font-semibold text-white">
                Medical Disclaimer
              </h4>
  
              <p className="text-sm leading-relaxed">
                Electrolyfe is intended for educational purposes
                only and does not provide medical advice,
                diagnosis, or treatment. Always consult a
                qualified healthcare professional regarding
                medical concerns or treatment decisions.
              </p>
            </div>
          </div>
  
          <div className="mt-10 border-t border-zinc-800 pt-6 text-center text-xs">
            © {new Date().getFullYear()} Electrolyfe by Amr Mostafa. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }