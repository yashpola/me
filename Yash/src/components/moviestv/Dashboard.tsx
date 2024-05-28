import { useEffect, useState } from "react";

import {
  addTextDecoration,
  removeTextDecorationMulti,
} from "../../utils/functions/StyleModifiers";
import SortByCustomRule from "../../utils/functions/Sorters";
import SortingOptionsMenu from "./SortingOptionsMenu";
import { DashboardTypes, SortingRules } from "../../utils/Enums";

import { SwapVert } from "@mui/icons-material";
import {
  MovieReview,
  TVReview,
} from "../../utils/typedefs/MoviesTVCustomTypes";

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
          onClick={() => setSortingMenuOpen(!sortingMenuOpen)}
        >
          <SwapVert style={{ color: "brown" }} />
        </button>
      </div>
      {sortingMenuOpen && (
        <SortingOptionsMenu
          setSorter={setSorter}
          isMovieDashboard={type === DashboardTypes.MOVIE}
        />
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {reviews
          .sort((review1, review2) => {
            return SortByCustomRule(review1, review2, sortRule);
          })
          .map((entry, idx) => {
            return (
              <>
                <div key={idx} className="posters-dashboard">
                  <a
                    href={`https://yashyswebsitev2.vercel.app/movies/${entry.name.replace(
                      / /g,
                      ""
                    )}`}
                    target="_blank"
                  >
                    <img
                      className="movietv-poster"
                      src={entry.thumbnail}
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
