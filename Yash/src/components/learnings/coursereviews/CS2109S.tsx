import CoursePage from "../CoursePage";
import { CoursePostType } from "../../../utils/typedefs/LearningsCustomTypes";

export default function CS2109S({ course }: { course: CoursePostType }) {
  return <CoursePage course={course} />;
}
