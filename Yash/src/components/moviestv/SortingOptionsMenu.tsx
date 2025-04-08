import { SortingRules } from "../../utils/Constants";
import { sortRuleSetter } from "../../utils/typedefs/MoviesTVCustomTypes";

export default function SortingOptionsMenu({
  setSorter,
  isMovieDashboard,
}: {
  setSorter: sortRuleSetter;
  isMovieDashboard: boolean;
}) {
  return (
    <div className="sorting-options-menu">
      {isMovieDashboard && (
        <>
          <div
            id={SortingRules.BOXOFFICELOW}
            onClick={(e) => {
              e.preventDefault();
              setSorter(SortingRules.BOXOFFICELOW);
            }}
          >
            Lowest to highest grossing
          </div>
          <div
            id={SortingRules.BOXOFFICEHIGH}
            onClick={(e) => {
              e.preventDefault();
              setSorter(SortingRules.BOXOFFICEHIGH);
            }}
          >
            Highest to lowest grossing
          </div>
        </>
      )}
      <div
        id={SortingRules.YEARLAST}
        onClick={(e) => {
          e.preventDefault();
          setSorter(SortingRules.YEARLAST);
        }}
      >
        Last to first released (year)
      </div>
      <div
        id={SortingRules.YEARFIRST}
        onClick={(e) => {
          e.preventDefault();
          setSorter(SortingRules.YEARFIRST);
        }}
      >
        First to last released (year)
      </div>
      <div
        id={SortingRules.RECENCYLEAST}
        onClick={(e) => {
          e.preventDefault();
          setSorter(SortingRules.RECENCYLEAST);
        }}
      >
        Least to most recently reviewed
      </div>
      <div
        id={SortingRules.RECENCYMOST}
        onClick={(e) => {
          e.preventDefault();
          setSorter(SortingRules.RECENCYMOST);
        }}
      >
        Most to least recently reviewed
      </div>
      <div
        id={SortingRules.RATINGLOW}
        onClick={(e) => {
          e.preventDefault();
          setSorter(SortingRules.RATINGLOW);
        }}
      >
        Lowest to highest rated
      </div>
      <div
        id={SortingRules.RATINGHIGH}
        onClick={(e) => {
          e.preventDefault();
          setSorter(SortingRules.RATINGHIGH);
        }}
      >
        Highest to lowest rated
      </div>
    </div>
  );
}
