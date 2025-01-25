import { Card, CardContent } from "@/components/ui/card"
import one from '../../assets/shopall/one.png'
import two from '../../assets/shopall/two.png'
import three from '../../assets/shopall/three.png'
import four from '../../assets/shopall/four.png'
import five from '../../assets/shopall/five.png'
import six from '../../assets/shopall/six.png'
import seven from '../../assets/shopall/seven.png'

export default function Shopall() {
  const items = [
    {
      name: "Grameen",
      image: one,
      borderColor: "border-orange-400",
    },
    {
      name: "Habitat for Humanity",
      image: two,
      borderColor: "border-zinc-900",
    },
    {
      name: "InSTEDD",
      image: three,
      borderColor: "border-green-400",
    },
    {
      name: "International Rescue Committee",
      image: four,
      borderColor: "border-yellow-400",
    },
    {
      name: "(RED)",
      image: five,
      borderColor: "border-red-500",
    },
    {
      name: "Save the Children",
      image: six,
      borderColor: "border-red-500",
    },
    {
      name: "Special Olympics",
      image: seven,
      borderColor: "border-red-600",
    }
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