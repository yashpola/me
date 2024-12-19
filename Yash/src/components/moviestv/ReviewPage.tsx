import {
  MovieReview,
  TVReview,
} from "../../utils/typedefs/MoviesTVCustomTypes";

export default function ReviewPage({
  review,
}: {
  review: MovieReview | TVReview;
}) {
  return (
    <div
      style={{
        textAlign: "center",
        margin: "2%",
      }}
    >
      <h1 style={{ textDecoration: "underline" }}>{review.title}</h1>
      <h2>{review.subtitle}</h2>
      <img
        className="movietv-review-image"
        src={review.thumbnail}
        title={`${review.name} Image`}
      />
      <h4>"{review.quote}"</h4>
      <p style={{ textAlign: "justify" }}>{review.thoughts.join(" ")}</p>
      <br />
      <iframe className="youtube-iframe" src={review.clip} />
      <div style={{ textAlign: "justify" }}>
        <p>Rating: {review.rating}/5</p>
        <p>Trivia: {review.trivia.join(" ")}</p>
        <p>
          If you liked {review.name}, check out: {review.recommendations}
        </p>
      </div>
    </div>
  );
}
