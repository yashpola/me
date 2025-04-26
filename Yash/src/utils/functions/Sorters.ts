import { MovieReview, TVReview } from "../typedefs/MoviesTVCustomTypes";
import { SortingRules } from "../constants/ComponentConstants";

export default function SortByCustomRule(
  review1: MovieReview | TVReview,
  review2: MovieReview | TVReview,
  sortRule: string
): number {
  function isMovieReview(review: any): review is MovieReview {
    return (review as MovieReview).boxOffice !== undefined;
  }

  switch (sortRule) {
    case SortingRules.BOXOFFICELOW:
      if (isMovieReview(review1) && isMovieReview(review2)) {
        return review1.boxOffice - review2.boxOffice;
      }
      return 0;
    case SortingRules.BOXOFFICEHIGH:
      if (isMovieReview(review1) && isMovieReview(review2)) {
        return review2.boxOffice - review1.boxOffice;
      }
      return 0;
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
