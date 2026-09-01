"use client";

import { motion } from "framer-motion";
import { INDUSTRIES_DATA } from "@/lib/constants";

export default function Industries() {
  return (
    <section className="py-16 border-y border-border bg-background">
      <div className="container mx-auto px-6">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-10">
          Experiencia Multisectorial
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {INDUSTRIES_DATA.map((industry, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-xl md:text-2xl font-semibold grayscale hover:grayscale-0 transition-all cursor-default"
            >
              {industry}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}