import { useEffect, useState } from "react";

import MovieTVPosts from "../../data/MovieTVPosts.json";
import SortByCustomRule from "../../utils/functions/Sorters";
import SortingOptionsMenu from "./SortingOptionsMenu";

import { SwapVert } from "@mui/icons-material";

export default function MoviesTVPage() {
  const [sortRule, setSortRule] = useState<string>("recencym");
  const [sortingMenuOpen, openSortingMenu] = useState<boolean>(false);

  function setSorter(sortRule: string) {
    setSortRule(sortRule);
    localStorage.setItem("sortRule", sortRule);
  }

  useEffect(() => {
    setSorter(localStorage.getItem("sortRule") ?? "recencym");
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
          onClick={() => openSortingMenu(!sortingMenuOpen)}
        >
          <SwapVert style={{ color: "brown" }} />
        </button>
      </div>
      {sortingMenuOpen && <SortingOptionsMenu setSortRule={setSorter} />}
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
        }).map((entry, idx) => {
          return (
            <>
              <div
                key={idx}
                style={{
                  display: "inline-flex",
                  textAlign: "center",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <a
                  href={`http://localhost:5173/${entry.name.replace(/ /g, "")}`}
                  target="_blank"
                >
                  <img
                    className="movietv-poster"
                    src={entry.thumbnail}
                    title="Movie Poster"
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
