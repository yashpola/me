import { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

import { Tooltip } from "@mui/material";
import { Restore } from "@mui/icons-material";

import LearningPosts from "../../../data/LearningPosts.json";
import Years from "../../../data/Years.json";

import {
  defaultTopicChipStyle,
  ProblemTopics,
} from "../../../utils/constants/ComponentConstants";
import { constructTargetUrl } from "../../../utils/functions/Constructors";
import {
  addColorProps,
  removeColorProps,
  removeColorPropsMulti,
} from "../../../utils/functions/StyleModifiers";
import { isEmptyValue } from "../../../utils/functions/Validators";

import TitleCard from "./TitleCard";
import ProblemCard from "./ProblemCard";

import Chip from "../../chips/Chip";
import Grid from "../../layouts/Grid";
import LinkedComponent from "../../navigation/LinkedComponent";

export default function LearningsPage() {
  const { pathname: basePath } = useLocation();

  const [selectedTopics, setSelectedTopics] = useState(new Set<string>());
  const availableTopics = useMemo(() => {
    return ProblemTopics?.filter((topic) =>
      new Set(
        Object.keys(LearningPosts.Problems)?.flatMap(
          (problem) =>
            LearningPosts.Problems[
              problem as keyof typeof LearningPosts.Problems
            ].topics
        )
      ).has(topic)
    );
  }, []);

  const filteredTopics = useMemo(() => {
    return (
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
        }}
      >
        <div>
          Select topics:{" "}
          {availableTopics?.map((topic) => (
            <Chip
              id={`${topic}`}
              style={{ ...defaultTopicChipStyle, cursor: "pointer" }}
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
        <div>
          <Tooltip arrow title="Reset selected topics." placement="top">
            <Restore
              style={{ color: "brown", cursor: "pointer" }}
              onClick={(e) => {
                e.preventDefault();
                setSelectedTopics(new Set());

                const _selectedTopics: string[] = [];
                selectedTopics.forEach((selectedTopic) =>
                  _selectedTopics.push(selectedTopic)
                );
                removeColorPropsMulti(_selectedTopics, defaultTopicChipStyle);
              }}
            />
          </Tooltip>
        </div>
      </div>
    );
  }, [selectedTopics]);

  const filteredProblems = useMemo(() => {
    return Object.keys(LearningPosts.Problems)
      ?.filter(
        (problem) =>
          isEmptyValue(selectedTopics) ||
          LearningPosts.Problems[
            problem as keyof typeof LearningPosts.Problems
          ].topics?.some((topic) => selectedTopics.has(topic))
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
            />
          </LinkedComponent>
        );
      });
  }, [selectedTopics]);

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
        <h1>Problems</h1>
        {filteredTopics}
        <Grid>{filteredProblems}</Grid>
      </div>
    </>
  );
}
