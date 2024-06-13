import TechCard from "../techCard/TechCard";

export default function TechList({ technologiesProp }) {
  return (
    <ul className="techList">
      {technologiesProp.map((tech) => (
        <TechCard key={tech.name} techProp={tech} />
      ))}
    </ul>
  );
}
