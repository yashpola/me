import { Routes, Route, NavLink } from "react-router-dom";

import AboutPage from "../about/AboutPage";
import { CourseComponentMap } from "../learnings/CourseComponentMap";
import Dashboard from "../moviestv/Dashboard";
import { DashboardTypes } from "../../utils/Enums";
import LearningsPage from "../learnings/LearningsPage";
import LearningPosts from "../../data/LearningPosts.json";
import { MovieComponentMap, TVComponentMap } from "../moviestv/ComponentMap";
import MoviePosts from "../../data/MoviePosts.json";
import PortfolioPage from "../portfolio/PortfolioPage";
import PortfolioPosts from "../../data/PortfolioPosts.json";
import { PortfolioPostMap } from "../portfolio/ComponentMap";
import TVPosts from "../../data/TVPosts.json";
import Years from "../../data/Years.json";
import { YearComponentMap } from "../learnings/YearComponentMap";

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
                color: isActive ? "brown" : "white",
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
                color: isActive ? "brown" : "white",
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
                color: isActive ? "brown" : "white",
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
                color: isActive ? "brown" : "white",
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
                color: isActive ? "brown" : "white",
              })}
            >
              Portfolio (W.I.P.)
            </NavLink>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/learnings" element={<LearningsPage />} />
        {Years.Years.map((year, idx) => {
          const YearComponent = YearComponentMap[`${year}`];
          return (
            <Route key={idx} path={`${year}`} element={<YearComponent />} />
          );
        })}
        {LearningPosts.Years[0].Y3S1.Computing.map((course, idx) => {
          const CourseComponent = CourseComponentMap[`${course.code}`];
          return (
            <Route
              key={idx}
              path={`${course.code}`}
              element={<CourseComponent course={course} />}
            />
          );
        })}
        {LearningPosts.Years[0].Y3S1.NUSC.map((course, idx) => {
          const CourseComponent = CourseComponentMap[`${course.code}`];
          return (
            <Route
              key={idx}
              path={`${course.code}`}
              element={<CourseComponent course={course} />}
            />
          );
        })}
        <Route
          path="/movies"
          element={
            <Dashboard
              type={DashboardTypes.MOVIE}
              reviews={MoviePosts.Movies}
            />
          }
        />
        {/* <Route path="/movies" element={<MoviesDashboard />} /> */}
        {MoviePosts.Movies.filter((review) => review.include).map(
          (review, idx) => {
            const ReviewComponent =
              MovieComponentMap[`${review.name.replace(/ /g, "")}`];
            return (
              <Route
                key={idx}
                path={`${review.name.replace(/ /g, "")}`}
                element={<ReviewComponent review={review} />}
              />
            );
          }
        )}
        <Route
          path="/tv"
          element={<Dashboard type={DashboardTypes.TV} reviews={TVPosts.TV} />}
        />
        {TVPosts.TV.map((review, idx) => {
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
        {PortfolioPosts.PortfolioEntries.map((post, idx) => {
          const PortfolioPostComponent =
            PortfolioPostMap[`${post.Name.replace(/ /g, "")}`];
          return (
            <Route
              key={idx}
              path={`${post.Name.replace(/ /g, "")}`}
              element={<PortfolioPostComponent post={post} />}
            />
          );
        })}
      </Routes>
    </>
  );
}
