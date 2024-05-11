import { MovieTVReview, SortingRules } from "./MoviesTVCustomTypes";

export default function SortByCustomRule(
  review1: MovieTVReview,
  review2: MovieTVReview,
  sortRule: string
): number {
  const SortingRules: SortingRules = Object.freeze({
    BOXOFFICELOW: "bflow",
    BOXOFFICEHIGH: "bfhigh",
    YEARFIRST: "yearf",
    YEARLAST: "yearl",
    RECENCYMOST: "recencym",
    RECENCYLEAST: "recencyl",
    RATINGLOW: "ratingl",
    RATINGHIGH: "ratingh",
  });
  switch (sortRule) {
    case SortingRules.BOXOFFICELOW:
      return review1.boxOffice - review2.boxOffice;
    case SortingRules.BOXOFFICEHIGH:
      return review2.boxOffice - review1.boxOffice;
    case SortingRules.YEARFIRST:
      return review1.year - review2.year;
    case SortingRules.YEARLAST:
      return review2.year - review1.year;
    case SortingRules.RECENCYLEAST:
      return review1.order - review2.order;
    case SortingRules.RECENCYMOST:
      return review2.order - review1.order;
    case SortingRules.RATINGLOW:
      return review1.rating - review2.rating;
    case SortingRules.RATINGHIGH:
      return review2.rating - review1.rating;
    default:
      return review2.order - review1.order;
  }
}
