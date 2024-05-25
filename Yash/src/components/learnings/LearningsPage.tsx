import LearningPosts from "../../data/LearningPosts.json";
import TruncatedLearningCard from "./TruncatedLearningCard.js";

export default function LearningsPage() {
  return (
    <>
      <div className="page-section">
        <h3>Knowledge Central</h3>
        {LearningPosts.Leetcode.map((learningPost, idx) => {
          return (
            <TruncatedLearningCard key={idx} LearningPost={learningPost} />
          );
        })}
      </div>
    </>
  );
}
