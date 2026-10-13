import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const projects = [
  {
    id: 1,
    title: "Islami Bank PLC Share Banking Management System (IBSBMS)",
    subtitle: "Enterprise Share Banking & CDBL Integration Platform",
    category: "Banking & Enterprise",
    description:
      "A mission-critical web-based share management application engineered for Islami Bank Bangladesh PLC using Spring Boot and Oracle Database, featuring CDBL integration and automated Maker-Checker compliance.",
    techStack: [
      "Java",
      "Spring Boot",
      "Oracle Database",
      "CDBL Integration",
      "Spring Security",
      "Maker-Checker",
      "REST API",
      "Audit Trail",
    ],
    githubUrl: "https://github.com/Raafi0101",
    liveUrl: "https://portfolio-abdullah-al-rafi-6mo6.vercel.app",
    documentationUrl: "https://github.com/Raafi0101",
    image: "/images/projects/database.jpg",
    featured: true,
    caseStudy: {
      problem:
        "Islami Bank required a secure, compliant, and real-time centralized system to manage massive volumes of shareholder records, dividend distributions, and Central Depository Bangladesh Limited (CDBL) Demat/Remat operations while strictly preventing unauthorized modifications.",
      approach:
        "Architected an enterprise multi-tier Spring Boot solution with an Oracle Database backend. Implemented a strict Maker-Checker-Approver authorization matrix, rigorous immutable audit logging, and automated reconciliation for CDBL transactions.",
      implementation:
        "Engineered end-to-end modules for shareholder profile management, folio transfers, share certificate issuance, dividend calculations, and electronic Remat/Demat processing. Built comprehensive role-based access control (RBAC) and automated reporting pipelines.",
      outcome:
        "Streamlined corporate share operations for thousands of bank shareholders, eliminated manual record discrepancies, ensured 100% regulatory CDBL compliance, and delivered sub-second query performance on critical dividend queries.",
    },
  },
  {
    id: 2,
    title: "IBBL PLC Account Management System",
    subtitle: "Full-Stack Core Banking Customer & Account Onboarding Platform",
    category: "Banking & Enterprise",
    description:
      "A robust enterprise banking web application built with Java, Spring Boot, Spring Data JPA, Hibernate, Thymeleaf, and Bootstrap for automated account opening and customer verification.",
    techStack: [
      "Java 17",
      "Spring Boot",
      "Spring Data JPA",
      "Hibernate",
      "Thymeleaf",
      "Bootstrap",
      "Maven",
      "MySQL",
    ],
    githubUrl: "https://github.com/Raafi0101",
    liveUrl: "https://portfolio-abdullah-al-rafi-6mo6.vercel.app",
    documentationUrl: "https://github.com/Raafi0101",
    image: "/images/projects/automation.jpg",
    featured: true,
    caseStudy: {
      problem:
        "Traditional account onboarding involved tedious manual data verification, disconnected paper records, and cumbersome error tracking that slowed down customer branch services.",
      approach:
        "Created an end-to-end digital onboarding portal with automated field validation, server-side data sanitization, dynamic search filters, and an administrative oversight dashboard.",
      implementation:
        "Implemented Spring Boot with Spring Data JPA and Hibernate for persistence. Designed a clean, accessible UI with Thymeleaf and Bootstrap. Integrated global exception handling (@ControllerAdvice), pagination, KYC validations, and real-time dashboard analytics.",
      outcome:
        "Significantly accelerated mock customer account registration, guaranteed transactional data consistency across ACID boundaries, and established a scalable blueprint for modern branch automation.",
    },
  },
  {
    id: 3,
    title: "Plant Leaf Disease Detection using Deep Learning & ViT",
    subtitle: "AI Computer Vision Research Project at DIU",
    category: "AI & Computer Vision",
    description:
      "Advanced deep learning research utilizing YOLOv12, Vision Transformers (ViT), CNN, and RNN models to automate plant leaf disease diagnosis with high classification accuracy.",
    techStack: [
      "Python",
      "YOLOv12",
      "Vision Transformer (ViT)",
      "CNN / RNN",
      "OpenCV",
      "PyTorch",
      "Matplotlib",
    ],
    githubUrl: "https://github.com/Raafi0101",
    liveUrl: "https://portfolio-abdullah-al-rafi-6mo6.vercel.app",
    documentationUrl: "https://github.com/Raafi0101",
    image: "/images/projects/research.jpg",
    featured: false,
    caseStudy: {
      problem:
        "Early and accurate diagnosis of plant leaf diseases is vital for agricultural yield, but manual inspection is slow, subjective, and inaccessible to large-scale farmers.",
      approach:
        "Researched and benchmarked multiple deep learning and transformer architectures on agricultural leaf image datasets to find optimal accuracy-speed tradeoffs for field deployment.",
      implementation:
        "Collected and preprocessed thousands of agricultural plant leaf images using OpenCV. Trained and fine-tuned YOLOv12 for real-time bounding box detection and ViT/CNN models for multi-class pathology classification.",
      outcome:
        "Achieved over 94% classification precision across multiple disease categories, generated comprehensive research benchmarks, and contributed to DIU research papers.",
    },
  },
  {
    id: 4,
    title: "SUPORIMA E-Commerce & Business Operations Platform",
    subtitle: "Traditional Fashion Retail Operations & Order Management",
    category: "Web & E-Commerce",
    description:
      "A full-cycle digital retail management system designed for SUPORIMA clothing brand, handling inventory catalogs, supplier pipelines, and customer order fulfilment.",
    techStack: [
      "JavaScript / Node.js",
      "RESTful API",
      "SQL Database",
      "Inventory Management",
      "Digital Marketing Analytics",
    ],
    githubUrl: "https://github.com/Raafi0101",
    liveUrl: "https://portfolio-abdullah-al-rafi-6mo6.vercel.app",
    documentationUrl: "https://github.com/Raafi0101",
    image: "/images/projects/database.jpg",
    featured: false,
    caseStudy: {
      problem:
        "Operating an independent online apparel brand required synchronized tracking of artisan fabric suppliers, custom size orders, inventory stock, and customer deliveries without expensive enterprise ERPs.",
      approach:
        "Designed a lightweight, practical operations platform centralizing product catalog management, supplier order tracking, sales analytics, and customer communication.",
      implementation:
        "Built modular tracking workflows for order statuses, inventory warnings, cash flow summaries, and courier integrations. Integrated customer review handling and social commerce tracking.",
      outcome:
        "Successfully supported hundreds of custom clothing orders, minimized stock-out delays by 40%, and enabled data-driven business decisions for sustainable brand growth.",
    },
  },
];
