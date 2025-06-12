import "./Projects.css";
import feather from "feather-icons";
import WeatherAppImgDark from "../../assets/weatherapp-dark.png";
import WeatherAppImgLight from "../../assets/weatherapp-light.png";
import nexus from "../../assets/nexus.png";
import Project from "./Project";
import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <>
      <h1 className="title">
        featured projects
        <i data-feather="chevron-down" />
      </h1>
      <div className="projects">
        <Project
          title="weather app"
          description="simple weather app that fetches from api"
          src={WeatherAppImgLight}
          tech="react"
        />
        <Project
          title="nexus"
          description="basic login page"
          src={nexus}
          tech="javascript, html, css"
        />
      </div>
    </>
  );
};

export default Projects;
