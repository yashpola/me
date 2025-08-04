import {
  MovieReview,
  TVReview,
} from "../../../utils/typedefs/MoviesTVCustomTypes";

export default function Poster({ entry }: { entry: MovieReview | TVReview }) {
  return (
    <div className="posters-dashboard">
      <img
        className="movietv-poster"
        src={entry?.thumbnail}
        alt={`${entry?.name} Poster`}
        title={`${entry?.name} Poster`}
      />
    </div>
  );
}
