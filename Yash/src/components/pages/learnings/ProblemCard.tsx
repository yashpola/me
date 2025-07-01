export default function ProblemCard({
  title,
  image,
  difficultyColorStyle,
}: {
  title: string;
  image: string;
  difficultyColorStyle: object;
}) {
  return (
    <div className="problem-card-body">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <img src={image} className="problem-image" />
        <div className="problem-card-footer" style={difficultyColorStyle}>
          {title}
        </div>
      </div>
    </div>
  );
}
