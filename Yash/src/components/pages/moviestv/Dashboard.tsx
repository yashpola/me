import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { SwapVert } from "@mui/icons-material";

import {
  DashboardTypes,
  SortingRules,
} from "../../../utils/constants/ComponentConstants";

import { constructTargetUrl } from "../../../utils/functions/Constructors";
import SortByCustomRule from "../../../utils/functions/Sorters";
import {
  addTextDecoration,
  removeTextDecorationMulti,
} from "../../../utils/functions/StyleModifiers";
import {
  MovieReview,
  TVReview,
} from "../../../utils/typedefs/MoviesTVCustomTypes";

import Poster from "./Poster";
import SortingOptionsMenu from "./SortingOptionsMenu";

import LinkedComponent from "../../navigation/LinkedComponent";

export default function Dashboard({
  type,
  reviews,
}: {
  type: string;
  reviews: MovieReview[] | TVReview[];
}) {
  const { pathname: basePath } = useLocation();

  const [sortRule, setSortRule] = useState<string>(SortingRules.RECENCYMOST);
  const [sortingMenuOpen, setSortingMenuOpen] = useState<boolean>(false);

  function setSorter(sortRule: string) {
    setSortRule(sortRule);
    removeTextDecorationMulti(Object.values(SortingRules));
    addTextDecoration(document.getElementById(`${sortRule}`), "underline");
    localStorage.setItem("sortRule", sortRule);
  }

  useEffect(() => {
    setSorter(localStorage.getItem("sortRule") ?? SortingRules.RECENCYMOST);
  });

  return (
    <div>
      <div
        className="page-section"
        style={{
          marginBottom: "2%",
        }}
      >
        <h3>Lights, camera...</h3>
        <button
          className="site-button"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setSortingMenuOpen(!sortingMenuOpen);
          }}
        >
          <SwapVert />
        </button>
      </div>
      {sortingMenuOpen && (
        <SortingOptionsMenu
          setSorter={setSorter}
          isMovieDashboard={type === DashboardTypes.MOVIE}
        />
      )}
      <div className="movie-grid">
        {reviews
          .sort((review1, review2) => {
            return SortByCustomRule(review1, review2, sortRule);
          })
          .filter((entry) => ("include" in entry ? entry?.include : true))
          .map((entry, idx) => {
            return (
              <LinkedComponent
                key={idx}
                to={constructTargetUrl(
                  basePath,
                  `${entry?.name?.replace(/ /g, "")}`
                )}
              >
                <Poster entry={entry} type={type} />
              </LinkedComponent>
            );
          })}
      </div>
    </div>
  );
}
