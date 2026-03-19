import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "minimalist",
      description: "hyper minimal todolist",
      tags: ["nextjs", "react", "tailwindcss", "convexDB", "clerk"],
      github: "https://github.com/2concrete/minimalist",
      link: "https://minimalist.ws",
    },
    {
      title: "wrd",
      description: "random website to display text",
      tags: ["nextjs", "react", "tailwindcss", "convexDB"],
      github: "https://github.com/2concrete/wrd",
      link: "https://wrd-hazel.vercel.app/",
    },
    {
      title: "portfolio",
      description: "this minimal portfolio",
      tags: ["nextjs", "react", "tailwindcss"],
      github: "https://github.com/2concrete/portfolio",
      link: "https://concrete.codes",
    },
  ];

  return (
    <div className="">
      <p className="text-2xl mb-5">projects</p>
      {projects.map((project) => {
        return (
          <div key={project.title} className="flex justify-between mb-4">
            <div className="flex-col flex">
              <span className="flex items-center gap-2">
                <a
                  href={project.link}
                  className="text-lg hover:opacity-70 transition-all"
                >
                  {project.title}
                </a>
                <a href={project.github}>
                  <FaGithub className="size-4 cursor-pointer hover:opacity-70 transition-all" />
                </a>
              </span>

              <p className="text-sm opacity-80">{project.description}</p>
              <div className="flex gap-1">
                {project.tags.map((tag, idx) => {
                  return (
                    <div className="text-xs opacity-50" key={tag}>
                      {tag}
                      {idx < project.tags.length - 1 ? "," : ""}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex gap-2"></div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
