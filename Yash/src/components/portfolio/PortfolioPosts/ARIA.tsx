import showcaseImg from "../../../assets/aria.png";
import { PortfolioPost } from "../../../utils/typedefs/PortfolioCustomTypes";
import PortfolioPostPage from "../PortfolioPostPage";

export default function ARIA({ post }: { post: PortfolioPost }) {
  return (
    <div>
      <PortfolioPostPage post={post} showcaseImg={showcaseImg} />
    </div>
  );
}
