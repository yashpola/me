export interface CoursePostType {
  code: string;
  title: string;
  generalreview: string;
  image: string;
  prologue: string[];
  recap: string[];
  topic: string[];
}

export interface CourseComponentMapType {
  [key: string]: React.ComponentType<{ course: CoursePostType }>;
}

export interface YearComponentMapType {
  [key: string]: React.ComponentType;
}
