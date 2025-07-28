import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

import { Tooltip } from "@mui/material";
import { Restore } from "@mui/icons-material";

import LearningPosts from "../../../data/LearningPosts.json";

import useGridPagination, {
  ACTION_TYPES,
} from "../../../hooks/useGridPagination";
import {
  defaultTopicChipStyle,
  DifficultyColorCodes,
  ProblemDifficulties,
  ProblemTopics,
} from "../../../utils/constants/ComponentConstants";
import { constructTargetUrl } from "../../../utils/functions/Constructors";
import {
  addColorProps,
  removeColorProps,
  removeColorPropsMulti,
} from "../../../utils/functions/StyleModifiers";
import {
  isAllEmptyValue,
  isEmptyValue,
} from "../../../utils/functions/Validators";

import SummaryCard from "../../cards/SummaryCard";
import SchoolSection from "./SchoolSection";

import Chip from "../../chips/Chip";
import PaginationHeader from "../../headers/PaginationHeader";
import FlexRow from "../../layouts/FlexRow";
import Grid from "../../layouts/Grid";
import LinkedComponent from "../../navigation/LinkedComponent";

export default function LearningsPage() {
  const { pathname: basePath } = useLocation();

  const [selectedTopics, setSelectedTopics] = useState(new Set<string>());
  const [selectedDifficulties, setSelectedDifficulties] = useState(
    new Set<string>()
  );
  const [availableTopics, availableDifficulties] = useMemo(() => {
    const _availableTopics = ProblemTopics?.filter((topic) =>
      new Set(
        Object.keys(LearningPosts.Problems)?.flatMap(
          (problem) =>
            LearningPosts.Problems[
              problem as keyof typeof LearningPosts.Problems
            ].topics
        )
      ).has(topic)
    );
    const _availableDifficulties = ProblemDifficulties?.filter((difficulty) =>
      new Set(
        Object.keys(LearningPosts.Problems)?.map(
          (problem) =>
            LearningPosts.Problems[
              problem as keyof typeof LearningPosts.Problems
            ].difficulty
        )
      ).has(difficulty)
    );

    return [_availableTopics, _availableDifficulties];
  }, []);

  const resetFiltersButton = useMemo(
    () => (
      <div style={{ marginLeft: "10px" }}>
        <Tooltip arrow title="Reset filters." placement="top">
          <Restore
            style={{
              color: "brown",
              cursor: "pointer",
            }}
            onClick={(e) => {
              e.preventDefault();
              if (isAllEmptyValue(selectedTopics, selectedDifficulties)) {
                return;
              }

              removeColorPropsMulti(
                [
                  ...Array.from(selectedTopics),
                  ...Array.from(selectedDifficulties),
                ],
                defaultTopicChipStyle
              );

              setSelectedTopics(new Set());
              setSelectedDifficulties(new Set());
            }}
            fontSize="small"
          />
        </Tooltip>
      </div>
    ),
    [selectedTopics, selectedDifficulties]
  );

  const filteredTopics = useMemo(() => {
    return (
      <div>
        Topics:{" "}
        {availableTopics?.map((topic) => (
          <Chip
            id={`${topic}`}
            key={`${topic}`}
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              e.preventDefault();
              if (!selectedTopics.has(topic)) {
                selectedTopics.add(topic);
                setSelectedTopics(new Set(selectedTopics));

                addColorProps(document.getElementById(topic), {
                  backgroundColor: "brown",
                  color: "white",
                });
              } else {
                selectedTopics.delete(topic);
                setSelectedTopics(new Set(selectedTopics));

                removeColorProps(document.getElementById(topic), {
                  ...defaultTopicChipStyle,
                });
              }
            }}
          >
            {topic}
          </Chip>
        ))}
      </div>
    );
  }, [selectedTopics, selectedDifficulties]);

  const filteredDifficulties = useMemo(() => {
    return (
      <div>
        Difficulties:{" "}
        {availableDifficulties?.map((difficulty) => (
          <Chip
            id={`${difficulty}`}
            key={`${difficulty}`}
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              e.preventDefault();
              if (!selectedDifficulties.has(difficulty)) {
                selectedDifficulties.add(difficulty);
                setSelectedDifficulties(new Set(selectedDifficulties));

                addColorProps(
                  document.getElementById(difficulty),
                  DifficultyColorCodes[
                    difficulty as keyof typeof DifficultyColorCodes
                  ]
                );
              } else {
                selectedDifficulties.delete(difficulty);
                setSelectedDifficulties(new Set(selectedDifficulties));

                removeColorProps(document.getElementById(difficulty), {
                  ...defaultTopicChipStyle,
                });
              }
            }}
          >
            {difficulty.toLowerCase()}
          </Chip>
        ))}
      </div>
    );
  }, [selectedDifficulties, selectedTopics]);

  const filteredProblems = useMemo(() => {
    return Object.keys(LearningPosts.Problems)
      ?.reverse()
      ?.filter(
        (problem) =>
          (isEmptyValue(selectedTopics) ||
            LearningPosts.Problems[
              problem as keyof typeof LearningPosts.Problems
            ].topics?.some((topic) => selectedTopics.has(topic))) &&
          (isEmptyValue(selectedDifficulties) ||
            selectedDifficulties.has(
              LearningPosts.Problems[
                problem as keyof typeof LearningPosts.Problems
              ].difficulty
            ))
      )
      ?.map((problem, idx) => {
        return (
          <LinkedComponent key={idx} to={constructTargetUrl(basePath, problem)}>
            <SummaryCard
              title={
                LearningPosts.Problems[
                  problem as keyof typeof LearningPosts.Problems
                ].title
              }
              image={
                LearningPosts.Problems[
                  problem as keyof typeof LearningPosts.Problems
                ].image
              }
              difficultyColorStyle={
                DifficultyColorCodes[
                  LearningPosts.Problems[
                    problem as keyof typeof LearningPosts.Problems
                  ].difficulty as keyof typeof DifficultyColorCodes
                ]
              }
            />
          </LinkedComponent>
        );
      });
  }, [selectedTopics, selectedDifficulties]);

  const [
    { tableQueryParams = {} },
    { executeUpdateTableQueryParams = () => {} },
  ] = useGridPagination({ data: filteredProblems });
  const {
    page = 1,
    pageSize = 5,
    totalCount = filteredProblems?.length,
  } = tableQueryParams || {};

  const paginatedProblems = useMemo(() => {
    return filteredProblems.slice(
      (page - 1) * pageSize,
      (page - 1) * pageSize + pageSize
    );
  }, [tableQueryParams, selectedTopics, selectedDifficulties]);

  useEffect(() => {
    executeUpdateTableQueryParams(ACTION_TYPES.UPDATE_TOTALCOUNT);
  }, [selectedTopics, selectedDifficulties]);

  return (
    <>
      <div className="page-section">
        <h1>
          <u>School</u>
        </h1>
        <SchoolSection />
        <FlexRow>
          <h1>
            <u>Problems</u>
          </h1>
          <div>
            {!isAllEmptyValue(selectedDifficulties, selectedTopics) &&
              resetFiltersButton}
          </div>
        </FlexRow>
        {filteredTopics}
        {filteredDifficulties}
        <PaginationHeader
          paginationProps={{ page, pageSize, totalCount }}
          paginationActions={{
            onClickNavigateBefore: () =>
              executeUpdateTableQueryParams(ACTION_TYPES.DECREMENT_PAGE),
            onClickNavigateNext: () =>
              executeUpdateTableQueryParams(ACTION_TYPES.INCREMENT_PAGE),
          }}
        />
        <br />
        <Grid>{paginatedProblems}</Grid>
      </div>
    </>
  );
}
