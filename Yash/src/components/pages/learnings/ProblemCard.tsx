export default function ProblemCard({
  title,
  image,
}: {
  title: string;
  image: string;
}) {
  return (
    <div className="problem-card-body">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <img src={image} className="problem-image" />
        <div className="problem-card-footer">{title}</div>
      </div>
    </div>
  );
}
