import heroSoftwareDev from "@/assets/hero-software-dev.jpg";
import heroErpCaseStudy from "@/assets/hero-erp-case-study.jpg";
import heroECommerce from "@/assets/UseCaseEcommerce.jpg";
import heroAIAutomation from "@/assets/UseCaeAi.jpg";
import heroPortfolio from "@/assets/UseCasePortfolio.jpg";
import heroCRM from "@/assets/UseCaseCrm.jpg";
import heroEduPlatform from "@/assets/UseCaseEDU.jpg";

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
  useCases: [
    {
      id: 1,
      title: "Enterprise Resource Planning System for Manufacturing Giant",
      client: "TechManufacturing Corp",
      clientBackground:
        "Fortune 500 manufacturing company with 15,000+ employees across 23 facilities worldwide, specializing in automotive components and industrial equipment.",
      executiveSummary:
        "MATalogics transformed TechManufacturing's fragmented systems into a unified ERP platform, resulting in 67% faster order processing, $2.8M annual cost savings, and real-time visibility across all operations.",
      summary:
        "Complete digital transformation with a custom ERP system handling inventory, production, finance, and supply chain management across multiple facilities.",
      challenge: [
        "System Fragmentation: 15 different software systems with no integration, causing data silos and manual entry errors.",
        "Inventory Management Crisis: Lack of real-time visibility led to $1.2M annual waste due to overstocking and production delays.",
        "Financial Reporting Delays: Month-end reporting took 3 weeks due to manual consolidation.",
        "Supply Chain Blind Spots: Limited visibility into supplier performance caused frequent delays.",
        "Compliance Risks: Manual processes hindered ISO 9001 and regulatory compliance.",
      ],
      solution: {
        phases: [
          {
            title: "Assessment & Architecture (2 weeks)",
            description:
              "Detailed analysis of existing systems and workflows. Designed scalable microservices architecture.",
          },
          {
            title: "Core System Development (12 weeks)",
            description:
              "Integrated modules for inventory, production, finance, and supply chain using React frontend and Node.js backend.",
          },
          {
            title: "Data Migration & Integration (4 weeks)",
            description:
              "Migrated data from 15 legacy systems and established real-time APIs.",
          },
          {
            title: "Training & Deployment (3 weeks)",
            description:
              "Comprehensive user training with phased rollout and 24/7 support.",
          },
        ],
        keyFeatures: [
          "Real-time inventory tracking with automated reorder points",
          "Production scheduling with capacity optimization",
          "Integrated financial reporting and budgeting",
          "Supplier portal with performance analytics",
          "Mobile app for warehouse and production floor staff",
          "Advanced analytics dashboard for executive decision-making",
        ],
      },
      outcome: {
        orderProcessing: "67% faster order processing",
        costSavings: "$2.8M annual operational savings",
        inventoryReduction: "45% reduction in excess inventory",
        reportingTime: "Reduced from 3 weeks to 24 hours",
        dataAccuracy: "99.7% accuracy across systems",
        userAdoption: "98% adoption rate within 30 days",
        roi: "285% ROI within 18 months",
      },
      clientTestimonial:
        "MATalogics didn't just build us software - they transformed our entire operation. The level of integration and real-time visibility we now have is game-changing.",
      whyUs:
        "TechManufacturing chose MATalogics for our enterprise-scale experience, agile development approach, and commitment to long-term partnership.",
      techStack: [
        "React",
        "Node.js",
        "PostgreSQL",
        "Redis",
        "AWS",
        "Docker",
        "Kubernetes",
        "TypeScript",
      ],
      heroImage: heroErpCaseStudy,
      gallery: [heroErpCaseStudy, heroSoftwareDev],
      publishDate: "2024-03-15",
      tags: [
        "ERP",
        "Manufacturing",
        "Digital Transformation",
        "Cloud",
        "Automation",
      ],
      icon: Factory,
    },
    {
      id: 2,
      title: "High-Performance E-Commerce Web Application",
      client: "ShopMaster Inc.",
      clientBackground:
        "Leading online retail brand with a diverse portfolio of products and a global customer base of over 5 million users.",
      executiveSummary:
        "MATalogics built a scalable e-commerce platform that increased online sales by 52%, improved customer retention by 38%, and reduced page load times by 70%.",
      summary:
        "Fully customized e-commerce web application with integrated payment gateways, AI-driven product recommendations, inventory management, and omnichannel marketing support.",
      challenge: [
        "Legacy Platform Limitations: Outdated system caused slow load times and poor mobile experience.",
        "Complex Inventory Management: Multiple warehouses and SKUs caused synchronization issues.",
        "High Cart Abandonment: Weak UX and delayed checkout flow reduced conversion rates.",
        "Marketing Inefficiencies: Lack of automated campaigns and analytics limited customer engagement.",
      ],
      solution: {
        phases: [
          {
            title: "Platform Audit & UX Strategy (3 weeks)",
            description:
              "Analyzed existing workflows, user behavior, and competitor platforms. Designed responsive and intuitive UX/UI.",
          },
          {
            title: "Development & Integration (10 weeks)",
            description:
              "Built frontend with React, backend with Node.js, integrated payment gateways, inventory, and logistics APIs.",
          },
          {
            title: "AI & Personalization (4 weeks)",
            description:
              "Implemented AI recommendation engine and personalized marketing automation using analytics dashboards.",
          },
          {
            title: "Testing & Launch (2 weeks)",
            description:
              "End-to-end testing, performance optimization, and phased rollout with post-launch monitoring.",
          },
        ],
        keyFeatures: [
          "AI-driven product recommendations and personalized offers",
          "Real-time inventory management across multiple warehouses",
          "One-click checkout and multiple payment options",
          "Automated marketing campaigns and analytics",
          "Mobile-first responsive design",
          "Advanced admin dashboard with sales insights",
        ],
      },

      outcome: {
        orderProcessing: "52% increase in online sales",
        costSavings: "38% improvement in retention rates",
        pageSpeed: "70% faster page load times",
        cartConversion: "25% increase in checkout conversion",
        dataAccuracy: "Real-time inventory sync with 99.9% accuracy",
        userAdoption: "Seamless adoption with zero downtime",
        roi: "210% ROI within first 12 months",
      },
      clientTestimonial:
        "MATalogics transformed our e-commerce operations. The AI recommendations and seamless UX boosted our sales and customer loyalty beyond expectations.",
      whyUs:
        "Chosen for deep expertise in scalable e-commerce architecture, AI personalization, and performance optimization.",
      techStack: [
        "React",
        "Node.js",
        "MongoDB",
        "Redis",
        "AWS",
        "Docker",
        "Stripe API",
        "TypeScript",
      ],
      heroImage: heroECommerce,
      gallery: [heroECommerce, heroSoftwareDev],
      publishDate: "2025-01-20",
      tags: ["E-Commerce", "Web Application", "AI", "UX/UI", "Cloud"],
      icon: Smartphone,
    },
    {
      id: 3,
      title: "AI-Powered Automation Tool Using No-Code Platforms",
      client: "SocialOrchestrator Ltd.",
      clientBackground:
        "Digital marketing agency managing 50+ clients’ social media campaigns across multiple platforms.",
      executiveSummary:
        "Developed an AI-powered automation platform using N8n and Zapier, reducing manual social media management by 80% and improving campaign performance metrics across clients.",
      summary:
        "Automation tool with orchestration dashboard, intelligent scheduling, content posting, reporting, and integration with multiple social platforms.",
      challenge: [
        "Manual Campaign Management: Time-consuming posting and monitoring processes.",
        "Fragmented Reporting: Data from multiple platforms required manual consolidation.",
        "Low Engagement: Inconsistent posting schedules affected reach and engagement.",
        "Complex Client Oversight: Difficulty managing multiple clients efficiently.",
      ],
      solution: {
        phases: [
          {
            title: "Requirement Analysis & Automation Mapping (2 weeks)",
            description:
              "Mapped client workflows and identified repetitive tasks suitable for automation.",
          },
          {
            title: "Platform Setup & Integration (4 weeks)",
            description:
              "Configured N8n and Zapier flows, connected social media APIs, and set up data pipelines.",
          },
          {
            title: "Dashboard Development (3 weeks)",
            description:
              "Built centralized dashboard for scheduling, monitoring, and analytics using React and Node.js.",
          },
          {
            title: "Testing & Training (2 weeks)",
            description:
              "Tested all automation flows, optimized scheduling, and trained client teams.",
          },
        ],
        keyFeatures: [
          "Centralized orchestration dashboard for all client campaigns",
          "Automated posting, scheduling, and reporting",
          "AI-driven content recommendations",
          "Cross-platform analytics and engagement insights",
          "Customizable workflow automation using N8n & Zapier",
          "Secure multi-client management",
        ],
      },

      outcome: {
        orderProcessing: "80% reduction in manual work",
        costSavings: "25% average engagement increase per client",
        reportingTime: "Real-time reports eliminating manual consolidation",
        campaignEfficiency: "Multi-client management streamlined",
        dataAccuracy: "100% accurate content scheduling and posting",
        userAdoption: "High adoption among agency teams within 2 weeks",
        roi: "320% ROI within 6 months",
      },
      clientTestimonial:
        "The AI automation tool from MATalogics completely changed the way we manage social media. The efficiency gains are phenomenal.",
      whyUs:
        "Expertise in AI, no-code automation, and digital orchestration made MATalogics the obvious partner for high-scale campaigns.",
      techStack: [
        "React",
        "Node.js",
        "N8n",
        "Zapier",
        "MongoDB",
        "AWS",
        "TypeScript",
      ],
      heroImage: heroAIAutomation,
      gallery: [heroAIAutomation, heroSoftwareDev],
      publishDate: "2025-03-10",
      tags: ["AI", "Automation", "No-Code", "Social Media", "Dashboard"],
      icon: Brain,
    },
    {
      id: 4,
      title: "Portfolio Website & Branding for Creative Professionals",
      client: "CreativeEdge Studio",
      clientBackground:
        "Boutique design studio focused on web and graphic design for high-end clients.",
      executiveSummary:
        "Delivered a visually stunning portfolio website and complete branding package, resulting in a 60% increase in client inquiries and stronger brand presence online.",
      summary:
        "End-to-end solution including UX/UI website, branding guidelines, visual assets, and content strategy for creative professionals.",
      challenge: [
        "Fragmented Brand Identity: Lack of consistency across digital and print materials.",
        "Outdated Portfolio Website: Non-responsive design and poor UX impacted client conversions.",
        "Limited Online Visibility: SEO and digital reach were insufficient.",
      ],
      solution: {
        phases: [
          {
            title: "Brand Audit & Strategy (2 weeks)",
            description:
              "Analyzed existing assets, competitors, and target audience to define branding strategy.",
          },
          {
            title: "Design & Development (6 weeks)",
            description:
              "Built responsive website with optimized UX/UI, designed visual branding assets, and integrated content strategy.",
          },
          {
            title: "SEO & Launch (2 weeks)",
            description:
              "Implemented SEO optimization, analytics setup, and live launch with marketing support.",
          },
        ],
        keyFeatures: [
          "Responsive portfolio website with interactive galleries",
          "Comprehensive branding guidelines and visual assets",
          "SEO-optimized content strategy",
          "Integrated contact forms and client inquiry tracking",
          "Blog and case study sections for thought leadership",
        ],
      },

      outcome: {
        orderProcessing: "60% increase in client inquiries",
        costSavings: "Enhanced brand recognition and recall by 25%",
        websitePerformance: "Fast, responsive, and fully optimized",
        SEO: "Top 5 ranking for targeted keywords",
        userAdoption: "Seamless experience for clients and team",
        roi: "180% ROI within first year",
      },
      clientTestimonial:
        "MATalogics captured our vision perfectly and translated it into a brand and website that truly impresses our clients.",
      whyUs:
        "MATalogics' deep understanding of design, branding, and digital storytelling ensured a cohesive, high-impact result.",
      techStack: [
        "React",
        "Next.js",
        "TailwindCSS",
        "Figma",
        "TypeScript",
        "SEO Tools",
      ],
      heroImage: heroPortfolio,
      gallery: [heroPortfolio, heroSoftwareDev],
      publishDate: "2025-02-05",
      tags: ["Portfolio", "Branding", "Creative", "Web Design", "SEO"],
      icon: Palette,
    },
    {
      id: 5,
      title: "CRM & Client Management System for Service-Based Businesses",
      client: "ServicePro Solutions",
      clientBackground:
        "Provider of business solutions for service-based industries managing thousands of client interactions daily.",
      executiveSummary:
        "Developed a robust CRM system streamlining client management, automating workflows, and improving customer satisfaction scores by 42%.",
      summary:
        "Comprehensive CRM solution including client database, workflow automation, lead management, reporting dashboard, and analytics tools.",
      challenge: [
        "Manual Client Tracking: Inefficient processes leading to lost opportunities.",
        "Lack of Insights: No centralized reporting or analytics for decision-making.",
        "Workflow Inefficiencies: Repetitive tasks slowed staff productivity.",
      ],
      solution: {
        phases: [
          {
            title: "Requirement Gathering & Process Mapping (2 weeks)",
            description:
              "Detailed assessment of client management workflows and pain points.",
          },
          {
            title: "System Development & Integration (8 weeks)",
            description:
              "Built CRM modules for leads, contacts, sales pipeline, and automated workflows with secure cloud hosting.",
          },
          {
            title: "Training & Deployment (3 weeks)",
            description:
              "Provided team training, phased rollout, and 24/7 support for adoption.",
          },
        ],
        keyFeatures: [
          "Centralized client database with secure access",
          "Workflow automation for follow-ups and task management",
          "Sales pipeline and opportunity tracking",
          "Real-time analytics and reporting dashboard",
          "Customizable client communication templates",
        ],
      },
      outcome: {
        orderProcessing: "42% increase in staff efficiency",
        clientSatisfaction: "42% higher customer satisfaction scores",
        leadConversion: "30% improvement in lead conversion",
        costSavings: "80% of repetitive tasks automated",
        reporting: "Real-time insights for strategic decisions",
        userAdoption: "95% adoption rate within first month",
        roi: "250% ROI within 12 months",
      },
      clientTestimonial:
        "MATalogics delivered a CRM that not only tracks clients but transforms how we operate daily. Our team is far more productive and clients happier.",
      whyUs:
        "MATalogics' experience in scalable CRM architecture and client-centric design ensured long-term success.",
      techStack: [
        "React",
        "Node.js",
        "MongoDB",
        "Redis",
        "AWS",
        "TypeScript",
        "Docker",
      ],
      heroImage: heroCRM,
      gallery: [heroCRM, heroSoftwareDev],
      publishDate: "2025-03-01",
      tags: [
        "CRM",
        "Client Management",
        "Automation",
        "Dashboard",
        "Analytics",
      ],
      icon: User,
    },
    {
      id: 6,
      title: "Educational Learning Platform for Online Courses",
      client: "EduNext Academy",
      clientBackground:
        "Global online education provider offering courses to over 100,000 students worldwide in technology, business, and creative fields.",
      executiveSummary:
        "Created a scalable, interactive learning platform with gamification, assessments, and analytics, resulting in a 65% increase in student engagement and a 50% growth in enrollments.",
      summary:
        "End-to-end online learning platform with course management, student dashboards, progress tracking, gamification, and admin analytics tools.",
      challenge: [
        "Low Engagement: Existing platform lacked interactive and engaging features.",
        "Scalability Issues: Could not support growing student base.",
        "Inadequate Reporting: No real-time insights into student progress and performance.",
      ],
      solution: {
        phases: [
          {
            title: "Needs Assessment & UX Design (3 weeks)",
            description:
              "Identified key engagement features and designed intuitive UX for students and instructors.",
          },
          {
            title: "Platform Development (10 weeks)",
            description:
              "Developed course management, dashboards, gamification, and assessment tools using modern tech stack.",
          },
          {
            title: "Testing & Launch (2 weeks)",
            description:
              "Conducted user testing, performance optimization, and phased launch with support.",
          },
        ],
        keyFeatures: [
          "Interactive student dashboards with progress tracking",
          "Gamification to increase engagement and retention",
          "Admin analytics and reporting tools",
          "Integrated assessments, quizzes, and certificates",
          "Responsive web and mobile-first design",
          "Secure authentication and role-based access",
        ],
      },

      outcome: {
        costSavings: "65% increase in engagement",
        enrollmentGrowth: "50% increase in new enrollments",
        orderProcessing: "Supports 100k+ users seamlessly",
        contentDelivery: "Improved course completion rates",
        analytics: "Real-time performance insights",
        userAdoption: "Students and instructors adopted platform instantly",
        roi: "200% ROI within first academic year",
      },
      clientTestimonial:
        "MATalogics delivered an educational platform that students love. Engagement, scalability, and analytics have surpassed our expectations.",
      whyUs:
        "MATalogics' expertise in scalable education platforms, gamification, and analytics made them the perfect partner.",
      techStack: [
        "React",
        "Node.js",
        "MongoDB",
        "AWS",
        "Docker",
        "TypeScript",
        "GraphQL",
      ],
      heroImage: heroEduPlatform,
      gallery: [heroEduPlatform, heroSoftwareDev],
      publishDate: "2025-04-12",
      tags: [
        "Education",
        "Learning Platform",
        "Gamification",
        "Analytics",
        "Online Courses",
      ],
      icon: Calendar,
    },
  ],
};
