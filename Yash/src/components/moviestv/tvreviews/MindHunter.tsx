import ReviewPage from "../ReviewPage";
import { TVReview } from "../../../utils/typedefs/MoviesTVCustomTypes";

export default function MindHunter({ review }: { review: TVReview }) {
  return <ReviewPage review={review} />;
}
