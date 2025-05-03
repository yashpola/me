import {
  MovieReview,
  TVReview,
} from "../../../utils/typedefs/MoviesTVCustomTypes";

export default function Poster({
  entry,
  type,
}: {
  entry: MovieReview | TVReview;
  type: string;
}) {
  return (
    <div className="posters-dashboard">
      <img
        className="movietv-poster"
        src={entry?.thumbnail}
        title={`${type} Poster`}
      />
    </div>
  );
}
