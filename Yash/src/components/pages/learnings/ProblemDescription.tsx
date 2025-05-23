import { ReactElement } from "react";

import { LanguageColorCodes } from "../../../utils/constants/ComponentConstants";
import { isEmptyValue } from "../../../utils/functions/Validators";
import { ProblemPostType } from "../../../utils/typedefs/LearningsCustomTypes";
import Chip from "../../chips/Chip";

export default function ProblemDescription({
  problem,
  solutions: codeBlocks,
}: {
  problem: ProblemPostType;
  solutions: ReactElement[];
}) {
  return (
    <>
      <div
        style={{
          margin: "2%",
        }}
      >
        <h1 style={{ textAlign: "center", textDecoration: "underline" }}>
          {problem.title}
        </h1>
        Solution(s) below in:{" "}
        {problem.languages.map((language, idx) => (
          <Chip
            key={idx}
            style={{
              backgroundColor:
                LanguageColorCodes[language as keyof typeof LanguageColorCodes]
                  .primary,
              color:
                LanguageColorCodes[language as keyof typeof LanguageColorCodes]
                  .secondary,
              display: "inline-flex",
              borderRadius: "10px",
              padding: "5px",
              marginRight: "5px",
            }}
          >
            {language.toLowerCase()}
          </Chip>
        ))}
        <div style={{ textAlign: "justify" }}>
          <h2>Description</h2>
          <p>{problem.description}</p>
          <p>{problem.example}</p>
          <h2>Solution</h2>
          <p>{problem.solution}</p>
          {codeBlocks.map((codeBlock, idx) => {
            return (
              <>
                <div key={idx} style={{ margin: "1%" }}>
                  {codeBlock}
                </div>
              </>
            );
          })}
          {!isEmptyValue(problem.analysis) && (
            <>
              <h2>Analysis</h2>
              <p>{problem.analysis}</p>
            </>
          )}
        </div>
      </div>
    </>
  );
}
