import { useState } from "react";

import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";

export default function TruncatedLearningCard({
  title,
  subtitle,
  body,
  link,
}: {
  title: string;
  subtitle: string;
  body: string[];
  link: string;
}) {
  const [cardExpanded, expandCard] = useState<boolean>(false);

  return (
    <div className="learning-card">
      <div className="learning-card-tab" />
      <div className="learning-card-body">
        <h2>{title}</h2>
        <h4>
          <a href={link} title="Link to Problem" target="_blank">
            <u>{subtitle}</u>
          </a>
        </h4>
        {cardExpanded ? (
          <>
            <ArrowDropUp
              onClick={() => expandCard(false)}
              fontSize="large"
              sx={{ cursor: "pointer" }}
            />
            <p className="learning-card-paragraph">{body.join(" ")}</p>
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
