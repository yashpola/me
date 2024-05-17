import ReviewPage from "../ReviewPage";
import { TVReview } from "../../../utils/typedefs/MoviesTVCustomTypes";

export default function BojackHorseman({ review }: { review: TVReview }) {
  return <ReviewPage review={review} />;
}
