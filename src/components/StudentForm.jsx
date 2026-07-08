import { useState } from "react";
import "./StudentForm.css";

function StudentForm({ addStudent }) {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [cgpa, setCgpa] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      id: Date.now(),
      name,
      department,
      cgpa: parseFloat(cgpa),
      isActive: true,
    };

    addStudent(newStudent);

    setName("");
    setDepartment("");
    setCgpa("");
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <h2>Add Student</h2>

      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Department"
        value={department}
        onChange={(e) =>
          setDepartment(e.target.value)
        }
      />

      <input
        type="number"
        step="0.01"
        placeholder="CGPA"
        value={cgpa}
        onChange={(e) => setCgpa(e.target.value)}
      />

      <button type="submit">Add Student</button>
    </form>
  );
}

export default StudentForm;