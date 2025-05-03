import { useLocation } from "react-router-dom";

import LearningPosts from "../../../data/LearningPosts.json";
import Years from "../../../data/Years.json";

import { constructTargetUrl } from "../../../utils/functions/Constructors";

import TitleCard from "./TitleCard";
import ProblemCard from "./ProblemCard";

import Grid from "../../layouts/Grid";
import LinkedComponent from "../../navigation/LinkedComponent";

export default function LearningsPage() {
  const { pathname: basePath } = useLocation();

  return (
    <>
      <div className="page-section">
        <h1>School</h1>
        {Years.Years.map((year, idx) => {
          return (
            <LinkedComponent key={idx} to={constructTargetUrl(basePath, year)}>
              <TitleCard title={year} />
            </LinkedComponent>
          );
        })}
        <h1>Problems</h1>
        <Grid>
          {Object.keys(LearningPosts.Problems).map((problem, idx) => {
            return (
              <LinkedComponent key={idx} to={`/learnings/${problem}`}>
                <ProblemCard
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
              </LinkedComponent>
            );
          })}
        </Grid>
      </div>
    </>
  );
}
