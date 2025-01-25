import { Card, CardContent } from "@/components/ui/card"
import vaqf from '../../assets/web/vaqflogo.png'

export default function Donation() {
  const items = [
    {
      name: "Vaqf Xayriya Jamoat Fondi",
      image: vaqf,
      borderColor: "border-orange-400",
    },
  ]

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center gap-3 mb-8">
        <h1 className="text-2xl font-semibold">Shop all</h1>
        <span className="text-muted-foreground">7 items</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <button key={item.name} className="block group">
            <Card className={`overflow-hidden border-2 ${item.borderColor} transition-shadow hover:shadow-lg`}>
              <CardContent className="p-3">
                <div className="aspect-[3/2] relative mb-4">
                  <img
                    src={item.image}
                    alt={`${item.name} logo`}
                    className="object-contain h-[200px] w-auto m-auto"
                  />
                </div>
                <h2 className="text-lg font-medium">{item.name}</h2>
              </CardContent>
            </Card>
          </button>
        ))}
      </div>
    </div>
  )
}