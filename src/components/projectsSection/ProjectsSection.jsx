import ProjectsList from "./projectsList/ProjectsList";
import {projects} from "../../data/projects";

export default function ProjectsSection() {
  return (
    <section className="projectSection">
      <h2 className="title2">Projetos</h2>
      <ProjectsList projectsProp={projects} />
    </section>
  );
}
