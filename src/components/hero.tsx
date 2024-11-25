import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="bg-primary py-20 text-white">
      <div className="container mx-auto px-6 text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">{`Mobilité Durable en Zone Rurale`}</h1>
        <p className="mx-auto mb-8 max-w-2xl text-xl">{`Découvrez une nouvelle façon de vous déplacer avec Scoot'Ride. Nos scooters électriques offrent une solution écologique, économique et pratique pour tous vos trajets.`}</p>
        <Button size="lg" variant="secondary">{`
          En savoir plus
        `}</Button>
      </div>
    </section>
  )
}
