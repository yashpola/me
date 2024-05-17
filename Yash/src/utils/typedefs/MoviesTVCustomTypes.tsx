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

export interface ComponentMapType {
  [key: string]: React.ComponentType<{ review: Review }>;
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
