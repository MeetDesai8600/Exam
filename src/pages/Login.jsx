import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [username, setUsername] =  useState("");

  const [password, setPassword] =  useState("");

  const handleLogin = () => {

    if (
      username === "admin" &&
      password === "12345"
    ) {

      localStorage.setItem("isAuthenticated", true);

      navigate("/");
    }
    else {

      alert("Username: admin\nPassword: 12345");
    }
  };

  return (

    <div className="container mt-5">

      <div
        className="card p-4 shadow mx-auto"
        style={{ maxWidth: "500px" }}
      >

        <h2 className="mb-4 text-center">
          Login
        </h2>

        <input
          type="text"
          placeholder="Username"
          className="form-control mb-3"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="form-control mb-3"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          className="btn btn-primary"
          onClick={handleLogin}
        >
          Login
        </button>

      </div>

    </div>
  );
}

export default Login;