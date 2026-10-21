import ReviewPage from "../ReviewPage";
import { MovieReview } from "../../../../utils/typedefs/MoviesTVCustomTypes";

export default function BladeRunner2049({ review }: { review: MovieReview }) {
  return <ReviewPage review={review} />;
}

