import CoursePage from "../CoursePage";
import { CoursePostType } from "../../../utils/typedefs/LearningsCustomTypes";

export default function NHS2076({ course }: { course: CoursePostType }) {
  return <CoursePage course={course} />;
}
