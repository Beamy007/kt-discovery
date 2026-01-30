import { Navbar } from "./components/sections/Navbar"
import { Hero } from "./components/sections/Hero"
import { Landmarks } from "./components/sections/Landmarks"
import { Food } from "./components/sections/Food"

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-amber-100 selection:text-amber-900">
      <Navbar />
      <main>
        <Hero />
        <Landmarks />
        <Food />
      </main>
      
      <footer className="bg-slate-950 text-slate-400 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm font-medium">
            © 2026 <span className="text-white">Beamy007</span>. Built with React & Tailwind.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">Vercel</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
