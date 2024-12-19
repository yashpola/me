import { CoursePostType } from "../../utils/typedefs/LearningsCustomTypes";

export default function CoursePage({ course }: { course: CoursePostType }) {
  return (
    <>
      <div
        style={{
          textAlign: "center",
          margin: "2%",
        }}
      >
        <h1 style={{ textDecoration: "underline" }}>{course.title}</h1>
        <div
          style={{
            textAlign: "justify",
            margin: "2%",
          }}
        >
          <p>{course.prologue}</p>
        </div>
        <img className="course-review-image" src={course.image} />
        <div
          style={{
            textAlign: "justify",
            margin: "2%",
          }}
        >
          <p>{course.recap}</p>
          {course.generalreview && (
            <h2>
              <a
                className="custom-anchor"
                href={course.generalreview}
                target="_blank"
              >
                Link to general review (ysp on nusmods)
              </a>
            </h2>
          )}
        </div>
      </div>
    </>
  );
}
