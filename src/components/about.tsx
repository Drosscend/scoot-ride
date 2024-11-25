import { Button } from "@/components/ui/button"

export function About() {
  return (
    <section id="about" className="flex min-h-screen items-center py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="mb-8 md:mb-0 md:w-1/2">
            <img src="/placeholder.svg?height=400&width=600" alt="Scooter électrique Scoot'Ride" className="rounded-lg shadow-md" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="mb-4 text-3xl font-bold text-gray-800">{`À Propos de Scoot'Ride`}</h2>
            <p className="mb-4 text-gray-600">
              {`Scoot'Ride est né de la volonté d'améliorer la mobilité en zone rurale tout en respectant l'environnement. 
              Notre service de location de scooters électriques offre une solution pratique, économique et écologique 
              pour tous vos déplacements.`}
            </p>
            <p className="mb-6 text-gray-600">
              {`Que vous soyez étudiant, actif ou senior, Scoot'Ride s'adapte à vos besoins avec des formules flexibles 
              et une large couverture géographique. Notre mission est de rendre la mobilité durable accessible à tous, 
              tout en contribuant à la réduction des émissions de CO2 dans les zones rurales.`}
            </p>
            <Button>{`Découvrir notre histoire`}</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

