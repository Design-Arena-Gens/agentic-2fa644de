"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionCardProps {
  title: string;
  subtitle?: string;
  description?: string;
  children?: ReactNode;
}

export function SectionCard({ title, subtitle, description, children }: SectionCardProps) {
  return (
    <motion.section
      className="gradient-border glass relative overflow-hidden rounded-3xl p-8"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="mb-4">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{subtitle}</p>
        <h2 className="text-3xl font-semibold text-white">{title}</h2>
      </div>
      {description && <p className="mb-6 text-slate-300">{description}</p>}
      {children}
    </motion.section>
  );
}
