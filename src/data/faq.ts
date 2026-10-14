export interface FaqQuestion {
  id: string;
  question: string;
  answer: string;
}

/**
 * Six core FAQ items addressing admissions, prerequisites, corporate programs, and logistics.
 * Zero unverified claims, guaranteed placements, or fabricated affiliations.
 */
export const FAQ_QUESTIONS: FaqQuestion[] = [
  {
    id: "who-can-enrol",
    question: "Who can enrol in OIAI programs?",
    answer: "OIAI programs are designed for university students, graduates, working software engineers, data professionals, and corporate teams seeking structured AI training. Each track lists explicit prerequisite recommendations so learners can identify the appropriate starting point for their background.",
  },
  {
    id: "programming-experience",
    question: "Do I need prior programming experience?",
    answer: "Foundational tracks like 'Python for AI' and 'AI Foundations' are designed for participants with minimal coding background. Intermediate and advanced tracks (such as 'Deep Learning' and 'AI Agents and Automation') require familiarity with Python programming and basic linear algebra.",
  },
  {
    id: "corporate-teams",
    question: "Are there programs for corporate teams?",
    answer: "Yes. OIAI provides targeted corporate training formats covering executive AI strategy, secure generative AI workflows, custom agent architectures, and responsible AI governance. Corporate programs are customized to team technical maturity and operational requirements.",
  },
  {
    id: "projects-assessments",
    question: "How are projects and assessments conducted?",
    answer: "Learning at OIAI is milestone-driven and project-centric. Rather than standard multiple-choice tests, learners are evaluated through functional coding assignments, code reviews of GitHub pull requests, diagnostic error analyses, and capstone project demonstrations.",
  },
  {
    id: "tools-used",
    question: "What tools are used during training?",
    answer: "Learners work with industry-standard open-source ecosystems including Python 3.12, PyTorch, Hugging Face Transformers, NumPy, Pandas, Scikit-Learn, LangGraph, DuckDB, and cloud-hosted JupyterLab computing environments.",
  },
  {
    id: "how-to-contact",
    question: "How can I contact OIAI?",
    answer: "You can reach out via the contact section on this website, email our academic advisory desk at admissions@oiai.edu.in, or submit an inquiry using our program inquiry form. Our team will assist with track selection and cohort schedules.",
  },
];
