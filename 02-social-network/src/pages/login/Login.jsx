import { Link } from "react-router-dom";

import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h2>
            - <br /> Social Network
            <br /> -
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            recusandae excepturi velit non voluptatum earum repellat alias quae
            cum porro!
          </p>
          <span>Don't Have An Account?</span>
          <Link to="/sign-up">
            <button className="btn btn-primary">Register</button>
          </Link>
        </div>
        <form className="right">
          <input type="text" required placeholder="username" />
          <input type="password" required placeholder="password" />
          <button className="btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
