import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Candy, CandyCane, Skull, Coins } from "lucide-react"
import PumpkincoinLogo from "@/components/pumpkincoin-logo"
import { Button } from "@/components/ui/button"
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-900 to-black text-orange-100">
      <header className="container mx-auto py-6 px-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <PumpkincoinLogo className="h-8 w-8" />
            <span className="text-2xl font-bold text-orange-500">Pumpkincoin</span>
          </div>
          <div className="space-x-4">
            <Button variant="ghost" className="text-orange-300 hover:text-orange-100 hover:bg-orange-800">About</Button>
            <Button variant="ghost" className="text-orange-300 hover:text-orange-100 hover:bg-orange-800">Features</Button>
            <Button variant="ghost" className="text-orange-300 hover:text-orange-100 hover:bg-orange-800">Contact</Button>
          </div>
        </nav>
      </header>

      <main>
        <section className="container mx-auto py-20 px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-orange-500">
            Trick or Trade with Pumpkincoin
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            The spookiest cryptocurrency this side of the graveyard. Join the Halloween revolution!
          </p>
          <Button className="bg-orange-500 hover:bg-orange-600 text-black text-lg py-6 px-8">
            Get Your Pumpkincoin
          </Button>
        </section>

        <section className="container mx-auto py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-orange-400">
            Why Choose Pumpkincoin?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Coins className="h-12 w-12 text-orange-500" />}
              title="Ghostly Fast Transactions"
              description="Lightning-quick transfers that'll make your head spin!"
            />
            <FeatureCard
              icon={<Skull className="h-12 w-12 text-orange-500" />}
              title="Bone-Chilling Security"
              description="Your assets are locked up tighter than a mummy's tomb."
            />
            <FeatureCard
              icon={<Candy className="h-12 w-12 text-orange-500" />}
              title="Sweet Rewards"
              description="Earn delicious interest on your Pumpkincoin holdings."
            />
            <FeatureCard
              icon={<CandyCane className="h-12 w-12 text-orange-500" />}
              title="Seasonal Surprises"
              description="Special Halloween events and bonuses every year!"
            />
          </div>
        </section>
      </main>

      <footer className="bg-orange-900 py-8 mt-20">
        <div className="container mx-auto px-4 text-center text-orange-300">
          <p>&copy; 2024 Pumpkincoin. All rights reserved. Beware of ghost transactions!</p>
        </div>
      </footer>
    </div>
  )
}
interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}
function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="bg-orange-800 border-orange-600">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          {icon}
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-orange-200">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}
