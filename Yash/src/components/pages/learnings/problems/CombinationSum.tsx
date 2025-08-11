import { ReactElement } from "react";
import { CopyBlock } from "react-code-blocks";

import ProblemDescription from "../ProblemDescription";

import { defaultCodeBlockConfigs } from "../../../../utils/constants/ComponentConstants";
import { ProblemPostType } from "../../../../utils/typedefs/LearningsCustomTypes";

export default function CombinationSum({
  problem,
}: {
  problem: ProblemPostType;
}) {
  const solutions: ReactElement[] = [
    <CopyBlock
      text={`def combinationSum(candidates: List[int]) -> List[int]:
        candidates.sort()
        combinations = []

        def searchCombination(index, currentCombination, remainingTarget):
          if remainingTarget < 0:
            return 0
          if remainingTarget == 0:
            combinations.append(currentCombination)
            return 0
          for i in range(len(candidates)):
            result = searchCombination(i, currentCombination + [candidates[i]], target - candidates[i])
            if result == 0:
              break
        
        searchCombination(0, [], target)
        return combinations
        `}
      language={"python"}
      {...defaultCodeBlockConfigs}
    />,
  ];

  return <ProblemDescription problem={problem} solutions={solutions} />;
}
