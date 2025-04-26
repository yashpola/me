import { ReactElement } from "react";
import { CopyBlock } from "react-code-blocks";

import ProblemDescription from "../ProblemDescription";

import { defaultCodeBlockConfigs } from "../../../../utils/constants/ComponentConstants";
import { ProblemPostType } from "../../../../utils/typedefs/LearningsCustomTypes";

export default function LinkedListCycle({
  problem,
}: {
  problem: ProblemPostType;
}) {
  const solutions: ReactElement[] = [
    <CopyBlock
      text={`bool hasCycle(struct ListNode *head) {
        struct ListNode *hare = head;
        struct ListNode *tortoise = head;

        while (hare != NULL && hare->next != NULL) {
            hare = hare->next->next;
            if (hare == tortoise) {
                return true;
            }
            tortoise = tortoise->next;
        }

        return false;
        }`}
      language={"c"}
      {...defaultCodeBlockConfigs}
    />,
  ];

  return <ProblemDescription problem={problem} solutions={solutions} />;
}
