import { ReactElement } from "react";
import { CopyBlock } from "react-code-blocks";

import ProblemDescription from "../ProblemDescription";

import { defaultCodeBlockConfigs } from "../../../../utils/constants/ComponentConstants";
import { ProblemPostType } from "../../../../utils/typedefs/LearningsCustomTypes";

export default function MajorityElement({
  problem,
}: {
  problem: ProblemPostType;
}) {
  const solutions: ReactElement[] = [
    <CopyBlock
      text={`def majorityElement(self, nums: List[int]) -> int:
        counter = 0
        majElement = nums[0]

        for num in nums:
            if num == majElement:
                counter += 1
            if num != majElement:
                counter -= 1
            if counter == 0:
                majElement = num
                counter += 1
        
        return majElement`}
      language={"python"}
      {...defaultCodeBlockConfigs}
    />,
  ];

  return <ProblemDescription problem={problem} solutions={solutions} />;
}
