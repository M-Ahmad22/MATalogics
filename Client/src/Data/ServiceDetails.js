import heroMobileDev from "@/assets/hero-mobile-dev.jpg";
import heroUiUx from "@/assets/hero-ui-ux.jpg";
import heroAiAutomation from "@/assets/hero-ai-automation.jpg";
import heroCloudDevops from "@/assets/hero-cloud-devops.jpg";
import heroSoftwareDev from "@/assets/hero-software-dev.jpg";

import {
  ArrowRight,
  Code,
  Smartphone,
  Palette,
  Brain,
  Cloud,
  Factory,
  TrendingUp,
  User,
  Calendar,
  Clock,
  Tag,
} from "lucide-react";

export const SITE_DATA = {
  services: [
    {
      id: 1,
      title: "Custom Software Development",
      shortDescription:
        "End-to-end software engineering for web and enterprise solutions using modern stacks.",
      detailedDescription:
        "We build robust, scalable, and secure custom software tailored to your business workflows. Our process covers everything from discovery and architecture to deployment and long-term support. We combine agile methodology with deep technical expertise to deliver reliable products faster.",
      process: [
        "Requirements discovery & business analysis",
        "System architecture & UX planning",
        "Agile development with rapid iterations",
        "Automated testing and code reviews",
        "Continuous deployment & monitoring",
        "Long-term support and scaling",
      ],
      deliverables: [
        "Enterprise-grade web platforms",
        "Internal dashboards and admin panels",
        "API ecosystems & third-party integrations",
        "Real-time features & analytics dashboards",
        "Maintenance & performance optimization",
      ],
      techStack: [
        { name: "React.js", description: "Modern frontend UI" },
        { name: "Node.js", description: "Scalable backend runtime" },
        { name: "TypeScript", description: "Type-safe coding" },
        {
          name: "PostgreSQL / MongoDB",
          description: "Relational & NoSQL databases",
        },
        { name: "AWS / Vercel", description: "Cloud hosting & scaling" },
        {
          name: "Docker & Kubernetes",
          description: "Containerization & orchestration",
        },
        {
          name: "CI/CD (GitHub Actions, Jenkins)",
          description: "Automated deployment",
        },
      ],
      heroImage: heroSoftwareDev,
      gallery: [heroSoftwareDev, heroMobileDev],
      icon: Code,
    },
    {
      id: 2,
      title: "Cross-Platform App Development",
      shortDescription:
        "Build high-performance mobile apps for iOS and Android with a single codebase.",
      detailedDescription:
        "Our team develops feature-rich, cross-platform apps using Flutter and React Native. We deliver native-level performance, intuitive UX, and seamless backend integrations — reducing time-to-market while maintaining quality.",
      process: [
        "Product strategy & wireframing",
        "UI/UX design for mobile devices",
        "Flutter/React Native development",
        "Backend integration with Firebase/Supabase",
        "Testing on real devices",
        "App store launch & post-launch support",
      ],
      deliverables: [
        "iOS & Android apps with native feel",
        "Offline-first data architecture",
        "Push notifications & analytics",
        "Real-time sync and cloud functions",
        "Automated build & deployment pipelines",
      ],
      techStack: [
        { name: "Flutter", description: "Cross-platform framework" },
        {
          name: "React Native",
          description: "Alternative cross-platform framework",
        },
        { name: "Dart / JavaScript", description: "Languages for app logic" },
        {
          name: "Firebase / Supabase",
          description: "Backend & real-time data",
        },
        { name: "REST / GraphQL APIs", description: "Data integration" },
        { name: "Xcode & Android Studio", description: "Native build tools" },
      ],
      heroImage: heroMobileDev,
      gallery: [heroMobileDev, heroSoftwareDev],
      icon: Smartphone,
    },
    {
      id: 3,
      title: "Product UI/UX & Prototyping",
      shortDescription:
        "User-centric product design with wireframes, prototypes, and design systems.",
      detailedDescription:
        "We design experiences that delight users and convert. Our design process starts with research and flows through to interactive prototypes, ensuring that every pixel serves a purpose.",
      process: [
        "User research & persona mapping",
        "Information architecture & wireframing",
        "Visual design & component systems",
        "Interactive prototyping & animation",
        "Usability testing & iteration",
        "Design handoff to development",
      ],
      deliverables: [
        "Low-fidelity wireframes",
        "High-fidelity UI designs",
        "Clickable prototypes",
        "Design systems & style guides",
        "Accessibility compliance documentation",
      ],
      techStack: [
        { name: "Figma", description: "Collaborative design & prototyping" },
        { name: "Adobe XD / Sketch", description: "Alternative design tools" },
        { name: "Zeplin / Avocode", description: "Developer handoff" },
        {
          name: "Principle / After Effects",
          description: "Micro-interactions & animation",
        },
      ],
      heroImage: heroUiUx,
      gallery: [heroUiUx, heroSoftwareDev],
      icon: Palette,
    },
    {
      id: 4,
      title: "AI Automation & Predictive Models",
      shortDescription:
        "Integrate machine learning, chatbots, and automation to streamline operations.",
      detailedDescription:
        "We implement AI solutions that automate repetitive tasks, forecast outcomes, and deliver actionable insights. From natural language chatbots to computer vision and predictive analytics, we tailor solutions to your data and workflows.",
      process: [
        "Use-case identification & data audit",
        "Data engineering & model development",
        "Training & evaluation of models",
        "API deployment and integration",
        "Automation workflows with n8n/Zapier",
        "Monitoring & continuous improvement",
      ],
      deliverables: [
        "Custom ML models & APIs",
        "Conversational AI chatbots",
        "Predictive analytics dashboards",
        "Automated business workflows",
        "Integration with existing systems",
      ],
      techStack: [
        { name: "Python", description: "Core AI programming" },
        {
          name: "TensorFlow / PyTorch",
          description: "Deep learning frameworks",
        },
        { name: "scikit-learn", description: "Classical machine learning" },
        { name: "OpenAI / VAPI", description: "Large language models & APIs" },
        { name: "n8n / Zapier", description: "No-code automation" },
        { name: "Docker + AWS", description: "Cloud deployment of models" },
      ],
      heroImage: heroAiAutomation,
      gallery: [heroAiAutomation, heroSoftwareDev],
      icon: Brain,
    },
    {
      id: 5,
      title: "Cloud Infrastructure & DevOps",
      shortDescription:
        "Scalable, secure cloud architectures with automated deployment and monitoring.",
      detailedDescription:
        "We design, deploy, and manage cloud infrastructures that scale with your business. Our DevOps approach reduces downtime, speeds up delivery, and ensures security and compliance.",
      process: [
        "Cloud strategy & architecture",
        "Infrastructure as Code with Terraform",
        "Containerization & orchestration",
        "CI/CD pipeline setup",
        "Monitoring, logging & alerting",
        "Ongoing optimization & 24/7 support",
      ],
      deliverables: [
        "Cloud migration & setup",
        "Highly available infrastructure",
        "Secure CI/CD pipelines",
        "Auto-scaling & load balancing",
        "Compliance & disaster recovery plans",
      ],
      techStack: [
        { name: "AWS / GCP / Azure", description: "Cloud providers" },
        {
          name: "Docker / Kubernetes",
          description: "Containers & orchestration",
        },
        { name: "Terraform / Pulumi", description: "Infrastructure as Code" },
        { name: "Jenkins / GitHub Actions", description: "CI/CD automation" },
        { name: "Prometheus / Grafana", description: "Monitoring & alerting" },
      ],
      heroImage: heroCloudDevops,
      gallery: [heroCloudDevops, heroSoftwareDev],
      icon: Cloud,
    },
  ],
};
