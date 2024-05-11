import CatFact from "./CatFact";
import me from "../../assets/me.JPG";

import {
  LinkedIn,
  GitHub,
  Email,
  Instagram,
  Telegram,
  Movie,
} from "@mui/icons-material";

export default function IntroSection() {
  return (
    <div className="page-section">
      <h3>The ABCs of Me</h3>
      <img
        src={me}
        alt="Yash's Personal Profile Picture"
        style={{ width: "150px", height: "150px", borderRadius: 200 }}
      />
      <p>
        I'm Yashwit Polapragada but you can call me Yash! I'm currently a
        sophomore at NUS College, studying Computer Science.
      </p>
      <p>
        <u>Tidbits:</u>
      </p>
      <ul>
        <li>
          I can talk to you about movies, cricket, current affairs, and music.
        </li>
        <li>Thinking of getting into tennis and lego collecting.</li>
      </ul>
      <p>
        <u>What I'm up to now (Spring Semester '24):</u>
      </p>
      <ul>
        <li>Software Engineering</li>
        <li>Operating Systems</li>
        <li>Probability and Statistics</li>
        <li>Design and Analysis of Algorithms</li>
        <li>Effective Communication for Computing Professionals</li>
      </ul>
      <p>
        <u>What I use this site for:</u>
      </p>
      <ul>
        <li>
          Recording my{" "}
          <a href="https://yashwit.com/learnings" title="Documenting Learnings">
            thoughts
          </a>{" "}
          on the courses I take in school as well as{" "}
          <a href="https://leetcode.com" title="Leetcode">
            Leetcode
          </a>{" "}
          problems I do.
        </li>
        <li>
          <a href="https://yashwit.com/moviestv" title="Movie/TV Reviews">
            Reviewing
          </a>{" "}
          movies and tv shows that I watch.
        </li>
        <li>
          Showcasing my{" "}
          <a href="https://yashwit.com/portfolio" title="Portfolio Page">
            portfolio.
          </a>
        </li>
      </ul>
      <p>
        <u>Find me at these links:</u>
      </p>
      <a
        href="https://www.linkedin.com/in/yashwit-polapragada-7a507923a/"
        title="Yashwit's Linkedin"
      >
        <LinkedIn sx={{ color: "#0072b1" }} />
      </a>
      <a href="https://github.com/yashpola" title="Yashwit's GitHub">
        <GitHub sx={{ color: "black" }} />
      </a>
      <a href="mailto: yashwit@u.nus.edu" title="Yashwit's Email">
        <Email sx={{ color: "green" }} />
      </a>{" "}
      <a
        href="https://www.instagram.com/yashypola/"
        title="Yashwit's Instagram"
      >
        <Instagram sx={{ color: "red" }} />
      </a>
      <a href="https://t.me/yashypola" title="Yashwit's Telegram">
        <Telegram sx={{ color: "#0088cc" }} />
      </a>
      <a href="https://boxd.it/7HLmD" title="Yashwit's Letterboxd">
        <Movie sx={{ color: "orange" }} />
      </a>
      <p>
        <u>Have a cat fact on me:</u>
      </p>
      <CatFact />
    </div>
  );
}
