export interface MetricItem {
  id: string;
  metric: string;
  label: string;
  supportingText: string;
  isPlaceholder: boolean;
}

/**
 * Metric indicators for OIAI.
 * NOTE: Values marked with isPlaceholder: true represent structural curriculum
 * targets and proposed operational benchmarks, not audited historical figures.
 */
export const INSTITUTE_METRICS: MetricItem[] = [
  {
    id: "learning-tracks",
    metric: "12",
    label: "Curriculum Tracks",
    supportingText: "From foundational Python & math to autonomous multi-agent engineering",
    isPlaceholder: false,
  },
  {
    id: "progression-stages",
    metric: "6",
    label: "Pedagogical Stages",
    supportingText: "Systematic progression from problem discovery to production deployment",
    isPlaceholder: false,
  },
  {
    id: "training-formats",
    metric: "2",
    label: "Delivery Formats",
    supportingText: "Interactive weekend cohorts for students and intensive corporate training",
    isPlaceholder: false,
  },
  {
    id: "practical-projects",
    metric: "24+",
    label: "Proposed Capstones",
    supportingText: "Hands-on engineering challenges across LLMs, vision, and data pipelines [Target]",
    isPlaceholder: true,
  },
  {
    id: "industry-focus",
    metric: "100%",
    label: "Code-First Focus",
    supportingText: "Curriculum designed around production repositories and verifiable code",
    isPlaceholder: false,
  },
  {
    id: "learner-outcomes",
    metric: "1:1",
    label: "Mentor Guidance",
    supportingText: "Direct architectural code review checkpoints throughout all flagship modules",
    isPlaceholder: false,
  },
];
