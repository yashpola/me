import PortfolioPostPage from "../PortfolioPostPage";

import showcaseImg from "../../../../assets/aria.png";

import { PortfolioPost } from "../../../../utils/typedefs/PortfolioCustomTypes";

export default function ARIA({ post }: { post: PortfolioPost }) {
  return (
    <div>
      <PortfolioPostPage post={post} showcaseImg={showcaseImg} />
    </div>
  );
}
