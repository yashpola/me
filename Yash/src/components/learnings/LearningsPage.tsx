import Years from "../../data/Years.json";

export default function LearningsPage() {
  return (
    <>
      <div className="page-section">
        <h1>Years & Semesters</h1>
        {Years.Years.map((year, idx) => {
          return (
            <div className="course-card" key={idx}>
              <div className="course-tab" />
              <div className="course-card-body">
                <h2>
                  <a
                    href={`http://localhost:5173/${year}`}
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    {year}
                  </a>
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
