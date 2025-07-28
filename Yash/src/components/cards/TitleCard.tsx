export default function TitleCard({ title }: { title: string }) {
  return (
    <div className="title-card">
      <div className="title-card-tab" />
      <div className="title-card-body">
        <h2>{title}</h2>
      </div>
    </div>
  );
}
