import { useRef } from "react";

import {
  Book,
  Email,
  GitHub,
  Instagram,
  LinkedIn,
  Movie,
  SpeakerNotes,
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
      name: "Substack",
      icon: <SpeakerNotes sx={{ color: "purple" }} />,
      link: "https://substack.com/@yashypola",
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
        title="Yash's Personal Profile Picture"
        style={{
          width: "175px",
          height: "225px",
          borderRadius: 75,
        }}
      />
      <p>
        I'm Yashwit Polapragada but you can call me Yash! I'm a recent NUS CS
        grad & current full-time Research Assistant in the NUS DISA, working for
        the{" "}
        <a href="https://cssh.nus.edu.sg/" target="_blank">
          Center for Computational Social Sciences and Humanities
        </a>{" "}
        on a project exploring LLM-driven simulations to refine public policy
        creation.
      </p>
      <p>
        <u>Tidbits:</u>
      </p>
      <ul>
        <li>
          I'm a movie enjoyer! Last watched: The Social Reckoning (2026).
          Current Top 5: Arrival, Taare Zameen Par, Spirited Away, Gladiator,
          and Dune 2. Here's my{" "}
          <a href="https://boxd.it/BAzL8" target="_blank">
            current watchlist.
          </a>
        </li>
        <li>
          Completed a half-marathon last December. Took a break from running for
          4 months and am just slowly restarting with 5ks before I ramp back up
          to 10ks.
        </li>
        <li>
          I like philosophy, fantasy, & sci-fi. Last read: <u>Berserk Vol. 1</u>{" "}
          (Miura Kentarou). Currently reading: <u>Essays by</u> (John Stuart
          Mill), and <u>The Left Hand of Darkness</u> (Ursula K. Le Guin). Next
          reads: <u>An Essay Concerning the Human Understanding</u> (John
          Locke), and <u>LOTR: Fellowship of the Ring</u> (J.R.R. Tolkien).
        </li>
        <li>
          I am slowly getting back into the keyboard (the musical type), and in
          the long-term I want to pick up lego building as a hobby (latest
          build: NASA Discovery Shuttle with Hubble Space Telescope on
          07/12/2024).
        </li>
      </ul>
      <p>
        <u>What I'm up to now in my job:</u>
      </p>
      <ul>
        <li>
          Deep-dive literature review & coding-up simple experiments! My harness
          of choice is Google Antigravity and I mostly use Gemini 3.8-Flash
          (haven't tried Argon yet).
        </li>
      </ul>
      <p>
        <u>What I use this site for:</u>
      </p>
      <ul>
        <li>Introducing myself (obviously!),</li>
        <li>
          Recording my{" "}
          <Anchor
            className={"standard-anchor"}
            href={"https://yashwit.com/learnings"}
            target={"_blank"}
            title={"Thoughts tab link"}
            label={"thoughts"}
          />{" "}
          on problems I do for fun, anything interesting I learn, and some
          courses I took in school.
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
        <u>Find more of me at these links:</u>
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
        This page was last updated on: 21/10/2026
      </footer>
    </div>
  );
}
