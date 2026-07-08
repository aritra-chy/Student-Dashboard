import "./StudentCard.css";

function StudentCard({ student, onDelete }) {
  return (
    <article className="student-card">
      <h3>{student.name}</h3>

      <p>Department: {student.department}</p>

      <p>CGPA: {student.cgpa}</p>

      <p>
        Status:
        {student.isActive ? " Active" : " Inactive"}
      </p>

      {student.cgpa > 3.8 && (
        <p style={{ color: "green" }}>
          Excellent Student
        </p>
      )}

      <p>
        {(() => {
          if (student.cgpa >= 3.5) {
            return "Good Academic Standing";
          }
          return "Needs Improvement";
        })()}
      </p>

      <button className="student-card__button" onClick={() => onDelete(student.id)}>
        Delete
      </button>
    </article>
  );
}

export default StudentCard;