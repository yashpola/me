import { obsidian } from "react-code-blocks";

import {
  DashboardType,
  SortingRulesType,
} from "./typedefs/MoviesTVCustomTypes";

export const SortingRules: SortingRulesType = Object.freeze({
  BOXOFFICELOW: "bflow",
  BOXOFFICEHIGH: "bfhigh",
  YEARFIRST: "yearf",
  YEARLAST: "yearl",
  RECENCYMOST: "recencym",
  RECENCYLEAST: "recencyl",
  RATINGLOW: "ratingl",
  RATINGHIGH: "ratingh",
});

export const DashboardTypes: DashboardType = Object.freeze({
  MOVIE: "Movie",
  TV: "TV",
});

export const LanguageColorCodes = Object.freeze({
  JAVA: { primary: "#f89820", secondary: "#5382a1" },
  JAVASCRIPT: { primary: "#f0db4f", secondary: "#323330" },
  PYTHON: { primary: "#306998", secondary: "#FFE873" },
});

export const defaultCodeBlockConfigs = Object.freeze({
  showLineNumbers: true,
  theme: obsidian,
});
