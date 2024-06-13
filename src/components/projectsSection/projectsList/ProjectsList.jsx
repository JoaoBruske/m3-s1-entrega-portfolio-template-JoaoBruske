import ProjectCard from "../projectCard/ProjectCard";

export default function ProjectsList({ projectsProp }) {
  return (
    <ul className="projectList">
      {projectsProp.map((project) => <ProjectCard key={project.name} projectProp={project} />
      )}
    </ul>
  );
}
