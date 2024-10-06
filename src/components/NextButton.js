import React from "react";
import { useQuiz } from "../contexts/QuizContext";

function NextButton() {
  const { answer, dispatch, index, numQuestion } = useQuiz();
  if (answer === null) return null;
  if (index < numQuestion - 1)
    return (
      <div>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "newQuestion" })}
        >
          Next
        </button>
      </div>
    );
  if (index === numQuestion - 1)
    return (
      <div>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "finish" })}
        >
          Finish
        </button>
      </div>
    );
}

export default NextButton;
