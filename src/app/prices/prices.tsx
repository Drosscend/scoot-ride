"use client";

import { motion } from "framer-motion";
import { AlertTriangleIcon, CalendarIcon, Clock4Icon, ClockIcon, CreditCardIcon, MapPinIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const mainPricingOptions = [
  {
    title: "Pass Journée (24h)",
    price: "15,00 €",
    description: "Parfait pour explorer la ville",
    icon: CalendarIcon,
  },
  {
    title: "Abonnement Mensuel Flex",
    price: "79,99 €",
    description: "Liberté et flexibilité maximales",
    icon: CreditCardIcon,
    highlight: true,
  },
  {
    title: "Abonnement Annuel",
    price: "799,99 €",
    description: "La meilleure valeur pour une utilisation régulière",
    icon: CreditCardIcon,
  },
];

const secondaryPricingOptions = [
  {
    title: "Tarif à la 1/2 H",
    price: "7,50 €",
    description: "Idéal pour les courts trajets",
    icon: ClockIcon,
  },
];

const additionalFees = [
  {
    title: "Caution",
    price: "200,00 €",
    icon: AlertTriangleIcon,
  },
  {
    title: "Immobilisation prolongée",
    price: "10,00 € / heure",
    icon: Clock4Icon,
  },
  {
    title: "Non-retour à une station",
    price: "100,00 €",
    icon: MapPinIcon,
  },
  {
    title: "Dépassement du pass journée",
    price: "11,25 € / 1/2 heure",
    description: "Tarif demi-heure standard +50%",
    icon: ClockIcon,
  },
];

const MotionCard = motion(Card);

export function Prices() {
  return (
    <div className="mx-auto max-w-7xl">
      <motion.h2
        className="mb-16 text-center text-4xl font-extrabold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Nos Tarifs
      </motion.h2>

      <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 lg:gap-16">
        {mainPricingOptions.map((option, index) => (
          <MotionCard
            key={index}
            className="flex h-full flex-col transition-shadow hover:shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl">{option.title}</CardTitle>
                <option.icon className="text-primary size-8" />
              </div>
              <CardDescription className="text-lg">{option.description}</CardDescription>
            </CardHeader>
            <CardContent className="grow">
              <p className="text-primary text-4xl font-bold">{option.price}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full py-6 text-lg" variant={option.highlight ? "default" : "outline"}>
                Choisir
              </Button>
            </CardFooter>
          </MotionCard>
        ))}
      </div>

      <motion.h3
        className="mb-12 mt-24 text-center text-2xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Autres Options
      </motion.h3>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {secondaryPricingOptions.map((option, index) => (
          <MotionCard
            key={index}
            className="flex h-full flex-col"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{option.title}</CardTitle>
                <option.icon className="text-muted-foreground size-5" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{option.price}</p>
              <p className="text-muted-foreground mt-1 text-sm">{option.description}</p>
            </CardContent>
          </MotionCard>
        ))}
      </div>

      <motion.h3
        className="mb-12 mt-24 text-center text-2xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        Frais Additionnels
      </motion.h3>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {additionalFees.map((fee, index) => (
          <MotionCard
            key={index}
            className="flex h-full flex-col"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{fee.title}</CardTitle>
              <fee.icon className="text-muted-foreground size-4" />
            </CardHeader>
            <CardContent>
              <p className="text-xl font-bold">{fee.price}</p>
              {fee.description && <p className="text-muted-foreground mt-1 text-xs">{fee.description}</p>}
            </CardContent>
          </MotionCard>
        ))}
      </div>
    </div>
  );
}
