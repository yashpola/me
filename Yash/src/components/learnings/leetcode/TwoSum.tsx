import { ReactElement } from "react";
import { CopyBlock, obsidian } from "react-code-blocks";

import ProblemDescription from "../ProblemDescription";

import { ProblemPostType } from "../../../utils/typedefs/LearningsCustomTypes";

export default function TwoSum({ problem }: { problem: ProblemPostType }) {
  const solution: ReactElement = (
    <CopyBlock
      text={`def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        complements = {}
        result = [0, 0]
        for i in range(len(nums)):
            if nums[i] in complements:
                result[0] = i
                result[1] = complements[nums[i]]
                break
            complements[target - nums[i]] = i
        return result`}
      language={"python"}
      showLineNumbers={true}
      theme={obsidian}
      codeBlock
    />
  );

  return <ProblemDescription problem={problem} solution={solution} />;
}
