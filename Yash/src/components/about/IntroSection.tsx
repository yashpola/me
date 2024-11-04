import CatFact from "./CatFact";
import me from "../../assets/me.JPG";

import {
  LinkedIn,
  GitHub,
  Email,
  Instagram,
  Telegram,
  Movie,
  FormatItalic,
} from "@mui/icons-material";
import Anchor from "../../utils/customelements/Anchor";

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
        I'm Yashwit Polapragada but you can call me Yash! I'm a junior at NUS
        College, studying Computer Science.
      </p>
      <p>
        <u>Tidbits:</u>
      </p>
      <ul>
        <li>
          Movie buff, learning tennis and spanish, currently run a 5k in 25:00.
        </li>
        <li>I'm currently reading Dune: Messiah (Frank Herbert).</li>
        <li>
          Want to get back into the keyboard (the musical type) and pick up lego
          building as a hobby.
        </li>
      </ul>
      <p>
        <u>What I'm up to now (Fall Semester '24):</u>
      </p>
      <ul>
        <li>Introduction to Artificial Intelligence and Machine Learning.</li>
        <li>Theory of Computation.</li>
        <li>Optimization Algorithms.</li>
        <li>Internet Architecture.</li>
        <li>What can I know?</li>
      </ul>
      <p>
        <u>What I use this site for:</u>
      </p>
      <ul>
        {/* <li>
          Recording my{" "}
          <Anchor
            className={"standard-anchor"}
            href={"https://yashyswebsitev2.vercel.app/learnings"}
            target={"_blank"}
            title={"Thoughts tab link"}
            label={"thoughts"}
          />{" "}
          on the courses I take in school as well as{" "}
          <Anchor
            className={"standard-anchor"}
            href={"https://leetcode.com"}
            target={"_blank"}
            title={"Leetcode link"}
            label={"Leetcode"}
          />{" "}
          problems I do.
        </li> */}
        <li>
          Reviewing{" "}
          <Anchor
            className={"standard-anchor"}
            href={"http://localhost:5173/movies"}
            target={"_blank"}
            title={"Movies tab link"}
            label={"movies"}
          />{" "}
          and{" "}
          <Anchor
            className={"standard-anchor"}
            href={"https://yashyswebsitev2.vercel.app/tv"}
            target={"_blank"}
            title={"TV tab link"}
            label={"tv shows"}
          />{" "}
          that I watch.
        </li>
        <li>
          Showcasing my{" "}
          <Anchor
            className={"standard-anchor"}
            href={"https://yashyswebsitev2.vercel.app/portfolio"}
            target={"_blank"}
            title={"Portfolio tab link"}
            label={"portfolio"}
          />{" "}
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
