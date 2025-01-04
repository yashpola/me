import CoursePage from "../CoursePage";
import {
  CoursePostType,
  CourseImageType,
} from "../../../utils/typedefs/LearningsCustomTypes";
import image1 from "../../../assets/moviegraphexample.png";

export default function CS2109S({ course }: { course: CoursePostType }) {
  const images: CourseImageType = {
    sources: [
      image1,
      "https://miro.medium.com/v2/resize:fit:1400/0*xU7nWO4qYHw4qGd9.png",
      "https://datatron.com/wp-content/uploads/2021/05/Support-Vector-Machine.png",
    ],
    styles: [
      {
        height: "300px",
        width: "650px",
        border: "3px solid black",
        boxShadow:
          "0 6px 6px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08)",
      },
      {
        height: "300px",
        width: "600px",
        border: "3px solid black",
        boxShadow:
          "0 6px 6px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08)",
      },
      {
        height: "300px",
        width: "600px",
        border: "3px solid black",
        boxShadow:
          "0 6px 6px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08)",
      },
    ],
  };
  return <CoursePage course={course} images={images} />;
}
