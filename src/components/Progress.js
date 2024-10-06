import React from "react";
import { useQuiz } from "../contexts/QuizContext";

function Progress() {
  const { numQuestions, points, maxPossiblePoint, index, answer } = useQuiz();
  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={index + Number(answer !== null)}
      ></progress>
      <p>
        Question <strong>{index + 1}</strong>/<strong>{numQuestions}</strong>
      </p>
      <p>
        point<strong>{points}</strong>/<strong>{maxPossiblePoint}</strong>
      </p>
    </header>
  );
}

export default Progress;
