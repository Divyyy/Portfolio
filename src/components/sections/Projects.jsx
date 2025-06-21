import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const projects = [
    {
      title: "Voice Assistant",
      description:
        "A web-based voice assistant built using Node.js and Express.js. It can launch apps like YouTube, Spotify, Notepad, and Chrome using voice commands. Includes dynamic search using Axios and time-based background changes.",
      techStack: ["HTML", "CSS", "Node.js", "Express.js"],
      link: "https://github.com/Divyyy/Voice-Assistance",
    //   live: "https://voice-assistant-divyam.netlify.app/", 
    },
    {
      title: "To-Do List App",
      description:
        "A clean and minimal to-do list app with support for task reminders, dark/light mode toggle, and background customization.",
      techStack: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/Divyyy/to-do-list",
      live: "https://divyyy.github.io/to-do-list/",
    },
     {
      title: "Stopwatch",
      description:
        "A clean and minimal to-do list app with support for task reminders, dark/light mode toggle, and background customization.",
      techStack: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/Divyyy/Stopwatch",
      live: "https://divyyy.github.io/stopwatch/",
    },
    {
      title: "Text to Speech",
      description:
        "Converts written text into spoken audio using JavaScript and the Web Speech API. Features clean UI, responsive design, and real-time voice output.",
      techStack: ["HTML", "CSS", "JavaScript"],
      link: "https://divyyy.github.com/text-to-speech-converter",
      live: "https://divyyy.github.io/text-to-speech-converter/",
    },
    {
      title: "Calculator",
      description:
        "Graphical user interface calculator.",
      techStack: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/Divyyy/calculator",
      live: "https://divyyy.github.io/calculator/",
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-black text-white">
     // <RevealOnScroll>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-xl p-6 bg-white/5 hover:-translate-y-1 transition-all"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-400">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  View Code
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white text-sm px-4 py-2 rounded hover:bg-green-700 transition"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
     // </RevealOnScroll>
    </section>
  );
};
