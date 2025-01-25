import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingBag, ChevronRight, ChevronDown } from 'lucide-react'
import Viza from '../../assets/web/viza.webp'
import { useNavigate } from 'react-router-dom'

export default function Detailed() {

  const navigate = useNavigate()

  return (
    <div className="flex gap-4 p-4">
      <Card className="w-full min-w-[300px]">
        <CardContent className="p-4 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold">Rewards</h2>
            <div className="flex items-center text-emerald-600">
              <ShoppingBag className="h-4 w-4" />
              <span className="ml-1">277</span>
            </div>
          </div>
          <img
            src={Viza}
            alt="Rewards card"
            className="w-full h-50 object-cover rounded-lg bg-gray-100"
          />
          <Button onClick={() => navigate('/rewards')} variant="ghost" className="w-full justify-between">
            Shop rewards
            <ChevronRight className="h-4 w-4" />
          </Button>
        </CardContent>
      </Card>

      {/* Celebrations Section */}
      <Card className="w-full min-w-[300px]">
        <CardContent className="p-4 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold">Celebrations for you</h2>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-red-500 text-white">RM</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm font-medium">Rhea Mariano</p>
                <p className="text-xs text-muted-foreground">Birthday today</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-green-500 text-white">LC</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm font-medium">Lilian Coppack</p>
                <p className="text-xs text-muted-foreground">Work anniversary on Nov 7</p>
              </div>
            </div>
						<div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-yellow-500 text-white">MF</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm font-medium">Mackenzie Flynn</p>
                <p className="text-xs text-muted-foreground">Recognized 15 times</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-blue-500 text-white">MI</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm font-medium">McJill Ingan</p>
                <p className="text-xs text-muted-foreground">Birthday on Nov 7</p>
              </div>
            </div>
          </div>
          <Button variant="ghost" className="w-full">
            Explore all this month
          </Button>
        </CardContent>
      </Card>

      {/* Trending Section */}
      <Card className="w-full min-w-[300px]">
        <CardContent className="p-4 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold">Trending</h2>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-blue-500">#companyvalues</span>
              <span className="text-muted-foreground">8 mentions</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-blue-500">#teamwork</span>
              <span className="text-muted-foreground">6 mentions</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-blue-500">#collaboration</span>
              <span className="text-muted-foreground">5 mentions</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-blue-500">#problemsolving</span>
              <span className="text-muted-foreground">3 mentions</span>
            </div>

						<div className="flex justify-between text-sm">
              <span className="text-blue-500">#management</span>
              <span className="text-muted-foreground">2 mentions</span>
            </div>
						<div className="flex justify-between text-sm">
              <span className="text-blue-500">#hardcore</span>
              <span className="text-muted-foreground">2 mentions</span>
            </div>
          </div>
          <Button variant="ghost" className="w-full">
            Show more <ChevronDown className="h-4 w-4 ml-2" />
          </Button>
        </CardContent>
      </Card>

      {/* Most Recognized Section */}
      <Card className="w-full min-w-[300px]">
        <CardContent className="p-4 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold">Most recognized</h2>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-pink-500 text-white">RM</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm font-medium">Rene Manqueros</p>
                <p className="text-xs text-muted-foreground">Recognized 23 times</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-purple-500 text-white">LB</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm font-medium">Leo Barbosa</p>
                <p className="text-xs text-muted-foreground">Recognized 18 times</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-yellow-500 text-white">MF</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm font-medium">Mackenzie Flynn</p>
                <p className="text-xs text-muted-foreground">Recognized 15 times</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-yellow-500 text-white">MF</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm font-medium">Mario Figueroa</p>
                <p className="text-xs text-muted-foreground">Recognized 12 times</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-blue-500 text-white">CT</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm font-medium">Cynthia Tsal</p>
                <p className="text-xs text-muted-foreground">Recognized 12 times</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}