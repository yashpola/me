import { MovieTVReview } from "../../../utils/typedefs/MoviesTVCustomTypes";

export default function MovieReviewPage({ review }: { review: MovieTVReview }) {
  return (
    <div
      style={{
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        textAlign: "center",
        margin: "2%",
      }}
    >
      <h1 style={{ textDecoration: "underline" }}>{review.title}</h1>
      <h2>{review.subtitle}</h2>
      <img
        className="movietv-poster"
        style={{
          borderRadius: "5px",
          height: "500px",
          width: "325px",
          backgroundColor: "#B19A7A",
          border: "5px solid #906E3E",
          padding: "10px",
        }}
        src={review.thumbnail}
        title="Movie Image"
      />
      <h4>"{review.quote}"</h4>
      <p>{review.thoughts.join(" ")}</p>
      <iframe src={review.clip} style={{ width: "800px", height: "400px" }} />
      <div style={{ textAlign: "left" }}>
        <p>Rating: {review.rating}/5</p>
        <p>Trivia: {review.trivia.join(" ")}</p>
        <p>
          If you liked {review.name}, check out: {review.recommendations}
        </p>
      </div>
    </div>
  );
}
