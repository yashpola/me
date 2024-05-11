import LearningPosts from "./LearningPosts.json";
import TruncatedLearningCard from "./TruncatedLearningCard.js";

export default function LearningsPage() {
  return (
    <>
      <div className="page-section">
        <h3>Knowledge Central</h3>
        {LearningPosts.Leetcode.map((entry, idx) => {
          return <TruncatedLearningCard key={idx} {...entry} />;
        })}
      </div>
    </>
  );
}
