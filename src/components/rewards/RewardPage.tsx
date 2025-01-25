import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ChevronDown, Search } from 'lucide-react';
import Viza from '../../assets/web/viza.webp';
import Shopall from './Shopall'
import Donation from './Donation'

export default function RewardPage() {
  const [activeTab, setActiveTab] = useState("featured");

  const getTabContent = () => {
    switch (activeTab) {
      case "featured":
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold">Featured</h2>
              <span className="text-sm text-muted-foreground">1 item</span>
            </div>

            <Card className="w-[300px]">
              <CardContent className="p-4 space-y-4">
                <img
                  src={Viza}
                  alt="Virtual Visa Card"
                  className="rounded-lg w-full h-[180px] object-cover bg-gray-100"
                />
                <div>
                  <div className="text-sm text-blue-600">For you</div>
                  <h3 className="font-medium">Virtual Visa</h3>
                </div>
              </CardContent>
            </Card>

            <p className="text-sm text-muted-foreground max-w-2xl">
              The merchants represented are not sponsors of the rewards or otherwise affiliated with Bonusly.
              The logos and other identifying marks attached are trademarks of and owned by each represented
              company and/or its affiliates. Please visit each company's website for additional terms and conditions.
            </p>
          </div>
        );
      case "shopAll":
        return <Shopall/>;
      case "donations":
        return <Donation/>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6">
        {/* Left Sidebar (Tabs) */}
        <div className="space-y-6">
          {/* Reward Balance Card */}
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <h2 className="font-medium">Reward balance</h2>
                <div className="flex items-start justify-between">
                  <ShoppingCart className="h-6 w-6 text-emerald-600" />
                  <div className="text-right">
                    <div className="text-4xl font-bold">277</div>
                    <div className="text-sm text-muted-foreground">points</div>
                  </div>
                </div>
                <button className="block text-blue-600 hover:underline text-sm">
                  Visit rewards history
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search rewards" className="pl-9" />
          </div>

          {/* Categories (Tabs) */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-medium">Categories</h2>
              <ChevronDown className="h-4 w-4" />
            </div>
            <nav className="space-y-2">
              <Button
                variant={activeTab === "featured" ? "default" : "ghost"}
                className="w-full justify-start font-medium"
                onClick={() => setActiveTab("featured")}
              >
                Featured
              </Button>
              <Button
                variant={activeTab === "shopAll" ? "default" : "ghost"}
                className="w-full justify-start text-muted-foreground"
                onClick={() => setActiveTab("shopAll")}
              >
                Shop all
              </Button>
              <Button
                variant={activeTab === "donations" ? "default" : "ghost"}
                className="w-full justify-start text-muted-foreground"
                onClick={() => setActiveTab("donations")}
              >
                Donations
              </Button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">{getTabContent()}</div>
      </div>
    </div>
  );
}
