import "./StudentList.css";

function StudentList({ children }) {
  return (
    <section className="student-list">
      <h2>Student List</h2>
      <div className="student-list__items">{children}</div>
    </section>
  );
}

export default StudentList;