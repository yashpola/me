import { PortfolioPost } from "../../../../utils/typedefs/PortfolioCustomTypes";

export default function HRSystemTasks({ post }: { post: PortfolioPost }) {
  return (
    <div>
      {post.Description}
      {post.References}
      {post.Subtitle}
      {post.Title}
    </div>
  );
}
