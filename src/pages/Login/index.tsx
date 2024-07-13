import {Link} from "react-router-dom";
import Button from "../../components/Button";
import css from "./style.module.css";

function Login() {
  return (
    <div className={css.login}>
      <div className={css.login_container}>
        <div className={css.login_header}>
          <h2>Login</h2>
        </div>
        <form>
          <div className={css.form_group}>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className={css.form_group}>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <Button>Login</Button>
          <Link className={css.link} to="/register">
            Register
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
