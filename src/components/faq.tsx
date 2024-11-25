import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ() {
  return (
    <section id="faq" className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">{`Foire Aux Questions`}</h2>
        <Accordion type="single" collapsible className="mx-auto w-full max-w-2xl">
          <AccordionItem value="item-1">
            <AccordionTrigger>{`Comment fonctionne Scoot'Ride ?`}</AccordionTrigger>
            <AccordionContent>{`
              Scoot"Ride est un service de location de scooters électriques en libre-service. Vous pouvez louer un scooter via notre application, l"utiliser pour vos déplacements, puis le déposer à n"importe quelle station Scoot"Ride de votre zone.
            `}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>{`Qui peut utiliser Scoot'Ride ?`}</AccordionTrigger>
            <AccordionContent>{`
              Toute personne âgée de 14 ans et plus, titulaire au minimum du Brevet de Sécurité Routière (BSR) peut utiliser nos scooters. Il n"y a pas de limite d"âge supérieure.
            `}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>{`Quels sont les tarifs ?`}</AccordionTrigger>
            <AccordionContent>{`
              Nous proposons différentes formules d"abonnement (mensuel, annuel) ainsi qu"une tarification à l"usage. Les tarifs varient en fonction de la durée d"utilisation et de la formule choisie. Consultez notre application pour plus de détails.
            `}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>{`Les scooters sont-ils assurés ?`}</AccordionTrigger>
            <AccordionContent>{`
              Oui, tous nos scooters sont assurés. L"assurance de base est incluse dans le prix de la location. Des options d"assurance supplémentaires sont disponibles pour une protection accrue.
            `}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>{`Quelle est l'autonomie des scooters ?`}</AccordionTrigger>
            <AccordionContent>{`
              L"autonomie de nos scooters varie entre 50 et 80 km, selon le modèle et les conditions d"utilisation. L"application vous indique toujours l"autonomie restante du scooter que vous utilisez.
            `}</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}

