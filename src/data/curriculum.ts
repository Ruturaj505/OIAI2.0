export type AudienceCategory = "Students" | "Corporate";
export type SkillLevel = "Beginner" | "Intermediate" | "Advanced";

export interface ProgramTrack {
  id: string;
  number: number;
  title: string;
  description: string;
  audiences: AudienceCategory[];
  level: SkillLevel;
  duration: string; // marked as proposed/placeholder
  keyOutcome: string;
  syllabusHighlights: string[];
  techTags: string[];
}

/**
 * Proposed Curriculum Catalog (12 Official Catalog Entries)
 * Durations and formats represent proposed academic roadmaps.
 */
export const CURRICULUM_TRACKS: ProgramTrack[] = [
  {
    id: "ai-foundations",
    number: 1,
    title: "AI Foundations",
    description: "Core principles of artificial intelligence, search algorithms, logic programming, and cognitive computing concepts.",
    audiences: ["Students", "Corporate"],
    level: "Beginner",
    duration: "Estimated 8–10 Weeks",
    keyOutcome: "Understand symbolic AI, heuristic search, state spaces, and the mathematical intuitions behind machine cognition.",
    syllabusHighlights: [
      "Introduction to State Space & Problem Formulation",
      "Heuristic Search: A*, Minimax & Constraint Satisfaction",
      "Probability, Bayesian Reasoning & Decision Theory",
      "Historical Evolution & Current Frontiers of AI"
    ],
    techTags: ["Search Algorithms", "Probability", "Logic", "State Spaces"],
  },
  {
    id: "generative-ai",
    number: 2,
    title: "Generative AI",
    description: "Deep dive into Large Language Models, transformer architectures, diffusion mechanisms, and retrieval-augmented generation.",
    audiences: ["Students", "Corporate"],
    level: "Advanced",
    duration: "Estimated 12–14 Weeks",
    keyOutcome: "Build, evaluate, and deploy production-ready Retrieval-Augmented Generation (RAG) and fine-tuned open-weights models.",
    syllabusHighlights: [
      "Transformer Mechanics: Self-Attention & Multi-Head Projections",
      "RAG Architecture: Chunking, Embeddings & Vector Search",
      "Parameter-Efficient Fine-Tuning (LoRA / QLoRA)",
      "Evaluation Metrics: Perplexity, BLEU, ROUGE & LLM-as-a-Judge"
    ],
    techTags: ["Transformers", "RAG", "LoRA", "Embeddings", "PyTorch"],
  },
  {
    id: "prompt-engineering",
    number: 3,
    title: "Prompt Engineering",
    description: "Structured prompt design, reasoning paradigms (Chain-of-Thought, ReAct), and systematic evaluation of model prompts.",
    audiences: ["Students", "Corporate"],
    level: "Beginner",
    duration: "Estimated 4–6 Weeks",
    keyOutcome: "Construct robust, production-grade prompt templates with deterministic schema outputs and reduced hallucination rates.",
    syllabusHighlights: [
      "System Instructions & Context Window Management",
      "Few-Shot In-Context Learning & Output Structuring",
      "Reasoning Patterns: Chain-of-Thought, Tree-of-Thoughts & ReAct",
      "Defenses against Prompt Injection & Jailbreaking"
    ],
    techTags: ["Prompt Design", "JSON Schema", "Reasoning Chains", "Security"],
  },
  {
    id: "python-for-ai",
    number: 4,
    title: "Python for AI",
    description: "Modern Python programming tailored for machine learning, tensor manipulation, and high-performance numerical computing.",
    audiences: ["Students"],
    level: "Beginner",
    duration: "Estimated 6–8 Weeks",
    keyOutcome: "Write clean, modular, and vectorized Python code using NumPy, Pandas, and foundational scientific packages.",
    syllabusHighlights: [
      "Python 3.12 Fundamentals, Data Structures & Typing",
      "Vectorized Computing & Array Operations with NumPy",
      "Data Ingestion, Cleaning & Transformation with Pandas",
      "Object-Oriented Design & Clean Testing for Machine Learning"
    ],
    techTags: ["Python 3.12", "NumPy", "Pandas", "Vectorization"],
  },
  {
    id: "machine-learning",
    number: 5,
    title: "Machine Learning",
    description: "Supervised and unsupervised learning algorithms, regularized linear models, tree ensembles, and cross-validation methodology.",
    audiences: ["Students", "Corporate"],
    level: "Intermediate",
    duration: "Estimated 10–12 Weeks",
    keyOutcome: "Implement regression, classification, and clustering models with rigorous hyperparameter tuning and model interpretation.",
    syllabusHighlights: [
      "Loss Functions, Gradient Descent & Optimization Mechanics",
      "Tree Ensembles: Random Forests, Gradient Boosting & XGBoost",
      "Dimensionality Reduction: PCA, t-SNE & Feature Engineering",
      "Cross-Validation, Bias-Variance Tradeoff & Evaluation Metrics"
    ],
    techTags: ["Scikit-Learn", "XGBoost", "Optimization", "Feature Engineering"],
  },
  {
    id: "deep-learning",
    number: 6,
    title: "Deep Learning",
    description: "Artificial neural networks from first principles, backpropagation calculus, optimization techniques, and tensor workflows.",
    audiences: ["Students"],
    level: "Intermediate",
    duration: "Estimated 10–12 Weeks",
    keyOutcome: "Train multi-layer perceptrons, convolutional networks, and recurrent models from scratch using PyTorch.",
    syllabusHighlights: [
      "Computational Graphs & Automatic Differentiation in PyTorch",
      "Activation Functions, Normalization (BatchNorm, LayerNorm) & Dropout",
      "Adaptive Optimizers: Adam, AdamW, Learning Rate Schedulers",
      "Convolutional Networks & Sequence Processing Foundations"
    ],
    techTags: ["PyTorch", "Backpropagation", "Neural Nets", "AdamW"],
  },
  {
    id: "data-science",
    number: 7,
    title: "Data Science",
    description: "Exploratory data analysis, statistical inference, hypothesis testing, relational modeling, and visual communication.",
    audiences: ["Students", "Corporate"],
    level: "Intermediate",
    duration: "Estimated 8–10 Weeks",
    keyOutcome: "Transform raw, unstructured datasets into reproducible analytical pipelines and actionable data-driven insights.",
    syllabusHighlights: [
      "Exploratory Analysis, Distribution Fitting & Anomaly Detection",
      "Inferential Statistics, A/B Testing & Hypothesis Validation",
      "Relational SQL & High-Throughput Analytics with DuckDB",
      "Interactive Visualization & Narrative Dashboarding"
    ],
    techTags: ["Statistics", "SQL", "DuckDB", "EDA", "Visualization"],
  },
  {
    id: "computer-vision",
    number: 8,
    title: "Computer Vision",
    description: "Digital image processing, convolutional architectures, object detection, semantic segmentation, and vision transformers.",
    audiences: ["Students"],
    level: "Advanced",
    duration: "Estimated 10–12 Weeks",
    keyOutcome: "Build real-time object detection and image segmentation pipelines suitable for edge deployment.",
    syllabusHighlights: [
      "Image Filtering, Color Spaces & Spatial Transformations with OpenCV",
      "Convolutional Backbones: ResNet, EfficientNet & Feature Pyramids",
      "Object Detection: YOLO Architectures & Bounding Box Loss",
      "Vision Transformers (ViT) & Multimodal Visual Embeddings"
    ],
    techTags: ["OpenCV", "YOLO", "ViT", "Segmentation", "PyTorch"],
  },
  {
    id: "natural-language-processing",
    number: 9,
    title: "Natural Language Processing",
    description: "Text normalization, tokenization, word embeddings, sequence-to-sequence modeling, and modern encoder-decoder models.",
    audiences: ["Students"],
    level: "Intermediate",
    duration: "Estimated 10–12 Weeks",
    keyOutcome: "Process unstructured human text, extract semantic entities, and train domain-specific classification and search pipelines.",
    syllabusHighlights: [
      "Subword Tokenization (BPE, WordPiece) & Vocabulary Building",
      "Dense Embeddings: Word2Vec to BERT Encoders",
      "Sequence Tagging, Named Entity Recognition & Sentiment Analysis",
      "Hugging Face Transformers Hub Integration & Pipeline Construction"
    ],
    techTags: ["Hugging Face", "Tokenization", "BERT", "NLP", "PyTorch"],
  },
  {
    id: "ai-agents-and-automation",
    number: 10,
    title: "AI Agents and Automation",
    description: "Autonomous reasoning loops, external tool calling, memory management, and multi-agent coordination frameworks.",
    audiences: ["Students", "Corporate"],
    level: "Advanced",
    duration: "Estimated 8–10 Weeks",
    keyOutcome: "Engineer autonomous agents capable of task decomposition, web navigation, API integration, and self-correction.",
    syllabusHighlights: [
      "ReAct Pattern & Dynamic Function Calling Protocols",
      "Stateful Orchestration with LangGraph & CrewAI",
      "Short-Term vs. Long-Term Vector Memory Persistence",
      "Guardrails, Loop Prevention & Human-in-the-Loop Safeguards"
    ],
    techTags: ["AI Agents", "LangGraph", "Tool Calling", "CrewAI", "APIs"],
  },
  {
    id: "responsible-ai-and-safety",
    number: 11,
    title: "Responsible AI and AI Safety",
    description: "Fairness audits, explainability techniques, privacy-preserving machine learning, and institutional risk governance.",
    audiences: ["Corporate", "Students"],
    level: "Intermediate",
    duration: "Estimated 6–8 Weeks",
    keyOutcome: "Conduct ethical risk audits, interpret black-box model decisions, and implement safety guardrails for deployed AI.",
    syllabusHighlights: [
      "Algorithmic Fairness Metrics: Demographic Parity & Equalized Odds",
      "Model Explainability with SHAP & LIME Interpretability",
      "Differential Privacy & Secure Model Inference Protocols",
      "Emerging AI Regulatory Frameworks & Compliance Readiness"
    ],
    techTags: ["AI Safety", "SHAP", "LIME", "Fairness", "Governance"],
  },
  {
    id: "ai-for-business",
    number: 12,
    title: "AI for Business",
    description: "Executive AI strategy, technology evaluation, capability roadmapping, cost-benefit analysis, and organizational change.",
    audiences: ["Corporate"],
    level: "Beginner",
    duration: "Estimated 4–6 Weeks",
    keyOutcome: "Evaluate enterprise AI use cases, estimate compute/API costs, and architect sensible AI transformation roadmaps.",
    syllabusHighlights: [
      "Deconstructing Enterprise AI Capabilities & Pragmatic Limitations",
      "Build vs. Buy vs. Fine-Tune Decision Frameworks",
      "Cost Modeling for LLM Inference, Compute & Cloud Infrastructure",
      "Change Management & Upskilling Cross-Functional Teams"
    ],
    techTags: ["Executive AI", "Strategy", "Cost Modeling", "Enterprise"],
  },
];
