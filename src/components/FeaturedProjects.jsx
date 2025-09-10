import FeaturedProject from "./FeaturedProject";

const FeaturedProjects = () => {
  return (
    <div>
      <p className="text-3xl mt-10 mb-5">featured projects</p>
      <div className="grid grid-cols-2 gap-5">
        <FeaturedProject
          image="/todolist.png"
          title="todo app"
          link="https://google.com"
          desc="minimal todo list app with many features"
          github="https://github.com/2concrete/todolist-app"
        />
        <FeaturedProject
          image="/imagetools.png"
          title="image.tools"
          link="https://google.com"
          desc={`minimalist image effects website using react-image-effects library`}
          github="https://github.com/2concrete/todolist-app"
        />
      </div>
    </div>
  );
};

export default FeaturedProjects;
