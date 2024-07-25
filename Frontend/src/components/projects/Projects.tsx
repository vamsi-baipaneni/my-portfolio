import ProjectCard from "./card/ProjectCard";
import "./index.scss";
import { projects } from "./projects";

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <h1 className="projects-title">PROJECTS</h1>
      <div className="projects-card">
        {projects.map((project, index) => (
          <div key={index}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
