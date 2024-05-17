import MovieReviewPage from "./MovieReviewPage";
import { MovieTVReview } from "../../../utils/typedefs/MoviesTVCustomTypes";

export default function ASpaceOdyssey({ review }: { review: MovieTVReview }) {
  return <MovieReviewPage review={review} />;
}
