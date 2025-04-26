import ProblemCard from "./ProblemCard";

import LearningPosts from "../../../data/LearningPosts.json";
import Years from "../../../data/Years.json";

import { getUrl } from "../../../utils/functions/Getters";
import Grid from "../../layouts/Grid";

export default function LearningsPage() {
  console.log(getUrl());
  return (
    <>
      <div className="page-section">
        <h1>School</h1>
        {Years.Years.map((year, idx) => {
          return (
            <div className="course-card" key={idx}>
              <div className="course-tab" />
              <div className="course-card-body">
                <h2>
                  <a
                    href={`${getUrl()}/${year}`}
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    {year}
                  </a>
                </h2>
              </div>
            </div>
          );
        })}
        <h1>Problems</h1>
        <Grid>
          {Object.keys(LearningPosts.Problems).map((problem, idx) => {
            return (
              <ProblemCard
                key={idx}
                link={`https://yashwit.com/learnings/problems/${problem}`}
                title={
                  LearningPosts.Problems[
                    problem as keyof typeof LearningPosts.Problems
                  ].title
                }
                image={
                  LearningPosts.Problems[
                    problem as keyof typeof LearningPosts.Problems
                  ].image
                }
              />
            );
          })}
        </Grid>
      </div>
    </>
  );
}
