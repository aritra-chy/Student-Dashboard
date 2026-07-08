import "./Navbar.css";
function Navbar({ totalStudents }) {
  return (
    <nav className="navbar">
      <h2>Student Dashboard</h2>
      <p>Total Students: {totalStudents}</p>
    </nav>
  );
}

export default Navbar;