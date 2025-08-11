import { ReactElement } from "react";
import { CopyBlock } from "react-code-blocks";

import ProblemDescription from "../ProblemDescription";

import { defaultCodeBlockConfigs } from "../../../../utils/constants/ComponentConstants";
import { ProblemPostType } from "../../../../utils/typedefs/LearningsCustomTypes";

export default function ProductOfArrayExceptSelf({
  problem,
}: {
  problem: ProblemPostType;
}) {
  const solutions: ReactElement[] = [
    <CopyBlock
      text={`def productOfArrayExceptSelf(nums: List[int]) -> List[int]:
        prefixSums = [1] * len(nums)
        for i in range(1, len(nums)):
            prefixSums[i] = prefixSums[i - 1] * nums[i - 1]
        
        suffixSum = nums[-1]
        for i in range(len(nums) - 2, -1, -1):
            prefixSums[i] *= suffixSum
            suffixSum *= nums[i]
        
        return prefixSums
        `}
      language={"python"}
      {...defaultCodeBlockConfigs}
    />,
  ];

  return <ProblemDescription problem={problem} solutions={solutions} />;
}
