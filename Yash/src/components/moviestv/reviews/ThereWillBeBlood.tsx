import MovieReviewPage from "./MovieReviewPage";
import { MovieTVReview } from "../../../utils/typedefs/MoviesTVCustomTypes";

export default function ThereWillBeBlood({
  review,
}: {
  review: MovieTVReview;
}) {
  return <MovieReviewPage review={review} />;
}
