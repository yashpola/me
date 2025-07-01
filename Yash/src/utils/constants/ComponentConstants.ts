import { obsidian } from "react-code-blocks";

import {
  DashboardType,
  SortingRulesType,
} from "../typedefs/MoviesTVCustomTypes";

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
  C: { primary: "#659bd3", secondary: "#FFFFFF" },
});

export const DifficultyColorCodes = Object.freeze({
  EASY: { color: "white", backgroundColor: "green" },
  MEDIUM: { color: "black", backgroundColor: "orange" },
  HARD: { color: "white", backgroundColor: "red" },
});

export const defaultCodeBlockConfigs = Object.freeze({
  showLineNumbers: true,
  theme: obsidian,
});

export const defaultTopicChipStyle = Object.freeze({
  backgroundColor: "white",
  color: "black",
});

export const ProblemDifficulties = Object.freeze(["EASY", "MEDIUM", "HARD"]);

export const ProblemTopics = Object.freeze([
  "array",
  "binary tree",
  "bit manipulation",
  "depth-first search",
  "dynamic programming",
  "greedy",
  "hashmap",
  "math",
  "linked list",
  "string",
  "sorting",
  "two pointers",
]);
