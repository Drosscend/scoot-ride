"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="from-primary to-primary-dark flex min-h-screen items-center overflow-hidden bg-gradient-to-br text-white">
      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 text-4xl font-bold md:text-6xl"
        >
          {`La mobilité Durable en Zone Rurale`}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mb-8 max-w-2xl text-xl"
        >
          {`Découvrez une nouvelle façon de vous déplacer avec Scoot'Ride. Nos scooters électriques offrent une solution écologique, économique et pratique pour tous vos trajets.`}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
          <Button size="lg" variant="secondary" className="group">
            {`En savoir plus`}
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
      <motion.div className="absolute inset-0 z-0" initial={{ opacity: 0 }} animate={{ opacity: 0.1 }} transition={{ duration: 1 }}>
        <div className="absolute inset-0 bg-[url('/scooter-pattern.svg')] bg-repeat opacity-10"></div>
      </motion.div>
    </section>
  );
}
