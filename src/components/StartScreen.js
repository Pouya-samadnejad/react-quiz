import React from "react";
import { useQuiz } from "../contexts/QuizContext";

function StartScreen() {
  const { numQustions, dispatch } = useQuiz();
  return (
    <div className="start">
      <h2>Welcome to react Quiz</h2>
      <h3>{numQustions} questions to test your mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Lets start
      </button>
    </div>
  );
}

export default StartScreen;
