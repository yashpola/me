import { useState } from "react";
import MovieTvInfo from "./MovieTvInfo.json";
import SortByCustomRule from "./Sorters";

export default function MoviesTVPage() {
  const [sortRule, setSortRule] = useState<string>("recencym");
  const [sortingMenuOpen, openSortingMenu] = useState<boolean>(false);

  return (
    <div>
      <div
        style={{
          textAlign: "left",
          marginLeft: "2%",
          padding: "10px",
        }}
      >
        <h3>Lights, camera...</h3>
        <button
          style={{
            cursor: "pointer",
            backgroundColor: "wheat",
            color: "brown",
            borderRadius: "20px",
            fontSize: "20px",
            padding: "10px",
          }}
          type="button"
          onClick={() => openSortingMenu(true)}
        >
          order by...
        </button>
        {sortingMenuOpen && (
          <div>
            <ul>
              <li>
                <div onClick={() => setSortRule("bflow")}>
                  Lowest to highest grossing
                </div>
              </li>
              <li>
                <div onClick={() => setSortRule("bfhigh")}>
                  Highest to lowest grossing
                </div>
              </li>
              <li>
                <div onClick={() => setSortRule("yearl")}>
                  Last to first released
                </div>
              </li>
              <li>
                <div onClick={() => setSortRule("yearf")}>
                  First to last released
                </div>
              </li>
              <li>
                <div onClick={() => setSortRule("recencyl")}>
                  Least to most recently reviewed
                </div>
              </li>
              <li>
                <div onClick={() => setSortRule("recencym")}>
                  Most to least recently reviewed
                </div>
              </li>
              <li>
                <div onClick={() => setSortRule("ratingl")}>
                  Lowest to highest rating
                </div>
              </li>
              <li>
                <div onClick={() => setSortRule("ratingh")}>
                  Highest to lowest rating
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {MovieTvInfo.Movies.sort((review1, review2) => {
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
                  // backgroundColor: "#B19A7A",
                  // border: "5px solid #906E3E",

                  // marginLeft: "20px",
                  // marginBottom: "20px",
                  // padding: "5px",
                }}
              >
                <img
                  src={entry.thumbnail}
                  style={{ height: "400px", width: "275px" }}
                />
              </div>
              {/* <p>{entry.thoughts}</p> */}
            </>
          );
        })}
        {/* <div
          style={{
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#B19A7A",
            border: "5px solid #906E3E",
            padding: "5px",
          }}
        >
          <img
            src="https://sceneprints.com/cdn/shop/products/s-l1600_5d2635ae-7ab9-42f4-8cbd-17df6de44142.jpg?v=1639523855"
            style={{ maxHeight: "400px" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#B19A7A",
            border: "5px solid #906E3E",
            padding: "5px",
          }}
        >
          <img
            src="https://sceneprints.com/cdn/shop/products/s-l1600_5d2635ae-7ab9-42f4-8cbd-17df6de44142.jpg?v=1639523855"
            style={{ maxHeight: "400px" }}
          />
        </div> */}
      </div>
    </div>
  );
}
