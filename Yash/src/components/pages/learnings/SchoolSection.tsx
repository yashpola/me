import { useState } from "react";
import { useLocation } from "react-router-dom";

import LearningPosts from "../../../data/LearningPosts.json";
import Years from "../../../data/Years.json";

import { defaultTopicChipStyle } from "../../../utils/constants/ComponentConstants";
import { constructTargetUrl } from "../../../utils/functions/Constructors";
import {
  addColorProps,
  removeColorProps,
} from "../../../utils/functions/StyleModifiers";
import { isEmptyValue } from "../../../utils/functions/Validators";

import SummaryCard from "../../cards/SummaryCard";
import Chip from "../../chips/Chip";
import FlexRow from "../../layouts/FlexRow";
import Grid from "../../layouts/Grid";
import LinkedComponent from "../../navigation/LinkedComponent";

export default function SchoolSection() {
  const { pathname: basePath } = useLocation();

  const [selectedTerms, setSelectedTerms] = useState<string[]>([]);

  return (
    <>
      {Years.Years.map((term) => {
        return (
          <div key={`${term}`}>
            <FlexRow>
              <div>Terms:&nbsp;</div>
              <Chip
                id={`${term}`}
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  e.preventDefault();
                  if (!selectedTerms.includes(term)) {
                    setSelectedTerms([...selectedTerms, term]);

                    addColorProps(document.getElementById(term), {
                      backgroundColor: "brown",
                      color: "white",
                    });
                  } else {
                    setSelectedTerms(
                      selectedTerms.filter(
                        (selectedTerm) => selectedTerm !== term
                      )
                    );

                    removeColorProps(document.getElementById(term), {
                      ...defaultTopicChipStyle,
                    });
                  }
                }}
              >
                {term}
              </Chip>
            </FlexRow>
            <Grid>
              {LearningPosts.Years.flatMap((_year) =>
                _year[term as keyof typeof _year].map((course, idx) =>
                  isEmptyValue(selectedTerms) ||
                  selectedTerms?.includes(term) ? (
                    <LinkedComponent
                      key={idx}
                      to={constructTargetUrl(
                        basePath,
                        `${term}/${course.code}`
                      )}
                    >
                      <SummaryCard
                        title={course.title}
                        image={course.thumbnail}
                      />
                    </LinkedComponent>
                  ) : (
                    <></>
                  )
                )
              )}
            </Grid>
          </div>
        );
      })}
    </>
  );
}
