import { useRef } from "react";

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

import me from "../../../assets/yashheadshot.jpeg";

import Anchor from "../../../utils/customelements/Anchor";
import { Social } from "../../../utils/typedefs/AboutCustomTypes";

export default function IntroSection() {
  const { current: socials }: { current: Array<Social> } = useRef([
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
  ]);
  return (
    <div className="page-section">
      <h3>The ABCs of Me</h3>
      <img
        src={me}
        alt="Yash's Personal Profile Picture"
        style={{
          width: "175px",
          height: "225px",
          borderRadius: 75,
        }}
      />
      <p>
        I'm Yashwit Polapragada but you can call me Yash! I'm a Senior at NUS
        College, studying Computer Science.
      </p>
      <p>
        <u>Tidbits:</u>
      </p>
      <ul>
        <li>
          I'm a movie enjoyer! Last watched: The King (2019). Current Top 5:
          Arrival, Shutter Island, Taare Zameen Par, 2001: A Space Odyssey, and
          The King of Comedy.{" "}
          <a href="https://boxd.it/BAzL8" target="_blank">
            Current watchlist.
          </a>
        </li>
        <li>Currently training for a half-marathon with a 10k every week.</li>
        <li>Practising tennis (36 hours so-far), spanish, and german.</li>
        <li>
          I like philosophy, fantasy, & sci-fi. Last read:{" "}
          <u>On the Shortness of Life</u> (Seneca). Currently reading:{" "}
          <u>Essays by</u> (John Stuart Mill), <u>A Dance with Dragons</u>{" "}
          (George R.R. Martin). Next reads:{" "}
          <u>An Essay Concerning the Human Understanding</u> (John Locke), and{" "}
          <u>The Fellowship of the Ring</u> (J.R.R. Tolkien).
        </li>
        <li>
          I want to get back into the keyboard (the musical type), and pick up
          lego building as a hobby (latest build: NASA Discovery Shuttle with
          Hubble Space Telescope on 07/12/2024).
        </li>
      </ul>
      <p>
        <u>What I'm up to now (July '25):</u>
      </p>
      <ul>
        <li>On a trip to France, Italy, and Switzerland.</li>
      </ul>
      <p>
        <u>What I use this site for:</u>
      </p>
      <ul>
        <li>
          Recording my{" "}
          <Anchor
            className={"standard-anchor"}
            href={"https://yashwit.com/learnings"}
            target={"_blank"}
            title={"Thoughts tab link"}
            label={"thoughts"}
          />{" "}
          on the courses I take in school.
        </li>
        <li>
          Writing about{" "}
          <Anchor
            className={"standard-anchor"}
            href={"https://yashwit.com/movies"}
            target={"_blank"}
            title={"Movies tab link"}
            label={"movies"}
          />{" "}
          {/* and{" "}
          <Anchor
            className={"standard-anchor"}
            href={"https://yashwit.com/tv"}
            target={"_blank"}
            title={"TV tab link"}
            label={"tv shows"}
          />{" "} */}
          that I watch.
        </li>
        <li>
          Showcasing my design{" "}
          <Anchor
            className={"standard-anchor"}
            href={"https://yashwit.com/portfolio"}
            target={"_blank"}
            title={"Portfolio tab link"}
            label={"portfolio."}
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
      <footer
        style={{
          bottom: 0,
        }}
      >
        This page was last updated on: 28/07/2025
      </footer>
    </div>
  );
}
