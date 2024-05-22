import { useEffect, useState } from "react";

import {
  addTextDecoration,
  removeTextDecorationMulti,
} from "../../utils/functions/StyleModifiers";
import MovieTVPosts from "../../data/MovieTVPosts.json";
import SortByCustomRule from "../../utils/functions/Sorters";
import SortingOptionsMenu from "./SortingOptionsMenu";
import SortingRules from "../../utils/Enums";

import { SwapVert } from "@mui/icons-material";

export default function MoviesDashboard() {
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
        <SortingOptionsMenu setSorter={setSorter} isMovieDashboard={true} />
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {MovieTVPosts.Movies.sort((review1, review2) => {
          return SortByCustomRule(review1, review2, sortRule);
        }).map((movie, idx) => {
          return (
            <>
              <div key={idx} className="posters-dashboard">
                <a
                  href={`http://localhost:5173/${movie.name.replace(/ /g, "")}`}
                  target="_blank"
                >
                  <img
                    className="movietv-poster"
                    src={movie.thumbnail}
                    title={`${movie.name} Poster`}
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
