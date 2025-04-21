import LearningPosts from "../../../../data/LearningPosts.json";

import { getUrl } from "../../../../utils/functions/Getters";

export default function Y3S1() {
  return (
    <>
      <div className="page-section">
        <h3>Courses</h3>
        <h2>
          <u>Computing</u>
        </h2>
        {LearningPosts.Years[0].Y3S1.Computing.map((learningPost, idx) => {
          return (
            <div className="course-card" key={idx}>
              <div className="course-tab" />
              <div className="course-card-body">
                <h2>
                  <a
                    href={`${getUrl()}/courses/computing/${learningPost.code}`}
                    target="_blank"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    {learningPost.title}
                  </a>
                </h2>
              </div>
            </div>
          );
        })}
        <h2>
          <u>NUSC</u>
        </h2>
        {LearningPosts.Years[0].Y3S1.NUSC.map((learningPost, idx) => {
          return (
            <div className="course-card" key={idx}>
              <div className="course-tab" />
              <div className="course-card-body">
                <h2>
                  <a
                    href={`${getUrl()}/courses/nusc/${learningPost.code}`}
                    target="_blank"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    {learningPost.title}
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
