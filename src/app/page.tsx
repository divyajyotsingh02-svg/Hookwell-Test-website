import ScrollyCanvas from "@/components/ScrollyCanvas";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212]">
      <Navbar />
      <ScrollyCanvas />
      <About />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="w-full relative py-12 px-6 md:px-24 bg-black overflow-hidden font-mono tracking-widest uppercase">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 to-black/40 z-0" />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs font-light text-gray-500 relative z-10">
          <p>© {new Date().getFullYear()} HOOKWELL ENGINEERS. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
