export default function ProblemCard({
  link,
  title,
  image,
}: {
  link: string;
  title: string;
  image: string;
}) {
  return (
    <div className="problem-card-body">
      <a href={link} className="custom-anchor">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img src={image} className="problem-image" />
          <div className="problem-card-footer">{title}</div>
        </div>
      </a>
    </div>
  );
}
