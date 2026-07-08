import { useState } from "react";

import "./App.css";

import Navbar from "./components/Navbar";
import StudentCard from "./components/StudentCard";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import ErrorBoundary from "./components/ErrorBoundary";

import initialStudents from "./data/students";

function App() {
  const [students, setStudents] =
    useState(initialStudents);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const deleteStudent = (id) => {
    setStudents(
      students.filter(
        (student) => student.id !== id
      )
    );
  };

  // if...else
  let batchMessage = "";

  if (students.length === 0) {
    batchMessage = "No Students Found";
  } else if (students.length <= 5) {
    batchMessage = "Small Batch";
  } else {
    batchMessage = "Large Batch";
  }

  // switch
  const getBatchType = () => {
    switch (true) {
      case students.length === 0:
        return "No Students Found";

      case students.length <= 5:
        return "Small Batch";

      default:
        return "Large Batch";
    }
  };

  return (
    <main className="app-shell">
      <Navbar
        totalStudents={students.length}
      />

      <section className="app-content">
        <StudentForm addStudent={addStudent} />

        <div className="batch-summary">
          <h3>{batchMessage}</h3>
          <h3>{getBatchType()}</h3>
          <h3>
            {students.length > 5
              ? "Large Batch"
              : students.length === 0
              ? "No Students Found"
              : "Small Batch"}
          </h3>
        </div>

        <ErrorBoundary>
          <StudentList>
            {students.map((student) => (
              <StudentCard
                key={student.id}
                student={student}
                onDelete={deleteStudent}
              />
            ))}
          </StudentList>
        </ErrorBoundary>
      </section>
    </main>
  );
}

export default App;