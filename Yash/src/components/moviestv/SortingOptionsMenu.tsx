export default function SortingOptionsMenu({
  setSortRule,
}: {
  setSortRule: (arg0: string) => void;
}) {
  return (
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
          <div onClick={() => setSortRule("yearl")}>Last to first released</div>
        </li>
        <li>
          <div onClick={() => setSortRule("yearf")}>First to last released</div>
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
  );
}
