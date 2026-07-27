import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Instructions() {
  const navigate = useNavigate();

  const [student, setStudent] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("student"));

    if (!data) {
      navigate("/");
      return;
    }

    setStudent(data);
  }, [navigate]);

  const startQuiz = () => {
    localStorage.removeItem("answers");
    localStorage.removeItem("score");
    localStorage.setItem("startTime", Date.now());

    navigate("/quiz");
  };

  if (!student) return null;

  return (
    <div className="instruction-page">

      <div className="instruction-card">

        <h1>Quiz Instructions</h1>

        <div className="student-details">

          <p><strong>Name :</strong> {student.name}</p>

          <p><strong>Roll No :</strong> {student.roll}</p>

          <p><strong>Branch :</strong> {student.branch}</p>

          <p><strong>Semester :</strong> {student.semester}</p>

        </div>

        <hr />

        <h3>Instructions</h3>

        <ul>
          <li>Total Questions : <strong>10</strong></li>
          <li>Total Time : <strong>10 Minutes</strong></li>
          <li>Each question carries 1 mark.</li>
          <li>No negative marking.</li>
          <li>Only one option can be selected.</li>
          <li>Timer starts after clicking Begin Quiz.</li>
          <li>Quiz will auto submit when time ends.</li>
        </ul>

        <button onClick={startQuiz}>
          Begin Quiz
        </button>

      </div>

    </div>
  );
}

export default Instructions;