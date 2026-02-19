import { FaGithub } from "react-icons/fa";
import { MdOutlineInsertLink } from "react-icons/md";

const ProjectSection = () => {
  const projects = [
    {
      title: "minimalist",
      description: "hyper minimal todolist",
      tags: ["nextjs", "react", "tailwindcss", "convexDB", "clerk"],
    },
  ];

  return (
    <div>
      <p className="text-2xl mb-5">projects</p>
      {projects.map((project) => {
        return (
          <div key={project.title} className="flex justify-between">
            <div className="flex-col flex">
              <span className="flex items-center gap-2">
                {" "}
                <p className="text-lg">{project.title}</p>
                <a href="https://github.com/2concrete/minimalist-v2">
                  <FaGithub className="size-4 cursor-pointer hover:opacity-70 transition-all" />
                </a>
              </span>

              <p className="text-sm opacity-80">{project.description}</p>
              <div className="flex gap-1">
                {project.tags.map((tag, idx) => {
                  return (
                    <div className="text-xs opacity-50 rounded" key={tag}>
                      {tag}
                      {idx < project.tags.length - 1 ? "," : ""}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex gap-2">
              <a
                href="https://minimalist.ws"
                className="cursor-pointer hover:opacity-70 transition-all h-fit"
              >
                try it
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectSection;
