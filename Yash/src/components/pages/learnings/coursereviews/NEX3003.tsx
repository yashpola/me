import CoursePage from "../CoursePage";

import { CoursePostType } from "../../../../utils/typedefs/LearningsCustomTypes";

export default function NEX3003({ course }: { course: CoursePostType }) {
  const images = {
    sources: [
      "https://upload.wikimedia.org/wikipedia/commons/3/3a/Bombardier_R62A_%E2%80%9C1%E2%80%9D_Train_arriving_into_207th_Street_-_November_2022.jpg",
    ],
    styles: [
      {
        height: "400px",
        width: "600px",
        border: "3px solid black",
        boxShadow:
          "0 6px 6px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08)",
      },
    ],
  };
  return <CoursePage course={course} images={images} />;
}
