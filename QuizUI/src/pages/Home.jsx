import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    name: "",
    roll: "",
    branch: "",
    semester: "",
  });

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      setDate(
        now.toLocaleDateString("en-IN", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      );

      setTime(
        now.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    updateDateTime();

    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, roll, branch, semester } = student;

    if (!name || !roll || !branch || !semester) {
      alert("Please fill all the fields.");
      return;
    }

    localStorage.setItem("student", JSON.stringify(student));

    navigate("/instructions");
  };

  return (
    <div className="home">

      <div className="form-container">

        <h1>Online Quiz System</h1>
        <p>Student Information</p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={student.name}
            onChange={handleChange}
          />

          <input
            type="text"
            name="roll"
            placeholder="Roll Number"
            value={student.roll}
            onChange={handleChange}
          />

          <select
            name="branch"
            value={student.branch}
            onChange={handleChange}
          >
            <option value="">Select Branch</option>
            <option>CSE</option>
            <option>IT</option>
            <option>CSIT</option>
            <option>AIML</option>
            <option>ECE</option>
            <option>EEE</option>
            <option>ME</option>
            <option>CE</option>
          </select>

          <select
            name="semester"
            value={student.semester}
            onChange={handleChange}
          >
            <option value="">Semester</option>
            {[1,2,3,4,5,6,7,8].map((sem) => (
              <option key={sem}>{sem}</option>
            ))}
          </select>

          <div className="dateTime">

            <div className="box">
              <h4>Date</h4>
              <p>{date}</p>
            </div>

            <div className="box">
              <h4>Time</h4>
              <p>{time}</p>
            </div>

          </div>

          <button>Start Quiz</button>

        </form>

      </div>

    </div>
  );
}

export default Home;