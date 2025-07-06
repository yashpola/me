import { useLocation } from "react-router-dom";

import LearningPosts from "../../../../data/LearningPosts.json";

import { constructTargetUrl } from "../../../../utils/functions/Constructors";

import TitleCard from "../TitleCard";

import LinkedComponent from "../../../navigation/LinkedComponent";

export default function Y3S1() {
  const { pathname: basePath } = useLocation();

  return (
    <>
      <div className="page-section">
        <h3>Courses</h3>
        <h2>
          <u>Computing</u>
        </h2>
        {LearningPosts.Years[0].Y3S1.Computing.map((learningPost, idx) => {
          return (
            <LinkedComponent
              key={idx}
              to={constructTargetUrl(basePath, learningPost.code)}
            >
              <TitleCard title={learningPost.title} />
            </LinkedComponent>
          );
        })}
      </div>
    </>
  );
}
