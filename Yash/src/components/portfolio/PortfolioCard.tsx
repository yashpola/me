import { PortfolioPost } from "../../utils/typedefs/PortfolioCustomTypes";
import { toggleUnderlineOnHover } from "../../utils/functions/StyleModifiers";

export default function PortfolioCard({
  portfolioPost,
}: {
  portfolioPost: PortfolioPost;
}) {
  return (
    <div className="portfolio-card">
      <div className="portfolio-card-header">
        <h1>{portfolioPost.Title}</h1>
        <h2>{portfolioPost.Subtitle}</h2>
      </div>
      <p>
        <u>Description</u>
      </p>
      <ul>
        {portfolioPost.Description.map((item, idx) => {
          return <li key={idx}>{item}</li>;
        })}
      </ul>
      <p>
        <u>References</u>
      </p>
      <ul>
        {portfolioPost.References.map((ref, idx) => {
          return (
            ref[1] !== "" && (
              <li key={idx}>
                <a
                  id={"Portfolio card " + ref[1]}
                  className="portfolio-card-link"
                  href={ref[1]}
                  target="_blank"
                  title={"Portfolio card " + ref[1]}
                  onMouseEnter={(e) => {
                    e.preventDefault();
                    toggleUnderlineOnHover(
                      document.getElementById("Portfolio card " + ref[1]),
                      1
                    );
                  }}
                  onMouseLeave={(e) => {
                    e.preventDefault();
                    toggleUnderlineOnHover(
                      document.getElementById("Portfolio card " + ref[1]),
                      0
                    );
                  }}
                >
                  {ref[0]}
                </a>
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
}
