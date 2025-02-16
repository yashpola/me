import {
  Book,
  Email,
  GitHub,
  Instagram,
  LinkedIn,
  Movie,
  Telegram,
} from "@mui/icons-material";
import { Icon, Tooltip } from "@mui/material/";

import CatFact from "./CatFact";

import me from "../../assets/headshot.jpg";

import Anchor from "../../utils/customelements/Anchor";
import { Social } from "../../utils/typedefs/AboutCustomTypes";

export default function IntroSection() {
  const socials: Array<Social> = [
    {
      name: "Linkedin",
      icon: <LinkedIn sx={{ color: "#0072b1" }} />,
      link: "https://www.linkedin.com/in/yashwit-polapragada-7a507923a/",
    },
    {
      name: "GitHub",
      icon: <GitHub sx={{ color: "black" }} />,
      link: "https://github.com/yashpola",
    },
    {
      name: "Telegram",
      icon: <Telegram sx={{ color: "#0088cc" }} />,
      link: "https://t.me/yashypola",
    },
    {
      name: "Instagram",
      icon: <Instagram sx={{ color: "red" }} />,
      link: "https://www.instagram.com/yashypola/",
    },
    {
      name: "Letterboxd",
      icon: <Movie sx={{ color: "orange" }} />,
      link: "https://boxd.it/7HLmD",
    },
    {
      name: "Goodreads",
      icon: <Book sx={{ color: "brown" }} />,
      link: "https://www.goodreads.com/user/show/42299243-yash-polapragada",
    },
    {
      name: "Email",
      icon: <Email sx={{ color: "green" }} />,
      link: "mailto: yashwit@u.nus.edu",
    },
  ];
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
          I'm a movie enjoyer! Last watched: The Substance (2024). Current Top
          5: Arrival, Shutter Island, Taare Zameen Par, 2001: A Space Odyssey,
          and The King of Comedy.{" "}
          <a href="https://boxd.it/BAzL8" target="_blank">
            Current watchlist.
          </a>
        </li>
        <li>
          Runner (doing a 5k every 2-3 days). 5k best: 24:29, 10k best: 1:00:00.
        </li>
        <li>
          Practising tennis (31 hours so-far), spanish, and german (combined
          251-day duolingo streak).
        </li>
        <li>
          I like philosophy, fantasy, & sci-fi. Last read:{" "}
          <u>Thus Spoke Zarathustra</u> (Friedrich Nietzsche). Currently
          reading: <u>Essays and Aphorisms</u> (Arthur Schopenhauer), and{" "}
          <u>God Emperor of Dune</u> (Frank Herbert). Next reads:{" "}
          <u>A Feast for Crows</u> (George R.R. Martin), and <u>Hyperion</u>{" "}
          (Dan Simmons).
        </li>
        <li>
          I want to get back into the keyboard (the musical type), and pick up
          lego building as a hobby (latest build: NASA Discovery Shuttle with
          Hubble Space Telescope on 07/12/2024).
        </li>
      </ul>
      <p>
        <u>What I'm up to now (Spring '25):</u>
      </p>
      <ul>
        <li>
          Full-stack Software Engineering internship at{" "}
          <a
            href="https://www.factorem.co/about-us"
            target="_blank"
            title="Factorem Website Link"
          >
            Factorem
          </a>
          .
        </li>
        <li>
          Auditing{" "}
          <a
            href="https://nusmods.com/courses/CS5330/randomized-algorithms"
            target="_blank"
            title="NUSMODS CS5330 Link"
          >
            Randomized Algorithms
          </a>{" "}
          (graduate-level course; CS5330) at NUS.
        </li>
        <li>
          Taking Entrepreneurship courses (entrepreneurship practicum, discovery
          & resilience, venture creation) at NUS.
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
      {socials.map((social, idx) => {
        return (
          <a href={social?.link} key={idx} title={`Yashwit's ${social?.name}`}>
            <Tooltip arrow title={social?.name} placement="top">
              <Icon>{social?.icon}</Icon>
            </Tooltip>
          </a>
        );
      })}
      <p>
        <u>Have a cat fact on me:</u>
      </p>
      <CatFact />
    </div>
  );
}
