export const personalInfo = {
  name: 'Abdullah Al Rafi',
  title: 'Software Engineer | Data Analysis & Automation Enthusiast',
  location: 'Demra, Dhaka, Bangladesh',
  email: 'abdullahalrafi0101@gmail.com',
  phone: '+8801634041585',
  linkedin: 'https://www.linkedin.com/in/abdullah-al-rafi-5016b3235/',
  github: 'https://github.com',
  tagline: 'I turn problems into structured, automated, and scalable solutions.',
}

export const about = {
  summary: `I am a Computer Science graduate with a strong passion for software development, automation, and data analysis. As a Research Lab Assistant at Daffodil International University, I've gained hands-on experience in data collection, analysis, and technical documentation. My approach combines structured thinking with a continuous learning mindset, allowing me to tackle complex problems and deliver efficient, scalable solutions. I thrive in collaborative environments and am always eager to take on new challenges that push the boundaries of what's possible with technology.`,
  image: '/images/profile/profile.jpg',
}

export const skills = {
  programming: [
    { name: 'Python', level: 70, icon: '🐍' },
    { name: 'C', level: 75, icon: '⚙️' },
    { name: 'SQL', level: 65, icon: '🗃️' },
  ],
  coreKnowledge: [
    { name: 'Software Development Fundamentals', level: 80, icon: '📚' },
    { name: 'Database Concepts', level: 70, icon: '🗄️' },
    { name: 'Debugging & Testing', level: 75, icon: '🔍' },
  ],
  tools: [
    { name: 'Git', level: 65, icon: '📦' },
    { name: 'Excel', level: 80, icon: '📊' },
    { name: 'Word', level: 85, icon: '📄' },
    { name: 'PowerPoint', level: 80, icon: '📽️' },
  ],
  systems: [
    { name: 'Windows', level: 90, icon: '💻' },
    { name: 'Linux', level: 70, icon: '🐧' },
    { name: 'macOS', level: 65, icon: '🍎' },
  ],
  softSkills: [
    { name: 'Problem-solving', level: 85, icon: '💡' },
    { name: 'Analytical Thinking', level: 80, icon: '🔬' },
    { name: 'Team Collaboration', level: 85, icon: '👥' },
    { name: 'Time Management', level: 80, icon: '⏱️' },
  ],
}

export const projects = [
  {
    id: 1,
    title: 'Data Analysis Dashboard',
    description: 'A comprehensive data visualization platform providing real-time insights and analytics for business intelligence.',
    techStack: ['Python', 'SQL', 'Excel', 'Data Visualization'],
    githubUrl: '#',
    liveUrl: '#',
    image: '/images/projects/data-dashboard.jpg',
    caseStudy: {
      problem: 'Organizations struggle to make data-driven decisions due to scattered data sources and lack of intuitive visualization tools. Manual reporting processes were time-consuming and error-prone.',
      approach: 'Designed and developed a centralized dashboard that aggregates data from multiple sources. Implemented automated data pipelines for real-time updates and created interactive visualizations using modern charting libraries.',
      implementation: 'Built using Python for data processing, SQL for database queries, and a modern JavaScript charting library. Integrated with Excel for data import/export functionality. Created role-based access control and responsive design for all devices.',
      outcome: 'Reduced report generation time by 70%, improved decision-making speed by 50%, and provided stakeholders with self-service analytics capabilities. The dashboard is now used by 100+ team members across departments.',
    },
  },
  {
    id: 2,
    title: 'Process Automation Suite',
    description: 'Automation tools to streamline repetitive tasks and improve operational efficiency.',
    techStack: ['Python', 'Scripting', 'Batch Processing', 'Task Scheduling'],
    githubUrl: '#',
    liveUrl: '#',
    image: '/images/projects/automation.jpg',
    caseStudy: {
      problem: 'Manual execution of routine tasks consumed significant time and was prone to human error. Teams needed a reliable way to automate these processes without extensive programming knowledge.',
      approach: 'Developed a modular automation suite that allows users to configure and schedule common workflows. Created templates for frequently used processes and built an intuitive interface for management.',
      implementation: 'Used Python scripts with scheduling capabilities. Built a configuration-driven architecture allowing non-technical users to set up automation. Implemented error handling, logging, and notifications for monitoring.',
      outcome: 'Automated 20+ repetitive tasks, saving approximately 15 hours per week. Reduced errors in task execution by 95% and improved overall team productivity.',
    },
  },
  {
    id: 3,
    title: 'Database Management System',
    description: 'A lightweight database solution for small to medium businesses with intuitive management tools.',
    techStack: ['SQL', 'Python', 'Database Design', 'API Development'],
    githubUrl: '#',
    liveUrl: '#',
    image: '/images/projects/database.jpg',
    caseStudy: {
      problem: 'Small businesses lacked affordable, user-friendly database solutions. Existing systems were either too complex or too limited in functionality, requiring technical expertise to manage.',
      approach: 'Created a simplified database management system with an intuitive interface. Designed a flexible schema that adapts to various business needs and built tools for data import/export and reporting.',
      implementation: 'Built with SQL for data storage, Python for the backend API, and a clean web interface. Implemented CRUD operations, search functionality, and automated backups. Added user authentication and role management.',
      outcome: 'Deployed to 5 small businesses, each reducing data management overhead by 60%. Improved data accuracy and provided secure, centralized access to business information.',
    },
  },
  {
    id: 4,
    title: 'Research Support System',
    description: 'A digital platform for managing research data, publications, and team collaboration.',
    techStack: ['Python', 'Database', 'Documentation', 'Collaboration Tools'],
    githubUrl: '#',
    liveUrl: '#',
    image: '/images/projects/research-system.jpg',
    caseStudy: {
      problem: 'Research teams faced difficulties organizing data, tracking progress, and collaborating effectively. Files were scattered, documentation was inconsistent, and project visibility was limited.',
      approach: 'Developed a centralized research support system that organizes data, tracks milestones, and facilitates team collaboration. Created templates for documentation and established version control for research materials.',
      implementation: 'Utilized Python for backend logic, SQL for structured data storage, and a web-based interface. Integrated features for document management, task tracking, and team communication. Included reporting tools for progress monitoring.',
      outcome: 'Improved research team efficiency by 45%, reduced document retrieval time by 80%, and enhanced collaboration across 15+ researchers. The system became a standard tool for university research labs.',
    },
  },
]

export const experience = [
  {
    role: 'Research Lab Assistant',
    organization: 'Daffodil International University',
    startDate: '2023',
    endDate: '2024',
    location: 'Dhaka, Bangladesh',
    responsibilities: [
      'Assisted in data collection and analysis for ongoing research projects',
      'Created and maintained technical documentation for research processes',
      'Provided automation support for repetitive research tasks',
      'Collaborated with research teams to achieve project milestones',
      'Developed scripts and tools to streamline data processing workflows',
    ],
    logo: '/images/education/diu-logo.jpg',
  },
]

export const education = [
  {
    degree: 'BSc in Computer Science and Engineering',
    institution: 'Daffodil International University',
    startDate: '2021',
    endDate: '2026',
    details: 'CGPA: 3.30 / 4.00',
    logo: '/images/education/diu-logo.jpg',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Abdul Kadir Mollah City College',
    startDate: '2017',
    endDate: '2019',
    details: 'GPA: 4.67',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Brahmondi K K M Govt High School, Narsingdi',
    startDate: '2012',
    endDate: '2017',
    details: 'GPA: 4.86',
  },
]

export const achievements = [
  {
    title: 'Anime Club Manager',
    organization: 'Daffodil International University',
    date: '2022 - 2024',
    description: 'Managed the university Anime Club, coordinating events, managing team activities, and fostering community engagement. Developed leadership and organizational skills while promoting cultural activities.',
    icon: '🎌',
  },
  {
    title: 'Workshops & Seminars',
    organization: 'Various',
    date: '2022 - 2023',
    description: 'Actively participated in numerous technical workshops, seminars, and networking events to enhance skills and stay updated with industry trends. Engaged with professionals and peers in the technology community.',
    icon: '📚',
  },
]

export const blog = [
  {
    id: 1,
    title: 'The Art of Writing Clean Code: Best Practices for Every Developer',
    excerpt: 'Explore fundamental principles of clean code that can significantly improve code readability, maintainability, and team collaboration.',
    date: '2024-01-15',
    category: 'Software Development',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Automating Daily Tasks: A Beginner\'s Guide to Python Scripting',
    excerpt: 'Learn how to identify repetitive tasks in your daily workflow and automate them using Python with practical examples.',
    date: '2024-01-08',
    category: 'Automation',
    readTime: '7 min read',
  },
  {
    id: 3,
    title: 'Understanding Data Analysis: From Raw Data to Business Insights',
    excerpt: 'A comprehensive guide to the data analysis process, covering data collection, cleaning, analysis, and visualization techniques.',
    date: '2024-01-02',
    category: 'Data Analysis',
    readTime: '6 min read',
  },
]

export const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
]
