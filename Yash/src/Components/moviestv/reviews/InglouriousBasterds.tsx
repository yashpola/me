import { MovieTVReview } from "../../../utils/typedefs/MoviesTVCustomTypes";

export default function InglouriousBasterds({
  review,
}: {
  review: MovieTVReview;
}) {
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
