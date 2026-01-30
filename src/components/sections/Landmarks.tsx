import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"

const landmarks = [
  {
    title: "Crystal Mosque",
    category: "Architecture",
    description: "A grand structure made of steel, glass and crystal. One of the most iconic mosques in the world, standing majestically on Wan Man Island.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Cristal_Mosque_in_Kuala_Terengganu.jpg/1280px-Cristal_Mosque_in_Kuala_Terengganu.jpg",
    location: "Wan Man Island"
  },
  {
    title: "Terengganu Drawbridge",
    category: "Modern Marvel",
    description: "The first bascule bridge in Southeast Asia. Its futuristic twin towers offer panoramic views of the river mouth and South China Sea.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Kuala_Terengganu_Drawbridge_at_Night.jpg/1280px-Kuala_Terengganu_Drawbridge_at_Night.jpg",
    location: "Kuala Nerus"
  },
  {
    title: "Duyong Island",
    category: "Heritage",
    description: "The cradle of traditional boat building. Witness master craftsmen build magnificent wooden yachts without blueprints.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Kuala_Terengganu_from_Duyong_Island.jpg/1280px-Kuala_Terengganu_from_Duyong_Island.jpg",
    location: "Pulau Duyong"
  }
]

export function Landmarks() {
  return (
    <section id="landmarks" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <Badge variant="outline" className="border-amber-500 text-amber-600 px-4 py-1 text-sm uppercase tracking-widest">Destinations</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Iconic Landmarks</h2>
          <p className="text-slate-600 text-lg">
            From spiritual sanctuaries to engineering feats, explore the structures that define our skyline.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {landmarks.map((item) => (
            <Card key={item.title} className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Badge className="absolute top-4 right-4 bg-white/90 text-slate-900 hover:bg-white">{item.category}</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl flex items-center justify-between">
                  {item.title}
                </CardTitle>
                <CardDescription className="flex items-center gap-1 text-amber-600">
                  <MapPin className="w-4 h-4" /> {item.location}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-slate-600 leading-relaxed">
                {item.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
