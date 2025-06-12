import "./Projects.css";

const Project = (props) => {
  return (
    <div className="project">
      <img src={props.src} />
      <div className="project-text">
        <div className="title-tech">
          <h4>{props.title}</h4>
          <p>{props.tech}</p>
        </div>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Project;
