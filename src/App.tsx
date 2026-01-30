import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Ship, Waves, Landmark } from "lucide-react"

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Hero Section */}
      <header className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Kuala_Terengganu_skyline.jpg/1280px-Kuala_Terengganu_skyline.jpg')",
            filter: "brightness(0.4)"
          }}
        />
        <div className="relative z-10 text-center px-4 space-y-6 max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white uppercase drop-shadow-lg">
            Kuala Terengganu
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 font-light max-w-2xl mx-auto">
            Where the South China Sea meets centuries of Malay heritage. Experience the soul of Terengganu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold px-8 h-12 text-lg transition-all hover:scale-105">
              Explore Heritage
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white/40 hover:bg-white/10 h-12 text-lg backdrop-blur-sm">
              Watch Journey
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-24 space-y-32">
        
        {/* Intro Section */}
        <section className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium border border-amber-200">
              <Landmark className="w-4 h-4" />
              <span>Cultural Gateway</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              The Heart of <span className="text-amber-600 underline decoration-amber-500/30 underline-offset-8">Tradition</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Nestled at the mouth of the Terengganu River, Kuala Terengganu is a vibrant blend of historical charm and modern engineering. From the rhythmic hammers of traditional boat-builders to the stunning glow of the first bascule bridge in Southeast Asia.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="space-y-1">
                <p className="text-3xl font-bold text-slate-900">400+</p>
                <p className="text-slate-500 text-sm uppercase tracking-wider">Years of History</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-slate-900">100k+</p>
                <p className="text-slate-500 text-sm uppercase tracking-wider">Annual Visitors</p>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-amber-500/5 rounded-2xl scale-95 group-hover:scale-100 transition-transform duration-500 z-0" />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Panorama_Kuala_Terengganu.jpg/1280px-Panorama_Kuala_Terengganu.jpg" 
              alt="Kuala Terengganu Panorama" 
              className="rounded-xl shadow-2xl relative z-10 transition-all duration-500 grayscale-[0.2] group-hover:grayscale-0"
            />
          </div>
        </section>

        {/* Landmarks Grid */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Iconic Landmarks</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Discover the structures that define the skyline and the spirit of our waterfront city.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg overflow-hidden group hover:shadow-xl transition-shadow bg-white">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Cristal_Mosque_in_Kuala_Terengganu.jpg/1280px-Cristal_Mosque_in_Kuala_Terengganu.jpg" 
                  alt="Crystal Mosque" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Waves className="w-5 h-5 text-blue-500" />
                  Crystal Mosque
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                A grand structure of steel and glass, shimmering over the water on Wan Man Island. A masterpiece of modern Islamic architecture.
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg overflow-hidden group hover:shadow-xl transition-shadow bg-white">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Kuala_Terengganu_Drawbridge_at_Night.jpg/1280px-Kuala_Terengganu_Drawbridge_at_Night.jpg" 
                  alt="Drawbridge" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Ship className="w-5 h-5 text-amber-500" />
                  Terengganu Drawbridge
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                The first drawbridge in Southeast Asia. This bascule bridge connects the north and south banks with a futuristic design inspired by London.
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg overflow-hidden group hover:shadow-xl transition-shadow bg-white">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Kuala_Terengganu_from_Duyong_Island.jpg/1280px-Kuala_Terengganu_from_Duyong_Island.jpg" 
                  alt="Duyong Island" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-emerald-500" />
                  Duyong Island
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                The cradle of Terengganu's seafaring heritage. Home to world-renowned master boat-builders and traditional wooden architecture.
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-white font-bold text-xl uppercase tracking-widest">Kuala Terengganu</h3>
            <p className="text-sm max-w-xs">The heritage waterfront city of Malaysia. A journey into the essence of Malay culture.</p>
          </div>
          <div className="flex gap-12">
            <div className="space-y-4">
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Project</h4>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-amber-500 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">GitHub Repo</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Developed By</h4>
              <p className="text-sm">Beamy 🌟 for Aidil Zafri</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800 text-xs text-center text-slate-600 uppercase tracking-widest">
          &copy; 2026 Beamy007 | No Emojis Used in Production
        </div>
      </footer>
    </div>
  )
}
