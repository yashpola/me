import { PortfolioPost } from "../../../utils/typedefs/PortfolioCustomTypes";

export default function IEX({ post }: { post: PortfolioPost }) {
  return (
    <div>
      {post.Description}
      {post.References}
      {post.Subtitle}
      {post.Title}
    </div>
  );
}
