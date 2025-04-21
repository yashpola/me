import CoursePage from "../CoursePage";

import { CoursePostType } from "../../../../utils/typedefs/LearningsCustomTypes";

export default function CS3231({ course }: { course: CoursePostType }) {
  const images = {
    sources: [
      "https://cstaleem.com/wp-content/uploads/2021/08/Difference-between-DFA-and-NFA.png",
      "https://i.gyazo.com/65a6d4cd19492f9c00b149155479897d.png",
      "https://www.asethome.org/mathfoundations/asynchronous/tm3.gif",
    ],
    styles: [
      {
        height: "400px",
        width: "500px",
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
        height: "350px",
        width: "500px",
        border: "3px solid black",
        boxShadow:
          "0 6px 6px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08)",
      },
    ],
  };
  return <CoursePage course={course} images={images} />;
}
