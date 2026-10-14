export interface InstitutionalValue {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: "BrainCircuit" | "FolderGit2" | "Users" | "Briefcase" | "TrendingUp" | "Layers";
}

/**
 * Recommended Six Pillars defining Why Choose OIAI (Item 12 of master specification)
 * Core differentiators emphasizing hands-on training, internships and flexible formats.
 */
export const INSTITUTIONAL_VALUES: InstitutionalValue[] = [
  {
    id: "ai-first-curriculum",
    number: "01",
    title: "AI-First Curriculum",
    description: "Curriculum designed around current and emerging AI technologies, foundation models, and agentic architectures.",
    iconName: "BrainCircuit",
  },
  {
    id: "hands-on-projects",
    number: "02",
    title: "Hands-On Projects",
    description: "Students build real, production-ready projects and live codebases rather than only studying abstract theory.",
    iconName: "FolderGit2",
  },
  {
    id: "industry-mentorship",
    number: "03",
    title: "Industry Mentorship",
    description: "Learn directly from experienced AI practitioners, senior research scientists, and tech leaders.",
    iconName: "Users",
  },
  {
    id: "internship-opportunities",
    number: "04",
    title: "Internship Opportunities",
    description: "Gain practical commercial exposure through integrated industry internships, client projects, and startup incubators.",
    iconName: "Briefcase",
  },
  {
    id: "career-preparation",
    number: "05",
    title: "Career Preparation",
    description: "Comprehensive career support covering resume reviews, portfolio optimization, GitHub proof-of-work, and mock interviews.",
    iconName: "TrendingUp",
  },
  {
    id: "flexible-learning",
    number: "06",
    title: "Flexible Learning",
    description: "Multi-modal delivery formats including online live cohorts, in-person labs, hybrid bootcamps, and weekend workshops.",
    iconName: "Layers",
  },
];

