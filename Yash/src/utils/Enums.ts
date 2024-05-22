import { SortingRulesType } from "./typedefs/MoviesTVCustomTypes";

const SortingRules: SortingRulesType = Object.freeze({
  BOXOFFICELOW: "bflow",
  BOXOFFICEHIGH: "bfhigh",
  YEARFIRST: "yearf",
  YEARLAST: "yearl",
  RECENCYMOST: "recencym",
  RECENCYLEAST: "recencyl",
  RATINGLOW: "ratingl",
  RATINGHIGH: "ratingh",
});

export default SortingRules;
