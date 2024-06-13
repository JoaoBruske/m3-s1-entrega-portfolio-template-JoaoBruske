import git from "../../../assets/git-icon.png";

export default function ProjectCard({ projectProp }) {
  const { name, description } = projectProp;
  return (
    <div className="projectCard"> 
      <div>
        <h3 className="title3">{name}</h3>
        <p className="paragraph">{description}</p>
        <a className="link">Saiba mais</a>
      </div>
      <img src={git} alt="icone git" />
    </div>
  );
}
