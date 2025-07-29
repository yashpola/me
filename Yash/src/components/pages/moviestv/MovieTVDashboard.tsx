import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

import { SwapVert } from "@mui/icons-material";

import useGridPagination, {
  ACTION_TYPES,
} from "../../../hooks/useGridPagination";

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

import FlexRow from "../../layouts/FlexRow";
import Grid from "../../layouts/Grid";
import LinkedComponent from "../../navigation/LinkedComponent";
import PaginationToolbar from "../../headers/PaginationToolbar";

export default function MovieTVDashboard({
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

  const filteredAndSortedReviews = useMemo(() => {
    return reviews
      .sort((review1, review2) => {
        return SortByCustomRule(review1, review2, sortRule);
      })
      .filter((entry) => ("include" in entry ? entry?.include : true));
  }, [sortRule]);

  const [
    { tableQueryParams = {} },
    { executeUpdateTableQueryParams = () => {} },
  ] = useGridPagination({ data: filteredAndSortedReviews });
  const {
    page = 1,
    pageSize = 5,
    totalCount = filteredAndSortedReviews?.length,
  } = tableQueryParams || {};

  const paginatedReviews = useMemo(() => {
    return filteredAndSortedReviews.slice(
      (page - 1) * pageSize,
      (page - 1) * pageSize + pageSize
    );
  }, [tableQueryParams, sortRule]);

  return (
    <div>
      <div
        className="page-section"
        style={{
          marginBottom: "0%",
        }}
      >
        <FlexRow>
          <h3 style={{ marginRight: "20px" }}>Lights, camera...</h3>
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
        </FlexRow>
      </div>
      {sortingMenuOpen && (
        <SortingOptionsMenu
          setSorter={setSorter}
          isMovieDashboard={type === DashboardTypes.MOVIE}
        />
      )}
      <PaginationToolbar
        paginationProps={{ page, pageSize, totalCount }}
        paginationActions={{
          onClickNavigateBefore: () =>
            executeUpdateTableQueryParams(ACTION_TYPES.DECREMENT_PAGE),
          onClickNavigateNext: () =>
            executeUpdateTableQueryParams(ACTION_TYPES.INCREMENT_PAGE),
        }}
      />
      <br />
      <Grid>
        {paginatedReviews.map((entry, idx) => {
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
      </Grid>
    </div>
  );
}
