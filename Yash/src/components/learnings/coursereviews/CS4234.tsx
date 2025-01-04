import CoursePage from "../CoursePage";
import { CoursePostType } from "../../../utils/typedefs/LearningsCustomTypes";

export default function CS4234({ course }: { course: CoursePostType }) {
  const images = {
    sources: [
      "https://s3.us-east-1.amazonaws.com/swc-prod-event-content-standalone/challenge-images/qaoa/vertex_covers.png",
      "https://rusyasoft.github.io/assets/2018-09-10-maxflow/MaximumFlowEx1Pg2.jpg",
    ],
    styles: [
      {
        height: "300px",
        width: "500px",
        border: "3px solid black",
        boxShadow:
          "0 6px 6px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08)",
      },
      {
        height: "300px",
        width: "550px",
        border: "3px solid black",
        boxShadow:
          "0 6px 6px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08)",
      },
    ],
  };
  return <CoursePage course={course} images={images} />;
}
