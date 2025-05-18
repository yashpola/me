import { ReactElement } from "react";
import { CopyBlock } from "react-code-blocks";

import ProblemDescription from "../ProblemDescription";

import { defaultCodeBlockConfigs } from "../../../../utils/constants/ComponentConstants";
import { ProblemPostType } from "../../../../utils/typedefs/LearningsCustomTypes";

export default function ReverseLinkedList({
  problem,
}: {
  problem: ProblemPostType;
}) {
  const solutions: ReactElement[] = [
    <CopyBlock
      text={`def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head or not head.next:
            return head
        
        reversed_list = None
        while head:
            nxt = head.next
            head.next = reversed_list
            reversed_list = head
            head = nxt

        return reversed_list
`}
      language={"python"}
      {...defaultCodeBlockConfigs}
    />,
    <CopyBlock
      text={`def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head or not head.next:
            return head
        
        reversed_list = self.reverseList(head.next)
        head.next.next = head
        head.next = None

        return reversed_list`}
      language={"python"}
      {...defaultCodeBlockConfigs}
    />,
  ];

  return <ProblemDescription problem={problem} solutions={solutions} />;
}
