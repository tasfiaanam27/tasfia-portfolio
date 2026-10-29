
export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  challenges: string[];
  improvements: string[];
};

export const projects: Project[] = [
  {
    slug: "smartsadaqah",
    title: "SmartSadaqah",
    subtitle: "Healthcare Donation Platform",
    image: "/images/projects/smartsadaqah.png",
    description:
      "SmartSadaqah is a healthcare donation management platform built with Django. It connects donors with medical fundraising campaigns and allows recipients to submit financial assistance requests. The application includes project management, role-based access, donation tracking, and administrative workflows.",
    technologies: [
      "Python",
      "Django",
      "HTML",
      "CSS",
      "JavaScript",
      "SQLite",
    ],
    liveUrl: "https://smartsadaqah.onrender.com/",
    githubUrl: "https://github.com/tasfiaanam27/SmartSadaqah",
    challenges: [
      "Designing separate workflows for donors, recipients, and administrators.",
      "Managing database relationships between donation projects, recipient requests, and donations.",
      "Implementing authentication, authorization, and project status management using Django.",
    ],
    improvements: [
      "Implement and evaluate an AI-assisted donation allocation system.",
      "Integrate a secure online payment gateway.",
      "Introduce personalized donation recommendations and more detailed reporting.",
    ],
  },
  {
    slug: "fitlog",
    title: "FitLog",
    subtitle: "Workout Library & Fitness Planner",
    image: "/images/projects/fitlog.png",
    description:
      "FitLog is a responsive fitness web application that helps users discover workouts and organize their fitness routines. Users can browse exercises, view workout details, add exercises to a daily plan, and save workouts for later.",
    technologies: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "REST API",
    ],
    liveUrl: "https://fit-log-tasfia.vercel.app/",
    githubUrl: "https://github.com/tasfiaanam27/fit-log",
    challenges: [
      "Fetching and displaying workout data from an external API.",
      "Managing shared application state for planned and saved workouts.",
      "Handling API rate limits and maintaining responsive layouts across devices.",
    ],
    improvements: [
      "Add user authentication and persistent workout plans.",
      "Introduce workout completion history and progress analytics.",
      "Provide personalized workout recommendations.",
    ],
  },
  {
    slug: "bazar-dor",
    title: "Bazar Dor",
    subtitle: "Online Grocery Browsing Platform",
    image: "/images/projects/bazar-dor.png",
    description:
      "Bazar Dor is a grocery-focused web application developed using Next.js and TypeScript. It allows users to explore grocery products by category, view product details, and navigate a responsive interface. The project also incorporates authentication and protected routes.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Better Auth",
      "REST API",
    ],
    liveUrl: "https://bazar-dor10.vercel.app/",
    githubUrl: "https://github.com/tasfiaanam27/bazar-dor",
    challenges: [
      "Implementing credentials-based and social authentication.",
      "Troubleshooting OAuth redirects and deployment environment configuration.",
      "Integrating category-based product APIs and managing protected routes.",
    ],
    improvements: [
      "Introduce advanced product searching and filtering.",
      "Add product comparison and personalized shopping features.",
      "Improve performance, accessibility, and the overall browsing experience.",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
