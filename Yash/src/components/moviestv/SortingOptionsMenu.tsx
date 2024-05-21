import { sortRuleSetter } from "../../utils/typedefs/MoviesTVCustomTypes";

export default function SortingOptionsMenu({
  setSortRule,
  isMovieDashboard,
}: {
  setSortRule: sortRuleSetter;
  isMovieDashboard: boolean;
}) {
  return (
    <div className="sorting-options-menu">
      {isMovieDashboard && (
        <>
          <div onClick={() => setSortRule("bflow")}>
            Lowest to highest grossing
          </div>
          <div onClick={() => setSortRule("bfhigh")}>
            Highest to lowest grossing
          </div>
        </>
      )}
      <div onClick={() => setSortRule("yearl")}>Last to first released</div>
      <div onClick={() => setSortRule("yearf")}>First to last released</div>
      <div onClick={() => setSortRule("recencyl")}>
        Least to most recently reviewed
      </div>
      <div onClick={() => setSortRule("recencym")}>
        Most to least recently reviewed
      </div>
      <div onClick={() => setSortRule("ratingl")}>Lowest to highest rating</div>
      <div onClick={() => setSortRule("ratingh")}>Highest to lowest rating</div>
    </div>
  );
}
