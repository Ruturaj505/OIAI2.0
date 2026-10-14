export interface PedagogicalPillar {
  id: string;
  title: string;
  description: string;
  iconName: "FolderGit2" | "BrainCircuit" | "Terminal" | "ShieldCheck" | "Users" | "TrendingUp";
}

export const PEDAGOGICAL_PILLARS: PedagogicalPillar[] = [
  {
    id: "project-based-learning",
    title: "Project-Based Learning",
    description: "Build working systems rather than watching slides. Every concept is tested by implementing and debugging working code.",
    iconName: "FolderGit2",
  },
  {
    id: "ai-first-thinking",
    title: "AI-First Thinking",
    description: "Learn how modern foundation models reason, how attention mechanisms operate, and how to formulate problems computationally.",
    iconName: "BrainCircuit",
  },
  {
    id: "hands-on-experimentation",
    title: "Hands-On Experimentation",
    description: "Train models, measure loss surfaces, tune hyperparameters, and explore edge cases directly inside interactive coding sandboxes.",
    iconName: "Terminal",
  },
  {
    id: "responsible-ai",
    title: "Responsible AI",
    description: "Examine algorithmic bias, safety guardrails, hallucination mitigation, data privacy, and ethical AI governance standards.",
    iconName: "ShieldCheck",
  },
  {
    id: "collaborative-learning",
    title: "Collaborative Learning",
    description: "Review peer pull requests, participate in group architecture discussions, and collaborate in team-based sprint challenges.",
    iconName: "Users",
  },
  {
    id: "continuous-skill-development",
    title: "Continuous Skill Development",
    description: "Build a lasting technical foundation that lets you understand emerging research papers as state-of-the-art architectures evolve.",
    iconName: "TrendingUp",
  },
];
