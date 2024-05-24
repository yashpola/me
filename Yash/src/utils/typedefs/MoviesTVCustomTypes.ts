interface Review {
  order: number;
  thumbnail: string;
  clip: string;
  name: string;
  year: number;
  title: string;
  subtitle: string;
  quote: string;
  thoughts: string[];
  rating: number;
  trivia: string[];
  recommendations: string;
}

export interface MovieReview extends Review {
  boxOffice: number;
}

export interface TVReview extends Review {}

export interface MovieComponentMapType {
  [key: string]: React.ComponentType<{ review: MovieReview }>;
}

export interface TVComponentMapType {
  [key: string]: React.ComponentType<{ review: TVReview }>;
}

export interface SortingRulesType {
  BOXOFFICELOW: string;
  BOXOFFICEHIGH: string;
  YEARFIRST: string;
  YEARLAST: string;
  RATINGLOW: string;
  RATINGHIGH: string;
  RECENCYMOST: string;
  RECENCYLEAST: string;
}

export interface DashboardType {
  MOVIE: string;
  TV: string;
}

export type sortRuleSetter = (arg0: string) => void;
