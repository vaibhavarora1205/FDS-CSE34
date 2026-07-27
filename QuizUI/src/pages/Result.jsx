import { useNavigate } from "react-router-dom";
import questions from "../data/questions";

function Result() {
  const navigate = useNavigate();

  const student = JSON.parse(localStorage.getItem("student"));
  const answers = JSON.parse(localStorage.getItem("answers")) || {};

  let score = 0;

  questions.forEach((question, index) => {
    if (answers[index] === question.answer) {
      score++;
    }
  });

  const percentage = ((score / questions.length) * 100).toFixed(2);

  const restartQuiz = () => {
    localStorage.removeItem("answers");
    navigate("/");
  };

  return (
    <div className="result-page">

      <div className="result-card">

        <h1>Quiz Result</h1>

        <h2>{student?.name}</h2>

        <p>Roll No : {student?.roll}</p>

        <hr />

        <h3>Score : {score} / {questions.length}</h3>

        <h3>Percentage : {percentage}%</h3>

        <h3>
          Status :
          {percentage >= 40 ? " Pass ✅" : " Fail ❌"}
        </h3>

        <button onClick={restartQuiz}>
          Restart Quiz
        </button>

      </div>

    </div>
  );
}

export default Result;