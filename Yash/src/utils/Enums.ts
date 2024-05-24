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
