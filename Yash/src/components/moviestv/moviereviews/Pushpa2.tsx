import ReviewPage from "../ReviewPage";
import { MovieReview } from "../../../utils/typedefs/MoviesTVCustomTypes";

export default function Pushpa2({ review }: { review: MovieReview }) {
  return <ReviewPage review={review} />;
}
