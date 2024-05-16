export interface MovieTVReview {
  order: number;
  thumbnail: string;
  clip: string;
  name: string;
  year: number;
  boxOffice: number;
  title: string;
  subtitle: string;
  quote: string;
  thoughts: string[];
  rating: number;
  trivia: string[];
  recommendations: string;
}

export interface SortingRules {
  BOXOFFICELOW: string;
  BOXOFFICEHIGH: string;
  YEARFIRST: string;
  YEARLAST: string;
  RATINGLOW: string;
  RATINGHIGH: string;
  RECENCYMOST: string;
  RECENCYLEAST: string;
}

export interface ComponentMapType {
  [key: string]: React.ComponentType<{ review: MovieTVReview }>;
}
