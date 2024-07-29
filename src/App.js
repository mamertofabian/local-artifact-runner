import React, { useState, useEffect } from "react";
import {
  Code,
  Briefcase,
  Award,
  ExternalLink,
  Terminal,
  Linkedin,
  Mail,
  Sun,
  Moon,
  ChevronRight,
  User,
} from "lucide-react";

// Dummy data for preview
const dummyData = {
  personalInfo: {
    name: "John Doe",
    title: "Full Stack Developer",
    location: "New York, USA",
    email: "john.doe@example.com",
    linkedin: "https://linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
  },
  about:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  skills: [
    { name: "JavaScript", category: "Languages", level: 90 },
    { name: "Python", category: "Languages", level: 85 },
    { name: "React", category: "Frontend", level: 95 },
    { name: "Node.js", category: "Backend", level: 90 },
  ],
  projects: [
    {
      name: "Project Alpha",
      description: "A sample project description.",
      tech: "React, Node.js, MongoDB",
      link: "https://project-alpha.example.com",
      category: "Web",
    },
    {
      name: "Project Beta",
      description: "Another sample project description.",
      tech: "Python, TensorFlow, Flask",
      link: "https://project-beta.example.com",
      category: "AI",
    },
  ],
  experiences: [
    {
      title: "Senior Developer",
      company: "Tech Corp",
      period: "2020 - Present",
      achievements: [
        "Led development of key projects",
        "Mentored junior developers",
      ],
    },
    {
      title: "Developer",
      company: "StartUp Inc",
      period: "2018 - 2020",
      achievements: [
        "Developed company's main product",
        "Improved system performance",
      ],
    },
  ],
};

const Portfolio = () => {
  const [theme, setTheme] = useState("light");
  const [activeTab, setActiveTab] = useState("all");
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => ({ ...prev, [entry.target.id]: true }));
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const filteredProjects =
    activeTab === "all"
      ? dummyData.projects
      : dummyData.projects.filter((project) => project.category === activeTab);

  const CircularProgressBar = ({ percentage, size = 120 }) => {
    const strokeWidth = 8;
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const dash = (percentage * circumference) / 100;

    return (
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          className="text-gray-300"
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className="text-blue-600 transition-all duration-1000 ease-out"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - dash}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%" }}
        />
        <text
          x="50%"
          y="50%"
          dy=".3em"
          textAnchor="middle"
          className="text-xl font-semibold"
          fill="currentColor"
        >
          {`${percentage}%`}
        </text>
      </svg>
    );
  };

  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <nav className="bg-blue-600 text-white p-4 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">{dummyData.personalInfo.name}</h1>
          <div className="flex items-center space-x-4">
            <a href="#about" className="hover:text-blue-200">
              About
            </a>
            <a href="#skills" className="hover:text-blue-200">
              Skills
            </a>
            <a href="#projects" className="hover:text-blue-200">
              Projects
            </a>
            <a href="#experience" className="hover:text-blue-200">
              Experience
            </a>
            <a href="#contact" className="hover:text-blue-200">
              Contact
            </a>
            <button
              onClick={toggleTheme}
              className="p-1 rounded-full bg-blue-700 hover:bg-blue-800"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
        </div>
      </nav>

      <header className="py-20 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-4">
            {dummyData.personalInfo.name}
          </h2>
          <p className="text-2xl mb-8">{dummyData.personalInfo.title}</p>
          <p className="text-xl mb-8">
            Crafting innovative solutions with cutting-edge technologies
          </p>
          <a
            href="#contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300 inline-flex items-center"
          >
            Get in Touch <ChevronRight className="ml-2" />
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto py-12 px-4">
        <section
          id="about"
          className={`mb-20 transition-opacity duration-1000 ${
            visibleSections.about ? "opacity-100" : "opacity-0"
          }`}
        >
          <h3 className="text-3xl font-bold mb-8 flex items-center">
            <User className="mr-2" /> About Me
          </h3>
          <div
            className={`p-6 rounded-lg ${
              theme === "dark" ? "bg-gray-800" : "bg-gray-100"
            }`}
          >
            <p className="text-lg">{dummyData.about}</p>
          </div>
        </section>

        <section
          id="skills"
          className={`mb-20 transition-opacity duration-1000 ${
            visibleSections.skills ? "opacity-100" : "opacity-0"
          }`}
        >
          <h3 className="text-3xl font-bold mb-8 flex items-center">
            <Code className="mr-2" /> Skills & Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {dummyData.skills.map((skill, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg ${
                  theme === "dark" ? "bg-gray-800" : "bg-gray-100"
                } flex flex-col items-center`}
              >
                <CircularProgressBar percentage={skill.level} />
                <p className="mt-2 text-center font-semibold">{skill.name}</p>
                <p className="text-sm text-gray-500">{skill.category}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="projects"
          className={`mb-20 transition-opacity duration-1000 ${
            visibleSections.projects ? "opacity-100" : "opacity-0"
          }`}
        >
          <h3 className="text-3xl font-bold mb-8 flex items-center">
            <Briefcase className="mr-2" /> Featured Projects
          </h3>
          <div className="mb-6 flex flex-wrap gap-4">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-full ${
                activeTab === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800"
              } transition-colors duration-300`}
            >
              All
            </button>
            {["Web", "AI"].map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-4 py-2 rounded-full ${
                  activeTab === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-800"
                } transition-colors duration-300`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg ${
                  theme === "dark" ? "bg-gray-800" : "bg-gray-100"
                } transform transition duration-300 hover:scale-105 hover:shadow-lg`}
              >
                <h4 className="text-xl font-semibold mb-2">{project.name}</h4>
                <p className="mb-4">{project.description}</p>
                <p className="text-sm mb-4">
                  <strong>Tech Stack:</strong> {project.tech}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 flex items-center"
                >
                  View Project <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        </section>

        <section
          id="experience"
          className={`mb-20 transition-opacity duration-1000 ${
            visibleSections.experience ? "opacity-100" : "opacity-0"
          }`}
        >
          <h3 className="text-3xl font-bold mb-8 flex items-center">
            <Award className="mr-2" /> Professional Experience
          </h3>
          <div className="space-y-12">
            {dummyData.experiences.map((exp, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg ${
                  theme === "dark" ? "bg-gray-800" : "bg-gray-100"
                } transition-all duration-300 hover:shadow-lg`}
              >
                <h4 className="text-xl font-semibold">{exp.title}</h4>
                <p className="text-lg mb-2">{exp.company}</p>
                <p className="text-sm mb-4">{exp.period}</p>
                <ul className="list-disc list-inside space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className={`text-center transition-opacity duration-1000 ${
            visibleSections.contact ? "opacity-100" : "opacity-0"
          }`}
        >
          <h3 className="text-3xl font-bold mb-8">Let's Connect</h3>
          <p className="mb-8">
            Interested in collaborating or have a project in mind? I'd love to
            hear from you!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href={`mailto:${dummyData.personalInfo.email}`}
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300 flex items-center"
            >
              <Mail className="mr-2" /> Email Me
            </a>
            <a
              href={dummyData.personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300 flex items-center"
            >
              <Linkedin className="mr-2" /> LinkedIn
            </a>
            <a
              href={dummyData.personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300 flex items-center"
            >
              <Terminal className="mr-2" /> GitHub
            </a>
          </div>
        </section>
      </main>

      <footer
        className={`mt-20 py-8 ${
          theme === "dark" ? "bg-gray-800" : "bg-gray-100"
        }`}
      >
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 {dummyData.personalInfo.name}. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="text-blue-600 hover:text-blue-800 mr-4">
              Privacy Policy
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              Terms of Service
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
