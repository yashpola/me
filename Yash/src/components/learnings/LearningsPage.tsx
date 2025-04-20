import LearningPosts from "../../data/LearningPosts.json";
import Years from "../../data/Years.json";

import { getUrl } from "../../utils/functions/Getters";

export default function LearningsPage() {
  return (
    <>
      <div className="page-section">
        <h1>School</h1>
        {Years.Years.map((year, idx) => {
          return (
            <div className="course-card" key={idx}>
              <div className="course-tab" />
              <div className="course-card-body">
                <h2>
                  <a
                    href={`${getUrl()}/${year}`}
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    {year}
                  </a>
                </h2>
              </div>
            </div>
          );
        })}
        <h1>Problems</h1>
        {Object.keys(LearningPosts.Problems).map((problem, idx) => {
          return (
            <div className="course-card" key={idx}>
              <div className="course-tab" />
              <div className="course-card-body">
                <h2>
                  <a
                    href={`${getUrl()}/learnings/problems/${problem}`}
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    {
                      LearningPosts.Problems[
                        problem as keyof typeof LearningPosts.Problems
                      ].title
                    }
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
