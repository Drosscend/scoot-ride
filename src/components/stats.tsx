"use client";

import { BikeIcon, MapPinIcon, UsersIcon } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Stats() {
  return (
    <section id="stats" className="bg-gradient-to-br from-gray-100 to-gray-200 py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center text-4xl font-bold text-gray-800"
        >
          {`Scoot'Ride en Chiffres`}
        </motion.h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <StatCard icon={<UsersIcon className="text-primary size-8" />} title={`Usagers`} value={23_000} suffix="+" />
          <StatCard icon={<BikeIcon className="text-primary size-8" />} title={`Stations`} value={5} />
          <StatCard icon={<MapPinIcon className="text-primary size-8" />} title={`Communes Desservies`} value={40} suffix="+" />
        </div>
      </div>
    </section>
  );
}

type StatCardProps = {
  icon: React.ReactNode;
  title: string;
  value: number;
  suffix?: string;
};

function StatCard({ icon, title, value, suffix = "" }: StatCardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = Math.ceil(end / (duration / 16));

      const timer = setInterval(() => {
        start += increment;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
      <Card className="text-center transition-transform hover:scale-105">
        <CardHeader className="flex flex-col items-center space-y-0 pb-2">
          {icon}
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">
            {count}
            {suffix}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
