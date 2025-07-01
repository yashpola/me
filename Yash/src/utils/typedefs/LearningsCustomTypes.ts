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

export interface ProblemPostType {
  title: string;
  difficulty: string;
  topics: string[];
  languages: string[];
  description: string[];
  example: string[];
  solution: string[];
  analysis: string[];
  image: string;
}

export interface ProblemComponentMapType {
  [key: string]: React.ComponentType<{ problem: ProblemPostType }>;
}
