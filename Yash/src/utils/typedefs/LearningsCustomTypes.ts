export interface CoursePostType {
  code: string;
  title: string;
  generalreview: string;
  meme: string;
  prologue: string[];
  para1: string[];
  para2: string[];
  para3: string[];
}

export interface CourseImageType {
  sources: string[];
  styles: object[];
}

export interface CourseComponentMapType {
  [key: string]: React.ComponentType<{ course: CoursePostType }>;
}

export interface YearComponentMapType {
  [key: string]: React.ComponentType;
}
