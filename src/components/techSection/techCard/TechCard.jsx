export default function TechCard({ techProp }) {
  const { name, img } = techProp;
  return (
    <div className="techCard">
      <img src={img} alt={name} />
      <h3 className="title3">{name}</h3>
    </div>
  );
}
