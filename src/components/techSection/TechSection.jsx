import TechList from "./techList/TechList";
import { technologies } from "../../data/technologies";

export default function TechSection() {
  return (
    <section className="techSection">
      <h2 className="title2">Tecnologias</h2>
      <TechList technologiesProp={technologies} />
    </section>
  );
}
