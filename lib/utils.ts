import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const projects = [
  {
    id: 1,
    title: "Data Analysis Dashboard",
    description:
      "A comprehensive data visualization platform providing real-time insights and analytics for business intelligence.",
    techStack: ["Python", "SQL", "Excel", "Data Visualization"],
    githubUrl: "#",
    liveUrl: "#",
    image:
      "/Users/abdullahalrafi/Desktop/untitled folder/Portfolio Abdullah Al Rafi/public/images/projects/database.jpg",
    caseStudy: {
      problem:
        "Organizations struggle to make data-driven decisions due to scattered data sources and lack of intuitive visualization tools. Manual reporting processes were time-consuming and error-prone.",
      approach:
        "Designed and developed a centralized dashboard that aggregates data from multiple sources. Implemented automated data pipelines for real-time updates and created interactive visualizations using modern charting libraries.",
      implementation:
        "Built using Python for data processing, SQL for database queries, and a modern JavaScript charting library. Integrated with Excel for data import/export functionality. Created role-based access control and responsive design for all devices.",
      outcome:
        "Reduced report generation time by 70%, improved decision-making speed by 50%, and provided stakeholders with self-service analytics capabilities. The dashboard is now used by 100+ team members across departments.",
    },
  },
  {
    id: 2,
    title: "Process Automation Suite",
    description:
      "Automation tools to streamline repetitive tasks and improve operational efficiency.",
    techStack: ["Python", "Scripting", "Batch Processing", "Task Scheduling"],
    githubUrl: "#",
    liveUrl: "#",
    image: "/images/projects/automation.jpg",
    caseStudy: {
      problem:
        "Manual execution of routine tasks consumed significant time and was prone to human error. Teams needed a reliable way to automate these processes without extensive programming knowledge.",
      approach:
        "Developed a modular automation suite that allows users to configure and schedule common workflows. Created templates for frequently used processes and built an intuitive interface for management.",
      implementation:
        "Used Python scripts with scheduling capabilities. Built a configuration-driven architecture allowing non-technical users to set up automation. Implemented error handling, logging, and notifications for monitoring.",
      outcome:
        "Automated 20+ repetitive tasks, saving approximately 15 hours per week. Reduced errors in task execution by 95% and improved overall team productivity.",
    },
  },
  {
    id: 3,
    title: "Database Management System",
    description:
      "A lightweight database solution for small to medium businesses with intuitive management tools.",
    techStack: ["SQL", "Python", "Database Design", "API Development"],
    githubUrl: "#",
    liveUrl: "#",
    image: "/images/projects/database.jpg",
    caseStudy: {
      problem:
        "Small businesses lacked affordable, user-friendly database solutions. Existing systems were either too complex or too limited in functionality, requiring technical expertise to manage.",
      approach:
        "Created a simplified database management system with an intuitive interface. Designed a flexible schema that adapts to various business needs and built tools for data import/export and reporting.",
      implementation:
        "Built with SQL for data storage, Python for the backend API, and a clean web interface. Implemented CRUD operations, search functionality, and automated backups. Added user authentication and role management.",
      outcome:
        "Deployed to 5 small businesses, each reducing data management overhead by 60%. Improved data accuracy and provided secure, centralized access to business information.",
    },
  },
  {
    id: 4,
    title: "Research Support System",
    description:
      "A digital platform for managing research data, publications, and team collaboration.",
    techStack: ["Python", "Database", "Documentation", "Collaboration Tools"],
    githubUrl: "#",
    liveUrl: "#",
    image: "/images/projects/research-system.jpg",
    caseStudy: {
      problem:
        "Research teams faced difficulties organizing data, tracking progress, and collaborating effectively. Files were scattered, documentation was inconsistent, and project visibility was limited.",
      approach:
        "Developed a centralized research support system that organizes data, tracks milestones, and facilitates team collaboration. Created templates for documentation and established version control for research materials.",
      implementation:
        "Utilized Python for backend logic, SQL for structured data storage, and a web-based interface. Integrated features for document management, task tracking, and team communication. Included reporting tools for progress monitoring.",
      outcome:
        "Improved research team efficiency by 45%, reduced document retrieval time by 80%, and enhanced collaboration across 15+ researchers. The system became a standard tool for university research labs.",
    },
  },
];
