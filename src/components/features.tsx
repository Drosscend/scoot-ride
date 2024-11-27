"use client";

import { ClockIcon, CreditCardIcon, LeafIcon, MapPinIcon, ShieldIcon, ZapIcon } from "lucide-react";
import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Features() {
  const features = [
    {
      icon: <ZapIcon className="text-primary size-12" />,
      title: "Rapide et Pratique",
      description: "Des scooters électriques disponibles 24/7 pour vos déplacements quotidiens.",
    },
    {
      icon: <LeafIcon className="text-primary size-12" />,
      title: "Écologique",
      description: "Réduisez votre empreinte carbone avec nos scooters 100% électriques.",
    },
    {
      icon: <CreditCardIcon className="text-primary size-12" />,
      title: "Économique",
      description: "Des formules d'abonnement flexibles adaptées à vos besoins et votre budget.",
    },
    {
      icon: <MapPinIcon className="text-primary size-12" />,
      title: "Large Couverture",
      description: "Un réseau en expansion constante pour couvrir de plus en plus de zones rurales.",
    },
    {
      icon: <ClockIcon className="text-primary size-12" />,
      title: "Disponibilité 24/7",
      description: "Accédez à nos scooters à tout moment, de jour comme de nuit.",
    },
    {
      icon: <ShieldIcon className="text-primary size-12" />,
      title: "Sécurité Maximale",
      description: "Des scooters régulièrement entretenus et équipés des dernières technologies de sécurité.",
    },
  ];

  return (
    <section id="features" className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center text-4xl font-bold text-gray-800"
        >
          {`Nos Avantages`}
        </motion.h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
};

function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
      <Card className="h-full transition-transform hover:scale-105">
        <CardHeader>
          <CardTitle className="flex items-center text-xl">
            {icon}
            <span className="ml-4">{title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
