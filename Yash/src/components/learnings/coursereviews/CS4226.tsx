import CoursePage from "../CoursePage";
import { CoursePostType } from "../../../utils/typedefs/LearningsCustomTypes";

export default function CS4226({ course }: { course: CoursePostType }) {
  const images = undefined;
  return <CoursePage course={course} images={images} />;
}
