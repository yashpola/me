import { PortfolioPost } from "../../../utils/typedefs/PortfolioCustomTypes";

export default function PortfolioPostPage({
  post,
  showcaseImg,
}: {
  post: PortfolioPost;
  showcaseImg: string;
}) {
  return (
    <div
      style={{
        textAlign: "center",
        margin: "2%",
      }}
    >
      <h1 style={{ textDecoration: "underline" }}>{post.Title}</h1>
      <h2>{post.Subtitle}</h2>
      <div
        style={{
          width: "500px",
          height: "500px",
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          className="portfoliopost-page-image"
          src={showcaseImg}
          title={`${post.Name} Image`}
        />
      </div>
      <p>{post.Description.join("")}</p>
      <br />
      {/* <iframe className="youtube-iframe" src={review.clip} />
  <div style={{ textAlign: "left" }}>
    <p>Rating: {review.rating}/5</p>
    <p>Trivia: {review.trivia.join(" ")}</p>
    <p>
      If you liked {review.name}, check out: {review.recommendations}
    </p>
  </div> */}
    </div>
  );
}
