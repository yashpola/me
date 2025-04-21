import { useRef } from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import AboutPage from "../pages/about/AboutPage";
import { CourseComponentMap } from "../pages/learnings/CourseComponentMap";
import LearningsPage from "../pages/learnings/LearningsPage";
import { ProblemComponentMap } from "../pages/learnings/ProblemComponentMap";
import { YearComponentMap } from "../pages/learnings/YearComponentMap";
import {
  MovieComponentMap,
  TVComponentMap,
} from "../pages/moviestv/ComponentMap";
import Dashboard from "../pages/moviestv/Dashboard";
import { PortfolioPostMap } from "../pages/portfolio/ComponentMap";
import PortfolioPage from "../pages/portfolio/PortfolioPage";

import LearningPosts from "../../data/LearningPosts.json";
import PortfolioPosts from "../../data/PortfolioPosts.json";
import MoviePosts from "../../data/MoviePosts.json";
import TVPosts from "../../data/TVPosts.json";
import Years from "../../data/Years.json";

import { DashboardTypes } from "../../utils/Constants";

export default function NavBar() {
  const { current: navLinkStyle } = useRef(
    ({ isActive }: { isActive: boolean }) => ({
      textDecoration: isActive ? "underline" : "none",
      color: isActive ? "white" : "brown",
    })
  );

  return (
    <>
      <div className="navbar">
        <div className="navbar-heading">Yashy Polapragada</div>
        <div className="navbar-body">
          <div className="nav-item">
            <NavLink to="/" style={navLinkStyle}>
              About
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink to="/learnings" style={navLinkStyle}>
              Learnings
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink to="/movies" style={navLinkStyle}>
              Movies
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink to="/tv" style={navLinkStyle}>
              TV
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink to="/portfolio" style={navLinkStyle}>
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
              path={`/courses/computing/${course.code}`}
              element={<CourseComponent course={course} />}
            />
          );
        })}
        {LearningPosts.Years[0].Y3S1.NUSC.map((course, idx) => {
          const CourseComponent = CourseComponentMap[`${course.code}`];
          return (
            <Route
              key={idx}
              path={`/courses/nusc${course.code}`}
              element={<CourseComponent course={course} />}
            />
          );
        })}
        {Object.keys(LearningPosts.Problems).map((problem, idx) => {
          const ProblemComponent = ProblemComponentMap[`${problem}`];
          return (
            <Route
              key={idx}
              path={`/learnings/problems/${problem}`}
              element={
                <ProblemComponent
                  problem={
                    LearningPosts.Problems[
                      problem as keyof typeof LearningPosts.Problems
                    ]
                  }
                />
              }
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
        {MoviePosts.Movies.filter((review) => review.include).map(
          (review, idx) => {
            const ReviewComponent =
              MovieComponentMap[`${review.name.replace(/ /g, "")}`];
            return (
              <Route
                key={idx}
                path={`/movies/${review.name.replace(/ /g, "")}`}
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
              path={`/tv/${review.name.replace(/ /g, "")}`}
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
