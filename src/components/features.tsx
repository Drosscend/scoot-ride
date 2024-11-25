import { Zap, Leaf, CreditCard, MapPin, Clock, Shield } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Features() {
  return (
    <section id="features" className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">Nos Avantages</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<Zap className="text-primary size-12" />}
            title="Rapide et Pratique"
            description="Des scooters électriques disponibles 24/7 pour vos déplacements quotidiens."
          />
          <FeatureCard
            icon={<Leaf className="text-primary size-12" />}
            title="Écologique"
            description="Réduisez votre empreinte carbone avec nos scooters 100% électriques."
          />
          <FeatureCard
            icon={<CreditCard className="text-primary size-12" />}
            title="Économique"
            description="Des formules d'abonnement flexibles adaptées à vos besoins et votre budget."
          />
          <FeatureCard
            icon={<MapPin className="text-primary size-12" />}
            title="Large Couverture"
            description="Un réseau en expansion constante pour couvrir de plus en plus de zones rurales."
          />
          <FeatureCard
            icon={<Clock className="text-primary size-12" />}
            title="Disponibilité 24/7"
            description="Accédez à nos scooters à tout moment, de jour comme de nuit."
          />
          <FeatureCard
            icon={<Shield className="text-primary size-12" />}
            title="Sécurité Maximale"
            description="Des scooters régulièrement entretenus et équipés des dernières technologies de sécurité."
          />
        </div>
      </div>
    </section>
  )
}

type FeatureCardProps = {
  icon: React.ReactNode
  title: string
  description: string
}
function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          {icon}
          <span className="ml-4">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}

