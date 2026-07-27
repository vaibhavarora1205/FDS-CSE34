import { useState } from "react";
import questions from "../data/questions";
import { useNavigate } from "react-router-dom";
function Quiz() {
const navigate = useNavigate();
const submitQuiz = () => {
    navigate("/result");
};
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [answers, setAnswers] = useState({});

  const handleOptionChange = (index) => {

    const updatedAnswers = {
      ...answers,
      [currentQuestion]: index,
    };

    setAnswers(updatedAnswers);

    localStorage.setItem(
      "answers",
      JSON.stringify(updatedAnswers)
    );
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const q = questions[currentQuestion];

  return (
    <div className="quiz-page">

      <div className="quiz-card">

        <h2>
          Question {currentQuestion + 1} / {questions.length}
        </h2>

        <div className="progress">

          <div
            className="progress-fill"
            style={{
              width: `${
                ((currentQuestion + 1) / questions.length) * 100
              }%`,
            }}
          ></div>

        </div>

        <h3>{q.question}</h3>

        <div className="options">

          {q.options.map((option, index) => (

            <label key={index} className="option">

              <input
                type="radio"
                name="answer"
                checked={answers[currentQuestion] === index}
                onChange={() => handleOptionChange(index)}
              />

              {option}

            </label>

          ))}

        </div>

        <div className="buttons">

          <button
            onClick={previousQuestion}
            disabled={currentQuestion === 0}
          >
            Previous
          </button>

         {
    currentQuestion === questions.length - 1 ?

    <button onClick={submitQuiz}>
        Submit Quiz
    </button>

    :

    <button onClick={nextQuestion}>
        Next
    </button>
}

        </div>

      </div>

    </div>
  );
}

export default Quiz;