import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function Rewards() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="mb-8 text-center text-3xl font-bold">{`Programme de fidélité`}</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>{`Éco - Rider`}</CardTitle>
              <CardDescription>{`Réduisez votre empreinte carbone`}</CardDescription>
            </CardHeader>
            <CardContent>
              <Badge className="mb-2">{`Niveau Bronze`}</Badge>
              <Progress value={30} className="mb-2" />
              <p>{`30 / 100 km parcourus`}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{`Super Scooter`}</CardTitle>
              <CardDescription>{`Utilisez régulièrement nos scooters`}</CardDescription>
            </CardHeader>
            <CardContent>
              <Badge className="mb-2">{`Niveau Argent`}</Badge>
              <Progress value={60} className="mb-2" />
              <p>{`18 / 30 jours d'utilisation`}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{`Ambassadeur Rural`}</CardTitle>
              <CardDescription>{`Parrainez de nouveaux utilisateurs`}</CardDescription>
            </CardHeader>
            <CardContent>
              <Badge className="mb-2">{`Niveau Or`}</Badge>
              <Progress value={80} className="mb-2" />
              <p>{`8 / 10 parrainages`}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
