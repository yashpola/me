import { Routes, Route, NavLink } from "react-router-dom";

import AboutPage from "../about/AboutPage";
import Dashboard from "../moviestv/Dashboard";
import { DashboardTypes } from "../../utils/Enums";
import LearningsPage from "../learnings/LearningsPage";
import { MovieComponentMap, TVComponentMap } from "../moviestv/ComponentMap";
import MovieTVInfo from "../../data/MovieTVPosts.json";
import PortfolioPage from "../portfolio/PortfolioPage";
import PortfolioPosts from "../../data/PortfolioPosts.json";

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
        <Route
          path="/movies"
          element={
            <Dashboard
              type={DashboardTypes.MOVIE}
              reviews={MovieTVInfo.Movies}
            />
          }
        />
        {/* <Route path="/movies" element={<MoviesDashboard />} /> */}
        {MovieTVInfo.Movies.map((review, idx) => {
          const ReviewComponent =
            MovieComponentMap[`${review.name.replace(/ /g, "")}`];
          return (
            <Route
              key={idx}
              path={`${review.name.replace(/ /g, "")}`}
              element={<ReviewComponent review={review} />}
            />
          );
        })}
        <Route
          path="/tv"
          element={
            <Dashboard type={DashboardTypes.TV} reviews={MovieTVInfo.TV} />
          }
        />
        {MovieTVInfo.TV.map((review, idx) => {
          const ReviewComponent =
            TVComponentMap[`${review.name.replace(/ /g, "")}`];
          return (
            <Route
              key={idx}
              path={`${review.name.replace(/ /g, "")}`}
              element={<ReviewComponent review={review} />}
            />
          );
        })}
        <Route
          path="/portfolio"
          element={
            <PortfolioPage portfolioPosts={PortfolioPosts.PortfolioEntries} />
          }
        />
      </Routes>
    </>
  );
}
