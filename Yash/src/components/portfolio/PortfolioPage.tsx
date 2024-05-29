import { PortfolioPost } from "../../utils/typedefs/PortfolioCustomTypes";
import PortfolioCard from "./PortfolioCard";

export default function PortfolioPage({
  portfolioPosts,
}: {
  portfolioPosts: PortfolioPost[];
}) {
  return (
    <div className="page-section">
      {portfolioPosts.map((post, idx) => {
        return <PortfolioCard key={idx} portfolioPost={post} />;
      })}
    </div>
  );
}
