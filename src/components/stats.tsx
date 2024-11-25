import { BikeIcon, LeafIcon, MapPinIcon, UsersIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Stats() {
  return (
    <section id="stats" className="flex min-h-screen items-center bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">{`Scoot'Ride en Chiffres`}</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard icon={<UsersIcon className="text-primary size-8" />} title={`Utilisateurs`} value={`10,000+`} />
          <StatCard icon={<BikeIcon className="text-primary size-8" />} title={`Scooters`} value={`500+`} />
          <StatCard icon={<MapPinIcon className="text-primary size-8" />} title={`Communes Desservies`} value={`50+`} />
          <StatCard icon={<LeafIcon className="text-primary size-8" />} title={`Tonnes de CO2 Économisées`} value={`1,000+`} />
        </div>
      </div>
    </section>
  );
}

type StatCardProps = {
  icon: React.ReactNode;
  title: string;
  value: string;
};
function StatCard({ icon, title, value }: StatCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
}
