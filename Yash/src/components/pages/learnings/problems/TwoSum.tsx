import { ReactElement } from "react";
import { CopyBlock } from "react-code-blocks";

import ProblemDescription from "../ProblemDescription";

import { defaultCodeBlockConfigs } from "../../../../utils/constants/ComponentConstants";
import { ProblemPostType } from "../../../../utils/typedefs/LearningsCustomTypes";

export default function TwoSum({ problem }: { problem: ProblemPostType }) {
  const solutions: ReactElement[] = [
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
      {...defaultCodeBlockConfigs}
    />,
    <CopyBlock
      text={`public int[] twoSum(int[] nums, int target) {
        final Map<Integer, Integer> complements = new HashMap<>();
        final int[] arr = new int[]{0, 0};
        for (int i = 0; i < nums.length; i++) {
            if (complements.containsKey(nums[i])) {
                arr[0] = i;
                arr[1] = complements.get(nums[i]);
                break;
            }
            complements.put(target - nums[i], i);
        }
        return arr;
    }`}
      language={"java"}
      {...defaultCodeBlockConfigs}
    />,
  ];

  return <ProblemDescription problem={problem} solutions={solutions} />;
}
