import CatFact from "./CatFact";
import me from "../../assets/headshot.jpg";

import {
  LinkedIn,
  GitHub,
  Email,
  Instagram,
  Telegram,
  Movie,
} from "@mui/icons-material";
import Anchor from "../../utils/customelements/Anchor";

export default function IntroSection() {
  return (
    <div className="page-section">
      <h3>The ABCs of Me</h3>
      <img
        src={me}
        alt="Yash's Personal Profile Picture"
        style={{
          width: "150px",
          height: "200px",
          borderRadius: 200,
        }}
      />
      <p>
        I'm Yashwit Polapragada but you can call me Yash! I'm a Junior at NUS
        College, studying Computer Science.
      </p>
      <p>
        <u>Tidbits:</u>
      </p>
      <ul>
        <li>
          I'm a movie enjoyer! My current Top 5 are: Arrival, Nope, Taare Zameen
          Par, and 2001: A Space Odyssey.
        </li>
        <li>
          Runner (doing a 5k every 2-3 days). 5k best: 24:29, 10k best: 1:00:00.
        </li>
        <li>
          Learning tennis (28 hours), and spanish (202-day duolingo streak).
        </li>
        <li>
          Currently reading <u>Thus Spoke Zarathustra</u> (Friedrich Nietzsche).
          My next reads are: <u>God Emperor of Dune</u> (Frank Herbert),{" "}
          <u>A Storm of Swords: Part I</u> (George R.R. Martin),{" "}
          <u>A Critique of Pure Reason</u> (Immanuel Kant).
        </li>
        <li>
          I want to get back into the keyboard (the musical type), and pick up
          lego building as a hobby (latest build: NASA Discovery Shuttle with
          Hubble Space Telescope on 07/12/2024).
        </li>
      </ul>
      <p>
        <u>What I'm up to now (Winter Break '24):</u>
      </p>
      <ul>
        <li>Visiting my grandparents in Visakhapatnam.</li>
        <li>
          Reading Thus Spoke Zarathustra (Friedrich Nietzsche), God Emperor of
          Dune (Frank Herbert), and Hoffman & Kunze's Linear Algebra.
        </li>
        <li>
          Working on this website (to refresh Typescript before my internship in
          January).
        </li>
      </ul>
      <p>
        <u>What I use this site for:</u>
      </p>
      <ul>
        <li>
          Recording my{" "}
          <Anchor
            className={"standard-anchor"}
            href={"https://yashyswebsitev2.vercel.app/learnings"}
            target={"_blank"}
            title={"Thoughts tab link"}
            label={"thoughts"}
          />{" "}
          on the courses I take in school.
        </li>
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
