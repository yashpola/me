import { ReactElement } from "react";
import { CopyBlock } from "react-code-blocks";

import ProblemDescription from "../ProblemDescription";

import { defaultCodeBlockConfigs } from "../../../../utils/Constants";
import { ProblemPostType } from "../../../../utils/typedefs/LearningsCustomTypes";

export default function MergeTwoSortedLists({
  problem,
}: {
  problem: ProblemPostType;
}) {
  const solutions: ReactElement[] = [
    <CopyBlock
      text={`public ListNode mergeTwoSortedLists(ListNode list1, ListNode list2) {
        ListNode curr = new ListNode(-101);
        ListNode result = curr;
        while (list1 != null || list2 != null) {
            if (list1 != null && list2 != null) {
                if (list1.val <= list2.val) {
                    curr.next = list1;
                    list1 = list1.next;
                } else {
                    curr.next = list2;
                    list2 = list2.next;
                }
                curr = curr.next;
                continue;
            }   
            if (list1 != null) {
                curr.next = list1;
                break;
            } else {
                curr.next = list2;
                break;
            }
        }
        return result.next;
    }`}
      language={"java"}
      {...defaultCodeBlockConfigs}
    />,
  ];

  return <ProblemDescription problem={problem} solutions={solutions} />;
}
