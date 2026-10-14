export interface MethodologyStage {
  step: string;
  number: number;
  name: string;
  tagline: string;
  description: string;
  keyAction: string;
  deliverable: string;
}

/**
 * Six-stage learning progression timeline.
 * Emphasizes computational problem-solving and software sandbox experimentation.
 */
export const METHODOLOGY_STAGES: MethodologyStage[] = [
  {
    step: "Stage 01",
    number: 1,
    name: "Discover",
    tagline: "Identify the Problem",
    description: "Analyze a real-world computational or domain challenge. Formulate formal input-output specifications and assess feasibility.",
    keyAction: "Problem Formulation & Scope Definition",
    deliverable: "Technical Problem Brief & Evaluation Criteria",
  },
  {
    step: "Stage 02",
    number: 2,
    name: "Learn",
    tagline: "Understand the Fundamentals",
    description: "Deep dive into the underlying mathematical theory, loss functions, algorithms, and architectural tradeoffs.",
    keyAction: "Algorithmic & Theoretical Foundations",
    deliverable: "Mathematical Schema & Model Architecture Choice",
  },
  {
    step: "Stage 03",
    number: 3,
    name: "Experiment",
    tagline: "Test in a Controlled Sandbox",
    description: "Validate baseline hypotheses in Jupyter notebooks and virtual software sandboxes. Test data distributions and sanity checks.",
    keyAction: "Sandbox Prototyping & Baseline Benchmarking",
    deliverable: "Baseline Jupyter Notebook & Sanity Run Logs",
  },
  {
    step: "Stage 04",
    number: 4,
    name: "Build",
    tagline: "Develop a Working Model",
    description: "Write clean, modular code implementing the neural model or agent pipeline. Implement preprocessing, training loops, and validation splits.",
    keyAction: "Model Implementation & Pipeline Construction",
    deliverable: "Production Git Repository with Clean PR Commits",
  },
  {
    step: "Stage 05",
    number: 5,
    name: "Evaluate",
    tagline: "Measure Quality, Limits & Risks",
    description: "Rigorously audit accuracy, error modes, inference latency, memory footprint, edge-case behavior, and safety concerns.",
    keyAction: "Comprehensive Diagnostic Auditing",
    deliverable: "Benchmark Evaluation Report & Error Analysis",
  },
  {
    step: "Stage 06",
    number: 6,
    name: "Deploy",
    tagline: "Present or Deploy Usable Solution",
    description: "Package the pipeline into an API endpoint, interactive web interface, or technical research summary for peer defense.",
    keyAction: "Serving, Packaging & Final Presentation",
    deliverable: "Demonstrable Prototype & Technical Capstone Defense",
  },
];
