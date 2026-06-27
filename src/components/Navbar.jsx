import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const isAuthenticated =
    localStorage.getItem("isAuthenticated");

  const handleLogout = () => {

    localStorage.removeItem(
      "isAuthenticated"
    );

    navigate("/login");
  };

  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

      <div className="container">

        <Link className="navbar-brand" to="/">
          Student Management
        </Link>

        <div>

          {isAuthenticated && (
            <>
              <Link className="btn btn-primary me-2" to="/">
                Students
              </Link>

              <Link className="btn btn-success me-2" to="/add">
                Add Student
              </Link>

              <Link className="btn btn-info me-2" to="/profile">
                Profile
              </Link>

              <button className="btn btn-danger" onClick={handleLogout}>
                Logout
              </button>
            </>
          )}

        </div>

      </div>

    </nav>
  );
}

export default Navbar;