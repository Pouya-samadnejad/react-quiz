import React from "react";
import { useQuiz } from "../contexts/QuizContext";

function FinishScreen() {
  const { points, maxPossiblePoint, highscore, dispatch } = useQuiz();
  const percentage = (points / maxPossiblePoint) * 100;
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of
        <strong>{maxPossiblePoint}</strong>({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(High Score: {highscore} Point)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Lets start
      </button>
    </>
  );
}

export default FinishScreen;
