import SortingRules from "../../utils/Enums";
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
            onClick={() => setSorter(SortingRules.BOXOFFICELOW)}
          >
            Lowest to highest grossing
          </div>
          <div
            id={SortingRules.BOXOFFICEHIGH}
            onClick={() => setSorter(SortingRules.BOXOFFICEHIGH)}
          >
            Highest to lowest grossing
          </div>
        </>
      )}
      <div
        id={SortingRules.YEARLAST}
        onClick={() => setSorter(SortingRules.YEARLAST)}
      >
        Last to first released (year)
      </div>
      <div
        id={SortingRules.YEARFIRST}
        onClick={() => setSorter(SortingRules.YEARFIRST)}
      >
        First to last released (year)
      </div>
      <div
        id={SortingRules.RECENCYLEAST}
        onClick={() => setSorter(SortingRules.RECENCYLEAST)}
      >
        Least to most recently reviewed
      </div>
      <div
        id={SortingRules.RECENCYMOST}
        onClick={() => setSorter(SortingRules.RECENCYMOST)}
      >
        Most to least recently reviewed
      </div>
      <div
        id={SortingRules.RATINGLOW}
        onClick={() => setSorter(SortingRules.RATINGLOW)}
      >
        Lowest to highest rated
      </div>
      <div
        id={SortingRules.RATINGHIGH}
        onClick={() => setSorter(SortingRules.RATINGHIGH)}
      >
        Highest to lowest rated
      </div>
    </div>
  );
}
