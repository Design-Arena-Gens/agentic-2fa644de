"use client";

import { motion } from "framer-motion";

export interface RoadmapItem {
  label: string;
  title: string;
  details: string[];
  impact: string;
}

interface RoadmapProps {
  items: RoadmapItem[];
}

export function Roadmap({ items }: RoadmapProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((item, index) => (
        <motion.div
          key={item.label}
          className="rounded-2xl border border-slate-700/60 bg-slate-900/40 p-6"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: index * 0.05, duration: 0.3 }}
        >
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-sky-400">
              {item.label}
            </span>
            <span className="rounded-full bg-slate-800/70 px-3 py-1 text-xs text-slate-300">
              {item.impact}
            </span>
          </div>
          <h3 className="text-xl font-semibold text-white">{item.title}</h3>
          <ul className="mt-3 space-y-2 text-slate-300">
            {item.details.map((detail) => (
              <li key={detail} className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
