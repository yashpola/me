import { useLocation } from "react-router-dom";

import LearningPosts from "../../../data/LearningPosts.json";
import Terms from "../../../data/AcademicTerms.json";

import { constructTargetUrl } from "../../../utils/functions/Constructors";

import SummaryCard from "../../cards/SummaryCard";
import Chip from "../../chips/Chip";
import FlexRow from "../../layouts/FlexRow";
import Grid from "../../layouts/Grid";
import LinkedComponent from "../../navigation/LinkedComponent";

export default function SchoolSection() {
  const { pathname: basePath } = useLocation();

  return (
    <>
      {Terms.Terms.map((term) => {
        return (
          <div key={`${term}`}>
            <FlexRow>
              <div>Term:&nbsp;</div>
              <Chip id={`${term}`} style={{ cursor: "pointer" }}>
                {term}
              </Chip>
            </FlexRow>
            <Grid>
              {LearningPosts.Years.flatMap((_year) =>
                _year[term as keyof typeof _year].map((course, idx) => (
                  <LinkedComponent
                    key={idx}
                    to={constructTargetUrl(basePath, `${term}/${course.code}`)}
                  >
                    <SummaryCard
                      title={course.title}
                      image={course.thumbnail}
                    />
                  </LinkedComponent>
                ))
              )}
            </Grid>
            <br />
          </div>
        );
      })}
    </>
  );
}
