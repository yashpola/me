import { isEmptyValue } from "../../utils/functions/Validators";
import {
  CoursePostType,
  CourseImageType,
} from "../../utils/typedefs/LearningsCustomTypes";

export default function CoursePage({
  course,
  images,
}: {
  course: CoursePostType;
  images: CourseImageType | undefined;
}) {
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
        <img className="course-review-image" src={course.meme} />
        <div
          style={{
            textAlign: "justify",
            margin: "2%",
          }}
        >
          <p>{course.para1}</p>
        </div>
        {images?.sources[0] && (
          <img style={images.styles[0]} src={images.sources[0]} />
        )}
        <div
          style={{
            textAlign: "justify",
            margin: "2%",
          }}
        >
          {course.para2 && course.para2}
        </div>
        {!isEmptyValue(images?.sources[1]) && (
          <img style={images?.styles[1]} src={images?.sources[1]} />
        )}
        <div
          style={{
            textAlign: "justify",
            margin: "2%",
          }}
        >
          {course.para3 && course.para3}
        </div>
        {!isEmptyValue(images?.sources[2]) && (
          <img style={images?.styles[2]} src={images?.sources[2]} />
        )}
        <div
          style={{
            textAlign: "justify",
            margin: "2%",
          }}
        >
          {!isEmptyValue(course.generalreview) && (
            <h2>
              <a href={course.generalreview} target="_blank">
                Link to general review (ysp on nusmods)
              </a>
            </h2>
          )}
        </div>
      </div>
    </>
  );
}
