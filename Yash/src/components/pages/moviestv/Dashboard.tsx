import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { NavigateBefore, NavigateNext, SwapVert } from "@mui/icons-material";

import useGridPagination, { ACTION_TYPES } from "../../../hooks/useGridPagination";

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

import FlexColumn from "../../layouts/FlexColumn";
import FlexRow from "../../layouts/FlexRow";
import Grid from "../../layouts/Grid";
import LinkedComponent from "../../navigation/LinkedComponent";
import Caption from "../../typography/Caption";

export default function Dashboard({
  type,
  reviews,
}: {
  type: string;
  reviews: MovieReview[] | TVReview[];
}) {
  const { pathname: basePath } = useLocation();

  const [{tableQueryParams}, {executeUpdateTableQueryParams = () => {}}] = useGridPagination({data: reviews})
  const {page = 1, pageSize = 5, totalCount = 0} = tableQueryParams || {}

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
          marginBottom: "0%",
        }}
      >
        <FlexRow>
          <h3 style={{marginRight: "20px"}}>Lights, camera...</h3>
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
      <FlexRow style={{justifyContent: "center"}}>
        <div>{page > 1 && <NavigateBefore className="site-button" onClick={() => executeUpdateTableQueryParams(ACTION_TYPES.DECREMENT_PAGE)} />}</div>
        <FlexColumn style={{margin: "15px"}}>
          <div>
            Page {page} of {Math.ceil(totalCount / pageSize)}
          </div>
          <Caption>
            <div>
              Showing {((page - 1) * pageSize) + 1} - {(((page - 1) * pageSize) + pageSize)} of {totalCount}.
            </div>
          </Caption>
        </FlexColumn>
        <div>{page < Math.ceil(totalCount / pageSize) && <NavigateNext className="site-button" onClick={() => executeUpdateTableQueryParams(ACTION_TYPES.INCREMENT_PAGE)}/>}</div>
      </FlexRow>
      <br/>
      <Grid>
        {reviews
          .sort((review1, review2) => {
            return SortByCustomRule(review1, review2, sortRule);
          })
          .filter((entry) => ("include" in entry ? entry?.include : true))
          .slice((page - 1) * pageSize, ((page - 1) * pageSize) + pageSize)
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
      </Grid>
    </div>
  );
}
