import { ReactElement } from "react";
import { CopyBlock } from "react-code-blocks";

import ProblemDescription from "../ProblemDescription";

import { defaultCodeBlockConfigs } from "../../../utils/Constants";
import { ProblemPostType } from "../../../utils/typedefs/LearningsCustomTypes";

export default function BestTimeToBuyAndSellStock({
  problem,
}: {
  problem: ProblemPostType;
}) {
  const solutions: ReactElement[] = [
    <CopyBlock
      text={`def maxProfit(self, prices: List[int]) -> int:
        profit = 0
        minimum_price = inf
        for price in prices:
            if price < minimum_price:
                minimum_price = price
                continue
            if price - minimum_price > profit:
                profit = price - minimum_price
        return profit`}
      language={"python"}
      {...defaultCodeBlockConfigs}
    />,
  ];

  return <ProblemDescription problem={problem} solutions={solutions} />;
}
