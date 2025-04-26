import { useEffect, useState } from "react";

import { SwapVert } from "@mui/icons-material";

import SortingOptionsMenu from "./SortingOptionsMenu";

import {
  DashboardTypes,
  SortingRules,
} from "../../../utils/constants/ComponentConstants";

import { getUrl } from "../../../utils/functions/Getters";
import SortByCustomRule from "../../../utils/functions/Sorters";
import {
  addTextDecoration,
  removeTextDecorationMulti,
} from "../../../utils/functions/StyleModifiers";
import {
  MovieReview,
  TVReview,
} from "../../../utils/typedefs/MoviesTVCustomTypes";

export default function Dashboard({
  type,
  reviews,
}: {
  type: string;
  reviews: MovieReview[] | TVReview[];
}) {
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
              <>
                <div key={idx} className="posters-dashboard">
                  <a
                    href={`${getUrl()}/${
                      type === DashboardTypes.MOVIE ? "movies" : "tv"
                    }/${entry?.name?.replace(/ /g, "")}`}
                    target="_blank"
                  >
                    <img
                      className="movietv-poster"
                      src={entry?.thumbnail}
                      title={`${type} Poster`}
                    />
                  </a>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
}
