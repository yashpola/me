export default function SummaryCard({
  title,
  image,
  difficultyColorStyle,
}: {
  title: string;
  image: string;
  difficultyColorStyle?: object;
}) {
  return (
    <div className="summary-card-body">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <img src={image} className="summary-thumbnail" />
        <div className="summary-card-footer" style={difficultyColorStyle}>
          {title}
        </div>
      </div>
    </div>
  );
}
