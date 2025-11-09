"use client";

import { HabitEquationChart } from "@/components/habit-equation-chart";
import { Roadmap } from "@/components/roadmap";
import { SectionCard } from "@/components/section-card";
import { milestones, pipelineStages, techStack } from "@/lib/data";
import { motion } from "framer-motion";

const quickWins = [
  {
    title: "Contextual Habit Encoding",
    items: [
      "Represent LDOS-CoMoDa records as (context → behavior → reward) triples.",
      "Fit contrastive autoencoder to get dense context embeddings while retaining symbolic predicates.",
      "Bind embeddings back into ontology nodes for neuro-symbolic alignment."
    ]
  },
  {
    title: "Transfer Evaluation Loop",
    items: [
      "Split validation by withholding whole context slices (e.g., mood + companion).",
      "Score how learned habits activate in unseen contexts via compositional chaining.",
      "Log divergence to automatically suggest additional symbolic constraints."
    ]
  },
  {
    title: "Explainable Narratives",
    items: [
      "Trace rule activations at inference time to produce habit-based explanations.",
      "Summarize reinforcement history to justify cross-context recommendations.",
      "Highlight counterfactual contexts that would suppress the habit."
    ]
  }
];

const evaluationMetrics = [
  { name: "RMSE", focus: "Rating accuracy", baseline: "Contextual MF", target: "< -5%" },
  { name: "NDCG@10", focus: "Top-N ranking", baseline: "LightFM", target: "+7%" },
  { name: "Habit Transfer Score", focus: "Cross-context reliability", baseline: "N/A", target: ">0.72" },
  { name: "Narrative Fidelity", focus: "Explanation alignment", baseline: "Manual eval", target: ">85%" }
];

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-slate-950 pb-24 text-slate-100">
      <div className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_600px_at_50%_-20%,rgba(56,189,248,0.3),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6 pt-24">
        <motion.header
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 inline-flex rounded-full border border-sky-500/50 bg-sky-950/30 px-4 py-1 text-xs uppercase tracking-[0.3em] text-sky-300">
            Neuro-Symbolic CARS Blueprint
          </p>
          <h1 className="mx-auto max-w-3xl text-balance text-5xl font-semibold leading-tight text-white">
            Compositional Habit Modeling for Context-Aware Recommendations
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            Leverage the habit equation — <span className="font-medium text-sky-300">Habits = Context · Behaviors (Repetition + Positive Reinforcement)</span> — to construct a neuro-symbolic pipeline that carries consumer behavior across contexts using LDOS-CoMoDa.
          </p>
        </motion.header>

        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <SectionCard
            subtitle="Habit Equation"
            title="Operationalizing Contextual Habits"
            description="Decompose habits into reusable symbolic rules and differentiable embeddings that generalize across contextual slices."
          >
            <div className="mt-6 rounded-2xl border border-sky-500/30 bg-slate-900/50 p-6">
              <HabitEquationChart />
              <ul className="mt-6 grid gap-3 text-sm text-slate-300 md:grid-cols-2">
                <li className="rounded-xl border border-slate-700/50 bg-slate-900/60 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-sky-400">Context Weights</p>
                  <p className="mt-2 text-slate-100">
                    Encode situational factors (time, companion, location) as both symbolic predicates and dense vectors for dual reasoning.
                  </p>
                </li>
                <li className="rounded-xl border border-slate-700/50 bg-slate-900/60 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-amber-400">Repetition & Reinforcement</p>
                  <p className="mt-2 text-slate-100">
                    Aggregate frequency and reward trajectories to parameterize rule confidence and discount negative feedback.
                  </p>
                </li>
                <li className="rounded-xl border border-slate-700/50 bg-slate-900/60 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-emerald-400">Composable Rules</p>
                  <p className="mt-2 text-slate-100">
                    Translate habit atoms into differentiable logic clauses enabling multi-hop reasoning within unseen contexts.
                  </p>
                </li>
                <li className="rounded-xl border border-slate-700/50 bg-slate-900/60 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-fuchsia-400">Transfer Scoring</p>
                  <p className="mt-2 text-slate-100">
                    Measure habit activation strength when contexts shift, optimizing for stability and adaptability.
                  </p>
                </li>
              </ul>
            </div>
          </SectionCard>

          <SectionCard
            subtitle="Launch Checklist"
            title="Minimum Viable Pipeline"
            description="Implement the fastest route to validate compositional generalization before scaling complexity."
          >
            <div className="space-y-6">
              {quickWins.map((block) => (
                <div key={block.title} className="rounded-2xl border border-slate-700/60 bg-slate-900/40 p-5">
                  <h3 className="text-lg font-semibold text-white">{block.title}</h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-300">
                    {block.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <SectionCard
            subtitle="Pipeline"
            title="Four-Stage Neuro-Symbolic Flow"
            description="Follow these stages to operationalize habit-driven contextual recommendations with measurable transfer."
          >
            <div className="space-y-6">
              {pipelineStages.map((stage) => (
                <div key={stage.title} className="rounded-2xl border border-slate-700/60 bg-slate-900/40 p-6">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-white">{stage.title}</h3>
                    <span className="rounded-full bg-slate-800/70 px-3 py-1 text-xs text-slate-300">
                      Outputs: {stage.outputs.length}
                    </span>
                  </div>
                  <p className="text-sm text-slate-300">{stage.summary}</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-300">
                    {stage.steps.map((step) => (
                      <li key={step} className="flex gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs uppercase tracking-[0.2em] text-slate-500">
                    {stage.outputs.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard
            subtitle="Stack"
            title="Tooling Blueprint"
            description="Pair symbolic knowledge graphs with differentiable models for fast iteration and credible explanations."
          >
            <div className="space-y-5 text-sm text-slate-300">
              {techStack.map((stack) => (
                <div key={stack.name} className="rounded-2xl border border-slate-700/60 bg-slate-900/40 p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-sky-400">{stack.name}</p>
                  <p className="mt-2 text-base font-semibold text-white">{stack.tools.join(" · ")}</p>
                  <p className="mt-2 text-slate-300">{stack.rationale}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-slate-700/60 bg-slate-900/40 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-400">Ops Pipeline</p>
              <ul className="mt-3 space-y-2">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                  <span>Airflow orchestrates ETL + habit mining nightly with data drift alarms.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                  <span>MLflow tracks neuro-symbolic experiments, rulesets, and evaluation artifacts.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                  <span>Grafana dashboards monitor transfer metrics, reinforcement trends, and cold-start coverage.</span>
                </li>
              </ul>
            </div>
          </SectionCard>
        </div>

        <SectionCard
          subtitle="Evaluation"
          title="Compositional Generalization Scorecard"
          description="Balance standard recommendation metrics with habit-transfer diagnostics to evidence human-like adaptation."
        >
          <div className="grid gap-6 md:grid-cols-2">
            {evaluationMetrics.map((metric) => (
              <div key={metric.name} className="rounded-2xl border border-slate-700/60 bg-slate-900/40 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-sky-400">{metric.name}</p>
                <p className="mt-2 text-lg font-semibold text-white">{metric.focus}</p>
                <p className="mt-3 text-sm text-slate-300">
                  Baseline: <span className="text-slate-100">{metric.baseline}</span>
                </p>
                <p className="text-sm text-slate-300">
                  Target: <span className="text-slate-100">{metric.target}</span>
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-slate-700/60 bg-slate-900/40 p-6 text-sm text-slate-300">
            <p className="text-xs uppercase tracking-[0.3em] text-fuchsia-400">Stress Tests</p>
            <ul className="mt-3 space-y-2">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-fuchsia-400" />
                <span>Perform meta-learning episode where contexts are randomly permuted to test rapid adaptation.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-fuchsia-400" />
                <span>Apply counterfactual reasoning (remove reinforcement) to see habit decay impact on predictions.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-fuchsia-400" />
                <span>Track fairness metrics across demographic proxies to ensure transfer does not induce bias.</span>
              </li>
            </ul>
          </div>
        </SectionCard>

        <SectionCard
          subtitle="Timeline"
          title="Execution Roadmap"
          description="Iterate from research prototype toward deployable CARS while maintaining neuro-symbolic rigor."
        >
          <Roadmap items={milestones} />
        </SectionCard>

        <SectionCard
          subtitle="Deliverables"
          title="Artifacts to Produce"
          description="Keep outputs publication-ready and deployable with empirical evidence of compositional transfer."
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-700/60 bg-slate-900/40 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-amber-400">Research Package</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                  <span>Technical report detailing habit ontology, rule induction, and integration with neural modules.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                  <span>Notebook suite for LDOS-CoMoDa preprocessing, pattern mining, and evaluation scripts.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                  <span>Comparative study against contextual MF, GRU4Rec, and rule-only baselines.</span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-700/60 bg-slate-900/40 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-400">Engineering Assets</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                  <span>Containerized training pipeline with feature store snapshots and MLflow tracking.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                  <span>RESTful inference service serving recommendations and explanations with latency budget &lt;100ms.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                  <span>Interactive dashboard summarizing transfer metrics and habit activation narratives.</span>
                </li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <footer className="mt-12 rounded-3xl border border-slate-700/60 bg-slate-900/40 p-8 text-center text-sm text-slate-400">
          <p>
            Build quickly: start with symbolic habit mining, plug into differentiable logic, validate transfer, then ship a
            contextual recommender that mirrors human-like compositional generalization.
          </p>
        </footer>
      </div>
    </main>
  );
}
