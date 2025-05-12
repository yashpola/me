import { ReactElement } from "react";
import { CopyBlock } from "react-code-blocks";

import ProblemDescription from "../ProblemDescription";

import { defaultCodeBlockConfigs } from "../../../../utils/constants/ComponentConstants";
import { ProblemPostType } from "../../../../utils/typedefs/LearningsCustomTypes";

export default function BalancedBinaryTree({
  problem,
}: {
  problem: ProblemPostType;
}) {
  const solutions: ReactElement[] = [
    <CopyBlock
      text={`def isBalanced(self, root: TreeNode):
        node_heights = {}

        stack = []
        visited = set()

        stack.append(root)
        while stack:
            node = stack[-1]

            if node in visited:
                stack.pop()
                left_height = node_heights.get(node.left, 0)
                right_height = node_heights.get(node.right, 0)

                if abs(left_height - right_height) > 1:
                    return False

                node_heights[node] = 1 + max(left_height, right_height)
            else:
                visited.add(node)
                if node.right:
                    stack.append(node.right)
                if node.left:
                    stack.append(node.left)

        return True`}
      language={"python"}
      {...defaultCodeBlockConfigs}
    />,
  ];

  return <ProblemDescription problem={problem} solutions={solutions} />;
}
