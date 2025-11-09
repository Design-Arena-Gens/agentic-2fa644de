"use client";

import { ResponsiveContainer, Sankey, Tooltip } from "recharts";

const data = {
  nodes: [
    { name: "Habit Signal" },
    { name: "Context" },
    { name: "Behaviors" },
    { name: "Repetition" },
    { name: "Positive Reinforcement" },
    { name: "Transferable Pattern" }
  ],
  links: [
    { source: 0, target: 1, value: 4 },
    { source: 0, target: 2, value: 4 },
    { source: 2, target: 3, value: 3 },
    { source: 2, target: 4, value: 3 },
    { source: 1, target: 5, value: 2 },
    { source: 3, target: 5, value: 2 },
    { source: 4, target: 5, value: 2 }
  ]
};

export function HabitEquationChart() {
  return (
    <div className="h-[320px] w-full">
      <ResponsiveContainer>
        <Sankey
          data={data}
          nodePadding={30}
          node={{ fill: "#2563eb", stroke: "#0ea5e9", strokeWidth: 1.2 }}
          link={{ stroke: "#38bdf8", strokeOpacity: 0.5 }}
          iterations={32}
        >
          <Tooltip
            cursor={{ stroke: "#f97316", strokeWidth: 2 }}
            contentStyle={{ backgroundColor: "#0f172a", borderRadius: 12, border: "1px solid #38bdf8" }}
          />
        </Sankey>
      </ResponsiveContainer>
    </div>
  );
}
