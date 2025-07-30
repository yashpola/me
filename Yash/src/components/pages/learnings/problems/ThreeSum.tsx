import { ReactElement } from "react";
import { CopyBlock } from "react-code-blocks";

import ProblemDescription from "../ProblemDescription";

import { defaultCodeBlockConfigs } from "../../../../utils/constants/ComponentConstants";
import { ProblemPostType } from "../../../../utils/typedefs/LearningsCustomTypes";

export default function ThreeSum({
  problem,
}: {
  problem: ProblemPostType;
}) {
  const solutions: ReactElement[] = [
    <CopyBlock
      text={`def threeSum(self, nums: List[int]) -> List[List[int]]:
        triplets = []
        nums.sort()
        for i in range(0, len(nums)):
            if nums[i] > 0:
                break
            if i != 0 and nums[i] == nums[i - 1]:
                continue
            target = -nums[i]
            j = i + 1
            k = len(nums) - 1
            while j < k:
                if nums[j] + nums[k] == target:
                    triplets.append([nums[i], nums[j], nums[k]])
                    j += 1
                    k -= 1
                    while nums[j] == nums[j - 1] and j < k:
                        j += 1
                else:
                    if nums[j] + nums[k] > target:
                        k -= 1
                    else:
                        j += 1
        return triplets`}
      language={"python"}
      {...defaultCodeBlockConfigs}
    />,
  ];

  return <ProblemDescription problem={problem} solutions={solutions} />;
}
