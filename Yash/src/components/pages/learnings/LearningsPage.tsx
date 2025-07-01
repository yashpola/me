import { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

import { Tooltip } from "@mui/material";
import { Restore } from "@mui/icons-material";

import LearningPosts from "../../../data/LearningPosts.json";
import Years from "../../../data/Years.json";

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

import TitleCard from "./TitleCard";
import ProblemCard from "./ProblemCard";

import Chip from "../../chips/Chip";
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
    []
  );

  const filteredTopics = useMemo(() => {
    return (
      <div>
        Select topics:
        <div>
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
      </div>
    );
  }, [selectedTopics, selectedDifficulties]);

  const filteredDifficulties = useMemo(() => {
    return (
      <div>
        Select difficulties:{" "}
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
          <LinkedComponent key={idx} to={`/learnings/${problem}`}>
            <ProblemCard
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

  return (
    <>
      <div className="page-section">
        <h1>School</h1>
        {Years.Years.map((year, idx) => {
          return (
            <LinkedComponent key={idx} to={constructTargetUrl(basePath, year)}>
              <TitleCard title={year} />
            </LinkedComponent>
          );
        })}
        <h1 style={{ display: "flex", flexDirection: "row" }}>
          Problems
          {!isAllEmptyValue(selectedDifficulties, selectedTopics) &&
            resetFiltersButton}
        </h1>
        {filteredTopics}
        {filteredDifficulties}
        <Grid>{filteredProblems}</Grid>
      </div>
    </>
  );
}
