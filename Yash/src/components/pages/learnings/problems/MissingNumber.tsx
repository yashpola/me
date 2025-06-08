import { ReactElement } from "react";
import { CopyBlock } from "react-code-blocks";

import ProblemDescription from "../ProblemDescription";

import { defaultCodeBlockConfigs } from "../../../../utils/constants/ComponentConstants";
import { ProblemPostType } from "../../../../utils/typedefs/LearningsCustomTypes";

export default function MissingNumber({
  problem,
}: {
  problem: ProblemPostType;
}) {
  const solutions: ReactElement[] = [
    <CopyBlock
      text={`def missingNumber(self, nums: List[int]) -> int:
        return reduce(lambda x, y: x ^ y, nums, 0) ^ reduce(lambda x, y: x ^ y, list(range(0, len(nums) + 1)), 0)`}
      language={"python"}
      {...defaultCodeBlockConfigs}
    />,
  ];

  return <ProblemDescription problem={problem} solutions={solutions} />;
}
