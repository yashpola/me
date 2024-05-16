import { MovieTVReview } from "../../../utils/typedefs/MoviesTVCustomTypes";

export default function ASpaceOdyssey({ review }: { review: MovieTVReview }) {
  return (
    <div>
      {review.title}
      {review.quote}
      {review.thoughts}
      {review.trivia}
      {review.recommendations}
    </div>
  );
}
