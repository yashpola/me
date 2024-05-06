import { Routes, Route, NavLink } from "react-router-dom";
import AboutPage from "../About/AboutPage";
import LearningsPage from "../Learnings/LearningsPage";

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
              to="/blog"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
                color: isActive ? "white" : "brown",
              })}
            >
              Movies/TV
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
        {/* <Route exact path="/blog" element={<DefaultBlogPage />} />
        <Route exact path="/portfolio" element={<PortfolioPage />} />
        <Route
          exact
          path="/cs2101reflection"
          element={<CS2101ReflectionPage />}
        />
        <Route exact path="*" element={<NoPage />} /> */}
      </Routes>
    </>
  );
}
