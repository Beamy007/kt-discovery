import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 animate-in fade-in duration-1000" 
        style={{ 
          backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Kuala_Terengganu_skyline.jpg/1280px-Kuala_Terengganu_skyline.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto space-y-8 pt-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium animate-in slide-in-from-bottom-4 fade-in duration-700 delay-100">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          Visit Malaysia 2026
        </div>
        
        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight text-white drop-shadow-2xl animate-in slide-in-from-bottom-8 fade-in duration-700 delay-200">
          THE JEWEL OF <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">THE EAST COAST</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-200 font-light max-w-2xl mx-auto leading-relaxed animate-in slide-in-from-bottom-8 fade-in duration-700 delay-300">
          Immerse yourself in Kuala Terengganu. Where ancient heritage meets modern marvels along the South China Sea.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-500">
          <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-8 h-14 text-lg rounded-full shadow-lg shadow-amber-500/20 transition-transform hover:scale-105">
            Start Exploring
          </Button>
          <Button size="lg" variant="outline" className="text-white bg-white/5 border-white/30 hover:bg-white/10 h-14 text-lg rounded-full backdrop-blur-md group">
            Watch Video <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
