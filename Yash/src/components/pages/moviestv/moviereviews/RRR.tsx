import ReviewPage from "../ReviewPage";
import { MovieReview } from "../../../../utils/typedefs/MoviesTVCustomTypes";

export default function RRR({ review }: { review: MovieReview }) {
  return <ReviewPage review={review} />;
}

