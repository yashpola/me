import ReviewPage from "../ReviewPage";
import { MovieReview } from "../../../../utils/typedefs/MoviesTVCustomTypes";

export default function TheAviator({ review }: { review: MovieReview }) {
  return <ReviewPage review={review} />;
}
