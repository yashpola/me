import { ReactElement } from "react";
import { CopyBlock } from "react-code-blocks";

import ProblemDescription from "../ProblemDescription";

import { defaultCodeBlockConfigs } from "../../../../utils/constants/ComponentConstants";
import { ProblemPostType } from "../../../../utils/typedefs/LearningsCustomTypes";

export default function LongestCommonPrefix({
  problem,
}: {
  problem: ProblemPostType;
}) {
  const solutions: ReactElement[] = [
    <CopyBlock
      text={`def longestCommonPrefix(self, strs: List[str]) -> str:
        strs.sort()

        smallest = strs[0]
        largest = strs[-1]

        lcp = ""
        for i in range(min(len(smallest), len(largest))):
            if smallest[i] == largest[i]:
                lcp += smallest[i]
                continue
            break
        
        return lcp`}
      language={"python"}
      {...defaultCodeBlockConfigs}
    />,
  ];

  return <ProblemDescription problem={problem} solutions={solutions} />;
}
