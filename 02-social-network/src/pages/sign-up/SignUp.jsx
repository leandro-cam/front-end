import { Link } from "react-router-dom";

import "./sign-up.css";

export default function SignUp() {
  return (
    <div className="sign-up">
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
          <span>Have An Account?</span>
          <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
        </div>
        <form className="right">
          <input type="text" required placeholder="username" />
          <input type="email" required placeholder="email" />
          <input type="password" required placeholder="password" />
          <button className="btn" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
