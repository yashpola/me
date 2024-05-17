import { Routes, Route, NavLink } from "react-router-dom";

import AboutPage from "../about/AboutPage";
import { ComponentMap } from "../moviestv/ComponentMap";
import LearningsPage from "../learnings/LearningsPage";
import MovieTVInfo from "../../data/MovieTVPosts.json";
import MoviesDashboard from "../moviestv/MoviesDashboard";
import TVDashboard from "../moviestv/TVDashboard";

export default function NavBar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-heading">Yashy Polapragada</div>
        <div className="navbar-body">
          <div className="nav-item">
            <NavLink
              to="/"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
                color: isActive ? "white" : "brown",
              })}
            >
              About
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink
              to="/learnings"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
                color: isActive ? "white" : "brown",
              })}
            >
              Learnings
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink
              to="/movies"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
                color: isActive ? "white" : "brown",
              })}
            >
              Movies
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink
              to="/tv"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
                color: isActive ? "white" : "brown",
              })}
            >
              TV
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink
              to="/portfolio"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
                color: isActive ? "white" : "brown",
              })}
            >
              Portfolio
            </NavLink>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/learnings" element={<LearningsPage />} />
        <Route path="/movies" element={<MoviesDashboard />} />
        {MovieTVInfo.Movies.map((review, idx) => {
          const ReviewComponent =
            ComponentMap[`${review.name.replace(/ /g, "")}`];
          return (
            <Route
              key={idx}
              path={`${review.name.replace(/ /g, "")}`}
              element={<ReviewComponent review={review} />}
            />
          );
        })}
        <Route path="/tv" element={<TVDashboard />} />
        {MovieTVInfo.TV.map((review, idx) => {
          const ReviewComponent =
            ComponentMap[`${review.name.replace(/ /g, "")}`];
          return (
            <Route
              key={idx}
              path={`${review.name.replace(/ /g, "")}`}
              element={<ReviewComponent review={review} />}
            />
          );
        })}
      </Routes>
    </>
  );
}
