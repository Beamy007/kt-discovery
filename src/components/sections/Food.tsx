import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export function Food() {
  return (
    <section id="food" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-amber-100 rounded-full blur-3xl opacity-50" />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Nasi_dagang_ikan_tongkol.jpg/1280px-Nasi_dagang_ikan_tongkol.jpg" 
              alt="Nasi Dagang" 
              className="relative rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 border-8 border-white"
            />
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">A Taste of Heritage</h2>
              <Separator className="w-20 bg-amber-500 h-1 rounded-full" />
              <p className="text-lg text-slate-600 leading-relaxed">
                Terengganu's cuisine is legendary across Malaysia. Known for its distinct use of fresh seafood, coconut milk, and unique blends of spices.
              </p>
            </div>

            <div className="grid gap-6">
              <Card className="border-l-4 border-l-amber-500 bg-slate-50">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Nasi Dagang</h3>
                  <p className="text-slate-600">The "Breakfast of Champions." Rice steamed in coconut milk with fenugreek seeds, served with a rich tuna curry.</p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-amber-500 bg-slate-50">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Keropok Lekor</h3>
                  <p className="text-slate-600">A savory fish sausage snack, boiled or fried, and best eaten hot with a spicy chili dip.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
