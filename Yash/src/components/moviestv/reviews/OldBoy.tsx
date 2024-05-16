import MovieReviewPage from "./MovieReviewPage";
import { MovieTVReview } from "../../../utils/typedefs/MoviesTVCustomTypes";

export default function OldBoy({ review }: { review: MovieTVReview }) {
  return <MovieReviewPage review={review} />;
}
