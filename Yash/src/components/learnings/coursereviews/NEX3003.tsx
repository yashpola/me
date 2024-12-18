import CoursePage from "../CoursePage";
import { CoursePostType } from "../../../utils/typedefs/LearningsCustomTypes";

export default function NEX3003({ course }: { course: CoursePostType }) {
  return <CoursePage course={course} />;
}
