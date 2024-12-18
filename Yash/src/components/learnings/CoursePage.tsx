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
        <img className="course-review-image" src={course.image} />
      </div>
      <div
        style={{
          textAlign: "left",
          margin: "2%",
        }}
      >
        {course.generalreview && (
          <h2>
            <a href={course.generalreview} target="_blank">
              Link to general review (nusmods)
            </a>
          </h2>
        )}
        <p>{course.prologue}</p>
        <p>{course.recap}</p>
      </div>
    </>
  );
}
