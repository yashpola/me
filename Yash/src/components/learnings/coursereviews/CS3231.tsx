import CoursePage from "../CoursePage";
import { CoursePostType } from "../../../utils/typedefs/LearningsCustomTypes";

export default function CS3231({ course }: { course: CoursePostType }) {
  return <CoursePage course={course} />;
}
