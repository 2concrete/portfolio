import FeaturedProject from "./FeaturedProject";

const FeaturedProjects = () => {
  return (
    <div>
      <p className="text-3xl mt-10 mb-5">featured projects</p>
      <div className="grid grid-cols-2">
        <FeaturedProject
          image="/todolist.png"
          title="todo app"
          link="https://google.com"
          desc="minimal todo list app with many features"
          github="https://github.com/2concrete/todolist-app"
        />
      </div>
    </div>
  );
};

export default FeaturedProjects;
