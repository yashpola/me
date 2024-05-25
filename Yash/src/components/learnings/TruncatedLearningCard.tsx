import { useState } from "react";

import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import { LearningPostType } from "../../utils/typedefs/LearningsCustomTypes";

export default function TruncatedLearningCard({
  LearningPost,
}: {
  LearningPost: LearningPostType;
}) {
  const [cardExpanded, expandCard] = useState<boolean>(false);

  return (
    <div className="learning-card">
      <div className="learning-card-tab" />
      <div className="learning-card-body">
        <h2>{LearningPost.title}</h2>
        <h4>
          <a href={LearningPost.link} title="Link to Problem" target="_blank">
            <u>{LearningPost.subtitle}</u>
          </a>
        </h4>
        {cardExpanded ? (
          <>
            <ArrowDropUp
              onClick={() => expandCard(false)}
              fontSize="large"
              sx={{ cursor: "pointer" }}
            />
            <p className="learning-card-paragraph">
              {LearningPost.body.join(" ")}
            </p>
          </>
        ) : (
          <ArrowDropDown
            onClick={() => expandCard(true)}
            fontSize="large"
            sx={{ cursor: "pointer" }}
          />
        )}
      </div>
    </div>
  );
}
