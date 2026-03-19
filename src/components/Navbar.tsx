import { Link } from "react-router-dom";

export default function Navbar() {

  return (
    <nav className="nav">
      <div className="nav-left">
        <Link to="/tasks">Task List</Link>
      </div>
      <div className="nav-right">
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
      </div>
    </nav>
  );
}